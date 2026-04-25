import styles from './Achievements.module.css';

const achievements = [
  {
    icon: 'Published',
    text: 'Taylor & Francis (CRC Press) 2025',
    detail: ' — "Bias Detection and Mitigation in Large Language Models: A Fairness-Driven Approach"',
  },
  {
    icon: 'National',
    text: 'National Finalist',
    detail: ' — Venture-Verse Hackathon, IIT BHU E-Summit',
  },
  {
    icon: 'Semi-Final',
    text: 'Semi-Finalist',
    detail: ' — EMPRESARIO 2025, IIT Kharagpur',
  },
  {
    icon: 'Rank #32',
    text: 'National Finalist',
    detail: ' — EscalateXV2 CTF, GLA University (Rank #32 / 700+ teams)',
  },
  {
    icon: '1st Place',
    text: '1st Place',
    detail: ' — UP Regional Science Exhibition, CBSE Zone (State-level) 2019',
  },
  {
    icon: 'GATE 2026',
    text: 'GATE 2026 Qualified',
    detail: ' — Computer Science & Engineering',
  },
];

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="section-header">
        <span className="section-label">05 — Recognition</span>
      </div>
      <div className="section-title">Achievements</div>
      <div className={styles.list}>
        {achievements.map((a) => (
          <div key={a.icon} className={styles.item}>
            <span className={styles.icon}>{a.icon}</span>
            <span className={styles.text}>
              <strong>{a.text}</strong>
              {a.detail}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
