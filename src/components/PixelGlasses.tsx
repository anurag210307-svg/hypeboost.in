import React from 'react';

/**
 * Pixel Art Sunglasses ("Thug Life" style) matching the user's uploaded image.
 * Uses crisp pixelated rendering with accurate stepping and white reflection squares.
 */
export const PixelGlasses: React.FC<{ className?: string }> = ({ className = 'w-9 h-auto' }) => {
  return (
    <svg
      viewBox="0 0 160 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}
      aria-hidden="true"
    >
      {/* Top Bar Across Entire Frame */}
      <rect x="5" y="6" width="150" height="9" fill="#141414" />

      {/* Left Lens Body (Stepped Pixel Edges) */}
      <rect x="5" y="15" width="67" height="6" fill="#141414" />
      <rect x="12" y="21" width="60" height="6" fill="#141414" />
      <rect x="19" y="27" width="53" height="6" fill="#141414" />
      <rect x="26" y="33" width="40" height="6" fill="#141414" />
      <rect x="33" y="39" width="27" height="6" fill="#141414" />

      {/* Right Lens Body (Stepped Pixel Edges) */}
      <rect x="88" y="15" width="67" height="6" fill="#141414" />
      <rect x="88" y="21" width="60" height="6" fill="#141414" />
      <rect x="88" y="27" width="53" height="6" fill="#141414" />
      <rect x="94" y="33" width="40" height="6" fill="#141414" />
      <rect x="100" y="39" width="27" height="6" fill="#141414" />

      {/* Left Lens White Reflection Pixels (Staggered Chess Pattern) */}
      <rect x="14" y="15" width="7" height="6" fill="#FFFFFF" />
      <rect x="29" y="15" width="7" height="6" fill="#FFFFFF" />
      <rect x="21" y="21" width="7" height="6" fill="#FFFFFF" />
      <rect x="36" y="21" width="7" height="6" fill="#FFFFFF" />
      <rect x="29" y="27" width="7" height="6" fill="#FFFFFF" />
      <rect x="44" y="27" width="7" height="6" fill="#FFFFFF" />

      {/* Right Lens White Reflection Pixels (Staggered Chess Pattern) */}
      <rect x="90" y="15" width="7" height="6" fill="#FFFFFF" />
      <rect x="105" y="15" width="7" height="6" fill="#FFFFFF" />
      <rect x="97" y="21" width="7" height="6" fill="#FFFFFF" />
      <rect x="112" y="21" width="7" height="6" fill="#FFFFFF" />
      <rect x="105" y="27" width="7" height="6" fill="#FFFFFF" />
      <rect x="120" y="27" width="7" height="6" fill="#FFFFFF" />
    </svg>
  );
};
