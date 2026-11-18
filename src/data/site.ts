// Site-wide facts and page copy. Edit text here; pages pick it up automatically.
export const site = {
  name: 'Porchlight Marketing',
  tagline: 'Make a name around town.',
  description: 'Marketing for local businesses.',
  positioning: 'Porchlight is a Lake Mary marketing agency that helps local businesses get found on Google and turn that visibility into calls, bookings, and quote requests.',
  phone: '(407) 529-8737',
  phoneHref: '+14075298737',
  hours: 'Monday to Friday, 9 AM to 5 PM',
  city: 'Lake Mary, FL',
  linkedin: 'https://www.linkedin.com/company/porchlight-mktg/',
  // Where the audit and contact forms send submissions (Formspree emails them to you).
  formEndpoint: 'https://formspree.io/f/mnpdjryd',
  year: 2026,
  // Google Business Profile map. Paste the embed URL here (the src="..." value from Google Maps:
  // Share > Embed a map). Leave empty to show the illustrated placeholder map.
  gbpMapEmbed: '',
};

export const services = [
  { slug: 'local-seo', name: 'Local SEO', short: 'Get found in Google Maps and local search.', icon: 'pin' },
  { slug: 'google-ads', name: 'Google Ads', short: 'Show up when people are ready to call.', icon: 'ad' },
  { slug: 'website-design', name: 'Web Design', short: 'A site that earns trust and gets inquiries.', icon: 'layout' },
];

// Real reviews carried over from Gridline. Confirm each client is OK with the new brand.
export const testimonials = {
  david: { quote: 'Johnny has been exceptional. Always responsive and more than ready to explain things or go the extra mile!', name: 'David Lindstrom', role: 'Owner/Operator' },
  justin: { quote: 'Johnny was great to work with. Kept me in the loop on everything and followed through on results.', name: 'Justin Lafavers', role: 'Owner/Operator' },
  spencer: { quote: 'I cannot thank Johnny enough for his exceptional service. From the moment updates were published we started getting traffic.', name: 'Spencer Mayberry', role: 'Owner/Operator' },
};

export const servicePages: Record<string, any> = {
  'local-seo': {
    name: 'Local SEO',
    h1: 'Local SEO',
    intro: 'Local SEO (local search engine optimization) helps nearby customers find your business on Google when they search for the services you offer.',
    bullets: [
      'Show up on Google for the core services your business provides',
      'Get seen in the Google Maps results people check first',
      'Bring more visits to your website from people <strong>in your area</strong>',
    ],
    audit: 'Free SEO Audit',
    visual: 'map',
    statsTitle: 'When somebody searches for your services, will they find your business?',
    statsIntro: 'Most people check Google first when they need a nearby business. Only a handful of companies earn the most visible spots, so if your website and Google Business Profile aren\'t set up well, those customers may choose a competitor. <em>Local SEO helps your business show up when people in your area are actively searching for the services you provide.</em>',
    stats: [
      { n: '71%', d: 'Of consumers use Google Search at some point during a local search', s: 'BrightLocal, 2026' },
      { n: '54%', d: 'Of clicks go to the top three organic Google results', s: 'Backlinko' },
      { n: '42%', d: 'Of searchers click the Google Maps results on a local search', s: 'Backlinko, 2024' },
    ],
    successTitle: 'What local SEO success can look like for your business',
    successParas: [
      'Good local SEO shows up in results you can see: better placement in Google Maps, more visibility in local searches, and more website visits from people looking for your services.',
      'A well-built local SEO campaign helps turn that extra exposure into real inquiries, by putting your business in front of more nearby customers at the moment they need what you offer.',
    ],
    successItems: [
      { icon: 'phone', t: 'Local leads', d: 'Get found by potential customers who are actively searching for your services nearby.' },
      { icon: 'search', t: 'High-intent keyword rankings', d: 'Rank for the searches people make when they are ready to hire, from "near me" to your service plus your city.' },
      { icon: 'map', t: 'The Google Map Pack', d: 'Appear more often in Google Maps and the local map results for relevant searches.' },
    ],
    offerEyebrow: 'What\'s included',
    offerTitle: 'The local SEO services included in your plan',
    offers: [
      { icon: 'map', t: 'Google Business Profile', d: 'Categories, services, service areas, hours, and photos set up accurately so your listing is ready for Maps searches.' },
      { icon: 'layout', t: 'Service pages', d: 'A clear page for each service you want more of, written around how people actually search for it.' },
      { icon: 'pin', t: 'Location pages', d: 'Useful pages for the nearby towns you serve, each with content written for that area.' },
      { icon: 'gear', t: 'Technical cleanup', d: 'Indexing, site speed, mobile performance, and schema handled so Google can read your site easily.' },
      { icon: 'star', t: 'Reviews and listings', d: 'A simple routine for earning reviews, plus consistent business details across the directories that matter.' },
      { icon: 'chart', t: 'Monthly tracking', d: 'Rankings, website visits, and inquiries tracked each month so you can see what is moving.' },
    ],
    formTitle: 'Request your free SEO audit',
    processTitle: 'Step by step, from SEO audit to local visibility',
    processIntro: 'Our local SEO services follow a clear process. It gives you a plain picture of where you stand, then improves how your business shows up in Google Maps and local search. First projects usually run 30 to 60 days, then move to monthly content updates.',
    steps: [
      { t: 'Start with your free SEO audit', d: 'Your local SEO review looks at the main elements that shape how visible your business is online, including:', list: ['Your current presence in Google Maps and Google Search', 'Technical setup, including indexing, crawlability, site speed, mobile performance, and schema', 'Which services have the strongest ranking potential', 'Where competing businesses are getting more search exposure', 'Your best opportunities to improve website traffic and inquiries'], after: 'You come away with a practical benchmark and a clear list of what can be improved.' },
      { t: 'Outline your services and cities', d: 'We work together to list your services, the towns you want to work in, and the clients you want more of. You get kickoff findings with your priority tasks and an estimate, so your SEO effort goes toward the work you actually want.' },
      { t: 'Make the SEO upgrades', d: 'Your site structure is refined so it is easy for visitors to use. Your writing is updated around how people search for your services, and new blogs and service updates help Google understand what you do and where you do it.' },
      { t: 'Localize your web presence', d: 'Your website and content are tuned for the specific cities you serve. Your Google Business Profile gets the right categories, services, and service areas, so you show up when someone nearby is ready to hire.' },
      { t: 'Track results and keep improving', d: 'We track rankings and organic traffic to see what is working and where to adjust. Content, profiles, and strategy are updated as search results change, so your SEO keeps moving forward.' },
    ],
    bio: {
      title: 'Your local SEO, handled by Johnny Wilson',
      text: 'Johnny leads every local SEO project himself, from the kickoff audit through each monthly check-in. The work centers on service-area businesses: matching your pages to the towns you serve, keeping your site fast and easy for Google to read, and tracking where you show up, how many people visit, and how many reach out. You get plain explanations along the way, and the plan changes when the data says it should.',
      facts: [{ n: '100%', d: 'of new sites reached page one' }, { n: '200+', d: 'sites built or upgraded' }, { n: 'PMP', d: 'certified' }],
    },
    pricing: {
      title: 'Pricing for local SEO',
      paras: [
        'Every business has a different mix of services and markets, so local SEO is scoped to fit. Most projects start with a discovery and cleanup phase to set a solid base, then move to a monthly plan that keeps building. You can add content or more locations as you grow.',
      ],
      card: { title: 'How pricing works', steps: ['Free SEO audit of your site and Google presence', 'A scope built around your services and towns', 'A clear estimate before any work begins'] },
    },
    testimonial: 'justin',
    faqTitle: 'Still unsure about local SEO for your business?',
    faqs: [
      { q: 'How long before I see new leads?', a: 'Early signs of progress usually show up within 60 to 90 days as pages are improved. Bigger gains tend to build over three to six months. Our tracking shows which rankings have moved so you can see your progress along the way. Every market is different, so we never promise a specific ranking or number of leads.' },
      { q: 'Will my current website work for local SEO?', a: 'Often, yes. If your website can be crawled and edited, targeted updates may be enough. If a <a href="/website-design">new website</a> would do a better job, we will walk through your options and only recommend what your business needs.' },
      { q: 'What do you need to get started?', a: 'Access to your website and Google Business Profile, plus a list of what you offer and where you work. Details from recent jobs help shape your website content too. From there we can start your review and plan without a lot of long meetings.' },
      { q: 'What if I need results sooner?', a: '<a href="/google-ads">Google Ads</a> can run alongside your SEO. Ads put your business in front of people right away while your organic visibility builds, so you can compete now while growing for the long run.' },
    ],
    finalTitle: 'Ready to get found in your area?',
    finalText: 'Showing up on Google starts with a simple first step. Send us your website and the cities you serve, and we will review where you stand with a free SEO audit.',
    blogService: 'Local SEO',
    faqLede: ['Wondering how local SEO would work for your business? Call', 'and we\'ll talk it through.'],
  },

  'google-ads': {
    name: 'Google Ads',
    h1: 'Local Google Ads',
    intro: 'With Google Ads, your business can show up at the top of Google and reach people who are actively looking for your services.',
    bullets: [
      'Show up first when people search for your services',
      'Reach nearby people who need what you offer right now',
      'Get calls and requests from people who are ready to hire',
    ],
    audit: 'Free Ads Audit',
    visual: 'ad',
    statsTitle: 'Where does your business show up when local customers search?',
    statsIntro: 'When people nearby need a business they can contact now, they search Google. Google Ads can place your company near the top of those searches before potential customers choose a competitor. <em>Paid placement helps you quickly reach people who are actively searching for what you offer.</em>',
    stats: [
      { n: '52%', d: 'Of consumers started their last local search on Google', s: 'BrightLocal, 2026' },
      { n: '6.66%', d: 'Average click-through rate for Google search ads', s: 'WordStream by LocaliQ, 2025' },
      { n: '7.52%', d: 'Average conversion rate for Google search ads', s: 'WordStream by LocaliQ, 2025' },
    ],
    successTitle: 'How you know Google Ads is working',
    successParas: [
      'Ad performance should be measured by outcomes that help your business grow. That means more qualified website visits, phone calls, form submissions, and opportunities from people actively searching for your services.',
      'A focused paid search campaign helps turn high-intent searches into real inquiries, showing your ad to local customers right when they are ready to reach out.',
    ],
    successItems: [
      { icon: 'clock', t: 'Traffic without the wait', d: 'Start bringing relevant visitors to your website soon after launch, instead of waiting months.' },
      { icon: 'target', t: 'Buyer intent', d: 'Focus your budget on clicks from searches made by people ready to take action.' },
      { icon: 'chart', t: 'Pay per click', d: 'You only pay when someone clicks your ad, which keeps spending in your control and easy to track.' },
    ],
    offerEyebrow: 'What\'s included',
    offerTitle: 'Google Ads management, from setup to monthly reporting',
    offerCols: 2,
    offers: [
      { icon: 'layers', t: 'Campaign buildout', d: 'Your pay-per-click (PPC) campaign built from the ground up so your ads show to nearby people who need your business.' },
      { icon: 'calendar', t: 'Monthly management', d: 'Steady oversight that keeps costs in check and keeps your leads relevant.' },
      { icon: 'phone', t: 'Conversion tracking', d: 'Tracking that shows which ads bring in calls and form requests, so you know where your money goes.' },
      { icon: 'layout', t: 'Landing page upgrades', d: 'Updates to the pages your ads point to, so more of that traffic turns into people reaching out.' },
    ],
    formTitle: 'Start your free ads audit',
    processTitle: 'How your managed Google Ads campaign comes together',
    processIntro: 'Paid search works best with a clear plan, focused targeting, and steady refinement. Our process is built to reach the right searchers and turn paid traffic into real inquiries. A typical launch takes about two weeks, and every step comes with a date ahead of time.',
    steps: [
      { t: 'Get your free ads audit', d: 'Your ads audit reviews whether paid search can bring in quality leads for your business, including:', list: ['Search demand for your services in your area', 'Whether your website is ready to turn ad traffic into inquiries', 'Which keywords are likely to bring the strongest leads', 'Where your current campaign could improve, if you already run ads'], after: 'You get a clear view of how paid search could support your business and where a better setup could help.' },
      { t: 'Gather the details for setup', d: 'We collect the key details about your services, your service area, and how leads should reach your team. You approve a written plan for the full campaign before launch, so ad copy, negative keywords, and location targeting line up with the clients you want.' },
      { t: 'Build the campaign and tracking', d: 'Your services are organized into clear ad groups with search ads written to match your brand. Conversion tracking goes in next, so you can see which ads are producing calls and requests.' },
      { t: 'Launch and learning period', d: 'We help you choose a budget and schedule, then launch. Early quality checks and close monitoring give Google time to learn which searches work best, which sets a stable baseline.' },
      { t: 'Monthly management', d: 'Budget, bids, ad groups, negative keywords, and search terms are managed each month, and ad copy is refreshed as needed. You receive monthly reports on traffic, conversions, return on ad spend, and recommended next steps.' },
    ],
    bio: {
      title: 'Your Google Ads, managed by Johnny Wilson',
      text: 'Johnny builds and manages every campaign himself. Ads are targeted to the cities you serve and organized so Google understands your services, which keeps your budget on the searches that matter. Performance is reviewed regularly, and each monthly report shows your key numbers and return on ad spend in plain terms.',
      facts: [{ n: '150+', d: 'campaigns built' }, { n: '12.01x', d: 'average return on ad spend' }, { n: 'Google Ads', d: 'certified in Creative and Measurement' }],
    },
    pricing: {
      title: 'Pricing for Google Ads',
      paras: [
        'Setup is priced by the number of ad groups your campaign needs, one for each service you want to promote. Every setup includes the full build plus three months of management, and you can continue month to month after that.',
      ],
      tiers: [
        { n: '1 ad group', p: '$600', d: 'Best for focusing on a single, high-intent service.' },
        { n: '2 ad groups', p: '$750', d: 'Promote more than one service without spreading the budget too thin.' },
        { n: '3 ad groups', p: '$900', d: 'Broader coverage across your core services, still tightly targeted.' },
        { n: '4 ad groups', p: '$1,050', d: 'For businesses offering several services in one clearly defined area.' },
      ],
      tierNote: 'Ongoing management usually runs $150 to $350 per month, depending on account size.',
    },
    testimonial: 'spencer',
    faqTitle: 'Still have questions about Google Ads?',
    faqs: [
      { q: 'How long before there are results?', a: 'New traffic usually starts within the first few days as clicks come in. Higher-quality traffic and leads tend to develop over one to three months as the campaign gathers data, the budget settles, and targeting improves.' },
      { q: 'Do I need a new website before I run ads?', a: 'No. As long as your pages load properly and contact options are easy to find, ads can send traffic to your current website. If <a href="/website-design">landing page updates</a> would help, we will give you a list of recommended changes before launch.' },
      { q: 'What budget do I need?', a: 'It depends on your goals, services, and area, but the lowest budget we usually recommend is $300 per month. That gives Google enough activity to collect useful data. A larger budget gathers data faster, which helps the campaign improve sooner.' },
      { q: 'Can you guarantee this will work?', a: 'No one can honestly guarantee results from paid ads. Results depend on search demand, competition, budget, landing pages, and more. We manage your campaign closely using real data, and if we think another approach like <a href="/local-seo">local SEO</a> would be a better fit, we will tell you.' },
    ],
    finalTitle: 'Ready to show up when people are searching?',
    finalText: 'If you want to talk through timing, budget, your target area, or any questions, we are happy to help. Start with a free ads audit or just reach out.',
    blogService: 'Google Ads',
    faqLede: ['Have a question about budgets or targeting? Call', 'for a straight answer.'],
  },

  'website-design': {
    name: 'Web Design',
    h1: 'Web Design',
    intro: 'Website design that helps local clients find you on Google, trust what they see, and reach out.',
    bullets: [
      'Turn more website visitors into <strong>calls and requests</strong>',
      'Build trust and credibility with a professional design',
      'Lose fewer leads with a site built to make contacting you easy',
    ],
    audit: 'Free Site Audit',
    visual: 'phone',
    statsTitle: 'When somebody visits your website, will they choose your business?',
    statsIntro: 'Potential customers often visit your website before deciding whether to contact you. If it looks outdated, loads slowly, or makes information hard to find, they may choose a competitor instead. <em>A professional website helps you make a strong first impression, build trust, and turn more visitors into leads.</em>',
    stats: [
      { n: '0.05s', d: 'Is all it takes for visitors to form a first impression of a website', s: 'Carleton University' },
      { n: '46%', d: 'Of comments about a site\'s credibility focused on its design', s: 'Stanford University' },
      { n: '53%', d: 'Of mobile visits are abandoned when a page takes over 3 seconds to load', s: 'Google' },
    ],
    successTitle: 'What a high-performing website can do for your business',
    successParas: [
      'Your website should give your business room to grow. We organize each site around your services, the areas you serve, and what your customers are looking for, so people can find you, understand what you do, and reach out.',
      'Every page has a purpose. A clear structure supports broader reach, removes friction from the contact process, and sets your website up to make better use of future SEO and advertising.',
    ],
    successItems: [
      { icon: 'pin', t: 'Regional visibility', d: 'A well-built website supports your visibility in Google search and Google Maps.' },
      { icon: 'layout', t: 'Ready for inquiries', d: 'Clean design and clear next steps make visitors more likely to contact you.' },
      { icon: 'phone', t: 'More ways to reach you', d: 'Easy calls, short forms, and clear buttons help turn visits into conversations.' },
    ],
    offerEyebrow: 'What\'s included',
    offerTitle: 'The web design services included with your site',
    offers: [
      { icon: 'layout', t: 'Website builds', d: 'A complete site built around your services and service area, with clear answers, easy navigation, and a simple path to contact you.' },
      { icon: 'doc', t: 'Service pages', d: 'Focused pages for each core service, written to help you show up on Google and bring in inquiries.' },
      { icon: 'search', t: 'SEO built in', d: 'On-page SEO handled from the start, so your pages are easier for nearby clients to find.' },
      { icon: 'phone', t: 'Built for inquiries', d: 'Clear calls to action, better page flow, and short forms that make reaching out easy.' },
      { icon: 'pin', t: 'Location pages', d: 'Pages for the towns you serve that help more nearby clients find their way to your website.' },
      { icon: 'map', t: 'Sitewide localization', d: 'Your service areas reinforced across the site, so every page speaks to clients in the cities you serve.' },
    ],
    formTitle: 'Get your free site audit',
    processTitle: 'The process behind your new website',
    processIntro: 'Your website should build trust, show up on Google, and help clients feel confident reaching out. Our process is built to support exactly that. Most projects run 30 to 60 days, and you get a schedule before work begins.',
    steps: [
      { t: 'Initial site audit', d: 'We review your current website the way a potential client sees it, to find what is helping and what is getting in the way of inquiries. That tells us what to fix first.' },
      { t: 'Service research', d: 'We look closely at your services, service areas, and what your clients need to know. You get a site plan that maps out the pages, content, and layout of your new site before design starts.' },
      { t: 'Website upgrade or new build', d: 'Whether you need a website redesign or a new build, we design a clean, fast, mobile-friendly site around how your clients search and hire, so it builds trust and makes reaching out easy.' },
      { t: 'Sitewide SEO', d: 'Every page is set up with our SEO approach, which strengthens your presence in your area and helps clients find you on Google.' },
      { t: 'Polish for inquiries', d: 'We refine navigation, messaging, and calls to action to remove friction. That includes clearer copy, better page flow, and simple forms. After launch, ongoing support is available if you want help keeping the site current.' },
    ],
    bio: {
      title: 'Your website, built by Johnny Wilson',
      text: 'Johnny plans and builds each site himself. He designs around how your clients search and hire: clean layouts that load fast on phones, service pages set up to show up on Google, and a clear path from reading about you to reaching out. You get direct updates and a schedule from kickoff to launch.',
      facts: [{ n: '200+', d: 'sites built or upgraded' }, { n: '100%', d: 'of new builds reached page one' }, { n: 'PMP', d: 'certified' }],
    },
    pricing: {
      title: 'Pricing for a new website',
      paras: [
        'Some sites need a light refresh, while others need a full redesign and new content. Pricing follows the size of the site, the number of service pages, and any design or technical needs, so you only pay for what your business will use.',
      ],
      card: { title: 'How pricing works', steps: ['Free site audit of your current website', 'A plan sized to your services and service areas', 'A clear estimate and schedule before work begins'] },
    },
    testimonial: 'david',
    faqTitle: 'Not sure about a new website yet?',
    faqs: [
      { q: 'How long does a website project take?', a: 'It depends on the scope. A focused redesign can move quickly, while a larger site with several services and locations takes more planning and writing. Most projects wrap up within 30 to 60 days, and you get a schedule before work begins.' },
      { q: 'Do I need a brand new site, or can I keep the one I have?', a: 'Often you can keep it. We look at your platform, page structure, design, and performance to see whether improving the current site makes sense. If rebuilding would work better, we will explain why before recommending it.' },
      { q: 'Can a new website help me show up on Google?', a: 'It can help. A well-structured website makes it easier for Google to understand your services, your location, and which searches you are relevant for. Clear service pages, simple navigation, fast load times, and accurate service-area details all support your <a href="/local-seo">local SEO</a>. Rankings depend on many factors, so we do not promise specific positions.' },
      { q: 'What if I need new leads quickly?', a: 'We can launch the pages most likely to bring in inquiries first and finish the rest after. If you need visibility right away, we can also talk about whether <a href="/google-ads">Google Ads</a> makes sense while the site is completed.' },
    ],
    finalTitle: 'Ready for a website that works as hard as you do?',
    finalText: 'If you want a website that builds trust, helps you get found, and turns visitors into inquiries, we can walk you through exactly what your project needs.',
    blogService: 'Web Design',
    faqLede: ['Not sure what your website needs? Call', 'and we\'ll help you sort it out.'],
  },
};
