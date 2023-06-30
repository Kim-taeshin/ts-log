<template>
    <div class="code-wrap">
        <div>{{ myTitle }}</div>
        <pre><code class="code-block">{{ myCode }}</code></pre>
    </div>
</template>

<script lang="ts">
import hljs from "highlight.js";
import 'highlight.js/styles/default.css';
import { defineComponent, ref } from 'vue';

// export default defineComponent ({
export default defineComponent ({
  
    props: {
        fileName: {type:String, default: "Syntax"},
        code: {type:String, default: `Consol.log("0123456789")`},
    },

    setup(props)
    {
        const myTitle = ref(props.fileName);
        const myCode = ref(props.code);
        return {
            myCode, myTitle
        }
    },

    mounted() {
        // document.querySelectorAll("pre code").forEach((el)=>{
        //     hljs.highlightBlock(el as HTMLElement);
        //     console.log("hljs = ", hljs);
        // })

        // if(this.ref_code){
        //     const el = this.ref_code as HTMLElement;
        //     hljs.highlightElement(el);

        //     console.log(hljs);
        // }

        // hljs.initHighlighting();

        setTimeout(()=> {



        document.querySelectorAll('pre')
        .forEach((el) => hljs.highlightElement(el));
        }, 1000);
    }
})
</script>
