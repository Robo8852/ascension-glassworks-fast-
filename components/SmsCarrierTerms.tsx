// Grasshopper's Terms and Conditions block, reproduced verbatim.
//
// We ticked "I acknowledge these terms and I have added them to my privacy
// policy" during A2P 10DLC registration, so the automated reviewer scans the
// live pages for these literal strings. Do not reword, re-punctuate, or
// "correct" anything here — note that item 5 says message frequency "will
// vary", not "may vary", which is deliberate and must stay. Every line is a
// plain string rendered as text so no JSX entity escaping can alter it.

const DATA_SHARING_HEADING = 'Data Sharing';

const DATA_SHARING_BULLETS = [
  '• Customer data is not shared with 3rd parties for promotional or marketing purposes.',
  '• Mobile opt-in and consent are never shared with anyone for any purpose. Any information sharing that may be mentioned elsewhere in this policy excludes mobile opt-in data.',
];

const TERMS_HEADING = 'Ascension Glassworks Messaging Terms and Conditions';

const TERMS_ITEMS = [
  '1. The messaging program consists of general conversational messaging to answer questions and provide support to customers.',
  "2. You can cancel the SMS service at any time. Just text 'STOP' to the phone number from which you received messages. After you send the SMS message 'STOP' to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.",
  '3. If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at ascensiongwfl@gmail.com.',
  '4. Carriers are not liable for delayed or undelivered messages.',
  '5. As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency will vary based on communication needs. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.',
  '6. If you have any questions regarding privacy, please read our privacy policy contained in the rest of this document/page.',
];

type SmsCarrierTermsProps = {
  /** Tailwind classes for the two headings, so each page can match its own scale. */
  headingClassName?: string;
  /** Extra classes for the wrapping element. */
  className?: string;
};

export function SmsCarrierTerms({
  headingClassName = 'text-lg font-sans font-light tracking-wide text-brand-white mb-2',
  className = '',
}: SmsCarrierTermsProps) {
  return (
    <div className={className}>
      <h3 className={headingClassName}>{DATA_SHARING_HEADING}</h3>
      <div className="space-y-2">
        {DATA_SHARING_BULLETS.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <h3 className={`${headingClassName} mt-6`}>{TERMS_HEADING}</h3>
      <div className="space-y-2">
        {TERMS_ITEMS.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}
