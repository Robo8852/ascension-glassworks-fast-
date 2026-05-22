import { SectionHeadline } from '../SectionHeadline';

export function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-brand-white w-full overflow-hidden border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <SectionHeadline className="flex flex-col items-center">
          Built on Trust & Professionalism
        </SectionHeadline>

        <p className="text-brand-white/70 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-light mt-4">
          We&apos;re proud to build lasting relationships with homeowners throughout Central Florida through dependable service, clear communication, and elevated craftsmanship.
        </p>

        <div className="mt-16 flex flex-col items-center">
          <div className="h-px w-12 bg-gold/40 mb-6" />
          <p className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-brand-white/40 font-sans">
            Customer testimonials coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
