import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.bgText}>SUYASH</div>
      <div className={styles.meta}>Available for Internships &amp; Collaboration — 2026</div>
      <div className={styles.name}>
        Suyash<br />
        <span>Shukla</span>
      </div>
      <div className={styles.bottom}>
        <p className={styles.desc}>
          "We have a strategic plan. It's called doing things" - Herb Kelleher.
        </p>
        <a className={styles.cta} href="#work">
          <span className={styles.ctaLabel}>View Work</span>
          <span className={styles.ctaArrow}>→</span>
        </a>
      </div>
    </div>
  );
}
