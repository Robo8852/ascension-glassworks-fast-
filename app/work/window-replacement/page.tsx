import type { Metadata } from 'next';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/work/window-replacement/Hero';
import { FrameMaterials } from '@/components/sections/work/window-replacement/FrameMaterials';
import { InstallDetail } from '@/components/sections/work/window-replacement/InstallDetail';
import { FAQ } from '@/components/sections/work/window-replacement/FAQ';
import { CTA } from '@/components/sections/work/window-replacement/CTA';
import { WINDOW_REPLACEMENT_FAQS } from '@/components/sections/work/window-replacement/faqs';

const SITE_URL = 'https://ascensionglassworks.com';

export const metadata: Metadata = {
  title: 'Window Replacement — Florida Gulf Coast | Ascension Glassworks',
  description:
    "Full tear-outs and retrofits in stock and impact-rated configurations. NFRC Climate Zone 2-rated. FL# / NOA documented. Permits closed.",
  alternates: { canonical: '/work/window-replacement' },
  openGraph: {
    title: 'Window Replacement — Ascension Glassworks',
    description:
      "Tear-outs, retrofits, and full-frame window replacement across Florida's Gulf Coast.",
    url: `${SITE_URL}/work/window-replacement`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Window Replacement',
  serviceType: 'Window installation and replacement',
  url: `${SITE_URL}/work/window-replacement`,
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Ascension Glassworks',
    telephone: '+1-941-241-0002',
    url: SITE_URL,
    areaServed: 'Florida Gulf Coast',
  },
  areaServed: [
    'Sarasota',
    'Bradenton',
    'Lakewood Ranch',
    'Venice',
    'Tampa',
    'St. Petersburg',
    'Clearwater',
  ].map((name) => ({
    '@type': 'City',
    name,
    containedInPlace: { '@type': 'State', name: 'Florida' },
  })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: WINDOW_REPLACEMENT_FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'The Work', item: `${SITE_URL}/work` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Window Replacement',
      item: `${SITE_URL}/work/window-replacement`,
    },
  ],
};

export default function WindowReplacementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="bg-brand-black text-brand-white min-h-screen">
        <Navigation />
        <Hero />
        <FrameMaterials />
        <InstallDetail />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
