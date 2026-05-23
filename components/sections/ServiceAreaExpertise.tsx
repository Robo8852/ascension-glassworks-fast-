'use client';

import { motion } from 'motion/react';
import { FileCheck, Wind, Layers, Gauge, Waves } from 'lucide-react';
import { SectionHeadline } from '../SectionHeadline';

type Pillar = {
  id: string;
  eyebrow: string;
  title: string;
  icon: typeof FileCheck;
  body: string;
};

const PILLARS: Pillar[] = [
  {
    id: 'code-compliance',
    eyebrow: 'Code & Permitting',
    title: 'Florida Building Code Compliance',
    icon: FileCheck,
    body:
      "Every installation we perform is engineered to the current Florida Building Code — Residential sections R301 (wind loads), R609 (exterior windows and doors), and R612 (impact protection). We permit through the appropriate local jurisdiction — Manatee, Sarasota, Hillsborough, or Pinellas County building departments — and provide the Florida Product Approval or NOA documentation required for every window and door on the job.",
  },
  {
    id: 'wind-zones',
    eyebrow: 'Wind Zones & WBDR',
    title: 'Wind Zones & Impact Requirements',
    icon: Wind,
    body:
      "Florida's Gulf Coast sits outside the High-Velocity Hurricane Zone (HVHZ is Miami-Dade and Broward only), but it falls squarely within the Wind-Borne Debris Region defined by the FBC. Inside the WBDR, every glazed opening must be either impact-resistant or protected by an approved shutter system. We calculate the design pressure for your specific site using the Ultimate Design Wind Speed (Vult) maps — roughly 150 mph in Manatee and Sarasota, 150–160 mph across Pinellas, and 140–150 mph through Hillsborough — and specify products rated above that requirement.",
  },
  {
    id: 'impact-glazing',
    eyebrow: 'Impact Glazing Standards',
    title: 'Impact-Resistant Glazing Standards',
    icon: Layers,
    body:
      "Impact-rated windows and doors must be tested to ASTM E1886 (the test method) and certified to ASTM E1996 (the specification), covering both large-missile impact — a nine-pound 2x4 propelled at 50 feet per second — and cyclic small-missile testing. The residential standard is laminated glass: two glass plies bonded by a PVB or SentryGlas interlayer. We install only products with verifiable Florida Product Approval listings, all of which can be confirmed in the Florida DBPR product approval database.",
  },
  {
    id: 'energy-performance',
    eyebrow: 'Energy & NFRC Ratings',
    title: 'Energy Performance for Florida Climate',
    icon: Gauge,
    body:
      "Florida is Climate Zone 2 — hot and humid — and every window must carry NFRC-certified ratings on its label. The prescriptive maximums for our zone are a 0.40 U-factor and a 0.25 SHGC, with ENERGY STAR for Florida tightening U-factor to 0.32 or lower. In our climate, Solar Heat Gain Coefficient matters more than U-factor, because cooling load drives the energy bill. We help clients balance the two through low-e coatings and gas fills specified for Gulf Coast sun exposure.",
  },
  {
    id: 'coastal-hardware',
    eyebrow: 'Coastal & Salt-Air Spec',
    title: 'Coastal Hardware & Salt-Air Considerations',
    icon: Waves,
    body:
      "Salt-laden air off the Gulf attacks standard hardware — hinges, locks, balances, screen frames — long before the glass itself shows wear. For waterfront and near-coastal homes we specify stainless steel hardware (304 grade inland, 316 grade for direct coastal exposure), marine-grade fasteners, and factory-applied finishes meeting AAMA 2604 or 2605 for architectural aluminum. These are upgrades over the default coastal-line offerings, and on the Gulf Coast they are the difference between a ten-year install and a thirty-year install.",
  },
];

export function ServiceAreaExpertise() {
  return (
    <section className="bg-brand-black py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-gold mb-6"
          >
            Gulf Coast Expertise
          </motion.div>

          <SectionHeadline>
            Built for the Gulf Coast&apos;s Conditions
          </SectionHeadline>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-brand-white/80 font-sans font-light leading-relaxed text-base md:text-lg max-w-2xl"
          >
            Installing windows and doors along Florida&apos;s Gulf Coast is not the
            same trade it is in Atlanta or Charlotte. Wind-borne debris, salt air,
            and a climate-specific energy code shape every decision — from the
            product on the order to the fastener in the buck.
          </motion.p>
        </div>

        {/* Pillar grid */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            const col = i % 3;
            const row = Math.floor(i / 3);
            const delay = (col + row) * 0.12 + 0.2;

            return (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay,
                }}
                className="bg-brand-black p-8 md:p-10 flex flex-col"
              >
                <div className="w-12 h-12 border border-gold/40 flex items-center justify-center text-gold mb-8">
                  <Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
                </div>

                <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
                  {pillar.eyebrow}
                </div>

                <h3 className="font-sans text-lg md:text-xl font-light uppercase tracking-[0.12em] leading-snug text-brand-white mb-5">
                  {pillar.title}
                </h3>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: delay + 0.4,
                  }}
                  className="h-[1px] w-10 bg-gold origin-left mb-6"
                />

                <p className="text-sm md:text-[15px] leading-relaxed font-light text-brand-white/75">
                  {pillar.body}
                </p>
              </motion.article>
            );
          })}

          {/* Closing card — fills the 6th slot on lg, sits below on smaller breakpoints */}
          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.56,
            }}
            className="bg-brand-black p-8 md:p-10 flex flex-col justify-between md:col-span-2 lg:col-span-1"
          >
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-6">
                The Point
              </div>
              <p className="font-sans text-lg md:text-xl font-light italic leading-snug text-brand-white">
                A correct installation on the Gulf Coast is the sum of five
                technical decisions — code, wind, glazing, energy, and coastal
                durability. Get any one of them wrong and the rest stop mattering.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <div className="text-[10px] tracking-[0.25em] uppercase text-white/60">
                Ascension Glassworks · Florida&apos;s Gulf Coast
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
