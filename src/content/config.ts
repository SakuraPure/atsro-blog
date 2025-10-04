import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    publishDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
  }),
});

export const collections = { 
  'blog': blogCollection 
};