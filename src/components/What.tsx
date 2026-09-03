'use client';

import React from 'react';
import { LogoMarquee, Logo } from '@/components/ui/logo-marquee';
import { playHoverPop, playClickThud } from '@/utils/audioUtils';
import styles from './What.module.css';

const VENTURE_LOGOS: Logo[] = [
  {
    src: '/images/logo_ideas/earnbuddy.webp',
    alt: 'EarnBuddy',
  },
  {
    src: '/images/logo_ideas/oditor.webp',
    alt: 'Oditor',
  },
  {
    src: '/images/logo_ideas/polylearn.png',
    alt: 'PolyLearn',
  },
  {
    src: '/images/logo_ideas/prayukti.png',
    alt: 'Prayukti vLAB',
  },
  {
    src: '/images/logo_ideas/extrahand.png',
    alt: 'ExtraHand',
  },
  {
    src: '/images/logo_ideas/laterally_inverted_studio.png',
    alt: 'Laterally Inverted Studio',
  },
  {
    src: '/images/logo_ideas/pizza_project.png',
    alt: 'Pizza Project',
  },
  {
    src: '/images/logo_ideas/quick_question.png',
    alt: 'Quick Question',
  },
];

export default function What({ id = 'what' }: { id?: string }) {
  return (
    <section id={id} className={`snap-section ${styles.whatSection}`}>
      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header}>
          <h2 className={styles.title}>I am currently onto a lot of things</h2>
          <p className={styles.subtitle}>
            A lot of things are to be released soon, follow my journey on X to know more, or schedule a call with me to discuss about something you have in mind. I would love to connect and discuss with you!
          </p>
        </header>

        {/* Logo marquee using the revised transparent/crisp images from logo_ideas */}
        <div className="w-full py-8 flex flex-col items-center justify-center">
          <LogoMarquee
            logos={VENTURE_LOGOS}
            className="w-full"
            gap={96}
          />
        </div>

        {/* Action CTAs - Hero Section Button Style */}
        <div className={styles.ctaContainer}>
          <a
            href="https://x.com/HeyItsSuyash"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.fillButton}
            onMouseEnter={playHoverPop}
            onClick={playClickThud}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Follow on X
          </a>

          <a
            href="https://www.producthunt.com/@heyitssuyash"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ghostButton}
            onMouseEnter={playHoverPop}
            onClick={playClickThud}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.6 8.4h-3.4v4.2h3.4c1.16 0 2.1-.94 2.1-2.1s-.94-2.1-2.1-2.1zm-1.6-8.4C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm1.6 15.6h-3.4V18H7.2V6h6.4c2.82 0 5.1 2.28 5.1 5.1 0 2.55-1.87 4.5-4.3 4.5z" />
            </svg>
            Follow on Product Hunt
          </a>
        </div>

        {/* Theme-consistent closing quote */}
        <div className={styles.quoteContainer}>
          <p className={styles.quoteLine}>
            &ldquo;The woods are lovely, dark and deep,<br />
            But I have promises to keep, and miles to go before I sleep.&rdquo;
          </p>
          <span className={styles.quoteAuthor}>— Robert Frost</span>
        </div>
      </div>

      {/* Smooth Gradient Overlay Transitioning to Footer */}
      <div className={styles.bottomOverlay} />
    </section>
  );
}
