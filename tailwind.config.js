/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // Disable dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: '12px',
        md: '10px',
        sm: '8px',
      },
      colors: {
        primary: {
          DEFAULT: '#FFB700', // Primary color
          foreground: '#231F20', // Optional foreground or text color for contrast
        },
        secondary: {
          DEFAULT: '#231F20', // Secondary color
          foreground: '#E0D8DE', // Optional foreground or text color for contrast
        },
        third: '#E0D8DE', // Third color
        border: '#E0D8DE', // You can use the third color for borders or other elements
        input: '#E0D8DE',
        ring: '#FFC42C',
        lightyellow: '#FFE099',
        green: '#005C69',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
