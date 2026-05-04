import styles from './SocialSection.module.css';

const githubStats = [
  { label: 'Total Contributions', value: '2,400+' },
  { label: 'Public Repos', value: '45' },
  { label: 'Followers', value: '150+' },
  { label: 'PRs Merged', value: '120+' },
];

const phLaunches = [
  { name: 'Prayukti vLAB', rank: 'Product of the Day #2', upvotes: '450+' },
  { name: 'EarnBuddy', rank: 'Product of the Day #5', upvotes: '320+' },
];

const contentStats = [
  { platform: 'YouTube', metric: '10K+ Subscribers', sub: 'Tech & AI' },
  { platform: 'Instagram', metric: '5K+ Following', sub: 'Design & Build' },
  { platform: 'Blogs', metric: '25+ Articles', sub: 'Engineering' },
  { platform: 'Threads', metric: 'Active Builder', sub: 'Daily Logs' },
];

export default function SocialPresence() {
  return (
    <div className={styles.wrapper}>
      {/* Development Ecosystem */}
      <section id="development" className={styles.section}>
        <div className="section-header">
          <span className="section-label">Ecosystem</span>
        </div>
        <div className="section-title">Development</div>
        
        <div className={styles.dualCard}>
          <div className={styles.cardLeft}>
            <div className={styles.labelGroup}>
              <span className={styles.tag}>GitHub</span>
              <h3>Open Source Impact</h3>
            </div>
            <div className={styles.statsGrid}>
              {githubStats.map((s) => (
                <div key={s.label} className={styles.statItem}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.cardRight}>
            <div className={styles.labelGroup}>
              <span className={styles.tagPH}>Product Hunt</span>
              <h3>Launch History</h3>
            </div>
            <div className={styles.phList}>
              {phLaunches.map((p) => (
                <div key={p.name} className={styles.phItem}>
                  <div className={styles.phRank}>{p.rank}</div>
                  <div className={styles.phName}>{p.name}</div>
                  <div className={styles.phUp}>{p.upvotes} Upvotes</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation Ecosystem */}
      <section id="content-creation" className={styles.section}>
        <div className="section-header">
          <span className="section-label">Ecosystem</span>
        </div>
        <div className="section-title">Content Creation</div>
        
        <div className={styles.dualCard}>
          <div className={styles.cardLeft}>
            <div className={styles.labelGroup}>
              <span className={styles.tagYT}>Digital Presence</span>
              <h3>Building in Public</h3>
              <p>Documenting the journey of an engineer, sharing insights on AI, SaaS architecture, and the builder lifestyle across platforms.</p>
            </div>
          </div>
          <div className={styles.cardRight}>
            <div className={styles.contentGrid}>
              {contentStats.map((s) => (
                <div key={s.platform} className={styles.contentItem}>
                  <div className={styles.platformName}>{s.platform}</div>
                  <div className={styles.platformMetric}>{s.metric}</div>
                  <div className={styles.platformSub}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
