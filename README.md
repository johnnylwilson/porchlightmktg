# Porchlight Marketing website

The Porchlight Marketing site, built with [Astro](https://astro.build) and deployed on Vercel. Every page is static HTML, so it's fast and needs no server.

## Before launch checklist

- [ ] **Form endpoint.** Add `PUBLIC_FORM_ENDPOINT` in Vercel (see "Forms" below). Until it's set, the forms show an error asking people to call.
- [ ] **Stats.** Confirm sources for the three stats on each service page (`stats` in `src/data/site.ts`), or swap any you can't back up.
- [ ] **Testimonials.** Confirm David, Justin, and Spencer are happy appearing under the Porchlight name.

## Deploy

1. **Put the code on GitHub.** Create a new empty repository, then upload this folder (or push it with Git):
   ```bash
   git init
   git add .
   git commit -m "Porchlight Marketing site"
   git branch -M main
   git remote add origin https://github.com/YOUR-ACCOUNT/porchlight-marketing.git
   git push -u origin main
   ```
2. **Import it in Vercel.** In Vercel, choose **Add New > Project**, pick the repository, and keep the detected settings (Framework: Astro, Build command: `astro build`, Output: `dist`).
3. **Add the form endpoint** under **Project Settings > Environment Variables** (see below), then redeploy.
4. **Connect the domain** under **Project Settings > Domains**: add `www.porchlightmktg.com` as the primary domain and set `porchlightmktg.com` to redirect to it. The site's official address is the www version (`site` in `astro.config.mjs`), so the domain settings must match.

After that, every push to `main` deploys automatically.

## Run it on your computer (optional)

Requires Node.js 20 or newer.

```bash
npm install
npm run dev       # preview at http://localhost:4321
npm run build     # build the production site into dist/
npm run preview   # serve the built site locally
```

## Where things live

| What | Where |
| --- | --- |
| Phone, hours, tagline, testimonials, and all service page copy | `src/data/site.ts` |
| Page titles and meta descriptions (main pages) | `src/data/seo.ts` |
| Blog posts | `src/content/blog/*.md` |
| Home, About, Contact, Blog pages | `src/pages/*.astro` |
| Shared service page layout | `src/components/ServicePage.astro` |
| Header, footer, intro animation | `src/components/Header.astro`, `Footer.astro`, `Intro.astro` |
| Head tags, scripts, page frame | `src/layouts/BaseLayout.astro` |
| Colors, fonts, and all styling | `src/styles/global.css` (color tokens are at the top) |
| Images, logo, favicon | `public/` |
| Privacy Policy and Terms of Service text | `src/legal/*.md` |
| Clean URLs (no `.html`, no trailing slash) | `vercel.json` |
| Live domain | `site` in `astro.config.mjs` (`https://www.porchlightmktg.com`) |

## SEO rules (enforced by the build)

- **Titles** are `[Focus Keyword] | Lake Mary, FL | Porchlight Marketing`. Blog posts use the full post title in place of the focus keyword.
- **Descriptions** must include the focus keyword, `Lake Mary, FL`, and `Porchlight Marketing`. If one doesn't, `npm run build` (and the Vercel deploy) stops and names the page and what's missing.
- URLs have no trailing slash or `.html` (`/local-seo`, `/about-us`, `/blog/...`).
- `sitemap.xml` and `robots.txt` are generated automatically and include every blog post.

Schema (JSON-LD) can be added per page through the `head` slot in `BaseLayout`:

```astro
<BaseLayout title={...} description={...}>
  <script slot="head" type="application/ld+json" set:html={JSON.stringify(schema)}></script>
  ...
</BaseLayout>
```

## Add a blog post

Create a new Markdown file in `src/content/blog/`. The file name becomes the URL, so `google-ads-for-beginners.md` is published at `/blog/google-ads-for-beginners`.

```markdown
---
title: "Your Post Title as a Question?"
service: "Google Ads"          # Local SEO, Google Ads, or Web Design
order: 4                       # position among that service's posts
excerpt: "One or two sentences for the blog cards."
focus: "Google Ads for Beginners"
description: "A 140 to 160 character summary that includes the focus keyword. From Porchlight Marketing in Lake Mary, FL."
author: "Johnny Wilson"
---
The first paragraph is shown as the "Short answer" box, so make it a direct answer.

## A section heading

Body text. Link to a service page in context, like this: [Google Ads management](/google-ads).
```

Set `draft: true` to keep a post off the site while you work on it.

The post appears automatically on the blog page, on its service page (the first three by `order`), in related posts, and in the sitemap.

## Forms

The audit and contact forms post to whatever URL is in `PUBLIC_FORM_ENDPOINT`. The simplest option is [Formspree](https://formspree.io):

1. Create a free Formspree account and a new form. Set it to email you.
2. Copy the form's endpoint, which looks like `https://formspree.io/f/abcdwxyz`.
3. In Vercel, add an environment variable `PUBLIC_FORM_ENDPOINT` with that URL, then redeploy.

Each submission includes the name, phone, email, website, message, the services checked (contact page), and which page the form was on. A hidden honeypot field (`_gotcha`) filters out most spam bots.

Any service that accepts a standard form POST and returns JSON will work the same way.

## Intro animation

The door and porch light intro plays on a visitor's first page view in a browser session, skips on click, and never plays for people who have reduced motion turned on. To turn it off entirely, remove `<Intro />` and the intro `<script is:inline>` from `src/layouts/BaseLayout.astro`.
