'use client';

import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { SectionHeadline } from '../SectionHeadline';
import { SERVICE_AREA_FAQS } from './serviceAreaFaqs';

export function ServiceAreaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-brand-black w-full overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-gold text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium mb-6"
          >
            Questions
          </motion.span>

          <SectionHeadline className="flex flex-col items-center text-center">
            Things People Ask Us First
          </SectionHeadline>
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-8 border-b border-white/10"
        >
          {SERVICE_AREA_FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `service-area-faq-panel-${index}`;
            const buttonId = `service-area-faq-button-${index}`;

            return (
              <li key={item.question} className="border-t border-white/10">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left cursor-pointer"
                >
                  <span
                    className={`uppercase tracking-[0.1em] text-base md:text-lg font-sans font-light transition-colors duration-300 ${
                      isOpen ? 'text-gold' : 'text-brand-white group-hover:text-gold'
                    }`}
                  >
                    {item.question}
                  </span>
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="shrink-0 text-gold"
                  >
                    <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 md:pb-8 pr-10 text-brand-white/80 font-sans font-light text-base md:text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
