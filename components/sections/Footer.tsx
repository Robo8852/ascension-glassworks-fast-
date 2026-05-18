'use client';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gold relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16">
        
        {/* Col 1 */}
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start mb-6">
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
            {['Home', 'About', 'Services', 'Our Process', 'Service Area'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(' ', '-')}`} 
                className="text-xs font-sans font-medium uppercase tracking-[0.1em] text-white/60 hover:text-gold transition-colors block"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3 - Contact */}
        <div className="flex flex-col md:items-end text-left md:text-right">
          <h4 className="text-sm font-sans font-medium uppercase tracking-widest text-white mb-6">Contact Us</h4>
          <a href="tel:5555555555" className="text-xs font-sans font-medium uppercase tracking-[0.1em] text-white/60 hover:text-gold transition-colors mb-4 block">
            (555) 555-5555
          </a>
          <a href="mailto:contact@ascensionglassworks.com" className="text-xs font-sans font-medium uppercase tracking-[0.1em] text-white/60 hover:text-gold transition-colors block">
            contact@ascensionglassworks.com
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4 md:mb-0">
          © {new Date().getFullYear()} Ascension Glassworks LLC. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
