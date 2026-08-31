"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './BgmController.module.css';

export default function BgmController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isGalaxyMode, setIsGalaxyMode] = useState(false);

  useEffect(() => {
    const handleGalaxy = (e: Event) => {
      const customEv = e as CustomEvent<{ active: boolean }>;
      setIsGalaxyMode(customEv.detail.active);
    };
    window.addEventListener('toggle-galaxy-mode', handleGalaxy);
    return () => window.removeEventListener('toggle-galaxy-mode', handleGalaxy);
  }, []);

  const asmrAudioRef = useRef<HTMLAudioElement | null>(null);
  const upThemeAudioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    // Audio 1: ASMR (40% volume)
    const asmr = new Audio('/sounds/숲과 바람과 비 ASMR.mp3');
    asmr.loop = true;
    asmr.volume = 0.4;

    // Audio 2: Up Theme (30% volume)
    const upTheme = new Audio('/sounds/Michael Giacchino - Up Theme Married Life (Soft Felt Piano Version).mp3');
    upTheme.loop = true;
    upTheme.volume = 0.3;

    asmrAudioRef.current = asmr;
    upThemeAudioRef.current = upTheme;

    const startAudioSequence = async () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;

      try {
        // Start ASMR sound first
        await asmr.play();
        setIsPlaying(true);

        // Start Up Theme 3 seconds after ASMR sound starts
        timerRef.current = setTimeout(async () => {
          try {
            await upTheme.play();
          } catch (e) {
            console.log('Up Theme audio play error:', e);
          }
        }, 3000);
      } catch (err) {
        console.log('Autoplay deferred, waiting for user interaction:', err);
        hasStartedRef.current = false;
      }
    };

    const handleUserInteraction = () => {
      if (!hasStartedRef.current) {
        startAudioSequence();
      }
    };

    window.addEventListener('pointerdown', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);

    return () => {
      window.removeEventListener('pointerdown', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
      if (timerRef.current) clearTimeout(timerRef.current);

      asmr.pause();
      upTheme.pause();
    };
  }, []);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (asmrAudioRef.current) {
      asmrAudioRef.current.muted = nextMuted;
    }
    if (upThemeAudioRef.current) {
      upThemeAudioRef.current.muted = nextMuted;
    }

    // Enable on first click if deferred by browser autoplay rules
    if (!hasStartedRef.current && !nextMuted) {
      hasStartedRef.current = true;
      if (asmrAudioRef.current) {
        asmrAudioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
      timerRef.current = setTimeout(() => {
        if (upThemeAudioRef.current) {
          upThemeAudioRef.current.play().catch(() => {});
        }
      }, 3000);
    }
  };

  if (isGalaxyMode) return null;

  return (
    <button 
      className={`${styles.audioButton} ${isMuted ? styles.muted : styles.active}`}
      onClick={toggleMute}
      aria-label={isMuted ? "Unmute Background Music" : "Mute Background Music"}
      title={isMuted ? "Unmute BGM" : "Mute BGM"}
    >
      {isMuted ? (
        /* Speaker Mute / Muted Icon */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      ) : (
        /* Speaker Playing / Sound Wave Icon */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      )}
    </button>
  );
}
