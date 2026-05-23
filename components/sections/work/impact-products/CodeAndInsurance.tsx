'use client';

import { motion } from 'motion/react';
import { Wind, Gauge, FileCheck, Waves } from 'lucide-react';
import { SectionHeadline } from '../../../SectionHeadline';

type Pillar = {
  id: string;
  eyebrow: string;
  title: string;
  icon: typeof Wind;
  body: string;
};

const PILLARS: Pillar[] = [
  {
    id: 'wbdr',
    eyebrow: 'Wind-Borne Debris Region',
    title: 'WBDR Coverage',
    icon: Wind,
    body:
      "All of the Gulf Coast sits inside the FBC&apos;s Wind-Borne Debris Region. Every glazed opening must be impact-rated or shutter-protected. We install tested impact assemblies — Vult roughly 140&ndash;160 mph across Hillsborough, Pinellas, Manatee, and Sarasota counties.",
  },
  {
    id: 'asce-fbc',
    eyebrow: 'ASCE 7-22 / FBC 9th Edition',
    title: '8th-to-9th Edition Transition',
    icon: Gauge,
    body:
      "The FBC 9th Edition adopts ASCE 7-22 effective Dec 31, 2026, replacing ASCE 7-16. Pressure coefficients shift; some FL#s revalidate, others de-list. We check FL# and NOA validity against the permit date on every order.",
  },
  {
    id: 'oir-1802',
    eyebrow: 'OIR-B1-1802 Wind-Mit',
    title: 'Wind-Mitigation Credit',
    icon: FileCheck,
    body:
      "Florida insurers credit impact-rated openings on the wind portion of homeowner premiums via the OIR-B1-1802 form. The credit is all-or-nothing across the envelope — every window, slider, and glazed door has to be impact-rated, or none of it counts.",
  },
  {
    id: 'exposure-d',
    eyebrow: 'Exposure Category D',
    title: 'Gulf-Front Wind Math',
    icon: Waves,
    body:
      "Within 5,000 ft of open water — Lido, Siesta, Anna Maria, Sand Key, Manasota — the address is Exposure D, not C. Wind pressure scales meaningfully harder. We run the calculation against your specific site, not a generic spec sheet.",
  },
];

export function CodeAndInsurance() {
  return (
    <section
      id="impact-code-insurance"
      className="bg-brand-black py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5"
    >
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
            Code and Insurance
          </motion.div>

          <SectionHeadline>
            Code, Permitting &amp; the Wind-Mit Credit
          </SectionHeadline>
        </div>

        {/* Pillar grid */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            const col = i % 2;
            const row = Math.floor(i / 2);
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
                className="bg-brand-black p-8 md:p-10 lg:p-12 flex flex-col"
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
        </div>
      </div>
    </section>
  );
}
