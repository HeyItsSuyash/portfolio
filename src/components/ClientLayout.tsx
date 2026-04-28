'use client';

import { useEffect } from 'react';
import Nav from '@/components/Nav';
import CustomCursor from '@/components/CustomCursor';
import ParticlesBackground from '@/components/ParticlesBackground';
import ScrollToTop from '@/components/ScrollToTop';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { scrambleText } from '@/utils/gsapUtils';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scramble Text for Headings
    const headingSelectors = ['.section-title', '[class*="heroTitle"]', '[class*="sectionTitle"]'];
    headingSelectors.forEach(selector => {
      const headings = document.querySelectorAll(selector);
      headings.forEach(heading => {
        const text = (heading as HTMLElement).innerText;
        ScrollTrigger.create({
          trigger: heading,
          start: 'top 90%',
          onEnter: () => scrambleText(heading as HTMLElement, text, 1.5),
          once: true
        });
      });
    });

    // Global reveal animation for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 20 
        }, 
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none none'
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
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: elements[0],
              start: 'top 95%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });

  }, []);

  return (
    <>
      <CustomCursor />
      <ParticlesBackground />
      <Nav />
      {children}
      <ScrollToTop />
    </>
  );
}
