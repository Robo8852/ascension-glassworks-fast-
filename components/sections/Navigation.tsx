'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Our Process', href: '#process' },
  { name: 'Service Area', href: '#service-area' },
  { name: 'Reviews', href: '#reviews' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
        scrolled ? "bg-brand-black/95 backdrop-blur-md border-b border-white/5" : "bg-transparent text-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} className="flex items-center space-x-3 text-white focus-visible:outline-gold">
          <div className="flex flex-col items-start translate-y-[2px]">
            <span className="font-sans font-light tracking-[0.25em] text-[14px] md:text-[16px] uppercase leading-none">Ascension</span>
            <span className="font-sans font-medium tracking-[0.3em] text-[9px] text-gold uppercase mt-1">Glassworks</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map(link => (
            <button 
              key={link.name} 
              onClick={() => scrollTo(link.href)}
              className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white/70 hover:text-gold transition-colors focus-visible:text-gold focus-visible:outline-none"
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
          <a href="tel:5555555555" className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white/70 hover:text-gold transition-colors focus-visible:outline-gold">
            Call Us: (555) 555-5555
          </a>
          <Button 
            onClick={() => scrollTo('#contact')}
            className="bg-gold text-brand-black cursor-pointer hover:bg-gold/90 uppercase text-[11px] tracking-[0.2em] font-medium rounded-none px-[28px] py-[12px] h-auto transition-all duration-300"
          >
            Schedule Consultation
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger className="lg:hidden text-white hover:text-gold focus-visible:outline-gold p-2" aria-label="Open Mobile Menu">
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-black border-none px-6 py-12 flex flex-col justify-between">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">Main navigation links</SheetDescription>
            <div className="flex flex-col space-y-8 mt-12">
              {NAV_LINKS.map(link => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-2xl font-sans font-light uppercase tracking-[0.15em] text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <div className="flex flex-col space-y-4">
              <a href="tel:5555555555" className="block text-center border border-white/20 py-4 text-white uppercase text-xs tracking-widest hover:border-gold hover:text-gold transition-colors">
                Call Us: (555) 555-5555
              </a>
              <Button 
                onClick={() => scrollTo('#contact')}
                className="bg-gold text-brand-black w-full hover:bg-gold/90 uppercase text-xs tracking-[0.1em] font-medium rounded-none py-6"
              >
                Schedule Consultation
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
