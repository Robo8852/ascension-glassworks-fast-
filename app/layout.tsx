import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { ConvexClientProvider } from "@/components/providers/ConvexClientProvider";
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from '@/components/analytics/GoogleTagManager';
import { GoogleAds } from '@/components/analytics/GoogleAds';
import { AnalyticsListener } from '@/components/analytics/AnalyticsListener';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500'],
  display: 'swap',
});

const SITE_URL = 'https://ascensionglassworks.com';

const SITE_DESCRIPTION =
  "Professional window & door installation across Florida's Gulf Coast. Elevated craftsmanship, honest guidance, and clear communication from Ascension Glassworks.";

const SHORT_DESCRIPTION =
  "Professional window & door installation on Florida's Gulf Coast — elevated craftsmanship, honest guidance, clear communication.";

const SERVICE_CITIES = [
  'Sarasota',
  'Bradenton',
  'Lakewood Ranch',
  'Venice',
  'Tampa',
  'St. Petersburg',
  'Clearwater',
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Ascension Glassworks — Professional Window & Door Installation on Florida's Gulf Coast",
    template: '%s | Ascension Glassworks',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'window replacement',
    'impact windows',
    'exterior doors',
    'sliding glass doors',
    'hurricane windows',
    'impact doors',
    'window installation',
    'door installation',
    "Florida's Gulf Coast",
    'Gulf Coast Florida',
    ...SERVICE_CITIES,
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Ascension Glassworks',
    title:
      "Ascension Glassworks — Professional Window & Door Installation on Florida's Gulf Coast",
    description: SITE_DESCRIPTION,
    images: [
      {
        // TODO: create /public/og-image.jpg (1200x630) social share asset.
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Ascension Glassworks — Clearly Raising Standards for windows & doors on Florida's Gulf Coast",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Ascension Glassworks — Professional Window & Door Installation on Florida's Gulf Coast",
    description: SITE_DESCRIPTION,
    // TODO: same /public/og-image.jpg asset still needs to be created.
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    // TODO: add /public/favicon.ico — not yet present in /public.
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    // TODO: add /public/apple-touch-icon.png (180x180) — not yet present in /public.
    apple: '/apple-touch-icon.png',
  },
};

// TODO: replace placeholder postal address and image once real business
// details and assets are finalized.
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Ascension Glassworks LLC',
  description: SHORT_DESCRIPTION,
  url: SITE_URL,
  telephone: '+1-941-241-0002',
  // TODO: replace with real OG/brand image once /public/og-image.jpg exists.
  image: `${SITE_URL}/og-image.jpg`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    // TODO: replace placeholder address with the real Ascension Glassworks HQ.
    streetAddress: '',
    addressLocality: 'Sarasota',
    addressRegion: 'FL',
    postalCode: '',
    addressCountry: 'US',
  },
  areaServed: SERVICE_CITIES.map((city) => ({
    '@type': 'City',
    name: city,
  })),
  serviceType: [
    'Window Replacement',
    'Exterior Door Installation',
    'Impact Windows',
    'Impact Doors',
    'Hurricane Windows',
    'Sliding Glass Doors',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans bg-[#0B0B0B] text-white", montserrat.variable)}>
      <head>
        <GoogleTagManager />
        <GoogleAds />
      </head>
      <body suppressHydrationWarning className="antialiased overflow-x-hidden">
        <GoogleTagManagerNoScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Suspense fallback={null}>
          <AnalyticsListener />
        </Suspense>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
