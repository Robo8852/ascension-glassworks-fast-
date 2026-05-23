'use client';

import { motion } from 'motion/react';
import { SectionHeadline } from '../../../SectionHeadline';

type Material = {
  name: string;
  body: string;
};

const MATERIALS: Material[] = [
  {
    name: 'Vinyl',
    body:
      'The volume choice on the Gulf Coast — affordable, corrosion-immune in salt air, and capable of strong NFRC numbers (U ≤ 0.32, SHGC ≤ 0.23) in Climate Zone 2. Quality varies wildly inside the category. We install welded vinyl that holds the corner across Florida thermal cycles, and we add internal aluminum or steel reinforcement on any picture window over 60″ so the frame carries design pressure without bowing.',
  },
  {
    name: 'Aluminum',
    body:
      'Lightest section, narrowest sightlines — preferred in mid-century Bradenton remodels and modern coastal builds chasing maximum glass-to-frame ratio. Standard aluminum is a thermal bridge and fails Climate Zone 2 U-factor outright; we only install thermally broken aluminum with polyurethane or polyamide struts. Coastal addresses get AAMA Class HC hardware — Class R residential hardware oxidizes in salt air inside three years.',
  },
  {
    name: 'Fiberglass',
    body:
      'The premium spec when temperature stability, the longest seal life, or the narrowest impact-rated sightline matters. Its expansion coefficient roughly matches glass, so the frame and IGU cycle together — less seal stress, longer service life. Highest verified design-pressure ratings at large openings, and typically the longest manufacturer warranty available: 20–25 years on the seal, often paired with the warmest natural-wood interior look in the category.',
  },
];

export function FrameMaterials() {
  return (
    <section
      id="window-frame-materials"
      className="bg-brand-black py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5"
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
            Frame Materials
          </motion.div>

          <SectionHeadline>
            Three Frame Materials, Three Install Realities
          </SectionHeadline>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-brand-white/80 font-sans font-light leading-relaxed text-base md:text-lg max-w-2xl mt-2"
          >
            Frame choice is rarely a budget question and almost always a site
            question — opening size, exposure, sightline, and how the assembly
            has to cycle in Florida heat.
          </motion.p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10">
          {MATERIALS.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1 + 0.15,
              }}
              className="bg-brand-black p-8 md:p-10 lg:p-12 flex flex-col"
            >
              <h3 className="font-sans text-lg md:text-xl font-light uppercase tracking-[0.12em] text-brand-white">
                {m.name}
              </h3>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1 + 0.45,
                }}
                className="h-[1px] w-10 bg-gold origin-left mt-5 mb-6"
              />

              <p className="text-sm md:text-[15px] leading-relaxed font-light text-brand-white/75">
                {m.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
