'use client';

import CustomCursor from "@/components/CustomCursor";

import { useEffect, useState } from 'react';
import Nav from '@/components/Nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { playRevealSweep, playSoftClick, playScrollSound } from '@/utils/audioUtils';

import BgmController from '@/components/BgmController';
import LoadingScreen from '@/components/LoadingScreen';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isGalaxyMode, setIsGalaxyMode] = useState(false);

  useEffect(() => {
    const handleGalaxy = (e: Event) => {
      const customEv = e as CustomEvent<{ active: boolean }>;
      setIsGalaxyMode(customEv.detail.active);
    };
    window.addEventListener('toggle-galaxy-mode', handleGalaxy);
    return () => window.removeEventListener('toggle-galaxy-mode', handleGalaxy);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Global reveal animation for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(section, { opacity: 1 }, 
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none none',
            onEnter: () => {
              playRevealSweep();
            }
          }
        }
      );
    });

    // Staggered reveal for cards and list items
    const staggerItems = ['[class*="card"]', '[class*="stat"]', '[class*="group"]', '[class*="cell"]', 'li'];
    staggerItems.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        gsap.fromTo(elements,
          { opacity: 0, y: 50, scale: 0.7 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: elements[0],
              start: 'top 95%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });

    // Scroll sound system
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 150) {
        playScrollSound();
        lastScrollY = currentScrollY;
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <BgmController />
      {!isGalaxyMode && (
        <img 
          src="/images/logo.png" 
          alt="Watermark Logo" 
          style={{
            position: 'fixed',
            top: '24px',
            left: '32px',
            width: '36px',
            height: 'auto',
            zIndex: 99,
            opacity: 0.75,
            pointerEvents: 'none',
          }} 
        />
      )}
      
      <Nav />
      {children}
    </>
  );
}
