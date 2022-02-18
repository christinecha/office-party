import "./index.scss";
import objects from "./data.json";
import { items as allItems } from "../shared/items";
import { PixelGrid } from "../shared/PixelGrid";
import { Item, ItemData } from "../types";

const items = objects.map((obj: Item) => {
  const config = allItems[obj.id];
  return {
    width: config.width,
    height: config.height,
    texture: config.textures[obj.texture],
    theme: config.themes[obj.theme],
    position: obj.position || config.position,
  };
});

new PixelGrid({ items });
