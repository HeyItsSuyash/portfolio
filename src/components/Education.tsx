import styles from './Education.module.css';

const education = [
  {
    period: '2023 — 2027',
    school: 'MMMUT\nGorakhpur',
    degree: 'B.Tech — Computer Science & Engineering',
    achievements: [
      'President, Computer Science and Innovation Society',
      'Vice President, HackwithIndia Chapter MMMUT, Gorakhpur',
      '2 Research Papers, 3 Book Chapters Published, and more in process.'
    ]
  },
  {
    period: '2024 — 2028',
    school: 'IIT\nMadras',
    degree: 'B.Sc — Data Science & Applications',
    achievements: [
      'Perfect GPA in Python, Maths 2 and English (S- Grade)',
      'Content Writer and Researcher @ Corbett House, Madras',
      'PR and Outreach member @ Corbett House Madras'
    ],
  },
  {
    period: 'CBSE',
    school: 'DPS\nGomtinagar',
    degree: 'Class XII & X',
    achievements: [
      '96.2% in Class 10th',
      '93.6% in Class 12th',
      'Robotics Mentor at class 8th',
      'Regional Science Exhibition #1'
    ],
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
            {e.achievements && e.achievements.length > 0 && (
              <ul className={styles.achievements}>
                {e.achievements.map((ach, idx) => (
                  <li key={idx}>
                    <span className={styles.bullet}>▹</span>
                    <span className={styles.text}>{ach}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
