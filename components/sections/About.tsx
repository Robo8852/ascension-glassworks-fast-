'use client';

import { motion } from 'motion/react';
import { SectionHeadline } from '../SectionHeadline';

const PARAGRAPHS = [
  "The window and door industry has earned a reputation for high-pressure sales, poor communication, and frustrating customer experiences.",
  "Ascension Glassworks was built to be different.",
  "Our mission is to provide homeowners with a more professional, transparent, and dependable approach to window and door replacement — where craftsmanship, communication, and customer care are never compromised.",
  "From your first consultation to your final walkthrough, our team is committed to making your project feel organized, informed, and stress-free.",
  "We believe professionalism matters. We believe communication matters. And we believe your home deserves elevated standards."
];

export function About() {
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
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
    }
  };

  return (
    <section id="about" className="py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <SectionHeadline>Raising the Standard for Windows & Doors in Central Florida</SectionHeadline>
          
          <motion.div 
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            {PARAGRAPHS.map((text, i) => (
              <div key={i} className="overflow-hidden">
                <motion.p 
                  variants={textItem}
                  className="text-white/70 font-sans leading-relaxed text-sm md:text-base"
                >
                  {text}
                </motion.p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full bg-[#1A1A1A] overflow-hidden"
        >
          {/* image placeholder */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/50 to-transparent z-10" />
          <motion.div 
             className="w-full h-full object-cover"
             style={{ backgroundImage: 'url("https://picsum.photos/seed/about/800/1000")', backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
