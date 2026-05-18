'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  lightBackground?: boolean;
}

export function SectionHeadline({ children, className, lightBackground = false }: Props) {
  return (
    <div className={cn("relative mb-12", className)}>
      <h2 className={cn(
        "font-sans text-[1.75rem] md:text-[4rem] font-light uppercase tracking-[0.15em] leading-tight",
        lightBackground ? "text-brand-black" : "text-brand-white"
      )}>
        {children}
      </h2>
      <motion.div
        className="h-[1px] bg-gold mt-4 origin-left w-20 md:w-[120px]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
    </div>
  );
}
