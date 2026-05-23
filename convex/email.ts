import { internalAction } from './_generated/server';
import { v } from 'convex/values';

const FROM_ADDRESS = 'Ascension Glassworks <leads@ascensionglassworks.com>';
const INTERNAL_RECIPIENTS = [
  'Ascensionglassworksllc@gmail.com',
  'leoreyes@costadelsolweb.com',
];

type ResendPayload = {
  from: string;
  to: string[];
  subject: string;
  html: string;
  reply_to?: string;
};

async function sendViaResend(payload: ResendPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not set');
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend error ${res.status}: ${body}`);
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export const sendContactEmails = internalAction({
  args: {
    name: v.string(),
    phone: v.string(),
    email: v.string(),
    location: v.string(),
    service: v.string(),
    preferredContact: v.string(),
    message: v.optional(v.string()),
  },
  handler: async (_ctx, args) => {
    const safeName = escapeHtml(args.name);
    const safePhone = escapeHtml(args.phone);
    const safeEmail = escapeHtml(args.email);
    const safeLocation = escapeHtml(args.location);
    const safeService = escapeHtml(args.service);
    const safePreferred = escapeHtml(args.preferredContact);
    const safeMessage = args.message ? escapeHtml(args.message) : '';

    const internalHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #111;">New contact form submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: 600; width: 160px;">Name</td><td style="padding: 8px;">${safeName}</td></tr>
          <tr><td style="padding: 8px; font-weight: 600;">Phone</td><td style="padding: 8px;"><a href="tel:${safePhone}">${safePhone}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: 600;">Email</td><td style="padding: 8px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: 600;">Location</td><td style="padding: 8px;">${safeLocation}</td></tr>
          <tr><td style="padding: 8px; font-weight: 600;">Service</td><td style="padding: 8px;">${safeService}</td></tr>
          <tr><td style="padding: 8px; font-weight: 600;">Preferred contact</td><td style="padding: 8px;">${safePreferred}</td></tr>
          ${safeMessage ? `<tr><td style="padding: 8px; font-weight: 600; vertical-align: top;">Message</td><td style="padding: 8px; white-space: pre-wrap;">${safeMessage}</td></tr>` : ''}
        </table>
      </div>
    `;

    const customerHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
        <h2 style="margin-bottom: 16px;">Thanks for reaching out, ${safeName}.</h2>
        <p>We received your inquiry and a member of our team will be in touch within one business day.</p>
        <p>If your project is time-sensitive, you can reach us directly at <a href="tel:+19412410002">(941) 241-0002</a>.</p>
        <p style="margin-top: 24px;">— Ascension Glassworks</p>
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
        <p style="font-size: 12px; color: #666;">Your submission summary:</p>
        <ul style="font-size: 13px; color: #444;">
          <li><strong>Service:</strong> ${safeService}</li>
          <li><strong>Location:</strong> ${safeLocation}</li>
          <li><strong>Preferred contact:</strong> ${safePreferred}</li>
          ${safeMessage ? `<li><strong>Message:</strong> ${safeMessage}</li>` : ''}
        </ul>
      </div>
    `;

    await sendViaResend({
      from: FROM_ADDRESS,
      to: INTERNAL_RECIPIENTS,
      subject: `New lead: ${args.name} — ${args.service}`,
      html: internalHtml,
      reply_to: args.email,
    });

    await sendViaResend({
      from: FROM_ADDRESS,
      to: [args.email],
      subject: 'We received your inquiry — Ascension Glassworks',
      html: customerHtml,
    });
  },
});
