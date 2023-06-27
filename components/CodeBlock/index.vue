<template>
    <div class="code-wrap">
        <div>{{ myTitle }}</div>
        <pre><code class="code-block">{{ myCode }}</code></pre>
    </div>
</template>

<script lang="ts">
import hljs from "highlight.js";
import { defineComponent, ref } from 'vue';

export default defineComponent ({
  
    props: {
        fileName: {type:String, default: "Syntax"},
        code: {type:String, default: `Consol.log("0123456789")"`},
    },

    setup(props)
    {
        const myTitle = ref(props.fileName);
        const myCode = ref(props.code);
        return {
            myCode, myTitle,
        }
    },

    mounted() {
        document.querySelectorAll("code").forEach((el)=>{
            hljs.highlightElement(el);
        })
    }
})
</script>
