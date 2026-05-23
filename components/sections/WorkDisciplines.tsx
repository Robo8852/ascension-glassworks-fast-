'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { SectionHeadline } from '../SectionHeadline';

type Discipline = {
  title: string;
  slug: string;
  positioning: string;
  bullets: string[];
  cta: string;
};

const DISCIPLINES: Discipline[] = [
  {
    title: 'Window Replacement',
    slug: 'window-replacement',
    positioning:
      'Full tear-outs and retrofits in stock and impact-rated configurations.',
    bullets: [
      'Vinyl, aluminum, and fiberglass — single-hung, double-hung, casement, slider, fixed. Florida Product Approval (FL#) on every assembly.',
      'NFRC-rated for Florida Climate Zone 2 — U ≤ 0.32, SHGC ≤ 0.23 per Energy Star v7.0. Low-E coatings cut cooling loads 30–50%.',
      "NAFS-tested under AAMA/WDMA/CSA 101/I.S.2/A440-22. R609-compliant anchoring per the manufacturer's NOA fastener schedule.",
      'Permit pulled, inspection scheduled, closed permit handed to you at walkthrough.',
    ],
    cta: 'View window work',
  },
  {
    title: 'Exterior Doors',
    slug: 'exterior-doors',
    positioning:
      'Entry, French, sliding glass, and multi-slide assemblies — hung plumb, sealed for Gulf-Coast weather.',
    bullets: [
      'Fiberglass and steel entry, French, impact-rated sliding glass, multi-slide. Florida Product Approval (FL#) or Miami-Dade NOA on every assembly.',
      'Threshold pan flashing per FBC R703, hinge-pocket prep, hardware torqued to NOA spec.',
      'Continuous weatherstripping, compression-set for wind-driven rain. Exposure Category D hardware on coastal addresses.',
      'AAMA-rated coastal hardware on every door we hang.',
    ],
    cta: 'View door work',
  },
  {
    title: 'Impact Products',
    slug: 'impact-products',
    positioning:
      'ASTM E1886-19 / E1996-23-tested assemblies for hurricane zones and insurance-grade upgrades.',
    bullets: [
      'Large-missile impact-rated windows and doors. ASTM E1886-19 cyclic pressure + ASTM E1996-23 large-missile (Level D / E).',
      'Laminated glass with PVB or SGP interlayer — SGP carries ~2× the design pressure where the wind zone calls for it.',
      "Design pressure (DP) matched to ASCE 7-22 wind loads at the building's exposure category and risk category.",
      'Florida Product Approval / Miami-Dade NOA documentation, Wind-Borne Debris Region (WBDR) compliance for permitting and insurance.',
    ],
    cta: 'View impact work',
  },
];

export function WorkDisciplines() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="work-disciplines"
      className="py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-brand-black w-full overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] tracking-[0.3em] uppercase text-gold font-sans mb-6"
        >
          What We Install
        </motion.p>

        <SectionHeadline>
          Three disciplines. Distinct work. Same standard.
        </SectionHeadline>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12"
        >
          {DISCIPLINES.map((d) => (
            <motion.div key={d.slug} variants={cardVariants} className="h-full">
              <Link
                href={`/work/${d.slug}`}
                className="group relative flex h-full flex-col bg-[#111111] border border-white/5 p-8 lg:p-10 transition-colors duration-300 hover:border-gold/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
              >
                <div className="relative inline-block mb-5">
                  <h3 className="text-xl md:text-2xl font-sans font-light uppercase tracking-widest text-brand-white">
                    {d.title}
                  </h3>
                  <span className="absolute -bottom-1 left-0 h-[1px] w-8 bg-gold transition-all duration-500 ease-out group-hover:w-full" />
                </div>

                <p className="text-brand-white/70 text-sm md:text-[15px] italic leading-relaxed font-sans font-light mb-7">
                  {d.positioning}
                </p>

                <ul className="space-y-4 mb-10">
                  {d.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex items-start text-brand-white/75 text-[13px] leading-relaxed font-sans"
                    >
                      <span className="text-gold mr-3 mt-[7px] inline-block h-[5px] w-[5px] shrink-0 rounded-full bg-gold" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center gap-2 text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-medium">
                  <span>{d.cta}</span>
                  <ArrowRight
                    className="w-4 h-4 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-16 md:mt-20 text-center"
        >
          <a
            href="#the-standard"
            className="inline-flex items-center gap-2 text-brand-white/70 hover:text-gold text-xs md:text-sm tracking-[0.2em] uppercase font-sans font-light transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
          >
            <span>Built off one install standard. See it below.</span>
            <ArrowDown className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
