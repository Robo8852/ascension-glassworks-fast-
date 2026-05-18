'use client';

import { motion } from 'motion/react';
import { SectionHeadline } from '../SectionHeadline';

const REASONS = [
  {
    title: "Clear Communication",
    desc: "We believe homeowners should never be left wondering what's happening with their project."
  },
  {
    title: "Professionalism",
    desc: "From consultation to installation, we prioritize punctuality, organization, cleanliness, and respect."
  },
  {
    title: "No High-Pressure Sales",
    desc: "Our role is to educate and guide — not pressure you into decisions."
  },
  {
    title: "Elevated Craftsmanship",
    desc: "Attention to detail matters. We take pride in delivering installations that look clean, perform properly, and stand the test of time."
  },
  {
    title: "Respect for Your Home",
    desc: "We treat every home with care through organized workspaces, surface protection, and thorough cleanup."
  },
  {
    title: "Dependable Support",
    desc: "We stand behind our work and remain available after installation for continued support and service."
  }
];

export function WhyChooseUs() {
  // To achieve a true diagonal cascade on a 3x2 grid, we manually set delay based on column + row index
  // cols: 0, 1, 2
  // rows: 0, 1
  // index = row * 3 + col  ->  col = index % 3, row = Math.floor(index / 3)
  // stagger delay = (col + row) * staggerTime

  return (
    <section className="py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-brand-black w-full overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeadline>Why Homeowners Choose Ascension Glassworks</SectionHeadline>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16">
          {REASONS.map((reason, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const delay = (col + row) * 0.15 + 0.2; // Base delay + diagonal stagger

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30, x: -10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
                className="flex flex-col"
              >
                <div className="relative pb-4 mb-4">
                  <h3 className="text-sm tracking-[0.1em] uppercase font-sans font-medium text-brand-white">
                    {reason.title}
                  </h3>
                  
                  {/* Underline draws AFTER it settles (which is delay + 0.8s) */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: delay + 0.5 }}
                    className="absolute bottom-0 left-0 w-8 h-[1px] bg-gold origin-left"
                  />
                </div>
                
                <p className="text-brand-white/60 text-sm leading-relaxed font-sans">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
