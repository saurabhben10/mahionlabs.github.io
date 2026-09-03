/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FFFFFF',
          100: '#FAF9F5', // Base Warm Alabaster
          200: '#F3F1EB',
          300: '#E8E5DC',
          400: '#D5D1C5',
          500: '#B8B3A4',
        },
        ink: {
          950: '#121316', // Deep Charcoal Espresso
          900: '#1A1C21',
          800: '#282B33',
          700: '#3D424E',
          600: '#5A606D',
          500: '#757C8C',
          400: '#9DA3AE',
        },
        gold: {
          50: '#FAF7EE',
          100: '#F3EDD7',
          200: '#E7D8A8',
          300: '#D7BF75',
          400: '#B48B22', // Primary Warm Brass/Gold
          500: '#9E7719',
          600: '#7F5E12',
        },
        accent: {
          emerald: '#059669',
          gold: '#B48B22',
          amber: '#D97706',
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
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.04)',
        'elevated': '0 12px 32px -4px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
