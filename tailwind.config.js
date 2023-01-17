/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/input.css"],
  theme: {
    extend: {
      colors: {
        primary_dark: 'rgb(var(--primary-color-dark))',
        primary_light: 'rgb(var(--primary-color-light))',
        background_dark: 'rgb(var(--background-color-dark))',
        background_light: 'rgb(var(--background-color-light))',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],

  darkMode: 'class',
}