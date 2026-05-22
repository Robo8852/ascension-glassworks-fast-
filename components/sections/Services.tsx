'use client';

import { motion } from 'motion/react';
import { SectionHeadline } from '../SectionHeadline';

const SERVICES = [
  {
    id: "window-replacement",
    title: "Window Replacement",
    desc: "Upgrade your home with professionally installed windows designed for beauty, efficiency, durability, and Florida weather performance.",
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
    desc: "Enhance curb appeal, security, and performance with expertly installed exterior doors tailored to your home.",
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
    desc: "Protect your home with impact-rated windows and doors engineered to withstand Florida storms while improving efficiency and security.",
    bullets: []
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
        <SectionHeadline>Professional Window & Door Solutions</SectionHeadline>

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
