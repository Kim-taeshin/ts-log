// import hljsVuePlugin from "@highlightjs/vue-plugin";
import hljs from "highlight.js/lib/core";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("highlight", {
    mounted(el: Element) {
      console.log(document);
      document.querySelectorAll("pre code").forEach((el) => {
        console.log(hljs);
        hljs.highlightElement(el as HTMLElement);
      });
    },
    updated(el: Element) {
      hljs.highlightBlock(el as HTMLElement);
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
