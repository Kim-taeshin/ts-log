import * as PIXI from "pixi.js";

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.provide("PIXI", PIXI);
});
