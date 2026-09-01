'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './What.module.css';

export default function What({ id = 'what' }: { id?: string }) {
  return (
    <section id={id} className={`snap-section ${styles.whatSection}`}>
      <div className={styles.container}>
        {/* Left Side: Editorial Heading & Summary */}
        <div className={styles.leftColumn}>
          <header className={styles.header}>
            <div className={styles.sectionLabel}>06 / WHAT I&apos;M UPTO</div>
            <h2 className={styles.title}>A little bit of everything.</h2>
            <p className={styles.subtitle}>
              The things I am building, learning, exploring, and occasionally winning at.
            </p>
          </header>

          <div className={styles.reflectionBox}>
            <div className={styles.statusIndicator}>
              <span className={styles.statusDot} />
              <span>Current Focus</span>
            </div>
            <p className={styles.reflectionText}>
              Designing full-stack platforms, developing agentic AI systems, and creating software that bridges curiosity with real-world utility.
            </p>
          </div>
        </div>

        {/* Right Side: Elegant Editorial Poem Parchment */}
        <div className={styles.rightColumn}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={styles.poemParchment}
          >
            {/* Ambient Corner Accents */}
            <div className={styles.cornerAccentTL} />
            <div className={styles.cornerAccentBR} />

            {/* Poem Header */}
            <div className={styles.poemHeader}>
              <div className={styles.poemTitleGroup}>
                <span className={styles.poemTitle}>Stopping by Woods on a Snowy Evening</span>
                <span className={styles.poemAuthor}>Robert Frost · 1923</span>
              </div>
              <div className={styles.poemOrnament}>✦</div>
            </div>

            {/* Poem Body with Cormorant Garamond Typography */}
            <div className={styles.poemBody}>
              <p className={styles.poemStanza}>
                My little horse must think it queer<br />
                To stop without a farmhouse near<br />
                Between the woods and frozen lake<br />
                The darkest evening of the year.
              </p>

              <p className={styles.poemStanza}>
                He gives his harness bells a shake<br />
                To ask if there is some mistake.<br />
                The only other sound’s the sweep<br />
                Of easy wind and downy flake.
              </p>

              <div className={styles.poemDivider} />

              <p className={styles.poemStanzaFinale}>
                The woods are lovely, dark and deep,<br />
                But I have promises to keep,<br />
                <span className={styles.poemClosingLines}>
                  And miles to go before I sleep,<br />
                  And miles to go before I sleep.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Smooth Gradient Overlay Transitioning to Footer */}
      <div className={styles.bottomOverlay} />
    </section>
  );
}
