/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./pages/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ptSans: ["PT Sans", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
