'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Center the 40px by 40px cursor (20px offset)
        cursorRef.current.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;

        // Determine context color
        const target = e.target as Element;
        if (target && target.closest) {
          const isLight = target.closest('.light-section');
          // If over a light section, make cursor green. Otherwise white.
          if (isLight) {
            cursorRef.current.style.backgroundColor = 'var(--clay-primary)';
          } else {
            cursorRef.current.style.backgroundColor = 'white';
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
