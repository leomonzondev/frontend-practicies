/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  theme: {
    colors: {
      blue:"#0ad4fa",
      background:"#f9f9f9",
      black: {
        100:"#616161",
        200:"#c1c1c1",
        300:"#EDEDED"
      },
      white: "white"
    },
    extend: {},
  },
  plugins: [],
}
