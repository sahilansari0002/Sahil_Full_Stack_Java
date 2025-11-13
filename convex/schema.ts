import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
    timestamp: v.number(),
  }),
  
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    category: v.string(),
    technologies: v.array(v.string()),
    imageUrl: v.optional(v.string()),
    liveUrl: v.optional(v.string()),
    githubUrl: v.optional(v.string()),
    featured: v.boolean(),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
