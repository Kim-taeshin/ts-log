import hljs from "highlight.js/lib/core";

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.hg = hljs;
});
