export interface AppProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  detailedDescription?: string[];
  features?: string[];
  status: 'released' | 'coming-soon' | 'beta' | 'in-development';
  icon?: string;
  playStoreUrl?: string;
  webUrl?: string;
  privacyPolicyUrl: string;
  supportUrl: string;
  releaseDate?: string;
  version?: string;
  tags?: string[];
  screenshots?: string[];
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  siteUrl: string;
  email: string;
  developerName: string;
  copyrightYear: number;
  privacyLastUpdated: string;
  githubUrl: string;
  googlePlayDeveloperUrl?: string;
  navItems: NavItem[];
  apps: AppProduct[];
}

export interface PhilosophyCard {
  title: string;
  description: string;
  iconName: string;
}
