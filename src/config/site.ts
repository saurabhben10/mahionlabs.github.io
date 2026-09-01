import type { SiteConfig } from '../types';

/**
 * Helper to ensure internal paths respect Astro's base URL
 * (e.g. /mahionlabs.github.io/ on GitHub Pages vs / on custom domain)
 */
export function formatUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/') {
    return base ? `${base}/` : '/';
  }
  return `${base}${cleanPath}`;
}

/**
 * Central configuration for Mahion Labs website.
 * All repeated studio strings, metadata, URLs, and apps are defined here.
 */
export const siteConfig: SiteConfig = {
  name: 'Mahion Labs',
  tagline: 'Building useful software for what comes next.',
  description: 'Mahion Labs is an independent software studio creating practical mobile applications, AI-powered tools, productivity software and digital products designed to solve real problems.',
  siteUrl: 'https://saurabhben10.github.io/mahionlabs.github.io',
  email: 'support@mahionlabs.com',
  developerName: 'Mahion Labs',
  copyrightYear: 2026,
  privacyLastUpdated: 'September 2026',
  githubUrl: 'https://github.com/saurabhben10/mahionlabs.github.io',
  googlePlayDeveloperUrl: 'https://play.google.com/store/apps/developer?id=Mahion+Labs',
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Apps', href: '/apps' },
    { label: 'About', href: '/about' },
    { label: 'Support', href: '/support' },
    { label: 'Privacy', href: '/privacy' },
  ],
  apps: [
    {
      id: 'shiftwise',
      slug: 'shiftwise',
      name: 'ShiftWise',
      tagline: 'Intelligent schedule optimization and shift management for modern teams.',
      category: 'Productivity & Utilities',
      description: 'An intuitive, AI-assisted shift management tool designed to simplify complex work schedules, prevent burnout, and streamline shift coordination with effortless precision.',
      detailedDescription: [
        'ShiftWise is designed to remove the friction from dynamic shift planning and rota management.',
        'With intelligent conflict detection, automated break planning, and zero-clutter mobile interfaces, ShiftWise ensures working professionals and teams spend less time scheduling and more time getting things done.'
      ],
      features: [
        'Intelligent shift pattern detection & conflict avoidance',
        'Offline-first architecture with instantaneous local sync',
        'Custom shift rotation templates and exportable summaries',
        'Privacy-respecting local storage with zero unnecessary tracking'
      ],
      status: 'coming-soon',
      privacyPolicyUrl: '/privacy/shiftwise',
      supportUrl: '/support?app=shiftwise',
      version: '1.0.0-preview',
      tags: ['Android', 'Productivity', 'AI Tools', 'Offline-First']
    }
  ]
};

export const philosophyCards = [
  {
    title: 'Practical by design',
    description: 'Products should solve clear problems with direct, reliable utility rather than bloated feature lists.',
    iconName: 'target'
  },
  {
    title: 'AI where it helps',
    description: 'We leverage artificial intelligence strictly where it genuinely improves the user experience and automates repetitive friction.',
    iconName: 'sparkles'
  },
  {
    title: 'Built to evolve',
    description: 'Our software is engineered with modular, durable foundations so it can continuously improve based on real-world usage.',
    iconName: 'refresh-cw'
  },
  {
    title: 'User focused',
    description: 'Simple, frictionless interfaces and dependable functionality always take precedence over unnecessary complexity.',
    iconName: 'user-check'
  }
];

export const studioPrinciples = [
  {
    title: 'Zero Bloat',
    description: 'Clean, lightweight architecture engineered for instant startup, low battery consumption, and minimal memory footprint.'
  },
  {
    title: 'Privacy by Default',
    description: 'Transparent data practices. We do not sell data or monetize personal privacy. Offline functionality is prioritized whenever feasible.'
  },
  {
    title: 'Continuous Refinement',
    description: 'Rapid feedback loops, direct developer support, and consistent updates that actively respond to real user workflows.'
  }
];
