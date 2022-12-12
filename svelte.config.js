import preprocess from "svelte-preprocess";
// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-static";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: "404.html",
      precompress: false,
      strict: true,
    }),
    csp: {
      mode: "auto",
      directives: {
        "script-src": ["self"],
        "object-src": ["none"],
      },
    },
    paths: {
      base: dev ? "" : "/HTMLCSS-Assignment",
    },
  },
  vitePlugin: {
    experimental: { inspector: { holdMode: true } },
  },

  preprocess: [
    preprocess({
      postcss: true,

      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
    }),
  ],
};

export default config;
