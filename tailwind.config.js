/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          light: '#E6E6FA',
          DEFAULT: '#967BB6',
          dark: '#7B6B8D',
        },
        gold: {
          light: '#FFD700',
          DEFAULT: '#DAA520',
          dark: '#B8860B',
        },
        forest: {
          light: '#90EE90',
          DEFAULT: '#228B22',
          dark: '#006400',
        },
        cream: {
          light: '#fffbf5',
          DEFAULT: '#fff5e1',
          dark: '#faebd7',
        },
      },
      fontFamily: {
        carattere: ['var(--font-carattere)'],
      },
      backgroundImage: {
        'linear-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'linear-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'linear-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'linear-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}