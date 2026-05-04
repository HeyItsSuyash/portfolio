'use client';

import { useEffect } from 'react';
import Nav from '@/components/Nav';
import CustomCursor from '@/components/CustomCursor';
import ParticlesBackground from '@/components/ParticlesBackground';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingShapes from '@/components/FloatingShapes';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { playRevealSweep, playSoftClick, playScrollSound } from '@/utils/audioUtils';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Global reveal animation for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8
        }, 
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
      <CustomCursor />
      <ParticlesBackground />
      <FloatingShapes />
      <Nav />
      {children}
      <ScrollToTop />
    </>
  );
}
