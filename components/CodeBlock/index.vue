<template>
    <div class="code-wrap">
        <div>{{ myTitle }}</div>
        <div ref="ref_code"><pre><code class="code-block">{{ myCode }}</code></pre></div>
    </div>
</template>

<script lang="ts">
import hljs from "highlight.js";
import { defineComponent, ref } from 'vue';

export default defineComponent ({
  
    props: {
        fileName: {type:String, default: "Syntax"},
        code: {type:String, default: `Consol.log("0123456789")`},
    },

    setup(props)
    {
        const ref_code = ref(null);

        const myTitle = ref(props.fileName);
        const myCode = ref(props.code);
        return {
            ref_code, myCode, myTitle
        }
    },

    mounted() {
        // document.querySelectorAll("code").forEach((el)=>{
        //     hljs.highlightElement(el);
        // })

        if(this.ref_code){
            const el = this.ref_code as HTMLElement;
            hljs.highlightElement(el);

            console.log(hljs);
        }

        // setTimeout(()=> {

        // document.querySelectorAll('pre')
        // .forEach((el) => hljs.highlightElement(el));
        // }, 1000);
    }
})
</script>
