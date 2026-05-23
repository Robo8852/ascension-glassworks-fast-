import type { Metadata } from 'next';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { WorkPageHero } from '@/components/sections/WorkPageHero';
import { WorkDisciplines } from '@/components/sections/WorkDisciplines';
import { WorkBrands } from '@/components/sections/WorkBrands';
import { WorkStandard } from '@/components/sections/WorkStandard';
import { WorkFAQ } from '@/components/sections/WorkFAQ';
import { WorkCoverageBand } from '@/components/sections/WorkCoverageBand';
import { WorkPageCTA } from '@/components/sections/WorkPageCTA';
import { WORK_FAQS } from '@/components/sections/workFaqs';

const SITE_URL = 'https://ascensionglassworks.com';

export const metadata: Metadata = {
  title: 'The Work — Window, Door & Impact Installation | Florida Gulf Coast',
  description:
    "Florida Building Code-compliant window, door, and impact assembly installation across Florida's Gulf Coast. NAFS-tested, manufacturer-spec sealed, permits closed.",
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'The Work — Three Disciplines. One Standard.',
    description:
      "Window, door, and impact assembly installation across Florida's Gulf Coast.",
    url: `${SITE_URL}/work`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Window, Door, and Impact Assembly Installation',
  serviceType: 'Window and door installation',
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
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'The Work',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Window Replacement',
          serviceType: 'Window installation and replacement',
          url: `${SITE_URL}/work/window-replacement`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Exterior Doors',
          serviceType: 'Exterior door installation',
          url: `${SITE_URL}/work/exterior-doors`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Impact Products',
          serviceType: 'Hurricane-rated impact window and door installation',
          url: `${SITE_URL}/work/impact-products`,
        },
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: WORK_FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_URL}/`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'The Work',
      item: `${SITE_URL}/work`,
    },
  ],
};

export default function WorkPage() {
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
        <WorkPageHero />
        <WorkDisciplines />
        <WorkBrands />
        <WorkStandard />
        <WorkFAQ />
        <WorkCoverageBand />
        <WorkPageCTA />
        <Footer />
      </main>
    </>
  );
}
