import React from "react";
import { Computer } from "../Computer";
import "./Desk.scss";

const STROKE_WIDTH = 2;

const DeskTopDefault72 = () => {
  const width = 720;
  const height = 20;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox={`0 0 ${width} ${height}`}
    >
      <rect
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="var(--deskTopColor1)"
        x={STROKE_WIDTH / 2}
        y={STROKE_WIDTH / 2}
        width={width - STROKE_WIDTH}
        height={height - STROKE_WIDTH}
        rx="1"
      />
    </svg>
  );
};

const DeskLegDefault = () => {
  const width = 30;
  const height = 300;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox={`0 0 ${width} ${height}`}
    >
      <rect
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="var(--deskTopColor1)"
        x={STROKE_WIDTH / 2}
        y={STROKE_WIDTH / 2}
        width={width - STROKE_WIDTH}
        height={height - STROKE_WIDTH}
      />
    </svg>
  );
};

const DESK_TOP = {
  DEFAULT_72: DeskTopDefault72,
};

export const Desk = () => {
  return (
    <div className="desk">
      <div className="desk-items" style={{ marginBottom: STROKE_WIDTH * -1 }}>
        <Computer />
      </div>
      <div className="top">
        <DeskTopDefault72 />
      </div>
      <div className="legs" style={{ marginTop: STROKE_WIDTH * -1 }}>
        <DeskLegDefault />
        <DeskLegDefault />
      </div>
    </div>
  );
};
