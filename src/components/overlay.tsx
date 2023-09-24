import React from "react";

const NoiseOverlay = () => {
  return (
    <svg className="pointer-events-none fixed inset-0 isolate z-50 h-full w-full opacity-80 mix-blend-soft-light">
      <filter id="patrickxin">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.80"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#patrickxin)" />
    </svg>
  );
};

export default NoiseOverlay;
