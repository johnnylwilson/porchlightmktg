// Page text and SEO for portfolio project pages (src/pages/portfolio/[slug].astro).
// Any project can override these with `summary` and `description` in its Markdown front matter.
import { missingFromDescription } from './seo';

type Project = {
  title: string;
  category: 'Local SEO' | 'Google Ads' | 'Web Design';
  type?: 'Full site build' | 'Site upgrade';
  summary?: string;
  description?: string;
};

// Closing call to action on project pages, one per category so the pages don't repeat each other.
export const closers = {
  'Local SEO': { title: 'Want your business easier to find nearby?', text: "Start with a free audit. We'll show you how you appear in Google Maps and local search today, and where the biggest gaps are." },
  'Google Ads': { title: 'Thinking about running Google Ads?', text: "Start with a free audit. We'll look at search demand in your area and whether your site is ready for paid traffic before you spend a dollar." },
  'Web Design': { title: 'Is your website due for an upgrade?', text: "Start with a free audit. We'll review your current site on desktop and mobile and tell you what we'd keep, fix, or rebuild." },
};

// Fallback intro when a project has no `summary`. Kept plain so it never claims work that wasn't done.
export function projectLede(p: Project) {
  if (p.category === 'Google Ads') return `A Google Ads campaign for ${p.title}.`;
  return p.type === 'Site upgrade' ? `A site upgrade for ${p.title}.` : `A full website build for ${p.title}.`;
}

export function projectSeo(p: Project) {
  // Meta title: "[Project] [Category] | Lake Mary, FL | Porchlight Marketing"
  const focus = `${p.title} ${p.category}`;
  const description = p.description ?? `See the ${focus} project from Porchlight Marketing in Lake Mary, FL, with screenshots from the work.`;
  const missing = missingFromDescription(focus, description);
  if (missing.length) throw new Error(`Portfolio "${p.title}": description is missing ${missing.join(', ')}`);
  return { focus, description, lede: p.summary ?? projectLede(p) };
}
