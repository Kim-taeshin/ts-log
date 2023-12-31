// import hljsVuePlugin from "@highlightjs/vue-plugin";
import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
import "highlight.js/styles/nord.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("html", html);

// export default defineNuxtPlugin((nuxtApp) => {
//   hljs.registerLanguage("javascript", javascript);
//   hljs.registerLanguage("css", css);
//   hljs.registerLanguage("html", html);

//   nuxtApp.hook("page:finish", () => {
//     document.querySelectorAll("pre code").forEach((el) => {
//       hljs.highlightElement(el as HTMLElement);
//     });
//   });
//   nuxtApp.provide("hljs", hljs);
// });

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("highlight", {
    mounted(el: Element) {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el as HTMLElement);
      });
    },
    updated(el: Element) {
      hljs.highlightBlock(el as HTMLElement);
    },
    getSSRProps(binding, vnode) {
      return {};
    },
  });
});

// export default defineNuxtPlugin(async (nuxtApp) => {
//   nuxtApp.vueApp.directive("highlight", (el: Element) => {
//     const block = el.querySelectorAll("pre code");
//     block.forEach((block: Element) => {
//       hljs.highlightBlock(block as HTMLElement);
//     });
//   });
// });

// hljs.registerLanguage("javascript", javascript);

// export default defineNuxtPlugin((nuxtApp) => {
//   // nuxtApp.vueApp.use(hljsVuePlugin);
//   return {
//     provide: {
//       hljs,
//     },
//   };
// });
