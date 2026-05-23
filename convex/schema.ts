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
  }).index('by_email', ['email']),
});
