'use client';

import { motion, useInView } from 'motion/react';
import { SectionHeadline } from '../SectionHeadline';
import { useRef } from 'react';

const TEXT_BLOCKS = [
  "Choosing windows and doors can feel overwhelming — especially in Florida, where energy efficiency, impact ratings, code requirements, and design options all matter.",
  "That's why we focus on education first.",
  "We take the time to explain your options clearly so you can make informed decisions with confidence, without pressure or confusing sales tactics."
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

export function Education() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-brand-white w-full overflow-hidden text-center flex flex-col items-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <SectionHeadline lightBackground className="flex flex-col items-center text-center">
          Helping Homeowners Make Confident Decisions
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
