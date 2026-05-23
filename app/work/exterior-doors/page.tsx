import type { Metadata } from 'next';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/work/exterior-doors/Hero';
import { DoorTypes } from '@/components/sections/work/exterior-doors/DoorTypes';
import { InstallDetail } from '@/components/sections/work/exterior-doors/InstallDetail';
import { FAQ } from '@/components/sections/work/exterior-doors/FAQ';
import { CTA } from '@/components/sections/work/exterior-doors/CTA';
import { EXTERIOR_DOOR_FAQS } from '@/components/sections/work/exterior-doors/faqs';

const SITE_URL = 'https://ascensionglassworks.com';

export const metadata: Metadata = {
  title: 'Exterior Door Installation — Florida Gulf Coast | Ascension Glassworks',
  description:
    "Entry, French, sliding glass, and multi-slide door installation. AAMA-rated coastal hardware, FL# / Miami-Dade NOA documented, threshold pan-flashed per FBC R703.",
  alternates: { canonical: '/work/exterior-doors' },
  openGraph: {
    title: 'Exterior Doors — Ascension Glassworks',
    description:
      "Entry, French, sliding glass, and multi-slide installation across Florida's Gulf Coast.",
    url: `${SITE_URL}/work/exterior-doors`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Exterior Door Installation',
  serviceType: 'Exterior door installation',
  url: `${SITE_URL}/work/exterior-doors`,
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
  mainEntity: EXTERIOR_DOOR_FAQS.map(({ q, a }) => ({
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
      name: 'Exterior Doors',
      item: `${SITE_URL}/work/exterior-doors`,
    },
  ],
};

export default function ExteriorDoorsPage() {
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
        <DoorTypes />
        <InstallDetail />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
