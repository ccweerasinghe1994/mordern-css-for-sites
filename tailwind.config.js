/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandPrimary: {
          light: '#FF1493', // deeppink
          dark: '#FF69B4', // hotpink
        },
        brandSecondary: {
          light: '#00FFFF', // cyan
          dark: '#ADD8E6', // lightblue
        },
        brandTextOne: {
          light: '#030304',
          dark: '#f8f8f9',
        },
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
