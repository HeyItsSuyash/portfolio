"use client";

import styles from './Why.module.css';

export default function Why({ id = 'why' }: { id?: string }) {
  return (
    <section id={id} className={`snap-section ${styles.whySection}`}>
      <div className={styles.bgCanvas} />

      <div className={styles.container}>
        {/* Y Grid of Blank White Cards */}
        <div className={styles.yBoxGrid}>
          {/* Top Left Branch */}
          <div className={`${styles.box} ${styles.boxTopLeftOuter}`} />
          <div className={`${styles.box} ${styles.boxTopLeftInner}`} />

          {/* Top Right Branch */}
          <div className={`${styles.box} ${styles.boxTopRightOuter}`} />
          <div className={`${styles.box} ${styles.boxTopRightInner}`} />

          {/* Center Vertical Stem */}
          <div className={`${styles.box} ${styles.boxStemTall}`} />

          {/* Bottom Stem */}
          <div className={`${styles.box} ${styles.boxStemBottom}`} />
        </div>

        {/* Caption Below */}
        <h2 className={styles.caption}>Wouldn&rsquo;t I be So??</h2>
      </div>
    </section>
  );
}
