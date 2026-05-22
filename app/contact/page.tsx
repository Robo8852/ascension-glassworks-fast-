import type { Metadata } from 'next';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { SectionHeadline } from '@/components/SectionHeadline';
import { ContactForm } from '@/components/sections/ContactForm';
import { ContactTrust } from '@/components/sections/ContactTrust';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Reach out for a no-pressure windows and doors consultation across Florida's Gulf Coast. We respond within one business day to schedule your project conversation.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="bg-brand-black text-brand-white min-h-screen">
      <Navigation />

      <section className="pt-32 md:pt-44 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeadline>Let&apos;s Talk About Your Project</SectionHeadline>
          <p className="text-brand-white/80 text-base md:text-lg leading-relaxed max-w-2xl font-sans font-light">
            Tell us about your home and what you&apos;re considering. We&apos;ll follow up
            within one business day to schedule a no-pressure consultation across
            Florida&apos;s Gulf Coast.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
            <ContactForm />
            <ContactTrust />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
