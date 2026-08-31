"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import styles from './Nav.module.css';
import { playHoverPop, playGearClick } from '@/utils/audioUtils';

const CYCLES = 10;
const BASE_NAV = [
  { key: 'hero', title: 'HOME', hover: 'WELCOME, FRIEND' },
  { key: 'who', title: 'WHO', hover: 'WHO AM I?' },
  { key: 'what', title: 'WHAT', hover: 'WHAT ARE MY ROOTS?' },
  { key: 'why', title: 'WHY', hover: 'WHY SO SCATTERED?' },
  { key: 'where', title: 'WHERE', hover: 'WHERE DO WE START?' },
  { key: 'when', title: 'WHEN', hover: 'WHEN NOTHING' },
  { key: 'how', title: 'HOW', hover: 'HOW DO WE TALK?' },
];

const NAV_ITEMS: { id: string; title: string; hover: string }[] = [];

for (let c = 1; c <= CYCLES; c++) {
  const suffix = c === 1 ? '' : `-${c}`;
  BASE_NAV.forEach(item => {
    NAV_ITEMS.push({
      id: `${item.key}${suffix}`,
      title: item.title,
      hover: item.hover
    });
  });
}

export default function Nav() {
  const [activeId, setActiveId] = useState('hero');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isGalaxyMode, setIsGalaxyMode] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleGalaxy = (e: Event) => {
      const customEv = e as CustomEvent<{ active: boolean }>;
      setIsGalaxyMode(customEv.detail.active);
    };
    window.addEventListener('toggle-galaxy-mode', handleGalaxy);
    return () => window.removeEventListener('toggle-galaxy-mode', handleGalaxy);
  }, []);
  
  const x = useMotionValue(0);
  const controls = useAnimation();
  const isDragging = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isDragging.current) {
          setActiveId(entry.target.id);
        }
      });
    }, { threshold: 0.5 });
    
    NAV_ITEMS.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

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

  const handleDrag = (e: any, info: any) => {
    isDragging.current = true;
    const velocity = Math.abs(info.velocity.x);
    if (velocity > 10) {
      const duration = Math.min(Math.max(velocity / 1000, 0.1), 1.0);
      playGearClick(duration);
    }
  };

  const handleDragEnd = (e: any, info: any) => {
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
    
    const targetSection = document.getElementById(closestItem.id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (item: any) => {
    setActiveId(item.id);
    const targetSection = document.getElementById(item.id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isGalaxyMode) return null;

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navDialerWrapper} ref={containerRef}>
        <div className={styles.centerIndicator}></div>
        
        <motion.div 
          className={styles.dialerTrack} 
          drag="x"
          dragConstraints={{ left: -10000, right: 10000 }}
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
                onMouseEnter={() => { setHoveredId(item.id); playHoverPop(); }}
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
            )
          })}
        </motion.div>
      </div>
    </nav>
  );
}
