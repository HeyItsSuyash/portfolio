"use client";

import { useEffect, useRef } from 'react';
import { playGearClick } from '@/utils/audioUtils';

const SECTIONS = ['hero', 'who', 'what', 'why', 'where', 'when', 'how'];

export default function CustomScrollHandler() {
  const currentIndex = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    // Initial sync
    const hash = window.location.hash.replace('#', '');
    const idx = SECTIONS.indexOf(hash);
    if (idx !== -1) currentIndex.current = idx;

    const navigateTo = (newIndex: number) => {
      // Wrap around
      if (newIndex < 0) newIndex = SECTIONS.length - 1;
      if (newIndex >= SECTIONS.length) newIndex = 0;
      
      currentIndex.current = newIndex;
      const targetId = SECTIONS[newIndex];
      const targetEl = document.getElementById(targetId);
      
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'auto' });
        // Play rotary tick sound
        playGearClick(0.1);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;
      
      isScrolling.current = true;
      // Fast mechanical feeling throttle
      setTimeout(() => { isScrolling.current = false; }, 80); 
      
      if (e.deltaY > 0) {
        navigateTo(currentIndex.current + 1);
      } else if (e.deltaY < 0) {
        navigateTo(currentIndex.current - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        navigateTo(currentIndex.current + 1);
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        navigateTo(currentIndex.current - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}
