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
  //client
  plugins: ["~/plugins/highlight.ts", "~/plugins/pixi.ts"],

  // app: {
  //   head: {
  //     link: [
  //       {
  //         rel: "stylesheet",
  //         href: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css",
  //       },
  //     ],
  //     script: [
  //       {
  //         src: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js",
  //       },
  //     ],
  //   },
  // },
});
