const forms = require("@tailwindcss/forms");
const colors = require("tailwindcss/colors");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        logo: ["Cherry Swash"],
        h: ["Spartan"],
        p: ["Nunito"],
        mat: ["Material Icons Outlined"],
        matr: ["Material Icons Rounded"],
      },
      colors: {
        anka: {
          50: colors.slate[300],
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
      },
    },
  },

  plugins: [forms],
  darkMode: "class",
};

module.exports = config;
