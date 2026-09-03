/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0C0D10', // Deep Warm Graphite Espresso
          900: '#121419',
          850: '#171920',
          800: '#1E212A',
          750: '#252934',
          700: '#2E3340',
          600: '#3C4252',
          500: '#525A6E',
        },
        champagne: {
          50: '#FAF8F5',
          100: '#F5EFE6',
          200: '#EBDDC9',
          300: '#E1C9A6',
          400: '#E5C07B', // Primary Champagne Accent
          500: '#D4AF37',
          600: '#B89428',
          700: '#8C701E',
          800: '#5E4A14',
          900: '#382B0C',
        },
        brand: {
          50: '#FAF8F5',
          100: '#F8F9FA',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        accent: {
          emerald: '#10B981',
          champagne: '#E5C07B',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
        'elevated': '0 10px 30px -4px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
