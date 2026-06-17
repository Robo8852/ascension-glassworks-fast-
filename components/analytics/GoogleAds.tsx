import Script from 'next/script';

// Google Ads (gtag.js) tag for conversion tracking.
//
// Defaults to the Ascension Glassworks Google Ads account so the tag ships
// without requiring a per-environment env var. Override with
// NEXT_PUBLIC_GOOGLE_ADS_ID if a different account is needed (e.g. staging).
const DEFAULT_GOOGLE_ADS_ID = 'AW-18235040204';

export function GoogleAds() {
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || DEFAULT_GOOGLE_ADS_ID;
  if (!adsId) return null;

  return (
    <>
      <Script
        id="google-ads-gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${adsId}');
          `,
        }}
      />
    </>
  );
}
