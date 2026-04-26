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
              <span className={styles.statNum}>25+</span>
              <span className={styles.statDesc}>Projects (spanning across multiple domains, from websites to browser extensions, to mobile apps and ai integrated products)</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>3+</span>
              <span className={styles.statDesc}>Internships</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>8+</span>
              <span className={styles.statDesc}>Years Experience in trying to search for y this bug occured on stack overflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
