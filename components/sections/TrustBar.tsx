'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { SVGProps } from 'react';

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1, 
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

const labelVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const trustItems = [
  {
    title: "Professional Installation",
    description: "Precision craftsmanship and attention to detail from start to finish.",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <motion.path variants={pathVariants} d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
  {
    title: "Clear Communication",
    description: "Proactive updates and dependable project coordination.",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <motion.path variants={pathVariants} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
      </svg>
    )
  },
  {
    title: "Quality Products",
    description: "Carefully selected windows and doors built for Florida homes.",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <motion.path variants={pathVariants} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  },
  {
    title: "Respect for Your Home",
    description: "Clean, organized installations with white-glove professionalism.",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <motion.path variants={pathVariants} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <motion.path variants={pathVariants} d="M9 22V12h6v10" />
      </svg>
    )
  },
  {
    title: "Honest Guidance",
    description: "No gimmicks. No pressure. Just straightforward recommendations.",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <motion.path variants={pathVariants} d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        <motion.path variants={pathVariants} d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
      </svg>
    )
  },
  {
    title: "Reliable Support",
    description: "We stand behind our work long after installation day.",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <motion.path variants={pathVariants} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  }
];

export function TrustBar() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: {},
    visible: {} 
  };

  return (
    <section className="bg-[#0D0D0D] py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-y border-gold/20">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border-t border-l border-gold/20 lg:border-none"
      >
        {trustItems.map((item, i) => (
          <motion.div key={i} variants={itemVariants} className={cn("flex flex-col items-center justify-center text-center group py-8 lg:py-0 px-4", "border-b border-r border-gold/20 lg:border-b-0 lg:border-t-0", i !== trustItems.length - 1 && "lg:border-r")}>
            <div className="text-gold w-10 h-10 mb-6 shrink-0">
              <item.icon className="w-full h-full" />
            </div>
            <motion.h3 variants={labelVariants} className="text-[10px] tracking-[0.15em] uppercase font-sans font-medium text-gold mb-3">
              {item.title}
            </motion.h3>
            <motion.p variants={labelVariants} className="text-[11px] font-sans font-light text-white/70 tracking-widest uppercase leading-relaxed max-w-[250px]">
              {item.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
