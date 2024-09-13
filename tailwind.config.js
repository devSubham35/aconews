/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 500,
        bold: 700,
        extrabold: 800,
      }
    }
  },  
  plugins: [],
}

