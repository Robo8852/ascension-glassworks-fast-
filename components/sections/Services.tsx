'use client';

import { motion } from 'motion/react';
import { SectionHeadline } from '../SectionHeadline';

const SERVICES = [
  {
    id: "window-replacement",
    title: "Window Replacement",
    desc: "Replacement and new-build installation, from vinyl to impact-rated aluminum. Every opening flashed, shimmed, and sealed to manufacturer spec — not “close enough.”",
    bullets: [
      "Impact Windows",
      "Energy Efficient Windows",
      "Vinyl Windows",
      "Modern Window Designs",
      "Custom Window Configurations",
      "Hurricane-Rated Windows"
    ]
  },
  {
    id: "exterior-doors",
    title: "Exterior Door Installation",
    desc: "Entry, patio, French, sliding. Plumb to a sixteenth. Threshold pan flashed. Hardware torqued, not eyeballed. The kind of install you only notice if it’s wrong.",
    bullets: [
      "Entry Doors",
      "Sliding Glass Doors",
      "French Doors",
      "Patio Doors",
      "Impact Doors",
      "Custom Door Solutions"
    ]
  },
  {
    id: "impact-products",
    title: "Impact Products",
    desc: "Large-missile-rated windows and doors built for Florida’s Wind-Borne Debris Region. ASTM-tested assemblies installed to the design-pressure spec for your wind zone.",
    bullets: [
      "Impact Windows",
      "Impact Doors",
      "Hurricane Sliders",
      "Laminated Glass",
      "Storm-Rated Entries",
      "Wind Zone Compliance"
    ]
  }
];

export function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, x: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
    }
  };

  return (
    <section id="services" className="py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-brand-black w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] tracking-[0.3em] uppercase text-gold font-sans mb-6"
        >
          The Work
        </motion.p>

        <SectionHeadline>Three Disciplines. One Standard.</SectionHeadline>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-brand-white/75 font-sans font-light leading-relaxed text-base md:text-lg max-w-2xl -mt-4 mb-4"
        >
          Windows. Doors. Installed to spec, to code, and to the standard our name is on.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              id={service.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group bg-[#111111] border border-white/5 p-8 lg:p-10 flex flex-col cursor-default scroll-mt-24"
            >
              <div className="relative inline-block mb-6">
                <h3 className="text-xl md:text-2xl font-sans font-light uppercase tracking-widest text-brand-white shrink-0">
                  {service.title}
                </h3>
                <motion.div 
                  className="absolute bottom-0 left-0 h-[1px] bg-gold"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              <p className="text-brand-white/70 text-sm leading-loose mb-8 font-sans">
                {service.desc}
              </p>

              {service.bullets && service.bullets.length > 0 && (
                <ul className="mt-auto space-y-3">
                  {service.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start opacity-60 text-xs tracking-wider uppercase">
                      <span className="text-gold mr-3 mt-[-1px] font-bold">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
