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
    title: 'Retrofit vs. Full-Frame',
    body:
      'A retrofit drops a new unit into the existing frame — faster, cheaper, less trim disruption — but it only works when the frame is plumb and the weather-resistive barrier behind it is intact. We pull a corner trim during the site visit to check the WRB lap and the sub-sill. If either is compromised, full-frame is the only honest call. On older Bradenton and Sarasota homes, that ends up being roughly 40% of openings we measure.',
  },
  {
    number: '02',
    title: 'NFRC Label Preservation',
    body:
      "The NFRC sticker certifies U-factor, SHGC, visible transmittance, and air leakage, and those numbers have to match the FL# documentation on the permit. The label stays on the glass through final inspection so the building inspector can read it — pulling it early is one of the top reasons we see other installers fail. We remove labels at the walkthrough, after the inspector has signed off.",
  },
  {
    number: '03',
    title: 'IRC R310 Egress on Bedrooms',
    body:
      'Every bedroom window has to clear IRC R310: 5.7 sq ft openable area, 24″ minimum clear height, 20″ minimum clear width, and a sill no higher than 44″ above finished floor. Older Gulf Coast bedrooms routinely fail one of those four. We verify the manufacturer spec sheet for clear opening before the order goes in — we don\'t downsize an egress unit to fit a tight rough opening just to skip the framing work.',
  },
];

export function InstallDetail() {
  return (
    <section
      id="window-install-detail"
      className="bg-brand-black py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-gold font-sans font-medium mb-6"
          >
            Install Detail — Window-Specific
          </motion.div>

          <SectionHeadline>
            Where Window Installs Go Wrong
          </SectionHeadline>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-brand-white/80 font-sans font-light leading-relaxed text-base md:text-lg max-w-2xl"
          >
            Every window we install runs through the 5-pillar discipline at{' '}
            <Link
              href="/work#the-standard"
              className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold transition-colors duration-300"
            >
              /work#the-standard
            </Link>
            . Three details matter more on windows than the hub page can carry.
          </motion.p>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10">
          {DETAILS.map((d, i) => {
            const delay = i * 0.12 + 0.15;

            return (
              <motion.article
                key={d.number}
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
                <div className="flex items-baseline gap-5 md:gap-6 mb-5">
                  <span
                    className="font-sans text-4xl md:text-5xl font-light text-gold leading-none tabular-nums shrink-0"
                    aria-hidden="true"
                  >
                    {d.number}
                  </span>
                  <h3 className="font-sans text-base md:text-lg font-light uppercase tracking-[0.12em] leading-snug text-brand-white">
                    {d.title}
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
                  {d.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
