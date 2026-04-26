'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ParticlesBackground() {
  useEffect(() => {
    const initParticles = () => {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.particlesJS) {
        // @ts-ignore
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 80,
              density: { enable: true, value_area: 800 },
            },
            color: { value: '#ffffff' },
            shape: {
              type: 'triangle',
              stroke: { width: 0, color: '#000000' },
              polygon: { nb_sides: 3 },
            },
            opacity: {
              value: 0.15,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.15,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: 'window',
            events: {
              onhover: { enable: true, mode: 'bubble' }, // Grab can sometimes draw lines over content, bubble expands them slightly or repulse to gently move away
              onclick: { enable: false, mode: 'push' },
              resize: true,
            },
            modes: {
              grab: { distance: 140, line_linked: { opacity: 0.3 } },
              bubble: { distance: 200, size: 5, duration: 2, opacity: 0.3, speed: 3 },
              repulse: { distance: 100, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        });
      }
    };

    if (typeof window !== 'undefined' && (window as any).particlesJS) {
      initParticles();
    }

    const handleLoad = () => initParticles();
    window.addEventListener('particlesLoaded', handleLoad);
    return () => window.removeEventListener('particlesLoaded', handleLoad);
  }, []);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('particlesLoaded'));
          }
        }}
      />
      <div
        id="particles-js"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1, // Keep behind content
          pointerEvents: 'none', // Prevent blocking clicks
          background: 'linear-gradient(to bottom, #050505 0%, #0a0a0a 100%)', // Very dark gradient
        }}
      />
    </>
  );
}
