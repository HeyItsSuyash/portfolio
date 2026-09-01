'use client';

import FUIBentoGridDark from '@/components/ui/bento';
import styles from './What.module.css';

// Natural organic starry sky coordinates with true non-collinear scatter
const STATIC_STARS = [
  { top: '3.4%', left: '12.8%', size: 1.2, opacity: 0.35, duration: 3.2, delay: 0.4 },
  { top: '6.1%', left: '84.2%', size: 0.8, opacity: 0.22, duration: 4.1, delay: 1.2 },
  { top: '8.9%', left: '41.5%', size: 1.6, opacity: 0.45, duration: 2.8, delay: 0.8 },
  { top: '11.3%', left: '67.3%', size: 1.0, opacity: 0.28, duration: 3.6, delay: 2.1 },
  { top: '13.7%', left: '22.9%', size: 2.0, opacity: 0.50, duration: 4.5, delay: 0.1 },
  { top: '15.2%', left: '91.4%', size: 0.8, opacity: 0.18, duration: 3.0, delay: 1.7 },
  { top: '17.8%', left: '53.1%', size: 1.4, opacity: 0.38, duration: 3.9, delay: 2.4 },
  { top: '19.4%', left: '8.6%', size: 1.1, opacity: 0.25, duration: 4.3, delay: 0.6 },
  { top: '22.0%', left: '76.8%', size: 1.8, opacity: 0.42, duration: 3.1, delay: 1.9 },
  { top: '24.5%', left: '33.2%', size: 0.9, opacity: 0.20, duration: 2.7, delay: 0.3 },
  { top: '26.8%', left: '96.3%', size: 1.3, opacity: 0.32, duration: 4.8, delay: 2.7 },
  { top: '29.1%', left: '17.4%', size: 1.5, opacity: 0.48, duration: 3.4, delay: 1.1 },
  { top: '31.6%', left: '61.7%', size: 0.8, opacity: 0.15, duration: 4.0, delay: 0.5 },
  { top: '33.9%', left: '46.8%', size: 2.2, opacity: 0.55, duration: 2.9, delay: 1.8 },
  { top: '36.2%', left: '88.5%', size: 1.0, opacity: 0.30, duration: 3.7, delay: 2.2 },
  { top: '38.7%', left: '5.2%', size: 1.4, opacity: 0.36, duration: 4.2, delay: 0.9 },
  { top: '41.1%', left: '72.3%', size: 0.8, opacity: 0.21, duration: 3.3, delay: 1.4 },
  { top: '43.5%', left: '28.6%', size: 1.7, opacity: 0.44, duration: 4.6, delay: 0.2 },
  { top: '45.8%', left: '81.9%', size: 1.2, opacity: 0.27, duration: 2.6, delay: 2.5 },
  { top: '48.2%', left: '14.1%', size: 1.9, opacity: 0.49, duration: 3.8, delay: 1.6 },
  { top: '50.6%', left: '58.4%', size: 0.8, opacity: 0.19, duration: 4.4, delay: 0.7 },
  { top: '53.0%', left: '93.7%', size: 1.5, opacity: 0.39, duration: 3.0, delay: 2.0 },
  { top: '55.3%', left: '39.0%', size: 1.1, opacity: 0.31, duration: 4.7, delay: 1.3 },
  { top: '57.8%', left: '2.4%', size: 1.6, opacity: 0.41, duration: 2.5, delay: 0.5 },
  { top: '60.1%', left: '69.8%', size: 0.8, opacity: 0.23, duration: 3.5, delay: 1.8 },
  { top: '62.4%', left: '25.3%', size: 2.1, opacity: 0.52, duration: 4.1, delay: 0.3 },
  { top: '64.9%', left: '86.1%', size: 1.3, opacity: 0.34, duration: 3.3, delay: 2.6 },
  { top: '67.2%', left: '49.7%', size: 0.8, opacity: 0.16, duration: 4.9, delay: 1.0 },
  { top: '69.6%', left: '11.5%', size: 1.4, opacity: 0.37, duration: 2.8, delay: 1.5 },
  { top: '72.0%', left: '78.2%', size: 1.8, opacity: 0.46, duration: 3.9, delay: 0.8 },
  { top: '74.3%', left: '35.9%', size: 1.0, opacity: 0.26, duration: 4.3, delay: 2.3 },
  { top: '76.7%', left: '97.5%', size: 1.5, opacity: 0.40, duration: 3.1, delay: 0.2 },
  { top: '79.1%', left: '19.8%', size: 0.8, opacity: 0.17, duration: 4.6, delay: 1.7 },
  { top: '81.4%', left: '64.2%', size: 2.0, opacity: 0.53, duration: 2.7, delay: 1.1 },
  { top: '83.8%', left: '43.6%', size: 1.2, opacity: 0.29, duration: 3.6, delay: 0.6 },
  { top: '86.2%', left: '90.3%', size: 0.8, opacity: 0.24, duration: 4.0, delay: 2.4 },
  { top: '88.5%', left: '7.9%', size: 1.6, opacity: 0.43, duration: 3.4, delay: 1.3 },
  { top: '91.0%', left: '74.6%', size: 1.1, opacity: 0.33, duration: 4.8, delay: 0.4 },
  { top: '93.3%', left: '31.1%', size: 1.7, opacity: 0.47, duration: 2.6, delay: 2.2 },
  { top: '95.7%', left: '55.9%', size: 0.8, opacity: 0.20, duration: 3.7, delay: 0.9 },
  { top: '2.1%', left: '37.8%', size: 0.9, opacity: 0.24, duration: 3.3, delay: 0.7 },
  { top: '7.4%', left: '26.5%', size: 1.4, opacity: 0.33, duration: 4.2, delay: 1.9 },
  { top: '16.5%', left: '79.3%', size: 1.1, opacity: 0.27, duration: 2.9, delay: 0.4 },
  { top: '23.8%', left: '58.9%', size: 1.6, opacity: 0.41, duration: 3.7, delay: 2.0 },
  { top: '30.2%', left: '3.9%', size: 0.8, opacity: 0.18, duration: 4.5, delay: 1.4 },
  { top: '37.6%', left: '51.4%', size: 1.3, opacity: 0.36, duration: 3.1, delay: 0.8 },
  { top: '44.3%', left: '68.7%', size: 1.5, opacity: 0.44, duration: 4.0, delay: 2.3 },
  { top: '52.1%', left: '18.2%', size: 0.9, opacity: 0.22, duration: 2.8, delay: 1.1 },
  { top: '61.5%', left: '44.3%', size: 1.8, opacity: 0.49, duration: 3.9, delay: 0.3 },
  { top: '68.4%', left: '92.1%', size: 1.0, opacity: 0.30, duration: 4.3, delay: 1.7 },
  { top: '75.8%', left: '6.4%', size: 1.4, opacity: 0.39, duration: 3.5, delay: 0.9 },
  { top: '84.9%', left: '29.7%', size: 0.8, opacity: 0.21, duration: 4.6, delay: 2.2 },
  { top: '92.4%', left: '62.5%', size: 1.5, opacity: 0.43, duration: 3.0, delay: 0.5 },
  { top: '97.8%', left: '45.1%', size: 1.1, opacity: 0.28, duration: 3.8, delay: 1.8 }
].map((star, id) => ({ ...star, id }));

export default function What({ id = 'what' }: { id?: string }) {
  return (
    <section id={id} className={`snap-section ${styles.whatSection}`}>
      {/* Very Faint Realistic Twinkling Starfield Background */}
      <div className={styles.starField} aria-hidden="true">
        {STATIC_STARS.map((star) => (
          <div
            key={star.id}
            className={styles.star}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        {/* Clean Original Header */}
        <header className={styles.header}>
          <div className={styles.sectionLabel}>03 / WHAT I&apos;M UPTO</div>
          <h2 className={styles.title}>A little bit of everything.</h2>
          <p className={styles.subtitle}>
            The things I am building, learning, exploring, and occasionally winning at.
          </p>
        </header>

        {/* Bento Grid Section */}
        <div className={styles.bentoWrapper}>
          <FUIBentoGridDark />
        </div>
      </div>

      {/* Smooth Gradient Overlay Transitioning to Next Section */}
      <div className={styles.bottomOverlay} />
    </section>
  );
}
