import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});

export const addProject = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    category: v.string(),
    technologies: v.array(v.string()),
    imageUrl: v.optional(v.string()),
    liveUrl: v.optional(v.string()),
    githubUrl: v.optional(v.string()),
    featured: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("projects", args);
  },
});
