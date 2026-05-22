'use client';

import { motion } from 'motion/react';
import { SectionHeadline } from '../SectionHeadline';

const PARAGRAPHS = [
  "Many companies focus only on selling windows and doors.",
  "We focus on delivering a professional experience from beginning to end.",
  "That means organized project management, proactive communication, clean installations, respectful crews, and craftsmanship that reflects the standards your home deserves."
];

export function PremiumPositioning() {
  const textContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
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

  const closingItem = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 }
    }
  };

  return (
    <section
      id="premium-positioning"
      className="bg-brand-black py-20 md:py-28 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Headline column — sticks to the left, sets the brand declaration */}
          <div className="lg:col-span-5">
            <SectionHeadline>
              Not Just Better Products — A Better Experience
            </SectionHeadline>
          </div>

          {/* Body column — manifesto flow on the right */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <div className="space-y-6 md:space-y-7">
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

            {/* Closing line — the punctuation mark */}
            <motion.div
              variants={closingItem}
              className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-gold/30"
            >
              <p className="font-sans text-xl md:text-2xl lg:text-3xl font-light italic tracking-wide leading-snug text-gold">
                That&apos;s the Ascension difference.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
