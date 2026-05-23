'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Anchor, Droplets } from 'lucide-react';
import { SectionHeadline } from '../../../SectionHeadline';

const TRUST_PILLS = [
  { icon: ShieldCheck, label: 'FL# / Miami-Dade NOA per Door' },
  { icon: Anchor, label: 'AAMA-Rated Coastal Hardware' },
  { icon: Droplets, label: 'Threshold Pan per FBC R703' },
];

export function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="door-hero"
      className="pt-32 md:pt-44 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 bg-brand-black overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block text-[11px] md:text-xs tracking-[0.25em] uppercase text-gold font-sans font-medium mb-6">
              The Work · Exterior Doors
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SectionHeadline>
              Exterior Door Installation, Done to Spec
            </SectionHeadline>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-brand-white/80 text-base md:text-lg leading-relaxed max-w-2xl font-sans font-light"
          >
            Entry, French, sliding glass, and multi-slide doors across Florida&apos;s
            Gulf Coast. Every assembly is matched to your site&apos;s wind load,
            installed to the manufacturer&apos;s NOA spec, and pan-flashed at the
            threshold per FBC R703. Coastal hardware gets AAMA-rated upgrades
            on every job inside 5,000 ft of saltwater. Site visits are scheduled
            at your pace — no pressure, no performative urgency.
          </motion.p>

          <motion.ul
            variants={itemVariants}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-x-8 sm:gap-y-4"
          >
            {TRUST_PILLS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-brand-white/90"
              >
                <Icon className="text-gold w-4 h-4 stroke-[1.5] shrink-0" />
                <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase font-sans font-medium">
                  {label}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
