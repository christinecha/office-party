import React from "react";
import "./Chair.scss";

const STROKE_WIDTH = 2;

const ErgonomicDefault = () => {
  const width = 300;
  const height = 420;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox={`0 0 ${width} ${height}`}
    >
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="#000"
        d="M150.06,244,64,241.32v8.14c0,6.47,4.13,8.54,7.13,8.54s32.37-7,32.37-7h15.63c1,2,8,3,8,3,0,3-1,4,7,4.91a71.58,71.58,0,0,0,9,.39v37.76a4.62,4.62,0,0,0-4,4.57V370s3,3,10.87,3h.13c7.9,0,10.87-3,10.87-3V301.63a4.62,4.62,0,0,0-4-4.57V259.3a71.66,71.66,0,0,0,9-.39c8-.91,7-1.91,7-4.91,0,0,7-1,8-3h15.63S226,258,229,258s7.13-2.07,7.13-8.54v-8.14Z"
      />
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="var(--chairColor2)"
        d="M260.81,204s.4,9.3-12.7,9.3H150v.06H52.59c-13.1,0-12.7-9.3-12.7-9.3H33.7c0,19,21,19,21,19,7,9,47,13,49,15s6.56,7,6.56,7H150.7V245h39.74s4.56-5,6.56-7,42-6,49-15c0,0,21,0,21-19Z"
      />
      {/* seat back */}
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="var(--chairColor1)"
        d="M236,130c-1-19-9-84-10-101s0-22-19-24a479,479,0,0,0-57-3A479,479,0,0,0,93,5C74,7,75,12,74,29s-9,82-10,101,4,35,14,44,41,19,72,19,62-10,72-19S237,149,236,130Z"
      />

      {/* arm rest support L */}
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="var(--chairColor2)"
        d="M259,140v64h11V140c0-5,2-9,6-9a6,6,0,0,0,5.46-3H255.84S259,135,259,140Z"
      />
      {/* arm rest cushion L */}
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="var(--chairColor2)"
        d="M254.6,118h27.8a4.6,4.6,0,0,1,4.6,4.6v2.48a2.93,2.93,0,0,1-2.93,2.93H252.93a2.93,2.93,0,0,1-2.93-2.93V122.6A4.6,4.6,0,0,1,254.6,118Z"
      />
      {/* arm rest support R */}
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="var(--chairColor2)"
        d="M41.7,140.06v64h-11v-64c0-5-2-9-6-9a6,6,0,0,1-5.46-3H44.86S41.7,135.06,41.7,140.06Z"
      />
      {/* arm rest cushion R */}
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="var(--chairColor2)"
        d="M16.63,118.06H47.77A2.93,2.93,0,0,1,50.7,121v2.48a4.6,4.6,0,0,1-4.6,4.6H18.3a4.6,4.6,0,0,1-4.6-4.6V121A2.93,2.93,0,0,1,16.63,118.06Z"
        transform="translate(64.4 246.11) rotate(-180)"
      />

      {/* seat */}
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="var(--chairColor1)"
        d="M229,176c-14,0-24.12,6.39-37,10s-35,5-42,5-29.12-1.21-42-4.82-23-10-37-10-25,10-23,28,21,23,40,27,42,7.07,62,7.07S193,235,212,231s38-9,40-27S243,176,229,176Z"
      />

      {/* wheels */}
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="#000"
        d="M160.22,393.89A2.12,2.12,0,0,0,158.1,392H141.9a2.12,2.12,0,0,0-2.12,1.89,65.91,65.91,0,0,0,0,20.22A2.12,2.12,0,0,0,141.9,416H144v-9h12v9h2.1a2.12,2.12,0,0,0,2.12-1.89,65.91,65.91,0,0,0,0-20.22Z"
      />

      {/* wheel mid L */}
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="#000"
        d="M283.22,371.89A2.12,2.12,0,0,0,281.1,370H266.9a2.12,2.12,0,0,0-2.12,1.89,65.91,65.91,0,0,0,0,20.22A2.12,2.12,0,0,0,266.9,394H269v-9h10v9h2.1a2.12,2.12,0,0,0,2.12-1.89,65.91,65.91,0,0,0,0-20.22Z"
      />
      {/* wheel back L */}
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="#000"
        d="M225.41,349.16a1.63,1.63,0,0,0-1.62-1.45H212.21a1.63,1.63,0,0,0-1.62,1.45,50.54,50.54,0,0,0,0,15.4,1.62,1.62,0,0,0,1.62,1.44h1.6v-6.86h8.38V366h1.6a1.62,1.62,0,0,0,1.62-1.44,50.54,50.54,0,0,0,0-15.4Z"
      />
      {/* wheel back R */}
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="#000"
        d="M74.8,349.16a1.62,1.62,0,0,1,1.61-1.45H88a1.62,1.62,0,0,1,1.61,1.45,50.54,50.54,0,0,1,0,15.4A1.62,1.62,0,0,1,88,366H86.39v-6.86H78V366h-1.6a1.62,1.62,0,0,1-1.61-1.44,49.71,49.71,0,0,1,0-15.4Z"
      />
      {/* wheel mid R */}
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="#000"
        d="M17,371.89A2.12,2.12,0,0,1,19.1,370H33.31a2.14,2.14,0,0,1,2.12,1.89A59,59,0,0,1,36.2,382a59,59,0,0,1-.77,10.11A2.14,2.14,0,0,1,33.31,394H31.2v-9h-10v9H19.1A2.12,2.12,0,0,1,17,392.11a65.91,65.91,0,0,1,0-20.22Z"
      />

      {/* spinner shadow */}
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="#b9b9b9"
        d="M143.2,371v18c0,2.37,3.8,3,6.8,3s7-.78,7-3V371Z"
      />
      {/* spinner shadow */}
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="#b9b9b9"
        d="M222.65,340.54V331.1l-58.07-12.44S157,322,150,322s-14.38-3.34-14.38-3.34L77.56,331.1v9.44L22.2,359v7c0,2.34,0,4,3.66,4H30.2v-5l103-21c4,2,11.32,2.48,16.56,2.48S163,346,167,344l103,21v5h4.34c3.66,0,3.66-1.66,3.66-4v-7Z"
      />
      {/* spinner highlight */}
      <path
        strokeWidth={STROKE_WIDTH}
        stroke="var(--outlineColor)"
        fill="#ebebeb"
        d="M277,357.33C274,356,173.38,325.76,169,324c-5-2,6,0,11,1s36,7,40,7,4-2,0-3-59-11-59-11a79.67,79.67,0,0,1-11,1,75.09,75.09,0,0,1-10.8-1s-55,10-59,11-4,3,0,3,35-6,40-7,16-3,11-1c-4.37,1.75-105,32-107.94,33.32S22.2,361,26.2,360s106-33,110-34,6,1,6,6,1,37,1,41c0,8,13.8,8,13.8,0,0-4,1-36,1-41s2-7,6-6,106,33,110,34S279.89,358.67,277,357.33Z"
      />
    </svg>
  );
};

export const Chair = () => {
  return (
    <div className="chair">
      <ErgonomicDefault />
    </div>
  );
};
