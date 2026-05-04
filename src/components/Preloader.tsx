'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Preloader.module.css';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 5 second loading progress
    const startTime = Date.now();
    const duration = 5000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress === 100) {
        clearInterval(interval);
        setTimeout(handleComplete, 400);
      }
    }, 50);

    // Goofy wiggle animation
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        rotate: 5,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      
      gsap.to(circleRef.current, {
        y: -10,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }

    return () => clearInterval(interval);
  }, []);

  const handleComplete = () => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // Lift the white screen from top to reveal hero
    tl.to(barRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3
    })
    .to(containerRef.current, {
      yPercent: -100, // Lift from top
      duration: 1.2,
      ease: 'power4.inOut'
    }, '-=0.1')
    .to(circleRef.current, {
      scale: 1.2, // Small pop instead of full expansion
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut'
    }, '-=1.0');
  };

  return (
    <div className={styles.overlay} ref={containerRef}>
      <div className={styles.center}>
        <div className={styles.whiteFrame} ref={circleRef}>
          <div className={styles.greenCircle}>
            <div className={styles.avatarMini}>
              <Image 
                src="/images/hero-avatar/main.png" 
                alt="Loading..." 
                width={120} 
                height={120} 
                priority
              />
            </div>
          </div>
        </div>
        
        <div className={styles.loaderContainer} ref={barRef}>
          <div className={styles.loaderBar}>
            <div 
              className={styles.fill} 
              style={{ width: `${progress}%` }} 
            />
          </div>
          <div className={styles.statusText}>
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
}
