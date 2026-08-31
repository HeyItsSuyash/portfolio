"use client";

import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 700);
      return () => clearTimeout(removeTimer);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`${styles.loaderOverlay} ${fade ? styles.fadeOut : ''}`}>
      <div className={styles.loaderContent}>
        <p className={styles.quoteText}>be patient, great things take time</p>
        <div className={styles.subtleIndicator} />
      </div>
    </div>
  );
}
