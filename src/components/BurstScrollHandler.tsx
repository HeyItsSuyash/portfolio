"use client";

import { useEffect, useRef } from 'react';
import { playGearClick } from '@/utils/audioUtils';

export default function BurstScrollHandler() {
  const lastTime = useRef(0);
  const stopTimer = useRef<NodeJS.Timeout | null>(null);
  const isGalaxyModeRef = useRef(false);

  useEffect(() => {
    const handleGalaxy = (e: Event) => {
      const customEv = e as CustomEvent<{ active: boolean }>;
      isGalaxyModeRef.current = customEv.detail.active;
    };
    window.addEventListener('toggle-galaxy-mode', handleGalaxy);
    return () => window.removeEventListener('toggle-galaxy-mode', handleGalaxy);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.snap-section'));
    if (sections.length === 0) return;

    const getCurrentSectionIndex = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (let i = 0; i < sections.length; i++) {
        const top = (sections[i] as HTMLElement).offsetTop;
        const height = (sections[i] as HTMLElement).offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          return i;
        }
      }
      return 0;
    };

    const burstJump = (direction: 1 | -1, deltaMs: number) => {
      const currentIndex = getCurrentSectionIndex();
      let targetIndex = currentIndex + direction;

      // Clamp bounds: scrolling down continuously advances forward without jumping back
      if (targetIndex >= sections.length) targetIndex = sections.length - 1;
      if (targetIndex < 0) targetIndex = 0;

      const targetEl = sections[targetIndex] as HTMLElement;
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });

        if (stopTimer.current) clearTimeout(stopTimer.current);

        stopTimer.current = setTimeout(() => {
          const finalIndex = getCurrentSectionIndex();
          const finalEl = sections[finalIndex] as HTMLElement;
          if (finalEl) {
            finalEl.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isGalaxyModeRef.current) return;
      if (['PageDown', 'ArrowDown', ' '].includes(e.key)) {
        e.preventDefault();
        const now = Date.now();
        const delta = now - lastTime.current;
        if (delta > 200) {
          lastTime.current = now;
          burstJump(1, delta);
        }
      } else if (['PageUp', 'ArrowUp'].includes(e.key)) {
        e.preventDefault();
        const now = Date.now();
        const delta = now - lastTime.current;
        if (delta > 200) {
          lastTime.current = now;
          burstJump(-1, delta);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });

    return () => {
      if (stopTimer.current) clearTimeout(stopTimer.current);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}
