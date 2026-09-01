'use client';

import styles from './Hero.module.css';

export default function Hero({ id = 'hero' }: { id?: string }) {
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
          <a href="#what" className={styles.fillButton}>
            Browse Projects
          </a>
          <a href="#who" className={styles.ghostButton}>
            Follow My Journey
          </a>
        </div>
      </div>

      {/* Bottom Black Gradient Overlay Transitioning to Next Section */}
      <div className={styles.bottomOverlay} />
    </section>
  );
}




