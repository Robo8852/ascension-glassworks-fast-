'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SectionHeadline } from '../SectionHeadline';

const PROCESS_STEPS = [
  {
    title: "Consultation",
    desc: "We take the time to understand your goals, evaluate your home, answer questions, and help you explore the right solutions for your needs and budget."
  },
  {
    title: "Product Selection",
    desc: "We guide you through product styles, performance options, impact ratings, and design choices without pressure or gimmicks."
  },
  {
    title: "Precision Measurement",
    desc: "Accurate measurements and careful planning ensure a smooth installation process and proper fit."
  },
  {
    title: "Scheduling & Communication",
    desc: "You'll receive clear scheduling information, project updates, and proactive communication every step of the way."
  },
  {
    title: "Professional Installation",
    desc: "Our installation team treats your home with respect while delivering clean, detail-oriented workmanship."
  },
  {
    title: "Final Walkthrough",
    desc: "Before we consider the project complete, we walk through everything together to ensure your satisfaction and answer any final questions."
  },
  {
    title: "Continued Support",
    desc: "Our relationship doesn't end at installation. We remain available for warranty support, service, and long-term peace of mind."
  }
];

export function OurProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-brand-white text-brand-black w-full overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionHeadline lightBackground>A Better Process Creates Better Results</SectionHeadline>
        <p className="text-brand-black/70 max-w-2xl text-sm md:text-base leading-relaxed mb-16 md:mb-24">
          We&apos;ve designed every step of the Ascension experience to provide clarity, confidence, and peace of mind throughout your project.
        </p>

        <div className="relative" ref={containerRef}>
          {/* Background thin line */}
          <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-[1px] bg-black/10 -translate-x-[0.5px]" />
          
          {/* Animated active line */}
          <motion.div 
            className="absolute left-4 md:left-[50%] top-0 bottom-0 w-[2px] bg-gold origin-top -translate-x-[1px]" 
            style={{ scaleY: lineHeight }}
          />

          <div className="space-y-12 md:space-y-24">
            {PROCESS_STEPS.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full"
                >
                  {/* Circle indicator */}
                  <div className="absolute left-4 md:left-[50%] top-0 md:top-1/2 w-8 h-8 rounded-full bg-brand-white border border-gold -translate-x-[16px] md:-translate-y-1/2 flex items-center justify-center z-10">
                    <span className="text-[10px] font-medium text-gold">{i + 1}</span>
                  </div>

                  <div className={`pl-16 md:pl-0 w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-16 text-left md:text-right' : 'md:translate-x-full md:pl-16 text-left'}`}>
                    <div className="max-w-sm">
                      <h3 className="text-lg md:text-xl font-sans uppercase tracking-widest font-light mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-brand-black/70 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
