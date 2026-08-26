import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { SectionHeadline } from '@/components/SectionHeadline';
import { SmsCarrierTerms } from '@/components/SmsCarrierTerms';
import { SMS_CONSENT_TEXT, SMS_OPT_OUT_TEXT } from '@/lib/sms-consent';

export const metadata: Metadata = {
  title: 'SMS Terms and Conditions',
  description:
    'Terms and conditions for the Ascension Glassworks LLC informational text messaging program, including message types, frequency, rates, and opt-out instructions.',
  alternates: {
    canonical: '/sms-terms',
  },
};

const LAST_UPDATED = 'August 26, 2026';

export default function SmsTermsPage() {
  return (
    <main className="bg-brand-black text-brand-white min-h-screen">
      <Navigation />

      <section className="pt-40 md:pt-52 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeadline>SMS Terms and Conditions</SectionHeadline>
          <p className="text-brand-white/50 text-sm font-sans tracking-wide">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-10 text-brand-white/80 font-sans font-light leading-relaxed">
          <p>
            These terms and conditions govern the text messaging program operated by
            Ascension Glassworks LLC (&ldquo;Ascension Glassworks,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). Ascension
            Glassworks LLC is the sender of all text messages described here, and
            messages originate from (941) 241-0002. If you have questions about this
            policy or our SMS program, contact us at ascensiongwfl@gmail.com or
            (941) 241-0002.
          </p>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              1. Program description
            </h2>
            <p>
              The messaging program consists of informational customer-service text
              messages sent in response to an inquiry you submitted to us. You will
              receive only the following message types: appointment reminders,
              appointment confirmations, scheduling updates, project and installation
              status updates, and replies to questions about your estimate. We do not
              send marketing or promotional text messages under this program.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              2. How you opt in
            </h2>
            <p>
              You opt in by submitting the contact form at
              https://www.ascensionglassworks.com/contact and checking the SMS consent
              checkbox, which is unchecked by default. Consent is not a condition of
              purchase, and we will still respond using the contact method you select if
              you leave the box unchecked. The disclosure shown at the point of opt-in
              reads:
            </p>
            <p className="mt-3 border-l-2 border-gold/40 pl-4 text-brand-white/70 italic">
              {SMS_CONSENT_TEXT}
            </p>
            <p className="mt-3">
              A second, equally unchecked box directly beneath it reads:
            </p>
            <p className="mt-3 border-l-2 border-gold/40 pl-4 text-brand-white/70 italic">
              {SMS_OPT_OUT_TEXT}
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              3. Message frequency and cost
            </h2>
            <p>
              Message frequency may vary. Message and data rates may apply for any
              messages sent to you from us and to us from you. If you have questions
              about your text plan or data plan, contact your wireless provider.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              4. How to opt out
            </h2>
            <p>
              You can cancel the SMS service at any time. Reply STOP to any message you
              receive from us, and we will send a single confirmation that you have been
              unsubscribed. After that you will receive no further SMS messages from us.
              If you want to join again, opt in the same way you did the first time and
              we will resume sending messages.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              5. How to get help
            </h2>
            <p>
              Reply HELP to any message for assistance. You can also reach us directly at
              ascensiongwfl@gmail.com or (941) 241-0002.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              6. Carrier liability
            </h2>
            <p>
              Carriers are not liable for delayed or undelivered messages. Message
              delivery is subject to effective transmission from your wireless service
              provider and is outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              7. Data sharing
            </h2>
            <p>
              Customer data is not shared with third parties for promotional or marketing
              purposes. Mobile opt-in data and SMS consent are never shared or sold to
              anyone for any purpose, including for SMS registration, compliance, or
              marketing. Any information sharing mentioned elsewhere in our policies
              excludes mobile opt-in data. We do not transfer or share consumer data,
              including mobile numbers, SMS opt-in data, and consent records, with any
              external organizations except as strictly necessary to provide the
              messaging service.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              8. Privacy
            </h2>
            <p>
              For details on how we collect, use, and protect your information, see our{' '}
              <Link href="/privacy" className="text-gold hover:text-gold/80 underline">
                Privacy Policy
              </Link>{' '}
              at https://www.ascensionglassworks.com/privacy.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              9. Carrier-required terms
            </h2>
            <p>
              The following data sharing statement and numbered terms are published
              exactly as our messaging provider requires them, and govern this program
              alongside the sections above.
            </p>
            <SmsCarrierTerms className="mt-4" />
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about this policy or our SMS program, contact us at
              ascensiongwfl@gmail.com or (941) 241-0002.
            </p>
            <ul className="list-none mt-3 space-y-1 text-brand-white/80">
              <li>Company: Ascension Glassworks LLC</li>
              <li>Phone: (941) 241-0002</li>
              <li>Email: ascensiongwfl@gmail.com</li>
              <li>Website: https://www.ascensionglassworks.com/contact</li>
            </ul>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
