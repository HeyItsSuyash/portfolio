'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const initParticles = () => {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.particlesJS) {
        // @ts-ignore
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 30,
              density: { enable: true, value_area: 800 },
            },
            color: { value: '#065f46' },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.15,
              random: true,
              anim: { enable: true, speed: 0.5, opacity_min: 0.05, sync: false },
            },
            size: {
              value: 12,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 200,
              color: '#065f46',
              opacity: 0.05,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.8,
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
              onhover: { enable: true, mode: 'bubble' },
              onclick: { enable: false, mode: 'push' },
              resize: true,
            },
            modes: {
              bubble: { distance: 200, size: 16, duration: 2, opacity: 0.3, speed: 3 },
              repulse: { distance: 100, duration: 0.4 },
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
          zIndex: -1,
          pointerEvents: 'none',
          background: 'var(--clay-bg)',
          overflow: 'hidden',
        }}
      />
    </>
  );
}
