import type { Metadata } from 'next';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/work/impact-products/Hero';
import { Testing } from '@/components/sections/work/impact-products/Testing';
import { GlassComposition } from '@/components/sections/work/impact-products/GlassComposition';
import { CodeAndInsurance } from '@/components/sections/work/impact-products/CodeAndInsurance';
import { FAQ } from '@/components/sections/work/impact-products/FAQ';
import { CTA } from '@/components/sections/work/impact-products/CTA';
import { IMPACT_PRODUCTS_FAQS } from '@/components/sections/work/impact-products/faqs';

const SITE_URL = 'https://ascensionglassworks.com';

export const metadata: Metadata = {
  title: 'Impact Windows & Doors — Florida Gulf Coast | Ascension Glassworks',
  description:
    "ASTM E1886-19 / E1996-23-tested impact assemblies for Florida's Wind-Borne Debris Region. FL# / Miami-Dade NOA documentation, ASCE 7-22 design-pressure matched.",
  alternates: { canonical: '/work/impact-products' },
  openGraph: {
    title: 'Impact Products — Ascension Glassworks',
    description:
      "Hurricane-rated impact window and door installation across Florida's Gulf Coast.",
    url: `${SITE_URL}/work/impact-products`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Impact Window and Door Installation',
  serviceType: 'Hurricane-rated impact window and door installation',
  url: `${SITE_URL}/work/impact-products`,
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
  mainEntity: IMPACT_PRODUCTS_FAQS.map(({ q, a }) => ({
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
      name: 'Impact Products',
      item: `${SITE_URL}/work/impact-products`,
    },
  ],
};

export default function ImpactProductsPage() {
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
        <Testing />
        <GlassComposition />
        <CodeAndInsurance />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
