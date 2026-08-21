import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  contactSubmissions: defineTable({
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
    // A2P 10DLC consent record. smsConsentText stores the disclosure exactly as
    // it was displayed at opt-in, so the proof survives future copy changes.
    // Both optional: rows written before the checkbox existed have neither.
    smsConsent: v.optional(v.boolean()),
    smsConsentText: v.optional(v.string()),
  }).index('by_email', ['email']),
});
