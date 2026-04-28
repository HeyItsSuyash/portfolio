import styles from './RootsTimeline.module.css';

const timelineData = [
  {
    id: 'class6',
    year: 'Class 6 (2016–17)',
    title: 'First Spark',
    highlights: [
      'Introduced to robotics through Roboshala, an IIT Roorkee initiative during summer vacation.',
      'Attempted to build first quadcopter using motors, handmade controller, and thermacol body.',
      'Sparked curiosity for building technology and laid the foundation for future growth.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 'class7',
    year: 'Class 7 (2017–18)',
    title: 'Discovery of Web Development',
    highlights: [
      'Built first HTML and CSS website and completed SoloLearn courses in HTML, CSS, and JS.',
      'Began to enjoy creating things on the internet and connected with the concept of web development.',
      'Joined the school computer club to explore and learn more consistently.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'class8',
    year: 'Class 8 (2018–19)',
    title: 'Exploration and Recognition',
    highlights: [
      'Explored 3D design (Blender) and video editing (Adobe Premiere Pro & Photoshop).',
      'Built C-I-K-E (Because I Know Everything), a conceptual search engine replica project.',
      'Head Mentor at school robotics club (DPS) and recognized in newspaper for a regional competition.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    id: 'class9',
    year: 'Class 9 (2019–20)',
    title: 'Competitive Growth in STEM',
    highlights: [
      'Focused on STEM competitions and academic excellence.',
      'Secured 1st position in science aggregation at the regional level and advanced to nationals.',
      'Shifted toward structured achievement and built confidence in science and technology abilities.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'class10',
    year: 'Class 10 (2020–21)',
    title: 'Building for Real-World Impact',
    highlights: [
      'Built first full-stack website focused on COVID guidance as a Computer Science project.',
      'Moved beyond learning to solving a real-world problem using technology.',
      'Applied skills in a meaningful and practical context.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 'class11',
    year: 'Class 11 (2021–22)',
    title: 'Strengthening Core Programming Skills',
    highlights: [
      'Detailed understanding of Python fundamentals including slicing, indexing, and loops.',
      'Strengthened logical thinking and a systematic problem-solving approach.',
      'Formed a solid foundation for advanced work in data and software development.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'class12',
    year: 'Class 12 (2022–23)',
    title: 'Data, AI Foundations, and Achievements',
    highlights: [
      'Explored data management and analysis using Pandas, Matplotlib, and Scikit-learn.',
      '1st Place National Chemistry Exhibition and National Web Development Exhibition.',
      'Ranked in top three in a National Python programming competition.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 'early_college',
    year: 'Early College',
    title: 'Exposure and Experimentation',
    highlights: [
      'Developed NGO websites and experimented with YouTube, Instagram, and Print-on-demand.',
      'Gained exposure to tools like Shopify, Twilio, OpenAI, and Prompt Engineering.',
      'Expanded skill set across technology and business horizontally.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 'present',
    year: 'Present',
    title: 'Interdisciplinary Builder Mindset',
    highlights: [
      'Well-versed in science, engineering, and mathematics; Gold medalist in Math Olympiads.',
      'Worked on blockchain-based crowdfunding projects such as Sanchay.',
      'Focusing on scalable solutions and continuously evolving as a builder.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
];

export default function RootsTimeline() {
  return (
    <section id="roots">
      <div className="section-header">
        <span className="section-label">Roots — Origins</span>
      </div>
      <div className="section-title">My Roots in STEM</div>
      
      <div className={styles.timelineContainer}>
        <div className={styles.timelineLine}></div>
        {timelineData.map((node, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={node.id} className={`${styles.node} ${isLeft ? styles.leftNode : styles.rightNode}`}>
              <div className={styles.iconBox}>
                {node.icon}
              </div>
              <div className={styles.content}>
                <div className={styles.year}>{node.year}</div>
                <div className={styles.title}>{node.title}</div>
                <ul className={styles.highlights}>
                  {node.highlights.map((h, i) => (
                    <li key={i}>
                      <span className={styles.bullet}>▹</span>
                      <span className={styles.text}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
