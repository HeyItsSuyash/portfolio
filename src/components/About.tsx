import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="section-header">
        <span className="section-label">01 — About</span>
      </div>
      <div className="section-title">Who I Am</div>
      <div className={styles.grid}>
        <div className={styles.cell}>
          <h3>Background</h3>
          <p>
            I&apos;m a CS undergraduate at MMMUT Gorakhpur and concurrently pursuing a B.Sc in Data
            Science from IIT Madras. I founded the Computer Science &amp; Innovation Society at MMMUT,
            built a cloud-native virtual lab serving 400+ concurrent users, and published research on
            LLM bias detection with Taylor &amp; Francis. I move fast from idea to production.
          </p>
        </div>
        <div className={styles.cell}>
          <h3>Impact</h3>
          <div className={styles.statRow}>
            <div className={styles.stat}>
              <span className={styles.statNum}>400+</span>
              <span className={styles.statDesc}>Concurrent users on Prayukti vLAB</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>2500+</span>
              <span className={styles.statDesc}>Participants, HackStrom 2K25</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>1000+</span>
              <span className={styles.statDesc}>Active users on EarnBuddy SaaS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
