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
      // Publish date as "YYYY-MM-DD" (keep the quotes). Used in the article's structured data.
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
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

// Portfolio projects live in src/content/portfolio as Markdown files. Each one gets its own page at
// /portfolio/[file-name]. Its one category decides which service page it shows on and where its tag links.
// Anything written below the front matter shows on the project page above the screenshots.
const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Local SEO', 'Google Ads', 'Web Design']),
    // Website projects only: a full build or an upgrade of an existing site. Changes the page wording.
    type: z.enum(['Full site build', 'Site upgrade']).optional(),
    // Sort order within its category (1 shows first).
    order: z.number().default(99),
    // Website address, shown as plain text (not a link).
    url: z.string().optional(),
    // Optional one-sentence intro for the project page (a default is used if left out).
    summary: z.string().optional(),
    // Optional meta description. Must include "[title] [category]", "Lake Mary, FL", and "Porchlight Marketing".
    description: z.string().optional(),
    // Short line under the title, such as the ad group.
    note: z.string().optional(),
    // One headline number, such as { value: "17.62%", label: "CTR" }.
    metric: z.object({ value: z.string(), label: z.string() }).optional(),
    // The first image is the card preview and the page's share image. All of them show on the project page, in order.
    // Use /images/portfolio/your-file.jpg for files in public/images/portfolio.
    images: z.array(z.object({ src: z.string(), alt: z.string(), label: z.string().optional() })).min(1),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, portfolio };
