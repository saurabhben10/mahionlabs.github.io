import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// If a custom domain is used or if local dev, base can be customized via env if desired
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';
const site = isCustomDomain ? 'https://mahionlabs.com' : 'https://saurabhben10.github.io';
const base = isCustomDomain ? '/' : '/mahionlabs.github.io';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/404')
    })
  ]
});
