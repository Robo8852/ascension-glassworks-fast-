'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import { SectionHeadline } from '../SectionHeadline';
import { Button } from '@/components/ui/button';
import { useRef, MouseEvent } from 'react';

function MagneticButton({ children, className, variant = 'primary' }: { children: React.ReactNode, className?: string, variant?: 'primary' | 'outline' }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handlePointerMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic pull strength (less is weaker)
    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = "uppercase text-[11px] tracking-[0.2em] font-medium rounded-none px-[28px] py-[12px] w-full lg:w-auto h-auto transition-all duration-300 cursor-pointer";
  const primaryClasses = "bg-gold text-brand-black hover:bg-gold/90";
  const outlineClasses = "bg-transparent border border-gold text-gold hover:bg-gold hover:text-brand-black";

  return (
    <motion.button
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY }}
      className={`${baseClasses} ${variant === 'primary' ? primaryClasses : outlineClasses} ${className || ''}`}
    >
      {children}
    </motion.button>
  );
}

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8 w-full overflow-hidden text-center flex flex-col items-center">
      
      {/* 20s Ambient Gradient Loop Background */}
      <motion.div 
        className="absolute inset-0 z-0 bg-brand-black"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #0B0B0B 0%, #020202 100%)",
            "radial-gradient(circle at 100% 100%, #151000 0%, #020202 100%)",
            "radial-gradient(circle at 0% 100%, #0B0B0B 0%, #020202 100%)",
            "radial-gradient(circle at 100% 0%, #151000 0%, #020202 100%)",
            "radial-gradient(circle at 0% 0%, #0B0B0B 0%, #020202 100%)",
          ]
        }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <SectionHeadline className="flex flex-col items-center">
          Ready to Raise the Standard?
        </SectionHeadline>
        
        <p className="text-brand-white/80 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-light mt-4 mb-12">
          Whether you&apos;re replacing outdated windows, upgrading your entry doors, or exploring impact-rated solutions for your home, Ascension Glassworks is here to help.
          <br /><br className="hidden md:block" />
          Let&apos;s create a smoother, more professional experience from consultation to completion.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <MagneticButton>
            Schedule Your Consultation
          </MagneticButton>
          <MagneticButton variant="outline">
            Request Your Estimate
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
