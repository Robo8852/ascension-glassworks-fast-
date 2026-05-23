'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import Link from 'next/link';
import { useRef, MouseEvent } from 'react';
import { SectionHeadline } from '../SectionHeadline';

function MagneticButton({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handlePointerMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses =
    'inline-flex items-center justify-center uppercase text-[11px] tracking-[0.2em] font-medium rounded-none px-[28px] py-[12px] w-full lg:w-auto h-auto transition-all duration-300 cursor-pointer';
  const primaryClasses = 'bg-gold text-brand-black hover:bg-gold/90';
  const outlineClasses =
    'bg-transparent border border-gold text-gold hover:bg-gold hover:text-brand-black';
  const composed = `${baseClasses} ${variant === 'primary' ? primaryClasses : outlineClasses} ${className || ''}`;

  return (
    <motion.a
      ref={ref}
      href={href}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY }}
      className={composed}
    >
      {children}
    </motion.a>
  );
}

export function ServiceAreaPageCTA() {
  return (
    <section className="relative py-24 md:py-32 lg:py-44 px-4 sm:px-6 lg:px-8 w-full overflow-hidden text-center flex flex-col items-center">
      {/* Ambient gradient backdrop */}
      <motion.div
        className="absolute inset-0 z-0 bg-brand-black"
        animate={{
          background: [
            'radial-gradient(circle at 0% 100%, #0B0B0B 0%, #020202 100%)',
            'radial-gradient(circle at 100% 0%, #151000 0%, #020202 100%)',
            'radial-gradient(circle at 100% 100%, #0B0B0B 0%, #020202 100%)',
            'radial-gradient(circle at 0% 0%, #151000 0%, #020202 100%)',
            'radial-gradient(circle at 0% 100%, #0B0B0B 0%, #020202 100%)',
          ],
        }}
        transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-gold text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium mb-6"
        >
          Ready When You Are
        </motion.span>

        <SectionHeadline className="flex flex-col items-center text-center">
          From Tampa Bay to Venice — Let&apos;s Talk
        </SectionHeadline>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-brand-white/80 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-light mt-4 mb-12"
        >
          Whether your home sits on Sand Key, inside a Lakewood Ranch HOA community, or in a downtown
          Sarasota historic district, the right windows and doors depend on your specific site. We&apos;d
          be glad to take a look — no pitch, no pressure.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <MagneticButton href="tel:9412410002" variant="primary">
            Call (941) 241-0002
          </MagneticButton>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center uppercase text-[11px] tracking-[0.2em] font-medium rounded-none px-[28px] py-[12px] w-full lg:w-auto h-auto transition-all duration-300 cursor-pointer bg-transparent border border-gold text-gold hover:bg-gold hover:text-brand-black"
          >
            Request a Consultation
          </Link>
        </div>

        <p className="mt-10 text-brand-white/50 text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-sans">
          Serving Florida&apos;s Gulf Coast · Licensed &amp; Insured
        </p>
      </div>
    </section>
  );
}
