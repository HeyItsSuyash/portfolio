'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero({ id = 'hero' }: { id?: string }) {
  const heroRef = useRef<HTMLElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);
  const bgNameRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const definitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial entrance animation
    const tl = gsap.timeline();

    tl.fromTo(bgNameRef.current,
      { y: 120, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: 'power3.out'
      }
    )
      .fromTo(definitionRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out'
        },
        '-=0.9'
      );

    gsap.fromTo('nav',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.3 }
    );

    // Multilayer Parallax on Scroll & Mouse Movement
    const ctx = gsap.context(() => {
      // 1. Sky & Rooftop Parallax (shifts downward gently with depth)
      if (skyRef.current) {
        gsap.to(skyRef.current, {
          yPercent: 20,
          scale: 1.05,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          }
        });
      }

      // 2. Nebula / Starlight Ambient Layer Parallax
      if (nebulaRef.current) {
        gsap.to(nebulaRef.current, {
          yPercent: 35,
          opacity: 0.4,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          }
        });
      }

      // 3. Hero Title "SUYASH" (Scales down smoothly, floats upward in parallax with gradual fading)
      if (bgNameRef.current) {
        gsap.to(bgNameRef.current, {
          y: -180,
          scale: 0.88,
          opacity: 0.15,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          }
        });
      }

      // 4. Definition Block (Slides with parallax)
      if (definitionRef.current) {
        gsap.to(definitionRef.current, {
          y: 120,
          opacity: 0.2,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          }
        });
      }
    }, heroRef);

    // 2.5D Camera Drift & Micro-Tilt Reacting to Cursor Hover
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 2;
      const yPos = (clientY / window.innerHeight - 0.5) * 2;

      // 3D Perspective Tilt & Inertia on Massive Typography
      if (bgNameRef.current) {
        gsap.to(bgNameRef.current, {
          x: xPos * 28,
          y: yPos * 18,
          rotationY: xPos * 6,
          rotationX: -yPos * 5,
          duration: 0.8,
          ease: 'power2.out',
          transformPerspective: 1000,
          transformOrigin: 'center center',
        });
      }

      // Definition card subtle counter-parallax
      if (definitionRef.current) {
        gsap.to(definitionRef.current, {
          x: xPos * 12,
          y: yPos * 8,
          duration: 1.0,
          ease: 'power2.out',
        });
      }

      // Subtle atmospheric starlight bloom reaction
      if (nebulaRef.current) {
        gsap.to(nebulaRef.current, {
          x: -xPos * 18,
          y: -yPos * 12,
          duration: 1.4,
          ease: 'power2.out',
        });
      }
    };

    // Ambient floating 2.5D camera drift
    const driftAnimation = gsap.to(bgNameRef.current, {
      y: '+=8',
      rotationZ: 0.4,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      driftAnimation.kill();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} id={id} className={`${styles.hero} snap-section`}>
      {/* Background Layer: Night Sky & Rooftop Silhouette */}
      <div ref={skyRef} className={styles.skyLayer} />

      {/* Ambient Starlight & Nebula Parallax Layer */}
      <div ref={nebulaRef} className={styles.nebulaLayer} />

      {/* Foreground Hero Title & Subtitle */}
      <div className={styles.bgName} ref={bgNameRef}>
        <div className={styles.nameText}>SUYASH</div>
        <div ref={subtitleRef} className={styles.subtitle}>
          A JACK OF ALL TRADES, A MASTER OF <u className={styles.emphasis}>SOME</u>
        </div>
      </div>

      <div className={styles.container}>
      </div>

      {/* Phonetic Definition Layer */}
      <div className={styles.definition} ref={definitionRef}>
        <div className={styles.defWord}>Suyash</div>
        <div className={styles.defType}>
          <span className={styles.phonetic}>/suːˈjɑːʃ/ &nbsp;&nbsp;</span>(proper noun)
        </div>
        <div className={styles.defMeaning}>
          A masculine name of Sanskrit origin meaning &quot;radiant with glory.&quot;
        </div>
      </div>
    </section>
  );
}
