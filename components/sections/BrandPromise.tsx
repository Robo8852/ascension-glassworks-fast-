'use client';

import { motion } from 'motion/react';

const PARAGRAPHS = [
  "At Ascension Glassworks, we believe homeowners deserve more than just quality windows and doors — they deserve clear communication, professional craftsmanship, honest guidance, and a team they can trust from consultation to completion.",
  "We provide expertly installed windows and doors throughout Florida's Gulf Coast with an elevated customer experience designed around reliability, transparency, and respect for your home."
];

export function BrandPromise() {
  const textContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18, delayChildren: 0.15 }
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

  const eyebrowItem = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <section
      id="promise"
      className="bg-brand-black py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div
        variants={textContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="overflow-hidden">
          <motion.p
            variants={eyebrowItem}
            className="text-[11px] tracking-[0.3em] uppercase text-gold font-sans mb-8"
          >
            Our Promise
          </motion.p>
        </div>

        <div className="overflow-hidden mb-10 md:mb-12">
          <motion.h2
            variants={textItem}
            className="font-sans text-2xl md:text-4xl lg:text-5xl font-light uppercase tracking-[0.14em] leading-[1.2] text-brand-white"
          >
            More Than<br />Windows &amp; Doors
          </motion.h2>
        </div>

        <motion.div
          variants={eyebrowItem}
          className="h-[1px] bg-gold mx-auto mb-12 md:mb-14 origin-center w-16 md:w-20"
        />

        <div className="space-y-6 md:space-y-7">
          {PARAGRAPHS.map((text, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                variants={textItem}
                className="text-white/75 font-sans font-light leading-relaxed text-base md:text-lg"
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
