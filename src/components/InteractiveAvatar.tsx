import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import styles from './InteractiveAvatar.module.css';

export default function InteractiveAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- BREATHING ANIMATION ---
    const breathing = gsap.to(containerRef.current, {
      scale: 1.005,
      y: -2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // --- PARALLAX SYSTEM ---
    const mouseCtx = { x: 0, y: 0, lerpX: 0, lerpY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouseCtx.x = (e.clientX / window.innerWidth) - 0.5;
      mouseCtx.y = (e.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const ticker = () => {
      mouseCtx.lerpX += (mouseCtx.x - mouseCtx.lerpX) * 0.05;
      mouseCtx.lerpY += (mouseCtx.y - mouseCtx.lerpY) * 0.05;

      if (avatarRef.current) {
        gsap.set(avatarRef.current, { 
          x: mouseCtx.lerpX * 15,
          y: mouseCtx.lerpY * 10,
          rotateY: mouseCtx.lerpX * 5,
          rotateX: -mouseCtx.lerpY * 5
        });
      }
    };

    gsap.ticker.add(ticker);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.ticker.remove(ticker);
      breathing.kill();
    };
  }, []);

  const mainSrc = "/images/hero-avatar/main.png";

  return (
    <div className={styles.avatarWrapper} ref={containerRef}>
      <div className={styles.avatarMain} ref={avatarRef}>
        {/* Main Character */}
        <Image 
          src={mainSrc} 
          alt="Suyash Shukla" 
          width={1000} 
          height={1000} 
          priority 
          className={styles.avatarImage}
        />
      </div>
      
      {/* Soft Shadow */}
      <div className={styles.avatarShadow} />
    </div>
  );
}
