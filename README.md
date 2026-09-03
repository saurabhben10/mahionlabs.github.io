# Flipedy Labs — Official Website

Official website for **Flipedy Labs** (`flipedylabs.github.io` / `mahionlabs.github.io`), an independent software studio building practical mobile applications, AI-powered tools, productivity software, and refined digital products.

This website serves as:
1. The official developer website for Google Play Console account verification.
2. The central showcase for current and future mobile applications.
3. The host for general and app-specific Privacy Policies.
4. The central product support and developer contact portal.
5. A high-performance, static identity ready to transition to a custom domain (`flipedylabs.com`).

---

## Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Output Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Classy Editorial & Champagne Graphite Design System
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
git clone https://github.com/saurabhben10/mahionlabs.github.io.git
cd mahionlabs.github.io
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

---

## Central Configuration (`src/config/site.ts`)

All repeated studio identity values, support contact emails, URLs, and registered apps are stored in `src/config/site.ts`.

---

## Google Play Console Guidelines

When submitting this site to your Google Play developer profile:
- **Developer Website URL**: `https://saurabhben10.github.io/mahionlabs.github.io` (or `https://flipedylabs.com`)
- **Developer Email**: `saurabh.shrma@outlook.com`
- **Privacy Policy URL**: `https://saurabhben10.github.io/mahionlabs.github.io/privacy`
- **App Specific Policy (e.g. Nightjar)**: `https://saurabhben10.github.io/mahionlabs.github.io/privacy/nightjar`

---

## License

&copy; 2026 Flipedy Labs. All rights reserved.
