import styles from './Education.module.css';

const education = [
  {
    period: '2023 — 2027',
    school: 'MMMUT\nGorakhpur',
    degree: 'B.Tech — Computer Science & Engineering',
    extra: null,
  },
  {
    period: '2024 — 2028',
    school: 'IIT\nMadras',
    degree: 'B.Sc — Data Science & Applications',
    extra: { value: '8.4', note: null },
  },
  {
    period: 'CBSE — 2023',
    school: 'DPS\nLucknow',
    degree: 'Class XII (PCM + CS)',
    extra: { value: '93.6%', note: 'JEE Mains — 95.6 Percentile' },
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="section-header">
        <span className="section-label">04 — Education</span>
      </div>
      <div className="section-title">Academic Track</div>
      <div className={styles.grid}>
        {education.map((e) => (
          <div key={e.period} className={styles.card}>
            <div className={styles.label}>{e.period}</div>
            <div className={styles.school}>
              {e.school.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </div>
            <div className={styles.degree}>{e.degree}</div>
            {e.extra && (
              <div className={styles.gpa}>
                {e.extra.value}
                {e.extra.note && (
                  <>
                    <br />
                    <span className={styles.gpaSub}>{e.extra.note}</span>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
