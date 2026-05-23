import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CITIES = [
  'Sarasota',
  'Bradenton',
  'Lakewood Ranch',
  'Venice',
  'Tampa',
  'St. Petersburg',
  'Clearwater',
];

export function WorkCoverageBand() {
  return (
    <section
      id="work-coverage"
      className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-brand-black w-full overflow-hidden border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <span className="text-gold text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium mb-4">
          Where We Work
        </span>

        <p className="text-brand-white/90 font-sans font-light text-lg md:text-xl lg:text-2xl tracking-[0.02em] leading-relaxed max-w-3xl">
          {CITIES.map((city, i) => (
            <span key={city} className="whitespace-nowrap">
              {city}
              {i < CITIES.length - 1 && (
                <span aria-hidden="true" className="text-gold/60 mx-3 md:mx-4">
                  ·
                </span>
              )}
            </span>
          ))}
        </p>

        <p className="mt-6 text-brand-white/70 font-sans font-light text-sm md:text-base leading-relaxed max-w-2xl">
          Florida&apos;s Gulf Coast, end to end.{' '}
          <Link
            href="/service-area"
            className="inline-flex items-center gap-1.5 text-gold hover:text-gold/80 transition-colors duration-300 underline-offset-4 hover:underline"
          >
            See the full coverage map and the technical depth we bring to each city
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
