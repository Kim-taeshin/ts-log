// import hljsVuePlugin from "@highlightjs/vue-plugin";
import Hljs from "highlight.js/lib/core";

// export default defineNuxtPlugin((nuxtApp) => {
export default defineNuxtPlugin(async (NuxtApp) => {
  NuxtApp.vueApp.directive("highlight", (el: Element) => {
    const block = el.querySelectorAll("pre code");
    block.forEach((block: Element) => {
      Hljs.highlightBlock(block as HTMLElement);
    });
  });
});

// hljs.registerLanguage("javascript", javascript);

// export default defineNuxtPlugin((nuxtApp) => {
//   // nuxtApp.vueApp.use(hljsVuePlugin);
//   return {
//     provide: {
//       hljs,
//     },
//   };
// });

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
