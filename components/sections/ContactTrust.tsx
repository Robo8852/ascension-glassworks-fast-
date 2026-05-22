import { Clock, Handshake, ShieldCheck, Phone } from 'lucide-react';

type TrustItem = {
  id: string;
  icon: typeof Clock;
  title: string;
  body: string;
};

const TRUST_ITEMS: TrustItem[] = [
  {
    id: 'ResponseTime',
    icon: Clock,
    title: 'Response Time',
    body: 'Within 1 business day.',
  },
  {
    id: 'NoPressure',
    icon: Handshake,
    title: 'No-Pressure Consultation',
    body: 'We listen first. No upsells, no scripts.',
  },
  {
    id: 'LicensedInsured',
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    body: 'FL #CGC000000',
  },
];

export function ContactTrust() {
  return (
    <aside className="flex flex-col gap-10">
      <div className="flex flex-col gap-8">
        {TRUST_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 border border-gold/40 flex items-center justify-center text-gold">
                <Icon className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
                  {item.title}
                </div>
                <p className="text-sm font-light text-brand-white/80 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-white/10 pt-8">
        <div className="text-[10px] tracking-[0.25em] uppercase text-white/60 mb-4">
          Prefer to call?
        </div>
        <a
          href="tel:9412410002"
          className="inline-flex items-center justify-center gap-2 bg-transparent border border-gold text-gold hover:bg-gold hover:text-brand-black uppercase text-[11px] tracking-[0.2em] font-medium rounded-none px-[28px] py-[12px] w-full sm:w-auto h-auto transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
        >
          <Phone className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
          (941) 241-0002
        </a>
      </div>
    </aside>
  );
}
