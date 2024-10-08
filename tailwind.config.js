/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      md: '960px',
    },
    extend: {
      colors: {
        'rayna-secondary': '#CC400C',
        'rayna-primary': '#EB5017',
        'rayna-grey': '#667185',
        'rayna-border': '#D0D5DD',
        'rayna-background': '#F7F9FC',
        'rayna-text': '#101928',
      },
    },
  },
  plugins: [],
};
