import { mutation } from './_generated/server';
import { internal } from './_generated/api';
import { ConvexError, v } from 'convex/values';

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

export const submitContact = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    email: v.string(),
    location: v.string(),
    service: v.union(
      v.literal('Window Replacement'),
      v.literal('Exterior Doors'),
      v.literal('Impact Products'),
      v.literal('Not sure / Multiple'),
    ),
    preferredContact: v.union(v.literal('Phone'), v.literal('Email')),
    message: v.optional(v.string()),
    honeypot: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (args.honeypot && args.honeypot.trim().length > 0) {
      return null;
    }

    const normalizedEmail = args.email.trim().toLowerCase();

    const lastFromEmail = await ctx.db
      .query('contactSubmissions')
      .withIndex('by_email', (q) => q.eq('email', normalizedEmail))
      .order('desc')
      .first();

    if (
      lastFromEmail &&
      Date.now() - lastFromEmail._creationTime < RATE_LIMIT_WINDOW_MS
    ) {
      throw new ConvexError(
        "We already received a message from this email recently. We'll be in touch shortly — or call (941) 241-0002 if it's urgent.",
      );
    }

    const id = await ctx.db.insert('contactSubmissions', {
      name: args.name,
      phone: args.phone,
      email: normalizedEmail,
      location: args.location,
      service: args.service,
      preferredContact: args.preferredContact,
      message: args.message,
    });

    await ctx.scheduler.runAfter(0, internal.email.sendContactEmails, {
      name: args.name,
      phone: args.phone,
      email: normalizedEmail,
      location: args.location,
      service: args.service,
      preferredContact: args.preferredContact,
      message: args.message,
    });

    return id;
  },
});
