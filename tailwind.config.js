/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New whimsical theme colors
        cream: {
          DEFAULT: '#F5F0E8',
          dark: '#EDE5D8',
          light: '#FAF8F5',
        },
        periwinkle: {
          DEFAULT: '#8B9DC3',
          light: '#A8B6D1',
          dark: '#7589B0',
        },
        dustyrose: {
          DEFAULT: '#C4A5A5',
          light: '#D4BFBF',
          dark: '#9B7A7A',
          accent: '#8B5A5A',
        },
        teal: {
          DEFAULT: '#5B8A8A',
          light: '#7BA7A7',
        },
        mustard: {
          DEFAULT: '#D4A84B',
          light: '#E5C97A',
        },
        // Legacy support
        background: "#F5F0E8",
        foreground: "#4A4A4A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        // Handwritten fonts
        handwriting: ["var(--font-caveat)", "cursive"],
        casual: ["var(--font-indie)", "cursive"],
        hand: ["var(--font-patrick)", "cursive"],
      },
      borderRadius: {
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'organic': '30% 70% 70% 30% / 30% 30% 70% 70%',
      },
    },
  },
  plugins: [],
}
