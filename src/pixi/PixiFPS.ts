import * as PIXI from "pixi.js";
import { PixiApp } from "./PixiApp";

class TestCircle extends PIXI.Graphics {
  public velX: number;
  public velY: number;
}

class PixiFPSRender extends PIXI.Container {
  private bg: PIXI.Graphics;
  private txt: PIXI.Text;

  constructor() {
    super();

    this.bg = new PIXI.Graphics();
    this.bg.beginFill(0x000000, 0.8);
    this.bg.drawRect(0, 0, 200, 40);
    this.bg.endFill();
    this.addChild(this.bg);

    const style = new PIXI.TextStyle({
      fontFamily: "D2coding",
      fill: "#ffffff",
    });

    this.txt = new PIXI.Text("", style);
    this.txt.position.set(2, 4);
    this.addChild(this.txt);
  }

  setFPS($n: number): void {
    this.txt.text = `FPS : ${$n >> 0}`;
  }
}

export class PixiFPS extends PixiApp {
  private radius = 50;
  private arrCicle: Array<TestCircle>;

  private tickFlag = false;
  private tickFnc: PIXI.TickerCallback<PIXI.UPDATE_PRIORITY>;

  private pixiFPS: PixiFPSRender;

  constructor(
    canvas: HTMLCanvasElement,
    pWidth = 1000,
    pHeight = 800,
    pAntialias = false
  ) {
    super(canvas, pWidth, pHeight, pAntialias);
    this.arrCicle = [];
    this.tickFnc = (delta: number) => {
      this.onUpdate(delta);
    };

    //PIXI.Ticker.system.maxFPS = 20;
  }

  public draw(): void {
    let shape: TestCircle;
    const rings = 40;

    const colors = [
      0x828b20, 0xb0ac31, 0xcbc53d, 0xfad779, 0xf9e4ad, 0xfaf2db, 0x563512,
      0x9b4a0b, 0xd36600, 0xfe8a00, 0xf9a71f,
    ];
    for (let i = 0; i < 400; i++) {
      shape = new TestCircle();
      for (let j = rings; j > 0; j--) {
        shape.beginFill(colors[(Math.random() * colors.length) | 0]);
        shape.drawCircle(0, 0, (this.radius * j) / rings);
        shape.endFill();
      }

      this.arrCicle.push(shape);

      shape.x = Math.random() * 1000;
      shape.y = Math.random() * 800;
      shape.velX = Math.random() * 10 - 5;
      shape.velY = Math.random() * 10 - 5;
      this.stage.addChild(shape);
    }

    this.tickFlag = true;
    //PIXI.Ticker.shared.add( this.tickFnc, PIXI.UPDATE_PRIORITY.NORMAL);
    this.ticker.add(this.tickFnc, PIXI.UPDATE_PRIORITY.NORMAL);

    this.pixiFPS = new PixiFPSRender();
    this.stage.addChild(this.pixiFPS);
  }

  public removeTick(): void {
    //PIXI.Ticker.shared.remove(this.tickFnc, PIXI.UPDATE_PRIORITY.NORMAL);
    this.ticker.remove(this.tickFnc, PIXI.UPDATE_PRIORITY.NORMAL);
  }

  private onUpdate(delta: number): void {
    if (!this.tickFlag) return;

    //console.log(PIXI.Ticker.system.FPS);

    this.pixiFPS.setFPS(PIXI.Ticker.system.FPS);

    // console.log(this.ticker.FPS);

    const w = 1100 + this.radius * 2;
    const h = 800 + this.radius * 2;
    const l = this.arrCicle.length;

    for (let i = 0; i < l; i++) {
      const shape = this.arrCicle[i];
      shape.x = ((shape.x + this.radius + shape.velX + w) % w) - this.radius;
      shape.y = ((shape.y + this.radius + shape.velY + h) % h) - this.radius;
    }
  }
}
