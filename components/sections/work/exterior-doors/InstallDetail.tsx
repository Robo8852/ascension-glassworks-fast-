'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { SectionHeadline } from '../../../SectionHeadline';

type Detail = {
  number: string;
  title: string;
  body: string;
};

const DETAILS: Detail[] = [
  {
    number: '01',
    title: 'The threshold and the pan.',
    body:
      'The threshold is the lowest point on the elevation, and Florida rain finds it. FBC R703 requires a sill pan under every exterior door — sloped to drain, sealed at the corners, lapping the WRB so water sheds out instead of into the subfloor. The pan is one-shot work; done wrong, the homeowner finds out three rainstorms later when the floor inside the threshold goes wet. We use pre-formed copper or PVC pans on every Gulf Coast install, never field-formed Z-flashing.',
  },
  {
    number: '02',
    title: 'Hardware torque and the strike plate.',
    body:
      "Hinges get torqued to the manufacturer's NOA-spec with a calibrated driver — not hand-tight plus a quarter turn, not as hard as the impact will go. Over-torqued cracks the frame at the mortise; under-torqued sags the top hinge inside two years. Strike plates get long-screwed into the framing, not the jamb, so the lock pulls against structure instead of trim. Thirty-second discipline most crews skip — and the one that decides whether a door still latches cleanly at year ten.",
  },
];

export function InstallDetail() {
  return (
    <section
      id="door-install-detail"
      className="bg-brand-black py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-gold mb-6"
          >
            Install Detail — Door-Specific
          </motion.div>

          <SectionHeadline>Where Door Installs Go Wrong</SectionHeadline>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-brand-white/80 font-sans font-light leading-relaxed text-base md:text-lg max-w-2xl"
          >
            Same five-pillar discipline as every install — see{' '}
            <Link
              href="/work#the-standard"
              className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold transition-colors"
            >
              /work#the-standard
            </Link>
            . Two details are door-specific and worth calling out.
          </motion.p>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10">
          {DETAILS.map((detail, i) => {
            const delay = i * 0.1 + 0.15;
            return (
              <motion.article
                key={detail.number}
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
                    {detail.number}
                  </span>
                  <h3 className="font-sans text-lg md:text-xl font-light uppercase tracking-[0.12em] leading-snug text-brand-white">
                    {detail.title}
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
                  {detail.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
