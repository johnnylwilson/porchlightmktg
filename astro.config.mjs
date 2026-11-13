// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The live domain. Used for canonical URLs, social share links, the sitemap, and robots.txt.
  site: 'https://www.porchlightmktg.com',
  // Pages build as /local-seo.html and are served at /local-seo (see vercel.json),
  // matching the old Gridline URLs.
  build: { format: 'file' },
  trailingSlash: 'never',
});
