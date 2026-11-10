// Page titles follow "[Focus Keyword] | Lake Mary, FL | Porchlight Marketing".
// Every description must include the focus keyword, "Lake Mary, FL", and "Porchlight Marketing".
// The build stops with an error if one doesn't, so the rule holds as pages change.
// Blog post SEO lives in each post's front matter (src/content/blog).
export const LOCATION = 'Lake Mary, FL';
export const BRAND = 'Porchlight Marketing';

export const metaTitle = (focus: string) => `${focus} | ${LOCATION} | ${BRAND}`;

export function missingFromDescription(focus: string, description: string): string[] {
  const d = description.toLowerCase();
  return [focus, LOCATION, BRAND].filter((need) => !d.includes(need.toLowerCase()));
}

export const pageSeo: Record<string, { focus: string; description: string }> = {

  home: {
    focus: 'Marketing Agency',
    description: 'Porchlight Marketing is a marketing agency in Lake Mary, FL that helps local businesses get found on Google and turn that visibility into calls and quotes.',
  },
  'local-seo': {
    focus: 'Local SEO',
    description: 'Local SEO from Porchlight Marketing in Lake Mary, FL. Show up in Google Maps and local search, and turn that visibility into calls. Start with a free SEO audit.',
  },
  'google-ads': {
    focus: 'Google Ads',
    description: 'Google Ads management from Porchlight Marketing in Lake Mary, FL. Reach people searching for your services now, with clear tracking. Get a free ads audit.',
  },
  'website-design': {
    focus: 'Web Design',
    description: 'Web design for local businesses from Porchlight Marketing in Lake Mary, FL. Fast, mobile-friendly sites built to get you found and contacted. Free site audit.',
  },
  about: {
    focus: 'About Us',
    description: 'Learn more about us at Porchlight Marketing, a local marketing team in Lake Mary, FL helping businesses get found on Google and earn more calls and inquiries.',
  },
  contact: {
    focus: 'Contact Us',
    description: 'Contact us at Porchlight Marketing in Lake Mary, FL. Call (407) 529-8737 or send a message to request a free audit for local SEO, Google Ads, or web design.',
  },
  blog: {
    focus: 'Marketing Blog',
    description: 'The Porchlight Marketing blog from Lake Mary, FL. Plain-language guides on local SEO, Google Ads, and websites built for local businesses.',
  },
  'privacy-policy': {
    focus: 'Privacy Policy',
    description: 'Read the Privacy Policy for Porchlight Marketing in Lake Mary, FL, including what information we collect, how we use it, and your privacy rights.',
  },
  'terms-of-service': {
    focus: 'Terms of Service',
    description: 'Read the Terms of Service for using the website of Porchlight Marketing, a local marketing agency in Lake Mary, FL.',
  },
  'not-found': {
    focus: 'Page Not Found',
    description: 'Page not found. Head back to Porchlight Marketing in Lake Mary, FL for local SEO, Google Ads, and web design for local businesses.',
  },
};

export function seoFor(key: string) {
  const m = pageSeo[key];
  if (!m) throw new Error(`No SEO entry for "${key}" in src/data/seo.ts`);
  const missing = missingFromDescription(m.focus, m.description);
  if (missing.length) throw new Error(`SEO description for "${key}" is missing: ${missing.join(', ')}`);
  return { title: metaTitle(m.focus), description: m.description };
}
