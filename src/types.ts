export type Item = {
  id: string;
  texture: string;
  theme: string;
  position?: RelativePosition;
};

export type ItemData = {
  width: number;
  height: number;
  texture?: Texture;
  theme?: Theme;
  position?: RelativePosition;
};

export type Texture = string[];
export type Theme = Record<string, string>;
export type RelativePosition = {
  parentId?: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type ItemConfig = {
  width: number;
  height: number;
  textures: Record<string, Texture>;
  themes: Record<string, Theme>;
  position?: RelativePosition;
};
