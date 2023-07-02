<template>
    <div class="code-wrap">
        <div>{{ myTitle }}</div>
        <div v-highlight>
            <pre><code class="code-block">{{ myCode }}</code></pre>
        </div>
    </div>
</template>

<script lang="ts">
import hljs from "highlight.js";
import { defineComponent, ref } from 'vue';

export default defineComponent ({
  
    props: {
        fileName: {type:String, default: "Syntax"},
        code: {type:String, default: `function testFnc($num: number): void`},
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
        
        // hljs.initHighlighting();

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
        // hljs = require('highlight.js');



        // hljs.initHighlighting();
        // hljs.highlightAll();

        setTimeout(()=> {
        document.querySelectorAll('pre')
        .forEach((el) => hljs.highlightElement(el));
        }, 1000);
    }
})
</script>

<style src="highlight.js/styles/nord.css"></style>
