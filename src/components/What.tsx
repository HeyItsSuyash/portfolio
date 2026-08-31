"use client";

import styles from './What.module.css';
import NightSkyModel from '@/components/NightSkyModel';

export default function What({ id = 'what' }: { id?: string }) {
  return (
    <section id={id} className={`snap-section ${styles.whatSection}`}>
      <div className={styles.canvasContainer}>
        <NightSkyModel />
      </div>
    </section>
  );
}
