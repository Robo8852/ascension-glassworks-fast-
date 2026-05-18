'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
  };

  const textMaskVariants = {
    hidden: { y: "100%" },
    show: { 
      y: 0, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const } 
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center bg-brand-black w-full min-h-[85vh] lg:min-h-screen pt-24 md:pt-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/hero.jpg")' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-black/70 via-brand-black/50 to-brand-black/80" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto flex flex-col items-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <img
            src="/logos/ascension-icon.svg"
            alt="Ascension Glassworks"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <div className="overflow-hidden mb-8">
          <motion.h1 
            variants={textMaskVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-sans font-light tracking-[0.18em] text-brand-white uppercase leading-tight"
          >
            Elevating Light.<br />Expanding Space.
          </motion.h1>
        </div>

        <motion.p variants={itemVariants} className="text-sm md:text-base lg:text-lg text-white/70 max-w-2xl leading-relaxed mb-12 font-sans font-normal">
          At Ascension Glassworks, we believe homeowners deserve more than just quality windows and doors — they deserve clear communication, professional craftsmanship, honest guidance, and a team they can trust from consultation to completion.
          <br /><br className="hidden md:block" />
          We provide expertly installed windows and doors throughout Central Florida with an elevated customer experience designed around reliability, transparency, and respect for your home.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button className="bg-gold text-brand-black hover:bg-gold/90 uppercase text-[11px] tracking-[0.2em] font-medium rounded-none px-[28px] py-[12px] w-full sm:w-auto h-auto transition-all duration-300">
            Schedule Your Consultation
          </Button>
          <Button variant="outline" className="border border-gold text-gold bg-transparent hover:bg-gold hover:text-brand-black uppercase text-[11px] tracking-[0.2em] font-medium rounded-none px-[28px] py-[12px] w-full sm:w-auto h-auto transition-all duration-300">
            Explore Your Options
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
