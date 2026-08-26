// Canonical A2P 10DLC opt-in and opt-out disclosures.
//
// These live in their own module — not inside ContactForm.tsx — because the
// server-rendered /privacy and /sms-terms pages quote them verbatim, and a
// server component cannot read a plain value out of a 'use client' module
// (every export of one becomes a client reference). ContactForm.tsx re-exports
// SMS_CONSENT_TEXT so the consent-record call site keeps its familiar import.

// Exact disclosure filed with the A2P 10DLC campaign. The campaign covers
// conversational/informational customer support messaging only — no marketing
// or promotional SMS. It names the message types, the originating business
// number, and the promise that mobile opt-in data is never shared, all of
// which carrier review requires. This string must stay character-identical to
// the Message Flow (CTA) and Terms and Conditions fields on the campaign, and
// is stored verbatim with each submission as that lead's consent record.
export const SMS_CONSENT_TEXT =
  'Yes, I consent to receive informational text messages from Ascension Glassworks LLC at (941) 241-0002, including appointment reminders and confirmations, scheduling updates, project and installation status updates, and replies to my questions. Message frequency may vary. Message and data rates may apply. Reply HELP for help or STOP to opt out. We never share your mobile opt-in information with anyone.';

// The explicit decline. Carrier guidance (reason codes 803 / 804 / 806 / 862)
// requires customers be able to opt in *or out*, so both choices are shown and
// neither is preselected.
export const SMS_OPT_OUT_TEXT =
  'No, I do not want to receive any text messages from Ascension Glassworks.';
