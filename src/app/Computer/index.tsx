import React, { useState } from "react";
import "./Computer.scss";

const STROKE_WIDTH = 2;

const MacBook15 = ({ isOpen }: { isOpen: boolean }) => {
  const width = 150;
  const height = 110;

  return (
    <svg
      width={width}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="#b2b2b2"
        d="M2.57,109A1.58,1.58,0,0,1,1,107.43V101H149v6.43a1.58,1.58,0,0,1-1.57,1.57Z"
      />

      {/* open back */}
      {isOpen && (
        <g>
          <path
            strokeWidth={STROKE_WIDTH}
            stroke="var(--outlineColor)"
            fill="#b2b2b2"
            d="M145.65,5H4.35A3.35,3.35,0,0,0,1,8.36V98.83A6.19,6.19,0,0,0,7.21,105H142.79A6.19,6.19,0,0,0,149,98.83V8.36A3.35,3.35,0,0,0,145.65,5Z"
          />

          {/* apple logo */}
          <path
            fill="#fff"
            d="M79.62,55.27a3.89,3.89,0,0,1,2.07-3.57A5,5,0,0,0,78,50c-1.23,0-2.46.87-3.33.89S72.6,50,71.37,50s-4.3.89-4.3,5.1a11.83,11.83,0,0,0,3.13,7.83,2.38,2.38,0,0,0,2.78.59c1.11-.35.94-.49,1.73-.5s.61.15,1.73.5a3.26,3.26,0,0,0,3.32-.59A12,12,0,0,0,82.07,59,3.79,3.79,0,0,1,79.62,55.27Z"
          />
          <path
            fill="#fff"
            d="M74.59,50a4.6,4.6,0,0,1,1.23-3.1,4.46,4.46,0,0,1,2.48-1.18,4.1,4.1,0,0,1-1,2.95A4.84,4.84,0,0,1,74.59,50Z"
          />
        </g>
      )}

      {/* closed back */}
      {!isOpen && (
        <g>
          <rect
            strokeWidth={STROKE_WIDTH}
            stroke="var(--outlineColor)"
            fill="#b2b2b2"
            x={STROKE_WIDTH / 2}
            y={height - 10}
            width={width - STROKE_WIDTH}
            height={3}
            rx={2}
          />
        </g>
      )}
    </svg>
  );
};

export const Computer = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="computer" onClick={() => setOpen(!isOpen)}>
      <MacBook15 isOpen={isOpen} />
    </div>
  );
};
