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
        // mat: ["Material Icons Outlined"],
        // matr: ["Material Icons Rounded"],
      },
    },
  },

  plugins: [forms],
  darkMode: "class",
};

module.exports = config;
