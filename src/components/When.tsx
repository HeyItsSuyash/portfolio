'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TIMELINE_DATA } from './RootsTimeline';
import styles from './When.module.css';

// Seeded random number generator for pure deterministic SSR/CSR hydration
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function generateRandomStars(count: number = 150) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const top = `${(seededRandom(i * 4 + 1) * 98).toFixed(1)}%`;
    const left = `${(seededRandom(i * 4 + 2) * 98).toFixed(1)}%`;
    const size = +(0.7 + seededRandom(i * 4 + 3) * 1.5).toFixed(1);
    const opacity = +(0.15 + seededRandom(i * 4 + 4) * 0.45).toFixed(2);
    const duration = +(2.5 + seededRandom(i * 4 + 5) * 2.5).toFixed(1);
    const delay = +(seededRandom(i * 4 + 6) * 3.0).toFixed(1);

    stars.push({
      id: i,
      top,
      left,
      size,
      opacity,
      duration,
      delay,
    });
  }
  return stars;
}

export default function When({ id = 'when' }: { id?: string }) {
  const stars = useMemo(() => generateRandomStars(150), []);

  return (
    <section id={id} className={`snap-section ${styles.whenSection}`}>
      {/* High Density Realistic Twinkling Starfield Background */}
      <div className={styles.starField} aria-hidden="true">
        {stars.map((star) => (
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
        {/* Section Header */}
        <header className={styles.header}>
          <h2 className={styles.title}>&lsquo;When&rsquo; of Things</h2>
          <p className={styles.subtitle}>
            आप क्रोनोलॉजी समझ लीजिए
          </p>
        </header>

        {/* Vertical Alternating Timeline Container */}
        <div className={styles.timelineWrapper}>
          {/* Top Solid Dot Cap */}
          <div className={styles.startCapDot} />

          {/* Continuous Central Vertical Line */}
          <div className={styles.centralVerticalLine} />

          {/* Bottom Solid Dot Cap */}
          <div className={styles.endCapDot} />

          <div className={styles.nodesContainer}>
            {TIMELINE_DATA.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`${styles.nodeRow} ${isLeft ? styles.nodeRowLeft : styles.nodeRowRight
                    }`}
                >
                  {/* Central Node Pin with Logo Centered on the Central Line */}
                  <div className={styles.pinWrapper}>
                    <div className={styles.pinNode}>
                      <div className={styles.logoWrapper}>
                        <Image
                          src="/images/logo/logo.png"
                          alt="Suyash Logo"
                          fill
                          sizes="36px"
                          className={styles.nodeLogo}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 50% Card Column containing the connecting branch & card */}
                  <div className={styles.cardColumn}>
                    {/* For Left cards: Card comes first, then branch to center */}
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className={styles.eventCard}
                      >
                        <div className={styles.cardHeader}>
                          <span className={styles.yearBadge}>{item.year}</span>
                          {item.collegeTag && (
                            <span className={styles.collegeBadge}>{item.collegeTag}</span>
                          )}
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
                      </motion.div>
                    )}

                    {/* Connecting branch bridging the gap between card and center line */}
                    <div className={styles.branchLine} />

                    {/* For Right cards: Branch comes first from center, then Card */}
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className={styles.eventCard}
                      >
                        <div className={styles.cardHeader}>
                          <span className={styles.yearBadge}>{item.year}</span>
                          {item.collegeTag && (
                            <span className={styles.collegeBadge}>{item.collegeTag}</span>
                          )}
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
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Smooth Gradient Overlay Transitioning to Why Section (#03060a) */}
      <div className={styles.bottomOverlay} />
    </section>
  );
}
