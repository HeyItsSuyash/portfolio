'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './About.module.css';
import { playClickThud, playHoverPop } from '@/utils/audioUtils';
import gsap from 'gsap';

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const toggleFlip = () => {
    const newState = !isFlipped;
    setIsFlipped(newState);
    playClickThud();

    // Card Spring Animation
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotateY: newState ? 180 : 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.75)'
      });
    }

    // Avatar Frame Transition Animation
    if (frameRef.current) {
      gsap.fromTo(frameRef.current, 
        { scale: 1, rotate: 0 },
        { 
          scale: 1.1, 
          rotate: newState ? 10 : -10,
          duration: 0.4, 
          yoyo: true, 
          repeat: 1,
          ease: 'power2.out'
        }
      );
    }
  };

  return (
    <section id="about" className={styles.section}>
      <div className="section-header">
        <span className="section-label">01 — About</span>
      </div>
      <div className="section-title">Who I Am</div>
      
      <div className={styles.container}>
        {/* Left Side: Flip Card */}
        <div className={styles.leftSide}>
          <div className={styles.card} ref={cardRef}>
            <div className={styles.cardInner}>
              {/* Front: Background (Green Tile) */}
              <div className={`${styles.cardFront} ${styles.greenTile}`}>
                <h3>Background</h3>
                <p>
                  I&apos;m a CS undergraduate at MMMUT Gorakhpur and concurrently pursuing a B.Sc in Data
                  Science from IIT Madras. I founded the Computer Science &amp; Innovation Society at MMMUT,
                  built a cloud-native virtual lab serving 400+ concurrent users, and published research on
                  LLM bias detection with Taylor &amp; Francis. I move fast from idea to production.
                </p>
                <button className={styles.flipArrow} onClick={toggleFlip} onMouseEnter={playHoverPop}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Back: Impact (White Tile) */}
              <div className={`${styles.cardBack} ${styles.whiteTile}`}>
                <h3>Impact</h3>
                <div className={styles.statGrid}>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>25+</span>
                    <span className={styles.statDesc}>Projects Built</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>3+</span>
                    <span className={styles.statDesc}>Internships</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>8+</span>
                    <span className={styles.statDesc}>Years Craft</span>
                  </div>
                </div>
                <button className={styles.flipArrow} onClick={toggleFlip} onMouseEnter={playHoverPop}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Avatar / GIF */}
        <div className={styles.rightSide}>
          <div className={styles.avatarFrameWrapper} ref={frameRef}>
            <div className={styles.avatarFrame}>
              <Image 
                src={isFlipped ? "/images/avatar-images/ChatGPT Image May 2, 2026, 11_43_54 PM.png" : "/images/avatar-images/usinglaptop.png"}
                alt={isFlipped ? "Impact" : "Background"}
                width={400}
                height={400}
                className={styles.avatarImage}
              />
            </div>
            {/* Reduced Claymorphism Blobs */}
            <div className={`${styles.blob} ${styles.blob1}`} />
            <div className={`${styles.blob} ${styles.blob2}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
