// JSON-LD structured data (schema.org). Pages pass these to BaseLayout's `schema` prop,
// which prints them in the <head>. Test any page at https://search.google.com/test/rich-results
import { site, servicePages } from './site';
import { pageSeo } from './seo';

export const SITE_URL = 'https://porchlightmktg.com';
const BUSINESS_ID = `${SITE_URL}/#business`;
const PERSON_ID = `${SITE_URL}/about-us#johnny-wilson`;

const url = (path: string) => (path === '/' ? SITE_URL : `${SITE_URL}${path}`);

// The business itself. Shown on the home, about, and contact pages, and referenced everywhere else.
export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: 'Porchlight Marketing',
    legalName: 'Porchlight Marketing, LLC',
    description: pageSeo.home.description,
    slogan: 'Make a name around town.',
    url: SITE_URL,
    logo: `${SITE_URL}/images/porchlight-logo.png`,
    image: `${SITE_URL}/images/og-image.jpg`,
    telephone: `+1-${site.phone.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lake Mary',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: { '@type': 'City', name: 'Lake Mary', containedInPlace: { '@type': 'State', name: 'Florida' } },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    founder: { '@id': PERSON_ID },
    knowsAbout: ['Local SEO', 'Google Ads', 'Web Design', 'Google Business Profile'],
    // TODO: add the Porchlight LinkedIn and Google Business Profile URLs here once they exist.
    // sameAs: ['https://www.linkedin.com/company/...', 'https://maps.google.com/?cid=...'],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Porchlight Marketing',
    url: SITE_URL,
    publisher: { '@id': BUSINESS_ID },
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Johnny Wilson',
    jobTitle: 'Founder',
    image: `${SITE_URL}/images/johnny-wilson.jpg`,
    worksFor: { '@id': BUSINESS_ID },
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', name: 'Project Management Professional (PMP)', recognizedBy: { '@type': 'Organization', name: 'Project Management Institute' } },
      { '@type': 'EducationalOccupationalCredential', name: 'Google Ads Creative Certification', recognizedBy: { '@type': 'Organization', name: 'Google' } },
      { '@type': 'EducationalOccupationalCredential', name: 'Google Ads Measurement Certification', recognizedBy: { '@type': 'Organization', name: 'Google' } },
    ],
  };
}

export function pageSchema(type: 'AboutPage' | 'ContactPage' | 'CollectionPage', path: string, key: string) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    url: url(path),
    name: pageSeo[key].focus,
    description: pageSeo[key].description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': BUSINESS_ID },
  };
}

type ServiceSlug = keyof typeof servicePages;

// One Service plus its FAQ for each service page.
export function serviceSchemas(slug: ServiceSlug) {
  const s = servicePages[slug];
  const seo = pageSeo[slug];
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url(`/${slug}`)}#service`,
      name: seo.focus,
      serviceType: s.name,
      description: seo.description,
      url: url(`/${slug}`),
      provider: { '@id': BUSINESS_ID },
      areaServed: { '@type': 'City', name: 'Lake Mary', containedInPlace: { '@type': 'State', name: 'Florida' } },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: s.faqs.map((f: { q: string; a: string }) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];
}

export function projectSchema(p: { title: string; category: string; images: { src: string }[] }, slug: string) {
  const u = url(`/portfolio/${slug}`);
  const img = p.images[0].src;
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${p.title} ${p.category}`,
    url: u,
    image: img.startsWith('http') ? img : `${SITE_URL}${img}`,
    genre: p.category,
    creator: { '@id': BUSINESS_ID },
  };
}

export function articleSchema(post: { title: string; description: string; author: string; date?: string }, slug: string) {
  const u = url(`/blog/${slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: u,
    mainEntityOfPage: u,
    image: `${SITE_URL}/images/og-image.jpg`,
    ...(post.date ? { datePublished: post.date, dateModified: post.date } : {}),
    author: post.author === 'Johnny Wilson' ? { '@id': PERSON_ID, '@type': 'Person', name: 'Johnny Wilson' } : { '@type': 'Person', name: post.author },
    publisher: { '@id': BUSINESS_ID },
  };
}
