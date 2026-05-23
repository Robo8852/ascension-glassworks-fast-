// TODO: replace with confirmed manufacturer list — see WORK-HUB-IMPLEMENTATION.md §8 blocker #1
const BRANDS: readonly string[] = [
  'PGT',
  'CGI',
  'ANDERSEN',
  'MARVIN',
  'PROVIA',
  'THERMA-TRU',
] as const;

export function WorkBrands() {
  return (
    <section
      id="work-brands"
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-brand-black border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold font-sans font-medium mb-6">
          What We Carry
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-8">
          {BRANDS.map((brand, i) => (
            <li
              key={brand}
              className="flex items-center gap-x-6 md:gap-x-8 text-brand-white/80 text-sm md:text-base font-sans font-light uppercase tracking-[0.3em]"
            >
              <span>{brand}</span>
              {i < BRANDS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="text-gold/60 select-none"
                >
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-8 md:mt-10 text-brand-white/60 text-xs md:text-sm italic font-sans font-light leading-relaxed max-w-2xl mx-auto">
          Authorized installer for the lines above. FL# / NOA documentation and
          warranty registration handled in-house — not handed off.
        </p>
      </div>
    </section>
  );
}
