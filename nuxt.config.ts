// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: "<rootDir>/assets",
  },
  css: ["~/assets/css/global.css", "~/assets/css/fonts.css"],
});
