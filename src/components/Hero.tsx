'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';
import gsap from 'gsap';
import InteractiveAvatar from './InteractiveAvatar';
import Preloader from './Preloader';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const bgNameRef = useRef<HTMLDivElement>(null);
  const definitionRef = useRef<HTMLDivElement>(null);
  const avatarWrapperRef = useRef<HTMLDivElement>(null);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    
    const tl = gsap.timeline();

    // Morphing Reveal
    tl.fromTo(avatarWrapperRef.current, 
      { scale: 0.4, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1.5, 
        ease: 'elastic.out(1, 0.6)' 
      }
    )
    .fromTo(bgNameRef.current,
      { y: 150, opacity: 0, scale: 0.5, rotate: 10 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        duration: 1.5, 
        ease: 'elastic.out(1, 0.4)' 
      },
      '-=1.2'
    )
    .fromTo(definitionRef.current,
      { x: 150, opacity: 0, skewX: 20 },
      { 
        x: 0, 
        opacity: 1, 
        skewX: 0,
        duration: 1.2, 
        ease: 'elastic.out(1, 0.7)' 
      },
      '-=0.8'
    );

    // Also reveal navbar (if it exists in DOM)
    gsap.fromTo('nav', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'back.out(1.5)', delay: 0.5 }
    );
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}
      
      <section className={styles.hero}>
        {/* Background Name */}
        <div className={styles.bgName} ref={bgNameRef} style={{ opacity: 0 }}>
          SUYASH
        </div>

        <div className={styles.container}>
          <div className={styles.imageWrapper} ref={avatarWrapperRef} style={{ opacity: 0 }}>
            <InteractiveAvatar />
          </div>
        </div>

        {/* Phonetic Definition */}
        <div className={styles.definition} ref={definitionRef} style={{ opacity: 0 }}>
          <div className={styles.defWord}>Suyash</div>
          <div className={styles.defType}>
            <span className={styles.phonetic}>/suːˈjʌʃ/ &nbsp;&nbsp;</span>(proper noun)
          </div>
          <div className={styles.defMeaning}>
            A masculine name of Sanskrit origin meaning &quot;radiant with glory.&quot;
          </div>
        </div>
      </section>
    </>
  );
}
