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

> Disclaimer: By providing my contact information to Ascension Glassworks, I
> acknowledge and give my explicit consent to be contacted via SMS and receive
> emails for various purposes, which may include marketing and promotional
> content. Message and data rates may apply. Message frequency may vary. Reply
> STOP to opt-out. Reply HELP for more information. Refer to our Privacy Policy
> for more information.

Do not reword this without checking it against the submitted campaign. The
screenshot of this form is typically what gets attached as opt-in proof.

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
- [ ] Implement STOP / HELP handling. The disclaimer promises both. Twilio
      handles them automatically on its own numbers, but confirm this holds for
      whichever option above is chosen.

## Mobile opt-in disclosure (addressed)

Campaign reviewers want the privacy policy to say explicitly that mobile opt-in
data is not shared or sold to third parties for marketing. This sentence now
appears twice in `app/privacy/page.tsx`, in both the "SMS & Email
Communications" and "Data Sharing & Third Parties" sections, since reviewers
check either one:

> Mobile opt-in data and SMS consent are not shared or sold to third parties
> for marketing purposes.

Keep both copies. Do not reword without checking against the filed campaign.

Note this is a binding commitment, not just review wording: it rules out
passing phone numbers or consent records to any advertising or lead-resale
platform. Sharing with delivery vendors acting on our behalf (Twilio, Resend)
is still fine and is covered by the surrounding service-provider language.
