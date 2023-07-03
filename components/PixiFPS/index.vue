<template>
    <canvas ref=cvs></canvas>
  </template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { PixiFPS } from '../../src/pixi/PixiFPS';
  
  let app: PixiFPS;
  
  export default defineComponent({
    components: {},
  
    setup() {
      const cvs = ref<HTMLCanvasElement | null>(null);
      return {cvs}
    },
  
    mounted():void {
      app = new PixiFPS(this.cvs as HTMLCanvasElement, 1100,400, true);
      app.draw();
    },
  });
  </script>
  
  <style scoped> 
  </style>
  
  
  
  