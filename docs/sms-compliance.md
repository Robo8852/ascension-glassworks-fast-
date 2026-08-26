# SMS / A2P 10DLC compliance notes

Context for enabling SMS on the Ascension Glassworks number.
Written 2026-08-12, updated 2026-08-21. Carrier rules change often — re-verify
before filing.

## SMS provider: Grasshopper

**Grasshopper is the SMS provider.** The business number (941) 241-0002 is a
Grasshopper number, and the A2P 10DLC brand and campaign are being registered
through Grasshopper's portal at https://nuui.us.grasshopper.com/CarrierRegistration
(login: the Ascension Google account, ascensiongwfl@gmail.com). Grasshopper
files into The Campaign Registry (TCR) on our behalf and collects the fees
($15 one-time vetting, $1.50/month for under 6,000 texts/day).

Twilio is **not** in use for SMS. The only Twilio reference in this repo is the
Twilio delivery vendor mention in the privacy policy's service-provider
language; the site itself sends email via Resend and nothing via Twilio.
Earlier versions of this document assumed Twilio — that was never set up.

### What Grasshopper does and does not do

Grasshopper is the **phone system**. Texting is a feature of it, not a
messaging platform:

- Built in: Instant Response (auto-text to a missed caller), manual texting
  from the Grasshopper app/desktop with a shared team inbox, business-hours
  routing, voicemail transcription.
- **No public SMS API and no inbound-text webhooks.** Nothing on the website or
  in Convex can send or receive a text through Grasshopper. Zapier-style
  integrations do not cover Grasshopper SMS.

Anything where software sends the text needs Twilio (or an equivalent API
provider): form submitted -> "we got your request" text, appointment
confirmations and day-before reminders, inbound texts logged to Convex,
project status pushes. Each of those is a few lines in a Convex function
calling Twilio.

Decision, 2026-08-21: **do not build toward Twilio until there is a concrete
automation to ship.** Get the Grasshopper campaign approved first; the privacy
policy, consent checkbox, and approved campaign copy carry over unchanged. When
the first automation comes up, choose between:

1. **Twilio alongside Grasshopper** — its own number and campaign under the
   same TCR brand. Cheap, but customers see two numbers from us.
2. **Port (941) 241-0002 to Twilio** — one number for manual and automated
   texting. Cleaner long-term; Grasshopper's phone features would need
   rebuilding in Twilio.

If Twilio (or any second provider) is ever added:

- A phone number lives with one provider. (941) 241-0002 stays with
  Grasshopper unless it is ported out.
- The LLC's 10DLC brand (keyed by EIN) must be registered **once** in TCR.
  A second provider should import the existing TCR brand ID, not register the
  EIN again — duplicate brands stall vetting. Get the brand ID from
  Grasshopper first (may need a support ticket).
- Running two campaigns under one brand is allowed; each carries its own
  monthly fee.
- The privacy policy says messages "originate from (941) 241-0002". Broaden
  that sentence if any other number ever sends.

## What is already in place

The pieces carriers ask to see during A2P 10DLC campaign review are built
and live:

| Requirement | Where it lives |
| --- | --- |
| Consent language at point of collection | `components/sections/ContactForm.tsx` — disclaimer under the submit button |
| Public privacy policy | `app/privacy/page.tsx` → https://ascensionglassworks.com/privacy |
| SMS section in privacy policy | "SMS & Email Communications" — explicit consent, rates, frequency, STOP, HELP |
| Footer link to privacy policy | `components/sections/Footer.tsx` |

The consent language is reproduced on the contact form as:

> By checking this box, you agree to receive informational messages from
> Ascension Glassworks. Message frequency may vary. Message and data rates may
> apply. Reply HELP for help or STOP to opt out.

This is an unchecked checkbox, not a passive submit-implies-consent disclaimer.
It lives in `SMS_CONSENT_TEXT` in `components/sections/ContactForm.tsx` and is
stored verbatim on each submission (`smsConsentText`) so the consent record
survives future copy changes. The screenshot of this form is what gets attached
as opt-in proof.

Do not reword it without updating the campaign's Message Flow (CTA) and Terms
and Conditions fields in the same pass — the reviewer compares all three.

## The Grasshopper conflict

The business number (941) 241-0002 is hosted with Grasshopper. A phone number
lives with one provider at a time, so SMS cannot simply be turned on in Twilio
while Grasshopper still holds it. Three ways forward:

1. **Twilio Hosted SMS** — voice stays on Grasshopper, Twilio hosts SMS only.
   Researched 2026-08-12 and it looks **blocked on two independent counts**:
   - Twilio's docs state a number already marked `messaging-enabled` with its
     current provider cannot be used for Hosted SMS. Grasshopper sells business
     SMS as a core feature with unlimited US/Canada texting, so this number is
     almost certainly already messaging-enabled.
   - Twilio Hosted SMS targets landline and toll-free numbers. VoIP numbers are
     ineligible, and Grasshopper is a VoIP provider.

   Not worth pursuing unless Grasshopper support confirms they can both disable
   SMS and that the number does not present as VoIP on carrier lookup.

2. **Full port to Twilio** — moves voice and SMS together. Grasshopper's
   auto-attendant, extensions, and voicemail stop working and would have to be
   rebuilt in Twilio. Larger project than it sounds, but it is the only path
   that keeps one number and gets Twilio's API.

3. **Separate Twilio number for SMS** — fastest, no dependency on Grasshopper.
   Downside is that texts come from a number the customer has never seen, which
   weakens the consent trail and looks like spam.

4. **Just use Grasshopper's own SMS** — Grasshopper already does business
   texting and handles A2P 10DLC registration itself. If the requirement is
   only "reply to leads by text," Twilio may be unnecessary. Twilio earns its
   place only if automation is needed, since Grasshopper has no API and no
   automation beyond basic auto-replies.

Recommendation: option 4 if texting is manual, option 2 if the site needs to
send automated SMS. Option 1 is likely a dead end.

Note: Grasshopper does not provide 10DLC registration to sole proprietorships.
Ascension Glassworks LLC is an LLC, so this should not apply, but the brand
registration must use the LLC's legal name and EIN.

## Still to do

- [ ] Confirm with Grasshopper whether SMS can be released on the number
- [ ] A2P 10DLC brand registration (needs legal business name + EIN)
- [ ] A2P 10DLC campaign registration (attach contact form opt-in screenshot)
- [ ] Wire the actual send path — nothing in the app sends SMS today; the
      contact form writes to Convex and emails via Resend only
- [ ] Implement STOP / HELP handling. The disclosure promises both. Twilio
      handles them automatically on its own numbers, but confirm this holds for
      whichever option above is chosen. This was the single item flagged by the
      first review pass and it is still not done — it is a promise the site
      makes that nothing currently honors.
- [ ] Deploy the 2026-08-21 copy changes before resubmitting. The reviewer reads
      the live URLs, so an un-deployed fix reads as no fix.
- [ ] Honor `smsConsent` when the send path is built: rows with `smsConsent`
      false or absent must never be texted, including every submission taken
      before the checkbox shipped.

## Campaign review, 2026-08-21 — "Confidence Level: Fair"

The pre-submission AI review returned three cards. Root cause of all of them:
**the campaign is registered for conversational/informational customer support
messaging only, but the site copy promised marketing and promotional texts.**
The site has been aligned down to informational-only rather than widening the
campaign, because marketing campaigns draw materially heavier carrier vetting.

Consequence, and it is a real one: **we cannot send promotional texts under this
campaign.** Seasonal and hurricane-readiness offers go out by email only.
Sending a promo text under an informational campaign risks carrier filtering and
campaign suspension. Widening later means re-filing the campaign as marketing
and reinstating the marketing language on the form and in the policy together.

Card-by-card:

| Card | Finding | Resolution |
| --- | --- | --- |
| Privacy Policy | No clear consumer contact method for the message sender | Already present in the policy body and live. The plain text said "our contact form" with no visible address, so an automated reader saw no contact URL — the full `https://ascensionglassworks.com/contact` is now spelled out, plus an explicit sender-identification sentence naming the LLC and originating number. |
| Call to Action | Needed the exact disclosure format including HELP and STOP | Replaced the passive submit-implies-consent disclaimer with an unchecked checkbox carrying the reviewer's exact wording. |
| Inconsistencies | Terms/Description/Message Flow must describe the same message types, and frequency must read "message frequency may vary" | Site copy is now informational-only everywhere. Use the field text below verbatim so all three campaign fields match. |

Note the reviewer's own CTA example used "Message frequency varies" while its
Inconsistencies card required "message frequency may vary". **Use "may vary"**
— it is the phrasing the Inconsistencies card pins as correct, and it is what
the form, the policy, and the fields below all now say.

### Campaign field text — paste verbatim

These three must describe the same message types and nothing else. Do not edit
one without the others.

**Campaign Description**

> Ascension Glassworks LLC sends informational customer-service text messages to
> homeowners who request a window or door consultation through our website
> contact form at https://ascensionglassworks.com/contact. Messages are
> conversational replies to the customer's own inquiry and cover appointment
> scheduling and confirmations, installation and project status updates, and
> answers to questions about their estimate. We do not send marketing or
> promotional text messages.

**Message Flow (CTA)**

> Consumers opt in at https://ascensionglassworks.com/contact by submitting our
> contact form and checking the SMS consent checkbox. Two checkboxes are shown
> and neither is checked by default: an opt-in box and an opt-out box, and
> checking one clears the other. Consent is not a condition of purchase. The
> opt-in checkbox reads: "Yes, I consent to receive informational text messages
> from Ascension Glassworks LLC at (941) 241-0002, including appointment
> reminders and confirmations, scheduling updates, project and installation
> status updates, and replies to my questions. Message frequency may vary.
> Message and data rates may apply. Reply HELP for help or STOP to opt out. We
> never share your mobile opt-in information with anyone." The second checkbox
> reads: "No, I do not want to receive any text messages from Ascension
> Glassworks." Our privacy policy and SMS terms are linked directly beneath the
> checkboxes at https://ascensionglassworks.com/privacy and
> https://ascensionglassworks.com/sms-terms.

**Terms and Conditions**

> Ascension Glassworks LLC sends informational customer-service messages to
> customers who opt in through the contact form at
> https://ascensionglassworks.com/contact. Message frequency may vary. Message
> and data rates may apply. Reply HELP for help or STOP to opt out. Carriers are
> not liable for delayed or undelivered messages. Mobile opt-in data and consent
> are not shared with third parties for marketing purposes. For questions,
> contact Ascension Glassworks LLC at (941) 241-0002 or
> ascensiongwfl@gmail.com. Privacy Policy:
> https://ascensionglassworks.com/privacy

**Sample messages** — keep every sample informational. Any sample that reads as
an offer contradicts the Description and re-triggers the Inconsistencies card.

> Hi {name}, this is Ascension Glassworks confirming your window consultation on
> {date} at {time}. Reply HELP for help or STOP to opt out.

> Hi {name}, your impact window order has arrived and we are ready to schedule
> installation. Reply with a day that works. Reply HELP for help or STOP to opt
> out.

## Mobile opt-in disclosure (addressed)

Campaign reviewers want the privacy policy to say explicitly that mobile opt-in
data is not shared or sold to third parties for marketing. The commitment
appears twice in `app/privacy/page.tsx`, in both the "SMS & Email
Communications" and "Data Sharing & Third Parties" sections, since reviewers
check either one:

> We do not transfer or share consumer data, including mobile numbers, SMS
> opt-in data, and consent records, with any external organizations except as
> strictly necessary to provide the messaging service, and never for marketing
> or independent use by third parties.

The "Data Sharing & Third Parties" copy adds:

> Mobile opt-in data and SMS consent are never shared or sold for SMS
> registration, compliance, or marketing purposes.

Keep both copies. Do not reword without checking against the filed campaign.

Note this is a binding commitment, not just review wording: it rules out
passing phone numbers or consent records to any advertising or lead-resale
platform. Sharing with delivery vendors acting on our behalf (Twilio, Resend)
is still fine and is covered by the surrounding service-provider language.

## Reviewer passes 3–8, 2026-08-21 — driven live via Chrome DevTools

All passes ran against the deployed site with the campaign fields filled from
the "paste verbatim" section above. Final state: **Confidence Level: Fair**,
one card remaining (Privacy Policy contact method — see below). Every other
card cleared.

| Pass | Confidence | Cards | What changed before the pass |
| --- | --- | --- | --- |
| 3 | Low | Embedded Link: uncheck the box | New informational samples had no URL |
| 4 | Low | Sample 2: add brand name | Embedded link re-checked (we do send links) |
| 5 | Fair | Privacy contact; Terms: describe message types + frequency/rates/HELP/STOP | Brand name in sample 2; URL in sample 1 |
| 6 | Fair | Privacy contact; CTA: add "View our Privacy Policy and Terms & Conditions: URL"; Opt-in msg: "Message and data rates may apply" | Plain-text Messaging Terms paragraph + Company/Phone/Email block added to policy |
| 7 | Fair | Description: could not validate (recycled noise); Privacy contact | Contact sentence added to policy intro; CTA + opt-in fields updated |
| 8 | Fair | Privacy contact only (template now adds "[mailing address]") | Wording matched to "messaging practices"; `?v=2` cache-bust test (reverted) |

### Form-field values that cleared their cards (use these next time)

- **Sample 1:** `Hi {name}, this is Ascension Glassworks confirming your window consultation on {date} at {time}. Details: https://www.ascensionglassworks.com/contact. Reply HELP for help or STOP to opt out.`
- **Sample 2:** `Hi {name}, this is Ascension Glassworks. Your impact window order has arrived and we are ready to schedule installation. Reply with a day that works. Reply HELP for help or STOP to opt out.`
- **Opt-in confirmation:** `Thank you for opting in to receive messages from Ascension Glassworks. Message frequency varies. Message and data rates may apply. Reply HELP for help. Reply STOP to cancel.`
- **Opt-in process description:** the Message Flow text above, with `www.` URLs, ending in `View our Privacy Policy and Terms & Conditions: https://www.ascensionglassworks.com/privacy`
- Keep **Embedded link** checked — samples must then contain a URL, and the brand name must appear in every sample.

### What the reviewer actually needs from the privacy page

It is a literal-string scanner. Text already present but split across `<a>`,
`<span>`, or `<Link>` tags does not count. The Terms card cleared only after a
single contiguous plain-text paragraph was added (the "Messaging Terms and
Conditions" block in `app/privacy/page.tsx`). Put the required sentences in
plain `<p>` text, not in styled fragments.

### The card that never cleared: "Privacy Policy — missing consumer contact method"

Persisted across six passes while the policy stated the email and phone in
four places, including the reviewer's own template sentence verbatim. Ruled
out: page not fetchable (serves 200 to any UA), truncation (contact text at
22% of HTML), caching (reviewer noticed a `?v=2` URL change instantly). The
reviewer reads the page and accepts the same paragraph for the Terms check.
Unverified guesses: it wants a **mailing address** (appeared in its template on
pass 8), or discounts a **Gmail** sender address. Treat this card as noise
unless a mailing address is added and clears it.

### Mechanics for driving the portal with Chrome DevTools

- Chrome 136+ ignores `--remote-debugging-port` on the real profile. Instead:
  open `chrome://inspect/#remote-debugging` in the Ascension profile
  (`Profile 15`), tick "Allow remote debugging", wait for "Server running at
  127.0.0.1:9222", then run the MCP server with `--autoConnect`.
- The privacy "Verify With AI" button silently does nothing until the
  acknowledgment checkbox above it is ticked.
- **Review Application** runs form validation → `AiFullCampaignValidator()` →
  shows `#modalAiReview`. Nothing is submitted unless `#ai-submit` ("Ignore &
  Submit Application to Carrier") is clicked. "Edit Form" (`#ai-cancel`)
  closes it safely. Cards are `#ai-field-errors li`; confidence is
  `#aiConfidenceMsg`. Three outcomes exist in the code: Low, Fair, and a
  success state worded "did not find critical issues".
- Vercel skipped one of three back-to-back pushes (no deployment created);
  an empty commit retriggered it.

## Scanner passes, 2026-08-26 — the Help Messaging contradiction

Recorded so nobody burns another six passes on this. The pre-submission
scanner is **advisory only, does not gate submission, and is not sent to the
carrier.** It contradicted itself four times in a row on a single field.

Context: the campaign had just been rebuilt after the 2026-08-24 decline. Every
real defect was already fixed. The only thing standing between us and a clean
review was one card on **Help Messaging**.

| Help Messaging ending | Confidence | What the card said |
|---|---|---|
| `Reply STOP to opt out.` | **Low** | "contains an opt-out keyword, but it is not just the allowed stop keyword… the output should be just STOP and nothing else" |
| `Reply STOP.` — exactly one keyword, nothing else | **Low** | "Use a message that contains only a single approved opt-out keyword, for example: STOP." |
| *(opt-out sentence removed entirely)* | **Low** | "does not meet the requirement to contain only one approved opt-out keyword" |
| `Reply STOP` — identical, minus the trailing period | **Fair** | "Update the ending to a clear opt-out instruction using only an approved keyword, for example: **'Reply STOP to opt out.'**" |

Read the last row against the first. **It ended up recommending, verbatim, the
exact text it had rejected as Low three passes earlier.** Rows 2 and 3 are also
mutually exclusive: row 2 had exactly one approved keyword and was told to use
exactly one keyword.

Resolution: set it back to `Reply STOP to opt out.` — what the scanner finally
asked for, and independently the CTIA-standard HELP-reply ending (program name,
contact info, opt-out instruction). Result: **Confidence Level: Fair**, Help
Messaging card gone.

### What this means operationally

- **Do not tune copy to satisfy this scanner.** It is a literal-string matcher
  whose verdicts are not stable across runs of identical input. Write text that
  satisfies the *carrier* rules and CTIA guidance, then stop.
- **Fair is the practical ceiling.** Two separate sessions (2026-08-21 and
  2026-08-26) capped at Fair. Note the 2026-08-24 decline happened to a
  submission that also scored Fair — and it was declined for opt-in and Terms
  and Conditions, **neither of which this scanner ever flagged.** The score has
  no demonstrated predictive value.
- **"Could not validate content." is a fetch failure, not a defect.** It
  appeared on Description in this pass and on Privacy Policy in the last one.
  Same class as the phantom "missing consumer contact method" card documented
  above. Ignore it.
- Each Review Application run is free; only `#ai-submit` costs $15. But every
  Edit Form round trip risks the form state, and **nothing is written to the
  server until submission**, so keep the loop short.
