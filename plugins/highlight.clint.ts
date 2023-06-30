// import hljsVuePlugin from "@highlightjs/vue-plugin";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.use(hljsVuePlugin);
  return {
    provide: {
      hljs,
    },
  };
});

// export default (app) => {
//   app.directive("highlight", {
//     mounted(el) {
//       hljs.highlightBlock(el);
//     },
//     updated(el) {
//       hljs.highlightBlock(el);
//     },
//   });
// };
