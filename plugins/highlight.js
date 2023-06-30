import hljsVuePlugin from "@highlightjs/vue-plugin";
import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(hljsVuePlugin);
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
