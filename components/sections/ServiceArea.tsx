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

        {/* Abstract Stylized Region / Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[400px] border border-white/10 flex items-center justify-center p-8 bg-[#111111]"
        >
          {/* subtle grid or radial background to look like a map region abstractly */}
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {/* A gold abstract polygon roughly shaped like central FL */}
            <svg viewBox="0 0 200 200" fill="none" className="w-[80%] h-[80%] opacity-20">
              <path d="M50 20 L150 40 L180 120 L130 180 L40 160 Z" stroke="#C8A96A" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="90" cy="90" r="4" fill="#C8A96A" />
              <circle cx="120" cy="70" r="3" fill="#C8A96A" />
              <circle cx="100" cy="120" r="3" fill="#C8A96A" />
              <circle cx="70" cy="100" r="2" fill="#C8A96A" />
              <circle cx="140" cy="100" r="2" fill="#C8A96A" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
