/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#080B12',
          900: '#0D1117',
          850: '#0F1522',
          800: '#131A2B',
          750: '#182137',
          700: '#1E2942',
          600: '#2A3859',
          500: '#3B4E7A',
        },
        brand: {
          50: '#EEF1FF',
          100: '#DDE2FF',
          200: '#BEC6FF',
          300: '#9DA8FF',
          400: '#8391FF',
          500: '#6C7CFF', // Primary Electric Indigo
          600: '#5262F5',
          700: '#3D4DE0',
          800: '#2C3AC2',
          900: '#1E288F',
        },
        cyan: {
          400: '#38BDF8',
          500: '#0EA5E9',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'Plus Jakarta Sans',
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
        'glow-sm': '0 0 15px -3px rgba(108, 124, 255, 0.25)',
        'glow-md': '0 0 30px -5px rgba(108, 124, 255, 0.3)',
        'glow-lg': '0 0 50px -10px rgba(108, 124, 255, 0.35)',
        'glow-cyan': '0 0 30px -5px rgba(56, 189, 248, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.03)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
