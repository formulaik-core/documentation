// https://dev.to/shannonajclarke/using-tailwindcss-v3-in-docusaurus-in-5-steps-5c26

const colors = require('tailwindcss/colors')

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"], // my markdown stuff is in ../docs, not /src
  darkMode: ['class', '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
  theme: {
    extend: {},
    colors: {   
      ...colors,
      'customc-main': '#e76f51',
      'customc-second': '#faf3dd'
    },
  },
  plugins: [],
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
      display: ["group-hover"],
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}