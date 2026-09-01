'use client';

import FUIBentoGridDark from '@/components/ui/bento';
import styles from './What.module.css';

export default function What({ id = 'what' }: { id?: string }) {
  return (
    <section id={id} className={`snap-section ${styles.whatSection}`}>
      <div className={styles.container}>
        {/* Clean Header */}
        <header className={styles.header}>
          <div className={styles.sectionLabel}>06 / WHAT I&apos;M UPTO</div>
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
