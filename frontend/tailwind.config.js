/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF8F3',
          50: '#FFFFFF',
          100: '#FAF8F3',
          200: '#F4EFE6',
          300: '#E8E2D7',
        },
        gold: {
          light: '#C4A95B',
          antique: '#92772D',
          DEFAULT: '#92772D',
          deep: '#745D20',
          dark: '#584515',
        },
        charcoal: {
          DEFAULT: '#25241F',
          muted: '#636059',
          light: '#8F8B82',
        },
        beige: {
          DEFAULT: '#E8E2D7',
          border: '#E8E2D7',
          surface: '#F4EFE6',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 4px 20px -2px rgba(146, 119, 45, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'luxury-lg': '0 10px 30px -4px rgba(146, 119, 45, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
