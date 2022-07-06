/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'phone': '400px',
      'tablet': '640px',
      'md': '750px',
      'laptop': '1100px',
      'desktop': '1280px',
    },
  },
  plugins: [],
}