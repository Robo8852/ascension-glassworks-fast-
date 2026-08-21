import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { SectionHeadline } from '@/components/SectionHeadline';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Ascension Glassworks collects, uses, and protects the personal information you share when requesting a windows and doors consultation.',
  alternates: {
    canonical: '/privacy',
  },
};

const LAST_UPDATED = 'August 21, 2026';

export default function PrivacyPage() {
  return (
    <main className="bg-brand-black text-brand-white min-h-screen">
      <Navigation />

      <section className="pt-40 md:pt-52 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeadline>Privacy Policy</SectionHeadline>
          <p className="text-brand-white/50 text-sm font-sans tracking-wide">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12 text-brand-white/80 font-sans font-light leading-relaxed">
          <p>
            Ascension Glassworks LLC (&ldquo;Ascension Glassworks,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides window and door installation
            services across Florida&apos;s Gulf Coast. This policy explains what
            information we collect through this website, how we use it, and the choices
            you have.
          </p>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              Information We Collect
            </h2>
            <p>
              When you submit a form or request a consultation on our website, we may
              collect the following personal information:
            </p>
            <ul className="list-disc list-outside pl-5 mt-3 space-y-1 text-brand-white/60">
              <li>First and last name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Property or project address and service location</li>
              <li>Messages and form responses</li>
              <li>
                Project details you choose to share, such as window and door
                preferences, photos, timeline, and budget range
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-outside pl-5 mt-3 space-y-1 text-brand-white/60">
              <li>Respond to your inquiries and schedule consultations</li>
              <li>Prepare estimates and coordinate installation and service work</li>
              <li>
                Send appointment reminders, project updates, and follow-up communication
                about your inquiry by email and SMS
              </li>
              <li>
                Send information about our services, promotions, and seasonal or
                hurricane-season readiness offers <strong className="font-normal text-brand-white">by email only</strong> — we
                do not send marketing or promotional text messages
              </li>
              <li>Improve our website and services</li>
              <li>Comply with legal, permitting, and warranty obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              SMS &amp; Email Communications
            </h2>
            <p>
              Text messages are strictly informational customer-service messages related
              to an inquiry you submitted to us — scheduling, appointment confirmations,
              project updates, and replies to your questions. We do not send marketing or
              promotional text messages.
            </p>
            <p className="mt-3">
              You opt in by checking the SMS consent box on our{' '}
              <Link href="/contact" className="text-gold hover:text-gold/80 underline">
                contact form
              </Link>
              . The box is unchecked by default, consent is not a condition of purchase,
              and we will still respond by your chosen contact method if you leave it
              unchecked. The disclosure shown at opt-in reads:
            </p>
            <p className="mt-3 border-l-2 border-gold/40 pl-4 text-brand-white/70 italic">
              By checking this box, you agree to receive informational messages from
              Ascension Glassworks. Message frequency may vary. Message and data rates may
              apply. Reply HELP for help or STOP to opt out.
            </p>
            <ul className="list-disc list-outside pl-5 mt-3 space-y-1 text-brand-white/60">
              <li>Message and data rates may apply</li>
              <li>Message frequency may vary</li>
              <li>
                Reply <span className="text-gold">STOP</span> to opt out of SMS messages
                at any time
              </li>
              <li>
                Reply <span className="text-gold">HELP</span> for help
              </li>
            </ul>
            <p className="mt-3">
              Email is separate from SMS. Promotional and marketing content is sent by
              email only and never by text message, and you may unsubscribe at any time
              by clicking the &ldquo;unsubscribe&rdquo; link included in our emails.
            </p>
            <p className="mt-3 text-brand-white">
              We do not transfer or share consumer data, including mobile numbers, SMS
              opt-in data, and consent records, with any external organizations except as
              strictly necessary to provide the messaging service, and never for
              marketing or independent use by third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              Data Sharing &amp; Third Parties
            </h2>
            <p>
              We do not sell your personal information. We may share your data with
              trusted third-party service providers who assist us in operating our
              website and conducting our business — such as email and SMS delivery
              services, scheduling and estimating software, and, where a project requires
              it, manufacturers, suppliers, permitting authorities, or installation
              partners. These parties are obligated to keep your information
              confidential, to use it only for the services they provide to us, and to
              prevent any unauthorized sharing of your information.
            </p>
            <p className="mt-3 text-brand-white">
              We do not transfer or share consumer data, including mobile numbers, SMS
              opt-in data, and consent records, with any external organizations except as
              strictly necessary to provide the messaging service, and never for
              marketing or independent use by third parties. Mobile opt-in data and SMS
              consent are never shared or sold for SMS registration, compliance, or
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction, and to prevent unauthorized sharing of your data. Access to
              mobile numbers, SMS opt-in data, and consent records is restricted to
              personnel and service providers who need it to deliver our services.
              However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-outside pl-5 mt-3 space-y-1 text-brand-white/60">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction or deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Withdraw consent for SMS and email communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the
              purposes outlined in this policy — including servicing warranties on
              completed installations — unless a longer retention period is required or
              permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be
              posted on this page with an updated &ldquo;Last updated&rdquo; date. We
              encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-sans font-light tracking-wide text-brand-white mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or our SMS communications,
              contact Ascension Glassworks LLC at{' '}
              <a href="tel:9412410002" className="text-gold hover:text-gold/80 underline">
                941-241-0002
              </a>{' '}
              or email us at{' '}
              <a
                href="mailto:Ascensionglassworksllc@gmail.com"
                className="text-gold hover:text-gold/80 underline"
              >
                Ascensionglassworksllc@gmail.com
              </a>
              . You may also reach us through our contact page at{' '}
              <Link href="/contact" className="text-gold hover:text-gold/80 underline">
                https://ascensionglassworks.com/contact
              </Link>{' '}
              to exercise any of the rights described above. Ascension Glassworks LLC is
              the sender of all SMS messages described in this policy, and messages
              originate from (941) 241-0002.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
