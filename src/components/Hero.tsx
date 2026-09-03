'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero({ id = 'hero' }: { id?: string }) {
  const smoothScrollTo = (targetId: string) => {
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <section id={id} className={styles.hero}>
      {/* Background Header Image */}
      <div className={styles.skyLayer} />

      {/* Hero Title, Subtitle & CTAs */}
      <div className={styles.bgName}>
        <div className={styles.nameText}>SUYASH</div>
        <div className={styles.subtitle}>
          A JACK OF ALL TRADES, A MASTER OF <u className={styles.emphasis}>SOME</u>
        </div>

        {/* CTA Buttons closely below subtitle */}
        <div className={styles.ctaGroup}>
          <Link
            href="/knowledge"
            className={styles.fillButton}
          >
            View Simplified
          </Link>
          <a
            href="#where"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('where');
            }}
            className={styles.ghostButton}
          >
            Browse Projects
          </a>
        </div>
      </div>

      {/* Bottom Black Gradient Overlay Transitioning to Next Section */}
      <div className={styles.bottomOverlay} />
    </section>
  );
}
