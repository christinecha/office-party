import { items } from "./items";
import { Item, ItemConfig, ItemData, RelativePosition } from "../types";

const scale = 3;

const setCanvasDimensions = (canvas: HTMLCanvasElement) => {
  canvas.style.width = `${canvas.width * scale}px`;
  canvas.style.height = `${canvas.height * scale}px`;
  canvas.style.imageRendering = "pixelated";
};

const getItemXY = (item: ItemData, canvas: HTMLCanvasElement) => {
  const { position, width, height } = item;

  let x: number = 0;
  let y: number = 0;

  let relX: number = 0;
  let relY: number = 0;

  if (position) {
    if (position.parentId) {
      const parentItem = items[position.parentId];
      const { x: parentX, y: parentY } = getItemXY(
        {
          width: parentItem.width,
          height: parentItem.height,
          position: parentItem.position,
        },
        canvas
      );
      relX = parentX;
      relY = parentY;
    }

    if (position.top !== undefined) y = position.top;
    if (position.bottom !== undefined) y = canvas.height - height - position.bottom;
    if (position.top === position.bottom) {
      y = (canvas.height - height) / 2;
    }

    if (position.left !== undefined) x = position.left;
    if (position.right !== undefined) x = canvas.width - width - position.right;
    if (position.left === position.right) {
      x = (canvas.width - width) / 2;
    }
  }

  x += relX;
  y += relY;

  return { x, y };
};

export const drawPixel = ({ ctx, x, y, color }: { ctx: CanvasRenderingContext2D; x: number; y: number; color: string }) => {
  ctx.fillStyle = color || "transparent";
  ctx.fillRect(x, y, 1, 1);
};

class PixelItem {
  item: ItemData;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor({ canvas, item }: { canvas: HTMLCanvasElement; item: ItemData }) {
    this.item = item;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.render();
  }

  drawPixel = ({ x, y, color }: { x: number; y: number; color: string }) => {
    this.ctx.fillStyle = color || "transparent";
    this.ctx.fillRect(x, y, 1, 1);
  };

  render() {
    const { texture, theme } = this.item;
    const { x: startX, y: startY } = getItemXY(this.item, this.canvas);

    texture.forEach((colorKeys, _y) => {
      colorKeys.split("").forEach((colorKey, _x) => {
        const x = startX + _x;
        const y = startY + _y;
        const color = theme[colorKey];
        this.drawPixel({ x, y, color });
      });
    });
  }
}

type OnPixelClick = ({ x, y }: { x: number; y: number }) => void;

export class PixelGrid {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  isDragging: boolean;
  onPixelClick: OnPixelClick;

  constructor({ items, onPixelClick }: { items: ItemData[]; onPixelClick?: OnPixelClick }) {
    this.canvas = document.getElementById("pixel-grid") as HTMLCanvasElement;
    setCanvasDimensions(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.isDragging = false;
    this.onPixelClick = onPixelClick;

    items.forEach((item: ItemData) => {
      new PixelItem({ canvas: this.canvas, item });
    });

    this.canvas.addEventListener("mousedown", this.onMouseDown);
    document.addEventListener("mouseup", this.onMouseUp);
    this.canvas.addEventListener("mousemove", this.onMouseMove);
    this.canvas.addEventListener("click", this.onClick);
  }

  destroy() {
    this.canvas.removeEventListener("mousedown", this.onMouseDown);
    document.removeEventListener("mouseup", this.onMouseUp);
    this.canvas.removeEventListener("mousemove", this.onMouseMove);
    this.canvas.removeEventListener("click", this.onClick);
  }

  onMouseDown = (e: MouseEvent) => {
    this.isDragging = true;
  };

  onMouseUp = (e: MouseEvent) => {
    this.isDragging = false;
  };

  onMouseMove = (e: MouseEvent) => {
    if (!this.isDragging) return;

    const pixelX = Math.floor(e.offsetX / scale);
    const pixelY = Math.floor(e.offsetY / scale);
    this.onPixelClick && this.onPixelClick({ x: pixelX, y: pixelY });
  };

  onClick = (e: MouseEvent) => {
    const pixelX = Math.floor(e.offsetX / scale);
    const pixelY = Math.floor(e.offsetY / scale);
    this.onPixelClick && this.onPixelClick({ x: pixelX, y: pixelY });
  };
}
