'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, ChevronDown, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type NavChild = { name: string; href: string };
type NavLink = { name: string; href: string; children?: NavChild[] };

const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  {
    name: 'Services',
    href: '#services',
    children: [
      { name: 'Window Replacement', href: '#window-replacement' },
      { name: 'Exterior Door Installation', href: '#exterior-doors' },
      { name: 'Impact Products', href: '#impact-products' },
    ],
  },
  { name: 'Our Process', href: '#process' },
  { name: 'Service Area', href: '#service-area' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

// Offset matches the scrolled desktop header height (h-20 = 80px). The user
// lands in the scrolled state after any anchor jump, so we tune for that.
const SCROLL_OFFSET = 80;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
    setOpenDropdown(null);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
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
      {/* Utility bar (Pattern 1) — collapses on scroll (Pattern 3) */}
      <motion.div
        animate={{ height: scrolled ? 0 : 36 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden bg-brand-black border-b border-white/5"
        aria-hidden={scrolled}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 hidden md:flex items-center justify-between">
          <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white/60">
            Serving South Florida
          </span>
          <div className="flex items-center gap-6">
            <a
              href="tel:5555555555"
              className="flex items-center gap-2 text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white/60 hover:text-gold transition-colors focus-visible:text-gold focus-visible:outline-none"
            >
              <Phone className="w-3 h-3" />
              Phone: (555) 555-5555
            </a>
            <button
              onClick={() => scrollTo('#service-area')}
              className="flex items-center gap-2 text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white/60 hover:text-gold transition-colors focus-visible:text-gold focus-visible:outline-none"
            >
              <MapPin className="w-3 h-3" />
              Get Directions
            </button>
          </div>
        </div>
      </motion.div>

      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16 md:h-20" : "h-24 md:h-32"
        )}
      >
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
          className="flex items-center text-white focus-visible:outline-gold"
        >
          <Image
            src="/ascension_primary_no_tagline.png"
            alt="Ascension Glassworks"
            width={880}
            height={430}
            priority
            className={cn(
              "w-auto transition-all duration-300",
              scrolled ? "h-12 md:h-16" : "h-20 md:h-28"
            )}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map(link => (
            link.children ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
                onFocus={() => setOpenDropdown(link.name)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenDropdown(null);
                  }
                }}
              >
                <button
                  onClick={() => scrollTo(link.href)}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === link.name}
                  className="flex items-center gap-1 whitespace-nowrap text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white/70 hover:text-gold transition-colors focus-visible:text-gold focus-visible:outline-none"
                >
                  {link.name}
                  <ChevronDown className="w-3 h-3" />
                </button>
                <AnimatePresence>
                  {openDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 top-full pt-4 min-w-[240px]"
                    >
                      <div className="bg-brand-black/95 backdrop-blur-md border border-white/10 py-3 flex flex-col">
                        {link.children.map(child => (
                          <button
                            key={child.name}
                            onClick={() => scrollTo(child.href)}
                            className="text-left px-5 py-2 text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white/70 hover:text-gold hover:bg-white/5 transition-colors focus-visible:text-gold focus-visible:outline-none"
                          >
                            {child.name}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="whitespace-nowrap text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white/70 hover:text-gold transition-colors focus-visible:text-gold focus-visible:outline-none"
              >
                {link.name}
              </button>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
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
                <div key={link.name} className="flex flex-col space-y-4">
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-left text-2xl font-sans font-light uppercase tracking-[0.15em] text-white hover:text-gold transition-colors"
                  >
                    {link.name}
                  </button>
                  {link.children && (
                    <div className="flex flex-col space-y-3 pl-6">
                      {link.children.map(child => (
                        <button
                          key={child.name}
                          onClick={() => scrollTo(child.href)}
                          className="text-left text-lg font-sans font-light uppercase tracking-[0.15em] text-white/70 hover:text-gold transition-colors"
                        >
                          {child.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
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
              {/* Mobile mirror of the utility bar (Pattern 1) */}
              <div className="pt-6 mt-2 border-t border-white/10 flex flex-col space-y-3">
                <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white/60">
                  Serving South Florida
                </span>
                <a
                  href="tel:5555555555"
                  className="flex items-center gap-2 text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white/60 hover:text-gold transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  Phone: (555) 555-5555
                </a>
                <button
                  onClick={() => scrollTo('#service-area')}
                  className="flex items-center gap-2 text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white/60 hover:text-gold transition-colors text-left"
                >
                  <MapPin className="w-3 h-3" />
                  Get Directions
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
