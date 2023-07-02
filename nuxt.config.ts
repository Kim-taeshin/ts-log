// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: "<rootDir>/assets",
  },
  css: [
    "~/assets/css/global.css",
    "~/assets/css/fonts.css",
    "~/assets/css/nord.css",
  ],
  plugins: ["~/plugins/highlight.ts"],

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js",
        },
      ],
    },
  },
});
