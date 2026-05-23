'use client';

import { motion } from 'motion/react';
import { SectionHeadline } from '../SectionHeadline';

type City = {
  name: string;
  county: string;
  body: string;
};

const CITIES: City[] = [
  {
    name: 'Sarasota',
    county: 'Sarasota County',
    body:
      'From Siesta Key and Lido Key to the historic homes north of downtown Sarasota, waterfront properties demand impact-rated glazing that withstands constant coastal salt-air exposure. We specify and install systems engineered for the specific elevation and exposure category of your address.',
  },
  {
    name: 'Bradenton',
    county: 'Manatee County',
    body:
      'Anna Maria Island, Palma Sola, and the Riverwalk corridor each carry distinct code requirements across waterfront and inland zones. Mid-century neighborhoods throughout Bradenton are driving steady replacement-window demand as original aluminum units reach the end of their service life.',
  },
  {
    name: 'Lakewood Ranch',
    county: 'Manatee & Sarasota Counties',
    body:
      "As one of the fastest-growing master-planned communities in the country, Lakewood Ranch is shaped by HOA-driven aesthetic standards and a clear preference for energy-efficient systems. We focus on low U-factor and low-SHGC products that meet both architectural review boards and Florida's cooling-dominated climate.",
  },
  {
    name: 'Venice',
    county: 'Sarasota County',
    body:
      'Historic downtown Venice and the homes along Manasota Key often require full replacement to bring older openings into current Florida Building Code compliance. Direct coastal wind exposure makes proper anchoring, flashing, and impact-rated specification non-negotiable.',
  },
  {
    name: 'Tampa',
    county: 'Hillsborough County',
    body:
      'South Tampa, Hyde Park, and Davis Islands present a mix of historic bungalows, mid-century homes, and new construction — each with its own Hillsborough County permitting nuances. Storm-surge zone considerations around Tampa Bay shape both product selection and installation detailing.',
  },
  {
    name: 'St. Petersburg',
    county: 'Pinellas County',
    body:
      'Old Northeast, Historic Kenwood, and Snell Isle are home to bungalows and Mediterranean Revival residences that benefit from historically-sensitive replacement windows. We help homeowners balance preservation-minded sightlines with modern impact and energy performance.',
  },
  {
    name: 'Clearwater',
    county: 'Pinellas County',
    body:
      'Clearwater Beach, Belleair, and Sand Key sit squarely within the Pinellas County wind-borne debris region, with strict requirements that apply to both condominiums and single-family homes. We handle high-rise and ground-level installations with the same attention to engineering submittals and inspections.',
  },
];

export function ServiceAreaCoverage() {
  return (
    <section className="py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-brand-black w-full overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeadline>Coverage Across the Gulf Coast</SectionHeadline>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4">
          {CITIES.map((city, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const delay = (col + row) * 0.1 + 0.15;
            const isLastOrphan = i === CITIES.length - 1 && CITIES.length % 3 === 1;

            return (
              <motion.article
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1] as const,
                  delay,
                }}
                className={`relative bg-brand-black border border-white/10 p-8 md:p-10 flex flex-col min-h-[280px] md:min-h-[320px]${
                  isLastOrphan ? ' lg:col-start-2' : ''
                }`}
              >
                <span className="text-[10px] tracking-[0.25em] uppercase text-brand-white/40 font-sans mb-3">
                  {city.county}
                </span>

                <h3 className="font-sans text-xl md:text-2xl font-light uppercase tracking-[0.15em] text-brand-white leading-tight">
                  {city.name}
                </h3>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1] as const,
                    delay: delay + 0.3,
                  }}
                  className="w-8 h-[1px] bg-gold origin-left mt-4 mb-6"
                />

                <p className="text-brand-white/70 text-sm leading-relaxed font-sans flex-1">
                  {city.body}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="text-brand-white/50 text-xs md:text-sm leading-relaxed font-sans font-light mt-12 md:mt-16 max-w-3xl"
        >
          Plus surrounding areas — Anna Maria, Longboat Key, Siesta Key,
          Palmetto, Parrish, Apollo Beach, Treasure Island, Largo, Dunedin,
          Tarpon Springs, and more.
        </motion.p>
      </div>
    </section>
  );
}
