/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        yekan:"Yekan",
        roboto:"Roboto , sans-serif"
      },
      colors:{
        main_blue:"#4361EE",
        main_red:"#e63946"
      }
    },
  },
  plugins: [],
}

