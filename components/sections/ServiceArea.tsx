'use client';

import { motion } from 'motion/react';
import { SectionHeadline } from '../SectionHeadline';
import { MapPin } from 'lucide-react';

const CITIES = [
  "Sarasota",
  "Bradenton",
  "Lakewood Ranch",
  "Venice",
  "Tampa",
  "St. Petersburg",
  "Clearwater",
  "Orlando",
  "Surrounding Areas"
];

const STATS = [
  { value: "8+", label: "Cities Served" },
  { value: "100mi", label: "Service Radius" },
  { value: "24hr", label: "Response Window" },
  { value: "100%", label: "Licensed & Insured" }
];

export function ServiceArea() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  };

  const cityVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
    }
  };

  return (
    <section id="service-area" className="py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] w-full overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <SectionHeadline>Proudly Serving Central Florida</SectionHeadline>
          <p className="text-brand-white/70 text-sm md:text-base leading-relaxed max-w-md font-sans mb-12">
            Ascension Glassworks proudly serves homeowners throughout Central Florida with professional window and door installation services.
          </p>

          <motion.ul 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-y-6 gap-x-4 pr-8"
          >
            {CITIES.map((city, i) => (
              <motion.li key={i} variants={cityVariants} className="flex items-center space-x-3 text-brand-white/90">
                <MapPin className="w-4 h-4 text-gold shrink-0 opacity-80" />
                <span className="text-sm font-sans font-medium tracking-wide uppercase">{city}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-px bg-white/10 border border-white/10"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={cityVariants}
              className="relative bg-[#0a0a0a] aspect-square flex flex-col items-start justify-between p-6 md:p-8 lg:p-10 group"
            >
              <span className="text-[10px] tracking-[0.25em] uppercase text-brand-white/40 font-sans">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-gold leading-none mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-brand-white/80 font-sans font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
