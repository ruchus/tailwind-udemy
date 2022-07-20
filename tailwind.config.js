/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'body-mipatron-clase': "url('../img/pattern.png')",
      }
    },
  },
  plugins: [],
}
