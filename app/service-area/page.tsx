import type { Metadata } from 'next';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { ServiceAreaPageHero } from '@/components/sections/ServiceAreaPageHero';
import { ServiceAreaCoverage } from '@/components/sections/ServiceAreaCoverage';
import { ServiceAreaExpertise } from '@/components/sections/ServiceAreaExpertise';
import { ServiceAreaFAQ } from '@/components/sections/ServiceAreaFAQ';
import { ServiceAreaPageCTA } from '@/components/sections/ServiceAreaPageCTA';
import { SERVICE_AREA_FAQS } from '@/components/sections/serviceAreaFaqs';

const SITE_URL = 'https://ascensionglassworks.com';

const SERVICE_AREA_CITIES = [
  'Sarasota',
  'Bradenton',
  'Lakewood Ranch',
  'Venice',
  'Tampa',
  'St. Petersburg',
  'Clearwater',
];

export const metadata: Metadata = {
  title: 'Service Area — Florida Gulf Coast Window & Door Installation',
  description:
    "Ascension Glassworks installs impact-rated windows and exterior doors across Florida's Gulf Coast — Sarasota, Bradenton, Lakewood Ranch, Venice, Tampa, St. Petersburg, and Clearwater. Permits, product approvals, and code-compliant installation handled.",
  alternates: {
    canonical: '/service-area',
  },
  openGraph: {
    title: 'Service Area — Florida Gulf Coast Window & Door Installation',
    description:
      "Window and door installation across Florida's Gulf Coast: Sarasota, Bradenton, Lakewood Ranch, Venice, Tampa, St. Petersburg, and Clearwater. Impact-rated glazing, code-compliant, no-pressure consultation.",
    url: `${SITE_URL}/service-area`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Window and Door Installation',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Ascension Glassworks',
    url: SITE_URL,
    telephone: '+1-941-241-0002',
  },
  areaServed: SERVICE_AREA_CITIES.map((city) => ({
    '@type': 'City',
    name: city,
    containedInPlace: {
      '@type': 'State',
      name: 'Florida',
    },
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Window & Door Services',
    itemListElement: [
      'Impact-Rated Window Installation',
      'Exterior Door Installation',
      'Impact Products',
      'Window Replacement',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SERVICE_AREA_FAQS.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
};

export default function ServiceAreaPage() {
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
      <main className="bg-brand-black text-brand-white min-h-screen">
        <Navigation />
        <ServiceAreaPageHero />
        <ServiceAreaCoverage />
        <ServiceAreaExpertise />
        <ServiceAreaFAQ />
        <ServiceAreaPageCTA />
        <Footer />
      </main>
    </>
  );
}
