# 10DLC resubmission checklist

Carrier declined the campaign on **2026-08-24** for two stated reasons:
*"rejected because of provided Opt-in information"* and *"rejected due to Terms
and Conditions issues."* Source of truth for every item below is Grasshopper's
own guide: https://support.grasshopper.com/help/register-local-phone-number-enable-texting

Cost of being wrong: **$15 per submission**, win or lose, plus **7–12 business
days** of carrier review per attempt. That is why we fix everything in one pass.

---

## Decisions already made

- **Support email — canonical address is `ascensiongwfl@gmail.com`.**
  Dave has access to this one. `Ascensionglassworksllc@gmail.com` is Joseph's
  and Dave cannot get into it, so it comes off the website. This also happens
  to match what the registration form already uses, which fixes the
  inconsistency on its own.
- **No Google Workspace / domain email.** Deliberately skipped — see item 12.
- **Items 4, 12 and 13 are contingency work, not part of this resubmission.**
  None of them was named by the carrier. Each costs real money or effort — a
  published street address, a Workspace subscription — to fix a risk we have
  not confirmed exists. Do them **only if this resubmission is declined again**
  and the new reason points at them. This resubmission rides on items 1, 2, 3,
  5 (website) and 6–11 (portal).

---

## A. Website changes

- [x] **1. Add the "No" opt-out checkbox to `/contact`.**
  Guide, reason codes 803 / 804 / 806 / 862: *"Opt-in must be explicit, and
  customers must have the option to opt in or out."* The portal's own
  acknowledged disclosure shows two boxes; we ship only one:
  ```
  ☐ Yes, I consent to receive informational messages from Ascension Glassworks
  ☐ No, I do not want to receive any text messages from Ascension Glassworks
  ```
  *Highest-confidence cause of the opt-in rejection.*

- [x] **2. Expand the consent checkbox text** to add the four required elements
  it is missing: the **message types**, the **business phone number**,
  **"We never share your mobile opt-in information with anyone,"** and a link
  to the **SMS terms**. Brand name, frequency, rates, HELP, STOP and the
  privacy link are already there.
  Note: this changes `SMS_CONSENT_TEXT` in
  `components/sections/ContactForm.tsx`, which is stored verbatim with every
  submission as that lead's consent record.

- [x] **3. Put Grasshopper's verbatim Terms & Conditions block on the site** —
  their 2 data-sharing bullets plus 6 numbered terms, copied exactly as the
  portal displays them. We ticked *"I acknowledge … and I have added them to my
  privacy policy"* but published our own wording instead. Theirs reads
  *"Message frequency **will** vary based on communication needs"*; ours says
  "may vary."
  *Most likely cause of the Terms and Conditions rejection.*

- [ ] **4. Add a mailing address** — **DEFERRED. Only if declined again.**
  There is currently **no street address anywhere on the site** — checked the
  home page, `/contact`, `/privacy` and `/service-area`, all clean. So this
  would mean publishing a new address, not surfacing an existing one. It is
  standard for sender identification and the pre-submission scanner asked for
  it repeatedly, but the carrier never did. Blocked on item 13 if revived.

- [x] **5. Swap every `Ascensionglassworksllc@gmail.com` on the site to
  `ascensiongwfl@gmail.com`.** Currently the website and the registration name
  two different support addresses, which is what codes 601 / 602 / 603 / 712
  flag. Appears on `/privacy` and `/sms-terms`.

---

## B. Portal / registration actions

- [ ] **6. Upload the Evidence screenshot** — a screenshot of `/contact`
  showing the consent checkbox and its disclosure. The field read
  `No file chosen` on the submitted registration.

- [ ] **7. Save the campaign field text.** Our drafted Description and opt-in
  description were **never persisted** — only "Edit Form" was ever clicked, so
  the carrier reviewed the old vague copy ("provides professional services
  related to doors, windows...").

- [ ] **8. Repoint the Terms & Conditions field** from `/privacy` to the
  standalone `/sms-terms` URL.

- [ ] **9. Confirm the brand shows Verified.** A campaign cannot pass under an
  unverified brand. Separate registration, $4.50 per attempt, and it fails on
  small address mismatches against the IRS SS-4 / LTR147C.

- [ ] **10. Get the actual reason code from the portal.** The decline email
  showed `TCR Campaign Id: .` — blank, with no code. The portal shows the real
  one, which replaces our inference with fact.

- [ ] **11. Contact Grasshopper support** for help creating the new
  registration. The guide explicitly directs you to do this after a decline.

---

## C. Business decisions

- [ ] **12. Google Workspace email on the domain — DEFERRED. Only if declined
  again.**
  The guide wants the business name consistent across registration, website,
  and contact email domain, so a Gmail address is technically the weakest link
  in the submission. Deliberately skipped: we have had approvals at other
  companies without a domain email, and the point of Grasshopper is one
  streamlined system rather than another service to run. Revisit only if a
  future rejection names the email domain specifically.

- [ ] **13. Choose the mailing address to publish** — **DEFERRED with item 4.**
  Only needed if item 4 is revived. Note the Articles of Organization PDF in
  `C:\Users\daver\Downloads\` is a **scanned image with no text layer**, so the
  address cannot be extracted programmatically without OCR — just ask Dave.

---

## D. Before clicking submit

- [ ] **14. Verify every changed string is live on production.** Reviewers read
  the live pages, not the repo.

- [ ] **15. Confirm the $15 vetting fee** applies to this resubmission, and
  budget 7–12 business days for the answer.

---

## Not a problem — checked and cleared

- Windows and doors is **not** an ineligible use case; nothing on our site
  touches the prohibited list (CBD, alcohol, tobacco, firearms, gambling,
  lending, adult content).
- **No age-gating required.**
- Proactive sample messages **already carry** "Reply HELP for help or STOP to
  opt out," which is what the guide requires for non-conversational texts.
  Opt-out terms are space-separated as required.
- Privacy policy is publicly accessible, linked from the form, and states data
  rates, STOP instructions, and that mobile opt-in data is never shared.
- **Instant Response is currently disabled** because outbound texting is
  blocked pending registration. It re-enables automatically with the previous
  settings once the campaign is approved. Nothing to fix.
