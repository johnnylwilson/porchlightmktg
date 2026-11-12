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
