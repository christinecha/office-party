import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Texture, Theme } from "../types";
import { ThemeEditor } from "./ThemeEditor";
import { drawPixel, PixelGrid } from "../shared/PixelGrid";
import { items } from "../shared/items";
import { ITEM_ID } from "../shared/items/ITEM_ID";

import "react-color-picker/index.css";
import "./index.scss";

const item = items[ITEM_ID.DESK_LEGS];

const original = {
  width: item.width,
  height: item.height,
  texture: item.textures["angled-wood"],
  theme: item.themes.oak,
};

const getTexture = (texture: Texture, width: number, height: number) => {
  const length = width * height;
  if (texture.length === height && texture.every((row) => row.length === width)) return texture;

  return new Array(height).fill(new Array(width).fill("a"));
};

const App = () => {
  const width = original.width;
  const height = original.height;

  const [renderTrigger, setRenderTrigger] = useState<number>();
  const textureRef = useRef<Texture>(getTexture(original.texture, width, height));
  const [theme, setTheme] = useState<Theme>(original.theme);
  const [colorKey, setColorKey] = useState<string>("_");

  useEffect(() => {
    const pixelGrid = new PixelGrid({
      items: [
        {
          width: items[ITEM_ID.DESK_TOP].width,
          height: items[ITEM_ID.DESK_TOP].height,
          texture: original.texture,
          theme: theme,
        },
      ],
      onPixelClick: ({ x, y }) => {
        drawPixel({ ctx: pixelGrid.ctx, x, y, color: theme[colorKey] });
        const texture = textureRef.current;
        const newTextureRow = texture[y].split("");
        newTextureRow[x] = colorKey;
        texture[y] = newTextureRow.join("");
        setRenderTrigger(Date.now());
      },
    });

    return () => {
      pixelGrid.destroy();
    };
  }, [colorKey, theme]);

  return (
    <div className="pixelator">
      <ThemeEditor theme={theme} selected={colorKey} onChange={setTheme} onSelect={setColorKey} />
      <div className="preview">
        <canvas id="pixel-grid" width={original.width} height={original.height}></canvas>
        <br />
        <div className="log">
          <h3>Texture</h3>
          {textureRef.current.map((row, i) => (
            <div key={i}>"{row}",</div>
          ))}
          <h3>Theme</h3>
          {JSON.stringify(theme)}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
