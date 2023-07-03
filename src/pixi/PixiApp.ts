import * as PIXI from "pixi.js";
// import System from '../system/System';

export class PixiApp extends PIXI.Application {
  constructor(
    canvas: HTMLCanvasElement,
    pWidth = 1000,
    pHeight = 800,
    pAntialias = false
  ) {
    super({
      width: pWidth,
      height: pHeight,
      backgroundColor: 0xd3d3d3,
      antialias: pAntialias,
      //transparent: true,
      resolution: window.devicePixelRatio || 1,
      view: canvas,
    });

    canvas.style.width = `100%`;
    canvas.style.maxWidth = `${pWidth}px`;
    canvas.style.height = `auto`;

    // System.Handle.addPixiApp(this);
  }

  removeApp(): void {
    //System.Handle.removePixiApp();
  }
}
