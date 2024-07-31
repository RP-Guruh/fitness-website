/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'black'],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
