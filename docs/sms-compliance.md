# SMS / A2P 10DLC compliance notes

Context for enabling SMS on the Ascension Glassworks number via Twilio.
Written 2026-08-12. Carrier rules change often — re-verify before filing.

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
> contact form and checking the SMS consent checkbox, which is unchecked by
> default. Consent is not a condition of purchase. The checkbox reads: "By
> checking this box, you agree to receive informational messages from Ascension
> Glassworks. Message frequency may vary. Message and data rates may apply.
> Reply HELP for help or STOP to opt out." Our privacy policy is linked directly
> beneath the checkbox at https://ascensionglassworks.com/privacy.

**Terms and Conditions**

> Ascension Glassworks LLC sends informational customer-service messages to
> customers who opt in through the contact form at
> https://ascensionglassworks.com/contact. Message frequency may vary. Message
> and data rates may apply. Reply HELP for help or STOP to opt out. Carriers are
> not liable for delayed or undelivered messages. Mobile opt-in data and consent
> are not shared with third parties for marketing purposes. For questions,
> contact Ascension Glassworks LLC at (941) 241-0002 or
> Ascensionglassworksllc@gmail.com. Privacy Policy:
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
