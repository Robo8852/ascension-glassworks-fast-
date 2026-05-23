'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-10 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gold relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16">
        
        {/* Col 1 */}
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start mb-6">
            <img
              src="/logos/ascension-icon.svg"
              alt="Ascension Glassworks"
              className="w-14 h-14 md:w-16 md:h-16 object-contain mb-4"
            />
            <span className="font-sans font-light tracking-[0.2em] text-2xl uppercase leading-none text-white">Ascension</span>
            <span className="font-sans font-medium tracking-[0.3em] text-[10px] text-gold uppercase mt-1">Glassworks</span>
          </div>
          <p className="text-white/60 text-sm font-sans tracking-wide max-w-[250px]">
            Clearly Raising Standards.
          </p>
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
        </p>
      </div>
    </footer>
  );
}
