import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { missingFromDescription } from './data/seo';

// Blog posts live in src/content/blog as Markdown. The file name becomes the URL:
// src/content/blog/my-post.md -> /blog/my-post
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z
    .object({
      title: z.string(),
      // Which service the post supports. Decides its tag, related posts, and closing call to action.
      service: z.enum(['Local SEO', 'Google Ads', 'Web Design']),
      // Sort order within its service (1 shows first).
      order: z.number().default(99),
      // Short summary shown on blog cards.
      excerpt: z.string(),
      // SEO focus keyword. Must appear in the description.
      focus: z.string(),
      // Meta description. Must include the focus keyword, "Lake Mary, FL", and "Porchlight Marketing".
      description: z.string(),
      author: z.string().default('Johnny Wilson'),
      // Set to true to keep a post off the site while you work on it.
      draft: z.boolean().default(false),
    })
    .superRefine((d, ctx) => {
      const missing = missingFromDescription(d.focus, d.description);
      if (missing.length) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['description'],
          message: `Description is missing: ${missing.join(', ')}`,
        });
      }
    }),
});

export const collections = { blog };
