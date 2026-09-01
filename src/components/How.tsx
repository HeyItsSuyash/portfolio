"use client";

import styles from './How.module.css';

export default function How({ id = 'how' }: { id?: string }) {
  return (
    <section id={id} className={`snap-section ${styles.howSection}`}>
      <div className={styles.container}>
        {/* Background Name SUYASH */}
        <div className={styles.bgName}>
          SUYASH
        </div>

        {/* Phonetic Definition */}
        <div className={styles.definition}>
          <div className={styles.defWord}>Suyash</div>
          <div className={styles.defType}>
            <span className={styles.phonetic}>/suːˈjɑːʃ/ &nbsp;&nbsp;</span>(proper noun)
          </div>
          <div className={styles.defMeaning}>
            A masculine name of Sanskrit origin meaning &quot;radiant with glory.&quot;
          </div>
        </div>
      </div>
    </section>
  );
}
