'use client';

import { motion } from 'motion/react';
import { SectionHeadline } from '../SectionHeadline';

const TEXT_BLOCKS = [
  "We believe service after the sale matters.",
  "Our team remains available to support our customers long after installation day with responsive communication, dependable warranty support, and a commitment to standing behind our work."
];

function WordByWordText({ text, delayOffset = 0 }: { text: string, delayOffset?: number }) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delayOffset
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="text-lg md:text-2xl lg:text-3xl leading-relaxed md:leading-relaxed font-sans font-light text-brand-black/80 mb-10 last:mb-0"
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

export function Warranty() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-brand-white w-full overflow-hidden text-center flex flex-col items-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <SectionHeadline lightBackground className="flex flex-col items-center text-center">
          Service Beyond Installation
        </SectionHeadline>

        <div className="mt-16 max-w-3xl text-left md:text-center">
          {TEXT_BLOCKS.map((para, i) => (
            <WordByWordText key={i} text={para} delayOffset={i * 0.4} />
          ))}
        </div>
      </div>
    </section>
  );
}
