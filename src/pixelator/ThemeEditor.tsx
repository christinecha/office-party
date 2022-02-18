import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { Theme } from "../types";

export const ThemeEditor = ({ theme, selected, onChange, onSelect }: { theme: Theme; selected: string; onChange: (theme: Theme) => void; onSelect: (key: string) => void }) => {
  const [editing, setEditing] = useState<string>();

  const arr: JSX.Element[] = [];

  const colorKeys = [...Object.keys(theme), "_"];

  const updateTheme = (key: string, value: string) => {
    const newTheme = { ...theme };
    newTheme[key] = value;
    onChange(newTheme);
  };

  return (
    <div className="colors">
      {editing && (
        <ChromePicker
          color={theme[editing]}
          onChange={(color) => {
            updateTheme(editing, color.hex);
          }}
        />
      )}
      {colorKeys.map((key) => {
        const color = theme[key] || "transparent";
        return (
          <div key={key} className="color" data-is-selected={selected === key}>
            <div className="preview" style={{ backgroundColor: color, color }} onClick={() => onSelect(key)}></div>
            {key !== "_" && <button onClick={() => setEditing(key)}>edit</button>}
          </div>
        );
      })}
    </div>
  );
};
