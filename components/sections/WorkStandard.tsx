'use client';

import { motion } from 'motion/react';
import { SectionHeadline } from '../SectionHeadline';

type Pillar = {
  number: string;
  title: string;
  body: string;
  failureMode: string;
};

const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'Opening Prep',
    body:
      "We don't trust a rough opening until we've checked it. Plumb, square, level, dry — measured before the new unit comes out of the wrap. If the framing's wrong, the install will be wrong. Bad openings get corrected first.",
    failureMode:
      'a stucco wall that reads plumb at the face and racks 3/8″ through the opening. New unit goes in stressed, weatherseal compresses uneven, glass cracks within 18 months.',
  },
  {
    number: '02',
    title: 'Sill Pan & Flashing',
    body:
      'Sill pans per FBC R703 — sloped to drain, sealed at the corners, lapping the weather-resistive barrier so water sheds out, not in. This is where 90% of leaky-window callbacks trace back to.',
    failureMode:
      'flashing nailed through the pan instead of around it. Holes inside the drainage plane = warranty void + wind-driven rain failure at 90 mph.',
  },
  {
    number: '03',
    title: 'Manufacturer-Spec Sealing',
    body:
      "Backer rod where it belongs. Sealant beads in the right plane, the right width, the right product for the substrate. Every assembly seals to its manufacturer's NAFS-tested installation instruction (AAMA/WDMA/CSA 101/I.S.2/A440-22) — each line specifies differently, and we follow the line.",
    failureMode:
      'one-bead-fits-all caulking. Wrong product on PVC trim, wrong cure window in 90% humidity, skinned over before tooling — sealant fails inside two summers.',
  },
  {
    number: '04',
    title: 'Design-Pressure Compliance',
    body:
      "Every assembly is rated for the wind load at the building's elevation, exposure category, and risk category — calculated per ASCE 7-22 (the wind-load standard adopted in FBC 9th Edition, effective Dec 31, 2026). Design pressure (DP) on the unit has to meet or exceed the calculated load, documented by the assembly's Florida Product Approval (FL#) or Miami-Dade Notice of Acceptance (NOA). On Gulf-front addresses inside 5,000 ft of water, that's Exposure Category D — the math runs harder.",
    failureMode:
      "a DP rating taken off a generic spec sheet instead of the unit's actual NOA. Inspector pulls the NOA at final, the rating doesn't match — install gets red-tagged, unit gets pulled.",
  },
  {
    number: '05',
    title: 'Permits, Inspection, Walkthrough',
    body:
      'Permits pulled in your name with your jurisdiction — Sarasota County (Accela Citizen Access), Manatee County (mymanatee.org), Pinellas County (Pinellas Access Portal — every replacement gets a Window/Door Layout Diagram), Hillsborough County (HillsGovHub). Inspections scheduled with the building department. Final walkthrough with you — operation, lock-up, warranty registration handed off in writing. Permits expire at 180 days without an inspection; we close them.',
    failureMode:
      'permit pulled by a sub, never closed, never inspected. Sells the house in three years, the title company finds the open permit, the closing stalls.',
  },
];

export function WorkStandard() {
  return (
    <section
      id="the-standard"
      className="bg-brand-black py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5 scroll-mt-24"
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
            The Standard
          </motion.div>

          <SectionHeadline>Five disciplines on every install.</SectionHeadline>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-brand-white/80 font-sans font-light leading-relaxed text-base md:text-lg max-w-2xl"
          >
            Florida Building Code is the floor, not the ceiling. Windows, doors,
            impact — every assembly we install runs through the same five-step
            discipline.
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10">
          {PILLARS.map((pillar, i) => {
            const col = i % 2;
            const row = Math.floor(i / 2);
            const delay = (col + row) * 0.1 + 0.15;

            return (
              <motion.article
                key={pillar.number}
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
                {/* Number + title row */}
                <div className="flex items-baseline gap-6 md:gap-8 mb-6">
                  <span
                    className="font-sans text-5xl md:text-6xl font-light text-gold leading-none tabular-nums shrink-0"
                    aria-hidden="true"
                  >
                    {pillar.number}
                  </span>
                  <h3 className="font-sans text-lg md:text-xl font-light uppercase tracking-[0.12em] leading-snug text-brand-white">
                    {pillar.title}
                  </h3>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: delay + 0.35,
                  }}
                  className="h-[1px] w-10 bg-gold origin-left mb-6"
                />

                <p className="text-sm md:text-[15px] leading-relaxed font-light text-brand-white/75 mb-8">
                  {pillar.body}
                </p>

                {/* Failure-mode callout — left-bar inset block, gold rule + tag label */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: delay + 0.5,
                  }}
                  role="note"
                  className="mt-auto relative border-l-2 border-gold bg-white/[0.03] pl-5 md:pl-6 pr-4 py-5"
                >
                  <div className="text-[10px] tracking-[0.25em] uppercase text-gold font-medium mb-2">
                    Failure mode we plan for
                  </div>
                  <p className="text-sm leading-relaxed font-light italic text-brand-white/80">
                    {pillar.failureMode}
                  </p>
                </motion.div>
              </motion.article>
            );
          })}

          {/* Closing card fills the 6th slot on lg+ */}
          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.5,
            }}
            className="bg-brand-black p-8 md:p-10 lg:p-12 flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-6">
                The Discipline
              </div>
              <p className="font-sans text-lg md:text-xl font-light italic leading-snug text-brand-white">
                Five steps. Same order, every job. The install is only as honest
                as the step you were tempted to skip.
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
