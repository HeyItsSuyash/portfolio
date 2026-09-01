'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_DATA } from './RootsTimeline';
import styles from './When.module.css';

export default function When({ id = 'when' }: { id?: string }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className={`snap-section ${styles.whenSection}`}>
      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.sectionLabel}>06 / WHEN OF THINGS</div>
            <h2 className={styles.title}>&lsquo;When&rsquo; of Things</h2>
            <p className={styles.subtitle}>
              A chronological trajectory from early maker curiosity to scalable engineering.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className={styles.navControls}>
            <button
              type="button"
              onClick={() => scroll('left')}
              className={styles.navButton}
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className={styles.navButton}
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </header>

        {/* Horizontal Timeline Scroll Track */}
        <div className={styles.horizontalTrackWrapper}>
          <div ref={scrollContainerRef} className={styles.horizontalScrollTrack}>
            <div className={styles.connectingLine} />

            {TIMELINE_DATA.map((item, idx) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className={styles.timelineNodeCard}
                >
                  {/* Pin Node Icon */}
                  <div className={styles.pinWrapper}>
                    <div className={styles.pinGlow} />
                    <div className={styles.pinNode}>
                      <div className={styles.pinIcon}>{item.icon}</div>
                    </div>
                  </div>

                  {/* Glassmorphic Event Card */}
                  <div className={styles.eventCard}>
                    <div className={styles.cardHeader}>
                      <span className={styles.yearBadge}>{item.year}</span>
                    </div>

                    <h3 className={styles.cardTitle}>{item.title}</h3>

                    <ul className={styles.highlightsList}>
                      {item.highlights.map((h, i) => (
                        <li key={i} className={styles.highlightItem}>
                          <span className={styles.bulletDot}>▹</span>
                          <span className={styles.highlightText}>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Smooth Gradient Overlay Transitioning to Next Section */}
      <div className={styles.bottomOverlay} />
    </section>
  );
}
