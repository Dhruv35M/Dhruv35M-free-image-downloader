const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    xs: "540px",
    ...defaultTheme.screens,
    extends: {}
  },
  plugins: [],
}