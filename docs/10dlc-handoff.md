# Handoff — Section B: Grasshopper portal work

Written 2026-08-26 for a fresh Claude instance with no prior conversation.
Everything needed is in this file or in the repo. Work through
`docs/10dlc-resubmit-checklist.md` — this document covers **Section B only**.

## Situation

Ascension Glassworks LLC uses **Grasshopper** for phones and SMS (not Twilio).
The A2P 10DLC SMS campaign for **(941) 241-0002** was **declined by the carrier
on 2026-08-24**. The decline email said:

> Your Campaign registration has been declined for TCR Campaign Id: .
> Reason: The campaign submission has been reviewed and it was rejected because
> of provided Opt-in information. The campaign submission has been reviewed and
> it was rejected due to Terms and Conditions issues.

Note the Campaign Id is blank and no reason code is given — **getting the real
reason code from the portal is checklist item 10.**

Section A (website fixes) was completed in a prior session. Section B is the
portal work and has not been started.

**Cost discipline:** every submission to manual review costs **$15**, pass or
fail, and takes **7–12 business days**. Do not submit until every item is done.

## Repo and deploy

- Repo: `C:\Users\daver\ascension-glassworks-fast`, branch `main`.
  Remote `https://github.com/Robo8852/ascension-glassworks-fast-.git`.
- Push credentials are already fixed repo-locally: `.git/config` routes through
  `"C:/Program Files/GitHub CLI/gh.exe" auth git-credential` (gh account
  Robo8852). Windows Credential Manager holds the wrong account — **do not
  remove the repo-local helper override.**
- Vercel auto-deploys `main`. Production is
  **https://www.ascensionglassworks.com** — note the apex domain 307-redirects
  to `www`, so always verify against the `www` host.
- Deploys normally go live in about 60 seconds. **Vercel silently skipped one
  of three back-to-back pushes once**; if a deploy never appears, check
  `gh api repos/Robo8852/ascension-glassworks-fast-/deployments` and retrigger
  with an empty commit.

## Browser setup (this is the part that wastes time if you guess)

Claude drives the portal with the **chrome-devtools MCP server** using Dave's
real Chrome profile so the Grasshopper login carries over.

- The Ascension profile is **`Profile 15`** (`ascensiongwfl@gmail.com`),
  confirmed from `%LOCALAPPDATA%\Google\Chrome\User Data\Local State`.
- **Chrome 136+ silently ignores `--remote-debugging-port` on the default
  user-data-dir.** Launching Chrome with that flag does nothing. Do not retry it.
- Correct method: in the Ascension Chrome window, open
  `chrome://inspect/#remote-debugging` and tick **"Allow remote debugging for
  this browser instance"**. Wait until it reads `Server running at:
  127.0.0.1:9222`. If it is stuck on `starting…`, untick and retick.
- `curl http://127.0.0.1:9222/json/version` returns **nothing** even when this
  is working correctly — Chrome does not expose the classic HTTP endpoints to
  arbitrary clients. Do not treat that as failure.
- The MCP server in `~/.claude.json` is already configured as
  `npx -y chrome-devtools-mcp@latest --autoConnect`. After Chrome's toggle is
  on, ask Dave to run `/mcp` → chrome-devtools → **Reconnect** (a stdio server
  only picks up config changes on respawn).
- Verify with `list_pages`. If you see a single `about:blank`, you are attached
  to a throwaway Chrome, not Dave's — stop and get it reconnected.

## Portal mechanics (learned the hard way)

Portal: https://nuui.us.grasshopper.com/CarrierRegistration

- **Never enter credentials.** If it asks for login, click "Use password
  instead" at most, then hand back to Dave for the password and 2FA.
- The two **"🔍︎ Verify With AI"** buttons (`#ai-verify-privacy-btn`,
  `#ai-verify-terms-btn`) **silently do nothing** until the acknowledgment
  checkbox above them is ticked. Results render into `.ai-informational-msg`
  elements, not into a modal.
- **Review Application** runs form validation, then
  `AiFullCampaignValidator()`, then shows `#modalAiReview`. Read
  `#aiConfidenceMsg` for the confidence level and `#ai-field-errors li` for the
  cards. Three outcomes exist: Low, Fair, and a success state worded "did not
  find critical issues".
- `#ai-cancel` ("Edit Form") closes the modal safely and submits nothing.
- **`#ai-submit` ("Ignore & Submit Application to Carrier") is the real
  submit and costs $15.** Never click it. Hand back to Dave.
- **Filling a field does not save it.** In the prior session every campaign
  field was filled and then lost because only "Edit Form" was clicked — the
  carrier reviewed the OLD text. Use **Save as draft** or complete the
  submission flow so values persist, and re-read the field values back to
  confirm.
- The pre-submission AI scanner is a weak literal-string matcher and is
  non-deterministic — the same submission produced different cards on repeat
  runs, including self-contradictory advice. It is advisory only and does not
  gate submission. Do not chase it. The carrier review is the real gate.

## Section B work items

**6. Upload the Evidence screenshot.** The Evidence field read `No file chosen`
on the rejected submission. Capture a screenshot of
https://www.ascensionglassworks.com/contact showing the SMS consent checkbox
and its full disclosure text, save it as PNG/JPEG (max 5MB), and upload via the
Evidence field. Use the chrome-devtools `take_screenshot` tool with a
`filePath`, then the `upload_file` tool on the Evidence button.

**7. Save the campaign field text.** Paste verbatim from the
"Campaign field text — paste verbatim" section of `docs/sms-compliance.md` into
Description, Message Flow / opt-in description, and Terms. Then SAVE. Then
re-read the values to confirm they stuck.

**8. Repoint the Terms & Conditions field** from
`https://www.ascensionglassworks.com/privacy` to
`https://www.ascensionglassworks.com/sms-terms`.

**9. Confirm the brand shows Verified.** A campaign cannot pass under an
unverified brand. Brand registration is separate, costs $4.50 per attempt, and
fails on tiny address mismatches against the IRS SS-4 / LTR147C (even "ST" vs
"STREET"), or a missing/extra trailing "LLC".

**10. Get the actual reason code** from the campaign's status in the portal.
This replaces our inference about which rule fired.

**11. Contact Grasshopper support** for help creating the new registration —
their guide explicitly directs you to do this after a decline. Dave suspects a
brand-new registration form is required rather than editing the old one;
confirm with support before spending another $15.

## Still blocked on Dave

- **Checklist item 4 / 13 — the mailing address.** The Articles of
  Organization PDF in `C:\Users\daver\Downloads\` is a **scanned image with no
  text layer**, so the address could not be extracted. Ask Dave directly, or
  get permission to OCR it. Item 4 (adding the address to the site) cannot ship
  without this.

## Decisions already made — do not relitigate

- **No Google Workspace / domain email.** Deliberately deferred. Dave has had
  approvals at other companies without one and wants Grasshopper to stay a
  single streamlined system. Revisit only if a rejection names the email domain.
- **`ascensiongwfl@gmail.com` is the canonical support address** everywhere.
  Dave has access to it; `Ascensionglassworksllc@gmail.com` is Joseph's and
  Dave cannot get into it.
- **Informational-only campaign.** No marketing or promotional texts under this
  registration — promos go out by email only. Sending a promo text under an
  informational campaign risks filtering and suspension.

## Reference

- Grasshopper's own guide is the source of truth and is far more useful than
  the AI scanner:
  https://support.grasshopper.com/help/register-local-phone-number-enable-texting
- `docs/sms-compliance.md` — full history, paste-ready field text, prior
  reviewer passes.
- `docs/10dlc-resubmit-checklist.md` — the live checklist. Tick items as done.
