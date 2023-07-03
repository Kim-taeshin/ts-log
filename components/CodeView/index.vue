<template>
    <div class="code-wrap">
        <div>{{ myTitle }}</div>
        <pre><code class="code-block">{{ myCode }}</code></pre>
    </div>
</template>

<script lang="ts">

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
        const nuxtApp = useNuxtApp()
        const hl = nuxtApp.hl;
    }
})
</script>


