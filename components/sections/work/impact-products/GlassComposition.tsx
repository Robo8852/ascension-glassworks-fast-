'use client';

import { motion } from 'motion/react';
import { SectionHeadline } from '../../../SectionHeadline';

const BULLETS = [
  'Standard bedroom, bath, and kitchen impact replacement on inland addresses: PVB.',
  'Large picture windows or wide sliders within 5,000 ft of open water (Exposure D): SGP.',
  'Multi-slide assemblies with oversized panels: SGP, often required by the manufacturer.',
  'Wind-mit credit: PVB and SGP qualify identically — the credit is tied to impact rating, not interlayer.',
];

export function GlassComposition() {
  return (
    <section
      id="impact-glass-composition"
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
            Glass Composition
          </motion.div>

          <SectionHeadline>
            PVB vs. SGP — Where Each Is the Right Call
          </SectionHeadline>
        </div>

        {/* Two-column comparison */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 relative">
          {/* Vertical gold divider on lg+ */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gold/30"
          />

          {/* PVB column */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="p-2 md:p-4 lg:pr-12 lg:pl-0 py-10 lg:py-4 border-b border-white/10 lg:border-b-0"
          >
            <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
              Interlayer 01
            </div>
            <h3 className="font-sans text-xl md:text-2xl font-light uppercase tracking-[0.12em] leading-snug text-brand-white mb-5">
              PVB <span className="text-brand-white/60 normal-case tracking-normal text-base md:text-lg">(Polyvinyl Butyral)</span>
            </h3>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              className="h-[1px] w-10 bg-gold origin-left mb-6"
            />

            <p className="text-sm md:text-[15px] leading-relaxed font-light text-brand-white/80">
              The standard residential impact interlayer — roughly 0.090&Prime;
              between two annealed or heat-strengthened plies. After impact,
              PVB stretches and holds the cracked pane in the frame for the
              duration of the storm. Cost runs 20&ndash;35% under SGP. It&apos;s
              what we spec on the majority of Gulf Coast inland impact
              installs — code-compliant, wind-mit-credit-eligible, and
              well-proven in Florida service.
            </p>
          </motion.article>

          {/* SGP column */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.27 }}
            className="p-2 md:p-4 lg:pl-12 lg:pr-0 py-10 lg:py-4"
          >
            <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
              Interlayer 02
            </div>
            <h3 className="font-sans text-xl md:text-2xl font-light uppercase tracking-[0.12em] leading-snug text-brand-white mb-5">
              SGP <span className="text-brand-white/60 normal-case tracking-normal text-base md:text-lg">(SentryGlas Plus / Ionoplast)</span>
            </h3>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.57 }}
              className="h-[1px] w-10 bg-gold origin-left mb-6"
            />

            <p className="text-sm md:text-[15px] leading-relaxed font-light text-brand-white/80">
              A stiffer, stronger interlayer — roughly 5&times; the tensile
              strength and 100&times; the post-fracture stiffness of PVB.
              Holds higher design pressure at the same glass thickness, with
              better long-term UV stability. Earns its 20&ndash;35% premium on
              oversized openings, Gulf-front Exposure D addresses where ASCE
              7-22 wind loads run hard, and homeowners who want the
              longest-warranty glazing line we install.
            </p>
          </motion.article>
        </div>

        {/* Sub-heading: How we match interlayer to opening */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-16 md:mt-20 max-w-4xl border-t border-white/10 pt-10 md:pt-12"
        >
          <div className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-gold mb-4">
            How we match interlayer to opening
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="h-[1px] w-10 bg-gold origin-left mb-6"
          />

          <ul className="space-y-4">
            {BULLETS.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3 + i * 0.08,
                }}
                className="flex gap-4 text-brand-white/80 font-sans font-light text-sm md:text-[15px] leading-relaxed"
              >
                <span
                  aria-hidden="true"
                  className="text-gold shrink-0 mt-2 inline-block h-px w-4 bg-gold"
                />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
