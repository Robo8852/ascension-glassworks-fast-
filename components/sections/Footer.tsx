'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-10 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gold relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16">
        
        {/* Col 1 */}
        <div className="flex flex-col items-start">
          <img
            src="/logos/ascension-lockup.svg"
            alt="Ascension Glassworks — Raising Standards"
            className="h-28 md:h-32 w-auto object-contain"
          />
        </div>

        {/* Col 2 - Nav */}
        <div className="flex flex-col md:items-center">
          <nav className="flex flex-col space-y-4">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/#about' },
              { name: 'Services', href: '/#services' },
              { name: 'Our Process', href: '/#process' },
              { name: 'Service Area', href: '/service-area' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-sans font-medium uppercase tracking-[0.1em] text-white/60 hover:text-gold transition-colors block"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3 - Contact */}
        <div className="flex flex-col md:items-end text-left md:text-right">
          <h4 className="text-sm font-sans font-medium uppercase tracking-widest text-white mb-6">Contact Us</h4>
          <a href="tel:9412410002" data-track-location="footer" className="text-xs font-sans font-medium uppercase tracking-[0.1em] text-white/60 hover:text-gold transition-colors block">
            (941) 241-0002
          </a>
          <Link href="/contact" data-track="cta_click" data-track-cta="send-a-message" data-track-location="footer" className="text-xs font-sans font-medium uppercase tracking-[0.1em] text-white/60 hover:text-gold transition-colors block mt-4">
            Send a Message
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex justify-center">
        <p className="text-[10px] uppercase tracking-widest text-white/40">
          © {new Date().getFullYear()} Ascension Glassworks LLC. All Rights Reserved.
          {' · '}
          <Link
            href="/privacy"
            className="text-white/70 underline underline-offset-2 hover:text-gold transition-colors"
          >
            Privacy Policy
          </Link>
          {' · '}
          <Link
            href="/sms-terms"
            className="text-white/70 underline underline-offset-2 hover:text-gold transition-colors"
          >
            SMS Terms
          </Link>
        </p>
      </div>
    </footer>
  );
}
