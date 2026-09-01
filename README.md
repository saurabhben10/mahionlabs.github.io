# Mahion Labs — Official Website

Official website for **Mahion Labs** (`mahionlabs.github.io`), an independent software studio building practical mobile applications, AI-powered tools, productivity software, and modern digital products.

This website serves as:
1. The official developer website for Google Play Console account verification.
2. The central showcase for current and future mobile applications.
3. The host for general and app-specific Privacy Policies.
4. The central product support and developer contact portal.
5. A high-performance, static identity ready to transition to a custom domain (`mahionlabs.com`).

---

## Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Output Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Dark Tech Design System
- **Language**: TypeScript & Semantic HTML5
- **Icons**: Custom SVG Vector Assets (Zero runtime icon bloat)
- **Hosting**: GitHub Pages via GitHub Actions CI/CD
- **Zero Backend / Server Dependencies**: 100% pre-rendered static HTML, CSS, and JS.

---

## Quick Start (Local Development)

### Prerequisites
- Node.js `20.x` or `22.x` (or later)
- npm `10.x` or later

### Installation
```bash
# Clone the repository
git clone https://github.com/saurabhben10/mahionlabs.github.io.git
cd mahionlabs.github.io

# Install dependencies
npm install
```

### Run Locally
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build Production Static Files
```bash
npm run build
```
Compiled static HTML, CSS, JavaScript, and assets will be output into the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## Project Structure

```
mahionlabs.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg                 # Abstract vector logo favicon
│   ├── robots.txt                  # Search engine crawler instructions
│   ├── site.webmanifest            # Web application manifest
│   └── CNAME.example               # Custom domain reference template
├── src/
│   ├── config/
│   │   └── site.ts                 # Central studio configuration & apps registry
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   ├── styles/
│   │   └── global.css              # Design tokens, glow effects, reduced-motion rules
│   ├── components/
│   │   ├── Header.astro            # Sticky header with responsive navigation
│   │   ├── Footer.astro            # Studio footer with legal disclaimer & links
│   │   ├── Logo.astro              # Vector SVG brand logo
│   │   ├── BackgroundEffects.astro # Ambient glowing mesh & subtle grid
│   │   ├── Hero.astro              # Homepage hero with CTAs
│   │   ├── FeatureCard.astro       # Product philosophy card
│   │   ├── AppCard.astro           # Modular app showcase card
│   │   ├── SectionHeader.astro     # Section headers & eyebrow badges
│   │   ├── Button.astro            # Reusable button component
│   │   ├── CopyButton.astro        # Interactive copy-to-clipboard button
│   │   └── SEO.astro               # OpenGraph, Twitter, canonical URLs & JSON-LD
│   ├── layouts/
│   │   └── BaseLayout.astro        # Master HTML layout
│   └── pages/
│       ├── index.astro             # Homepage (/)
│       ├── apps/
│       │   ├── index.astro         # Apps Catalog (/apps)
│       │   └── [slug].astro        # App Detail Pages (/apps/:slug)
│       ├── about.astro             # About Page (/about)
│       ├── support.astro           # Product Support & FAQ (/support)
│       ├── privacy/
│       │   ├── index.astro         # General Privacy Policy (/privacy)
│       │   └── [slug].astro        # App-Specific Privacy Policies (/privacy/:slug)
│       └── 404.astro               # Custom 404 Error Page
├── astro.config.mjs                # Astro configuration (static output, sitemap)
├── tailwind.config.mjs             # Tailwind CSS tokens
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Scripts and dependencies
```

---

## Central Configuration (`src/config/site.ts`)

All repeated studio identity values, support contact emails, URLs, and registered apps are stored in `src/config/site.ts`.

### How to Change the Contact Email
Open `src/config/site.ts` and edit the `email` field:
```typescript
export const siteConfig: SiteConfig = {
  name: 'Mahion Labs',
  email: 'saurabh.shrma@outlook.com', // <-- Update email here
  // ...
};
```
Every page, support widget, and privacy policy will automatically update.

---

## Managing Applications

### How to Add a New App to the Portfolio
Open `src/config/site.ts` and append an entry to the `apps` array:

```typescript
{
  id: 'new-app',
  slug: 'new-app',
  name: 'New App Name',
  tagline: 'Catchy one-line description of the app.',
  category: 'Productivity & Utilities',
  description: 'Detailed summary of the application functionality.',
  features: [
    'Feature 1 description',
    'Feature 2 description',
    'Feature 3 description'
  ],
  status: 'coming-soon', // 'released' | 'coming-soon' | 'beta' | 'in-development'
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mahionlabs.newapp', // Optional
  privacyPolicyUrl: '/privacy/new-app',
  supportUrl: '/support?app=new-app',
  version: '1.0.0',
  tags: ['Android', 'AI Tools', 'Offline-First']
}
```

Once added:
- The app automatically appears on `/apps` and the Homepage.
- The product detail route is generated at `/apps/new-app`.
- The app-specific privacy policy route is generated at `/privacy/new-app`.

---

## Privacy Policy Management

### General Privacy Policy
- URL: `/privacy`
- Source: `src/pages/privacy/index.astro`
- Tailored for Google Play Console developer account compliance.
- Does not make false or unsupported claims. Clearly explains data minimization, offline storage, and third-party platform services (Google Play Services, GitHub Pages).

### App-Specific Privacy Policies
- Dynamic template: `src/pages/privacy/[slug].astro`
- When you release a new app or add permissions (e.g. camera, notifications), ensure the app's specific data practices are accurately listed.

---

## GitHub Pages Deployment

### Automatic GitHub Actions Deployment (Recommended)
This repository includes `.github/workflows/deploy.yml`.

1. Push this repository to GitHub under the repository name `mahionlabs.github.io` (or your chosen repository name).
2. Go to **Settings** > **Pages** in your GitHub repository.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Every push to the `main` branch will automatically build and deploy the website.

---

## Connecting a Custom Domain (`mahionlabs.com`)

When you are ready to switch from `https://saurabhben10.github.io/mahionlabs.github.io` to `https://mahionlabs.com`:

### 1. Update Central Config
In `src/config/site.ts`:
```typescript
siteUrl: 'https://mahionlabs.com',
```
In `astro.config.mjs`:
Set `isCustomDomain = true` or `CUSTOM_DOMAIN=true`.

### 2. Configure DNS Records (at your domain registrar)
Add the following DNS records:
- **Apex domain (`mahionlabs.com`)**:
  - `A` Record: `185.199.108.153`
  - `A` Record: `185.199.109.153`
  - `A` Record: `185.199.110.153`
  - `A` Record: `185.199.111.153`
- **Subdomain (`www.mahionlabs.com`)**:
  - `CNAME` Record: `saurabhben10.github.io.`

### 3. Set Custom Domain in GitHub Pages
- Go to repository **Settings** > **Pages**.
- In the **Custom domain** field, enter `mahionlabs.com` and click **Save**.
- Check **Enforce HTTPS** (may take a few minutes for the TLS certificate to generate).

---

## Google Play Console Guidelines

When submitting this site to your Google Play developer profile:
- **Developer Website URL**: `https://saurabhben10.github.io/mahionlabs.github.io` (or `https://mahionlabs.com`)
- **Developer Email**: `saurabh.shrma@outlook.com`
- **Privacy Policy URL**: `https://saurabhben10.github.io/mahionlabs.github.io/privacy`
- **App Specific Policy (e.g. Nightjar)**: `https://saurabhben10.github.io/mahionlabs.github.io/privacy/nightjar`

---

## License

&copy; 2026 Mahion Labs. All rights reserved.
