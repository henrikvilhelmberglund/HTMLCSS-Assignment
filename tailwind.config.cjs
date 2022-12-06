const daisyui = require("daisyui");
const forms = require("@tailwindcss/forms");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        logo: ["Cherry Swash"],
      },
    },
  },

  plugins: [forms],
};

module.exports = config;
