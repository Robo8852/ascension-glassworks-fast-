# 10DLC status — Section B complete, awaiting submit

Written 2026-08-26 after working the campaign form directly in the Grasshopper
portal. Everything below was read out of the live form, not inferred.

Companion documents: `docs/10dlc-resubmit-checklist.md` (the item list) and
`docs/sms-compliance.md` (full history and paste-ready field text).

---

## The two rejection causes, confirmed

**Opt-in:** the "Describe your opt-in process" field still held the old text. It
quoted a checkbox reading *"By checking this box, you agree to receive
informational messages…"* and described a single box. That checkbox no longer
exists on your site, and there was no opt-out box mentioned — so the reviewer
compared the field against the live page and it didn't match.

**Terms & Conditions:** the T&C field pointed at `/privacy`, not `/sms-terms`.

One correction to the handoff: it said the campaign text "was never persisted."
Only half right — the Description **did** persist (that's why you saw our good
copy). Only the opt-in description was lost. The carrier reviewed a good
description sitting next to a stale opt-in field.

## Fixed and verified by read-back

Opt-in description rewritten to quote both live checkboxes verbatim · T&C →
`/sms-terms` · Evidence screenshot uploaded · a second screenshot of `/privacy`
uploaded to the privacy field, showing the verbatim terms live · "frequency
varies" → "may vary" · all URLs normalized to `www` · opt-out keywords extended
to STOP / CANCEL / UNSUBSCRIBE / QUIT / END.

Two things I checked rather than assumed: **"Affiliate Marketing" is
negative-phrased** — *"I will NOT use my number for affiliate marketing"* — so
checked is correct, and I left it. And when I ticked "Embedded phone number,"
the portal silently auto-appended a clumsy sentence to your sample message; I
rewrote it to read naturally.

Items 9, 10, 11 resolved: brand shows **Verified**. There is **no numeric reason
code** — the portal shows the identical prose, blank Campaign Id. And support
isn't needed — "Edit" reopens the whole form and resubmits in place, so no new
registration.

## Read this before you touch anything

**There is no "Save as draft."** Only *Cancel* and *Review Application*, and
neither writes to the server. Nothing persists until the campaign is actually
submitted — that, not a misclick, is why the opt-in text vanished last time.
**If you close that tab, all of this is gone.**

Everything validates except one box, which is yours to tick — it's the fee
attestation, and it's currently disabling the button:

1. Tick **"I have reviewed my SMS registration and confirm it is correct."**
2. Click **Review Application** — safe, validation + AI check only.
3. Then the real **$15 submit**. 7–12 business days.

---

## If the tab was lost before submitting

Everything above has to be redone from scratch in one sitting. The exact field
text is in `docs/sms-compliance.md` under "Campaign field text — paste
verbatim", the two upload files are `docs/evidence/contact-sms-consent.png`
(Evidence field) and `docs/evidence/privacy-sms-terms.png` (privacy Upload
field), and the full list of smaller fixes is in the "Portal findings" section
at the bottom of `docs/10dlc-resubmit-checklist.md`.
