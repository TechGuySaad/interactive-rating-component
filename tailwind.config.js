/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        card: '#272e3d', // Replace with your desired color value
        background: '#141519'
      },
      width: {
        customCard : '450px', // Replace with your desired custom width value
      },
      height: {
        customCard : '400px'
      }
    },
  },
  plugins: [],
}

