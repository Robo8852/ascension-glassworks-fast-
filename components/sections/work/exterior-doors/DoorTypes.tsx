'use client';

import { motion } from 'motion/react';
import { SectionHeadline } from '../../../SectionHeadline';

type DoorType = {
  name: string;
  paragraphs: string[];
};

const DOOR_TYPES: DoorType[] = [
  {
    name: 'Entry doors (single + double)',
    paragraphs: [
      'Fiberglass or steel skin over an insulated polyurethane core. Inside 5,000 ft of saltwater, fiberglass is the default — better thermal numbers, immune to salt-air corrosion at the skin, paint-or-stain finish identical to wood.',
      'The spec gotcha is hardware. A 7-ft entry swings on three hinges, and the factory bag-of-hardware sags at the top hinge within two years on a salt-air address. We install stainless or AAMA Class HC plated hinges on every coastal job.',
    ],
  },
  {
    name: 'French doors',
    paragraphs: [
      'Two operating leaves, typically active-passive with a vertical bolt on the inactive leaf. Glass-heavy — design pressure on the assembly is driven by the glass and lock points, not the frame.',
      'We spec three-point locking minimum on impact-rated French assemblies. Two-point locking on a wind-loaded French rack opens the leaves along the long axis, and that failure shows up on the first storm, not the tenth.',
    ],
  },
  {
    name: 'Sliding glass doors',
    paragraphs: [
      'The default lanai door on the Gulf Coast — 2-panel, 3-panel, or 4-panel configurations depending on the opening width. Track drainage and roller quality dictate how long the unit stays smooth.',
      'The lines we install spec stainless or polymer-encapsulated rollers rated for 100,000+ cycles, not the bargain rollers that fail inside five years on heavy panels. Threshold pan-flashing per FBC R703 is non-negotiable.',
    ],
  },
  {
    name: 'Multi-slide (pocket / stacking)',
    paragraphs: [
      'Three to six panels that retract into a wall pocket or stack against a sidewall. The premium opening on Gulf-front Sarasota and Venice waterfronts — and the most engineering-sensitive assembly we install.',
      'The head jamb has to carry structural load when the wall pocket can&rsquo;t. Tracks handle differential loads with panels at variable positions, and seal lines stack at the meeting stiles. We install only manufacturers with verified NAFS test data — never field-engineered assemblies.',
    ],
  },
];

export function DoorTypes() {
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
      id="door-types"
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
          Door Types
        </motion.p>

        <SectionHeadline>
          Four Assembly Families, One Install Discipline
        </SectionHeadline>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-brand-white/80 font-sans font-light leading-relaxed text-base md:text-lg max-w-2xl mt-4"
        >
          A door is the most-used moving assembly in a Florida home. Hung
          wrong, it racks. Sealed wrong, it leaks. Specified wrong, it fails
          the wind load. Each family has its own failure modes — and its own
          right answer.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mt-12"
        >
          {DOOR_TYPES.map((door) => (
            <motion.article
              key={door.name}
              variants={cardVariants}
              className="group relative flex h-full flex-col bg-[#111111] border border-white/5 p-8 lg:p-10 transition-colors duration-300 hover:border-gold/40"
            >
              <div className="relative inline-block mb-5">
                <h3 className="text-xl md:text-2xl font-sans font-light uppercase tracking-widest text-brand-white">
                  {door.name}
                </h3>
                <span className="absolute -bottom-1 left-0 h-[1px] w-8 bg-gold transition-all duration-500 ease-out group-hover:w-full" />
              </div>

              <div className="space-y-4">
                {door.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-brand-white/75 text-sm md:text-[15px] leading-relaxed font-sans font-light"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="text-brand-white/50 text-xs md:text-sm leading-relaxed font-sans font-light mt-12 md:mt-16 max-w-3xl"
        >
          We install verified product lines with current Florida Product
          Approval listings — PGT, CGI, ES Windows, WinDoor, Andersen
          Stormwatch, and the major impact-rated multi-slide manufacturers.
          Every assembly carries an FL# or Miami-Dade NOA matched to your
          site&apos;s wind load.
        </motion.p>
      </div>
    </section>
  );
}
