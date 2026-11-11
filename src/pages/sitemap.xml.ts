import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Every public page. New blog posts and portfolio projects are added automatically.
const pages = ['/', '/local-seo', '/google-ads', '/website-design', '/portfolio', '/about-us', '/contact', '/blogs', '/privacy-policy', '/terms-of-service'];

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://porchlightmktg.com');
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const work = await getCollection('portfolio', ({ data }) => !data.draft);
  const urls = [...pages, ...posts.map((p) => `/blog/${p.id}`), ...work.map((w) => `/portfolio/${w.id}`)];
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((u) => `  <url><loc>${new URL(u, base).href}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
