import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
      // Define custom schema for docs collection
      schema: z.object({
        path: z.string(),
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date(),
        updated: z.date(),
        author: z.string(),
        category: z.string(),
        content: z.string(),
      }),
    }),
  },
})
