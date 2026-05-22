'use client';

import { motion } from 'motion/react';
import { SectionHeadline } from '../SectionHeadline';

const PARAGRAPHS = [
  "We believe homeowners deserve honest recommendations and clear information — not high-pressure presentations or confusing sales tactics.",
  "At Ascension Glassworks, our goal is to help you make the right decision for your home with confidence and clarity."
];

export function NoPressure() {
  const textContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18, delayChildren: 0.2 }
    }
  };

  const textItem = {
    hidden: { opacity: 0, y: "100%", clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)" },
    visible: {
      opacity: 1,
      y: "0%",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const fadeItem = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <section
      id="no-pressure"
      className="bg-brand-black py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5"
    >
      <motion.div
        variants={textContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto text-center flex flex-col items-center"
      >
        {/* Decorative gold rule above headline — understated trust signal */}
        <motion.div
          variants={fadeItem}
          className="h-[1px] bg-gold mb-10 md:mb-12 origin-center w-12 md:w-16"
        />

        <SectionHeadline className="flex flex-col items-center text-center">
          No Gimmicks. No Manufactured Urgency.
        </SectionHeadline>

        <div className="space-y-6 md:space-y-7 mt-4">
          {PARAGRAPHS.map((text, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                variants={textItem}
                className="text-white/75 font-sans font-light leading-relaxed text-base md:text-lg lg:text-xl"
              >
                {text}
              </motion.p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
