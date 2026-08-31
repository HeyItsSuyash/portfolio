"use client";

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 2147483647,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) rotate(-30deg)`,
        transition: 'transform 0.02s linear',
        filter: 'drop-shadow(0 0 8px rgba(245, 245, 220, 0.45)) drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.7))',
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <polygon
          points="12,2 22,22 2,22"
          fill="#E5E5C8"
        />
      </svg>
    </div>
  );
}
