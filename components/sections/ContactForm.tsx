'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const PHONE_RE = /^[\d\s().+-]{10,}$/;

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Please enter a valid phone number.')
    .regex(PHONE_RE, 'Please enter a valid phone number.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  location: z.string().trim().min(2, 'Please enter your city or ZIP.'),
  service: z.enum(
    ['Window Replacement', 'Exterior Doors', 'Impact Products', 'Not sure / Multiple'],
    { message: 'Please select a service.' },
  ),
  preferredContact: z.enum(['Phone', 'Email'], {
    message: 'Please choose a preferred contact method.',
  }),
  message: z.string().trim().max(1000, 'Please keep your message under 1000 characters.').optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const FIELD_LABEL_CLASS =
  'block text-[10px] tracking-[0.2em] uppercase text-white/70 mb-2';

const INPUT_BASE =
  'w-full bg-white/5 border text-brand-white rounded-none px-4 py-3 text-sm font-light placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-colors duration-200';

function fieldBorder(hasError: boolean) {
  return hasError
    ? 'border-red-400 focus:border-red-400'
    : 'border-white/10 focus:border-gold';
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef<HTMLDivElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      location: '',
      service: undefined,
      preferredContact: undefined,
      message: '',
    },
  });

  useEffect(() => {
    if (submitted && successRef.current) {
      successRef.current.focus();
    }
  }, [submitted]);

  const onSubmit = async (_values: ContactFormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        className="border border-gold/40 bg-white/[0.02] p-8 md:p-12 focus:outline-none focus:ring-1 focus:ring-gold/40"
      >
        <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
          Message Received
        </div>
        <h3 className="font-sans text-2xl md:text-3xl font-light uppercase tracking-[0.15em] text-brand-white leading-tight mb-6">
          Thank You — We&apos;ll Be In Touch
        </h3>
        <p className="text-brand-white/80 text-sm md:text-base font-sans font-light leading-relaxed mb-8 max-w-xl">
          We&apos;ll reach out within 1 business day via your preferred method to learn more
          about your project and schedule a no-pressure consultation.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="text-gold hover:text-gold/80 uppercase text-[11px] tracking-[0.2em] font-medium border-b border-gold/60 hover:border-gold pb-1 transition-colors duration-200"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-8"
    >
      <div className="space-y-1">
        <label htmlFor="contact-name" className={FIELD_LABEL_CLASS}>
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={`${INPUT_BASE} ${fieldBorder(Boolean(errors.name))}`}
          {...register('name')}
        />
        {errors.name && (
          <p id="contact-name-error" className="text-red-400 text-xs font-light mt-2">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label htmlFor="contact-phone" className={FIELD_LABEL_CLASS}>
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
            className={`${INPUT_BASE} ${fieldBorder(Boolean(errors.phone))}`}
            {...register('phone')}
          />
          {errors.phone && (
            <p id="contact-phone-error" className="text-red-400 text-xs font-light mt-2">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="contact-email" className={FIELD_LABEL_CLASS}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={`${INPUT_BASE} ${fieldBorder(Boolean(errors.email))}`}
            {...register('email')}
          />
          {errors.email && (
            <p id="contact-email-error" className="text-red-400 text-xs font-light mt-2">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="contact-location" className={FIELD_LABEL_CLASS}>
          City or ZIP
        </label>
        <input
          id="contact-location"
          type="text"
          autoComplete="address-level2"
          aria-invalid={errors.location ? 'true' : 'false'}
          aria-describedby={errors.location ? 'contact-location-error' : undefined}
          className={`${INPUT_BASE} ${fieldBorder(Boolean(errors.location))}`}
          {...register('location')}
        />
        {errors.location && (
          <p id="contact-location-error" className="text-red-400 text-xs font-light mt-2">
            {errors.location.message}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="contact-service" className={FIELD_LABEL_CLASS}>
          Service Interest
        </label>
        <select
          id="contact-service"
          defaultValue=""
          aria-invalid={errors.service ? 'true' : 'false'}
          aria-describedby={errors.service ? 'contact-service-error' : undefined}
          className={`${INPUT_BASE} ${fieldBorder(Boolean(errors.service))} appearance-none bg-[length:8px_8px] bg-no-repeat bg-[right_1rem_center] pr-10`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8' fill='none' stroke='%23C8A96A' stroke-width='1.5'><path d='M1 1l5 5 5-5'/></svg>\")",
          }}
          {...register('service')}
        >
          <option value="" disabled className="bg-brand-black text-white/50">
            Select a service
          </option>
          <option value="Window Replacement" className="bg-brand-black text-brand-white">
            Window Replacement
          </option>
          <option value="Exterior Doors" className="bg-brand-black text-brand-white">
            Exterior Doors
          </option>
          <option value="Impact Products" className="bg-brand-black text-brand-white">
            Impact Products
          </option>
          <option value="Not sure / Multiple" className="bg-brand-black text-brand-white">
            Not sure / Multiple
          </option>
        </select>
        {errors.service && (
          <p id="contact-service-error" className="text-red-400 text-xs font-light mt-2">
            {errors.service.message}
          </p>
        )}
      </div>

      <fieldset
        className="space-y-3"
        aria-describedby={
          errors.preferredContact ? 'contact-preferred-error' : undefined
        }
      >
        <legend className={FIELD_LABEL_CLASS}>Preferred Contact Method</legend>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
          {(['Phone', 'Email'] as const).map((option) => (
            <label
              key={option}
              className="inline-flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                value={option}
                aria-invalid={errors.preferredContact ? 'true' : 'false'}
                className="appearance-none w-4 h-4 rounded-full border border-white/30 checked:border-gold checked:bg-gold focus:outline-none focus:ring-1 focus:ring-gold/40 transition-colors"
                {...register('preferredContact')}
              />
              <span className="text-sm font-light text-brand-white/90 group-hover:text-brand-white">
                {option}
              </span>
            </label>
          ))}
        </div>
        {errors.preferredContact && (
          <p id="contact-preferred-error" className="text-red-400 text-xs font-light mt-2">
            {errors.preferredContact.message}
          </p>
        )}
      </fieldset>

      <div className="space-y-1">
        <label htmlFor="contact-message" className={FIELD_LABEL_CLASS}>
          Message <span className="lowercase tracking-normal text-white/40">(optional)</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          maxLength={1000}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`${INPUT_BASE} ${fieldBorder(Boolean(errors.message))} resize-none`}
          {...register('message')}
        />
        {errors.message && (
          <p id="contact-message-error" className="text-red-400 text-xs font-light mt-2">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center bg-gold text-brand-black hover:bg-gold/90 uppercase text-[11px] tracking-[0.2em] font-medium rounded-none px-[28px] py-[12px] w-full sm:w-auto h-auto transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        <p className="text-[10px] tracking-[0.15em] uppercase text-white/40 mt-4">
          By submitting, you agree to be contacted about your project.
        </p>
      </div>
    </form>
  );
}
