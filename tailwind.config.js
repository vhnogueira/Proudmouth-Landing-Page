/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./animations.js"],
  theme: {
    extend: {
      colors: {
        "proud-red": "#d91e28",
        "proud-navy": "#273249",
        "proud-mint": "#bad7d9",
        "proud-gray": "#F5F6F6",
      },
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
}
