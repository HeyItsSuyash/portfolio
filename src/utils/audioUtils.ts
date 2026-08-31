"use client";

export const playHoverPop = () => {};
export const playClickThud = () => {};
export const playRevealSweep = () => {};
export const playSoftClick = () => {};
export const playScrollSound = () => {};

let gearAudio: HTMLAudioElement | null = null;
let isUnlocked = false;

const unlockAudio = () => {
  if (isUnlocked || typeof window === 'undefined') return;
  if (!gearAudio) {
    gearAudio = new Audio('/sounds/koiroylers-gear-click-351962.mp3');
  }
  gearAudio.play().then(() => {
    gearAudio?.pause();
    isUnlocked = true;
  }).catch(() => {});
  
  window.removeEventListener('pointerdown', unlockAudio);
  window.removeEventListener('keydown', unlockAudio);
};

if (typeof window !== 'undefined') {
  window.addEventListener('pointerdown', unlockAudio);
  window.addEventListener('keydown', unlockAudio);
}

export const playGearClick = (durationSeconds: number = 0.5, speedMultiplier: number = 1.0) => {
  // Gear sound removed per user request
};
