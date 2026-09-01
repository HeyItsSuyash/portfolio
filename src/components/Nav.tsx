"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import styles from './Nav.module.css';

const NAV_ITEMS = [
  { id: 'hero', title: 'HOME', hover: 'WELCOME, FRIEND' },
  { id: 'who', title: 'WHO', hover: 'WHO AM I?' },
  { id: 'when', title: 'WHEN', hover: "'WHEN' OF THINGS" },
  { id: 'why', title: 'WHY', hover: 'WHY CHOOSE YOU?' },
  { id: 'where', title: 'WHERE', hover: 'WHERE DO WE START?' },
  { id: 'what', title: 'WHAT', hover: "WHAT I'M UPTO" },
  { id: 'how', title: 'HOW', hover: 'HOW DO WE TALK?' },
];

export default function Nav() {
  const [activeId, setActiveId] = useState('hero');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const x = useMotionValue(0);
  const controls = useAnimation();
  const isDragging = useRef(false);

  // Smooth scroll handler with gentle easing
  const smoothScrollTo = useCallback((id: string) => {
    const targetSection = document.getElementById(id);
    if (!targetSection) return;

    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // gentle 1s scroll
    let start: number | null = null;

    // Cubic ease-in-out curve
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, []);

  // Active Section Spy using reliable scroll calculation
  useEffect(() => {
    const handleScroll = () => {
      if (isDragging.current) return;

      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      let currentActive = NAV_ITEMS[0].id;

      for (let i = 0; i < NAV_ITEMS.length; i++) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentActive = item.id;
            break;
          }
        }
      }

      // If scrolled to bottom, highlight last item
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentActive = NAV_ITEMS[NAV_ITEMS.length - 1].id;
      }

      setActiveId(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth dialer centering animation when activeId changes
  useEffect(() => {
    if (isDragging.current) return;

    const activeIndex = NAV_ITEMS.findIndex(i => i.id === activeId);
    const activeEl = itemRefs.current[activeIndex];
    const container = containerRef.current;

    if (activeEl && container) {
      const containerCenter = container.offsetWidth / 2;
      const elCenter = activeEl.offsetLeft + (activeEl.offsetWidth / 2);

      const targetX = containerCenter - elCenter;
      controls.start({ x: targetX, transition: { type: 'spring', stiffness: 220, damping: 24, mass: 0.8 } });
    }
  }, [activeId, controls]);

  const handleDrag = () => {
    isDragging.current = true;
  };

  const handleDragEnd = () => {
    isDragging.current = false;

    const container = containerRef.current;
    if (!container) return;

    const containerCenter = container.offsetWidth / 2;
    const currentX = x.get();

    let closestItem = NAV_ITEMS[0];
    let minDistance = Infinity;

    itemRefs.current.forEach((el, index) => {
      if (el) {
        const elCenter = el.offsetLeft + (el.offsetWidth / 2) + currentX;
        const distance = Math.abs(containerCenter - elCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestItem = NAV_ITEMS[index];
        }
      }
    });

    setActiveId(closestItem.id);
    smoothScrollTo(closestItem.id);
  };

  const handleClick = (item: any) => {
    setActiveId(item.id);
    smoothScrollTo(item.id);
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navDialerWrapper} ref={containerRef}>
        <div className={styles.centerIndicator}></div>

        <motion.div
          className={styles.dialerTrack}
          drag="x"
          dragConstraints={{ left: -1000, right: 1000 }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          style={{ x }}
          animate={controls}
        >
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeId === item.id;
            const distance = Math.abs(NAV_ITEMS.findIndex(i => i.id === activeId) - index);

            let scale = 1;
            let opacity = 1;
            if (distance === 1) { scale = 0.7; opacity = 0.5; }
            else if (distance > 1) { scale = 0.45; opacity = 0.2; }

            return (
              <div
                key={item.id}
                ref={el => { itemRefs.current[index] = el; }}
                className={`${styles.dialerItem} ${isActive ? styles.active : ''}`}
                style={{ transform: `scale(${scale})`, opacity }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleClick(item)}
              >
                {isActive ? item.hover : item.title}
                {isActive && (
                  <motion.div
                    key="activeUnderline"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    exit={{ scaleX: 0, opacity: 0 }}
                    className={styles.activeUnderline}
                    style={{ transformOrigin: 'center center' }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </nav>
  );
}
