'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './FloatingShapes.module.css';

export default function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shapes = containerRef.current?.children;
    if (!shapes) return;

    Array.from(shapes).forEach((shape, i) => {
      // Random movement
      gsap.to(shape, {
        y: 'random(-100, 100)',
        x: 'random(-50, 50)',
        rotation: 'random(-45, 45)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Scroll parallax
      gsap.to(shape, {
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1, // Using fixed numeric value for scrub to fix TS error
        },
        y: (i + 1) * 150,
      });
    });
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={`${styles.shape} ${styles.circle1}`} />
      <div className={`${styles.shape} ${styles.circle2}`} />
      <div className={`${styles.shape} ${styles.square1}`} />
    </div>
  );
}
