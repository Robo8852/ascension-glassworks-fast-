'use client';

import { motion } from 'motion/react';
import { SectionHeadline } from '../../../SectionHeadline';

type Pillar = {
  number: string;
  title: string;
  body: string;
};

const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'ASTM E1886-19 — Cyclic Pressure',
    body:
      "After missile impact, the assembly takes 3,000 cycles of alternating positive and negative pressure — the gust-loading a hurricane applies over hours. It has to stay air- and water-tight the entire time. This is the test that separates a true tested system from a stick-on film.",
  },
  {
    number: '02',
    title: 'ASTM E1996-23 — Large-Missile Impact',
    body:
      "A 9-pound 2×4 is fired at the glazing at 34 mph. The laminated interlayer has to hold the pane in the frame after fracture. The Gulf Coast WBDR is Missile Level D in most jurisdictions, Level E for essential facilities. The FL# or NOA documents the level the unit was tested to.",
  },
  {
    number: '03',
    title: 'FL# / Miami-Dade NOA Approval',
    body:
      "Every assembly we install carries a Florida Product Approval (FL#) or Miami-Dade Notice of Acceptance — both reference the underlying ASTM reports. FL#s revalidate as the FBC moves editions. We check validity against the permit date on every order, especially through the 8th-to-9th Edition transition.",
  },
];

export function Testing() {
  return (
    <section
      id="impact-testing"
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
            The Tests
          </motion.div>

          <SectionHeadline>
            What &quot;Impact-Rated&quot; Actually Passes
          </SectionHeadline>
        </div>

        {/* Pillars */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10">
          {PILLARS.map((pillar, i) => {
            const delay = i * 0.12 + 0.15;

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
                <div className="flex items-baseline gap-6 md:gap-8 mb-6">
                  <span
                    className="font-sans text-5xl md:text-6xl font-light text-gold leading-none tabular-nums shrink-0"
                    aria-hidden="true"
                  >
                    {pillar.number}
                  </span>
                  <h3 className="font-sans text-base md:text-lg font-light uppercase tracking-[0.12em] leading-snug text-brand-white">
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
