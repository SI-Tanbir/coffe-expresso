/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ranch: ['Rancho', 'cursive'], // Add your custom font
      },
    },
  },
  plugins: [],
}