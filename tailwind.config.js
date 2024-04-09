/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bullImg': "url('./src/assets/wallpaper.jpeg')",
        'bullpng-img': "url('/src/assets/redbull.png')",
      }
    },
  },
  plugins: [],
}

