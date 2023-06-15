/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#31c9c0",
        secondary: "#607d8b",
        "hover-primary": "#14867E",
      },
    },
  },
  plugins: [],
};
