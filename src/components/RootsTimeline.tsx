'use client';

import React from 'react';
import styles from './RootsTimeline.module.css';

export const TIMELINE_DATA = [
  {
    id: 'class6',
    year: 'Class 6 (2016–17)',
    title: 'First Spark',
    highlights: [
      'Introduced to robotics through Roboshala, an IIT Roorkee summer workshop.',
      'Attempted to build a basic quadcopter using hobby motors, handmade controls, and a thermacol frame.',
      'This was my first real exposure to making things with technology and got me curious to try more.'
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
    title: 'Discovering Web Development',
    highlights: [
      'Built my first simple HTML and CSS web page and took beginner SoloLearn tutorials.',
      'Enjoyed the instant feedback of seeing code render in a browser.',
      'Joined the school computer club to learn alongside peers.'
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
    title: 'Creative & Maker Exploration',
    highlights: [
      'Experimented with 3D modeling in Blender and video editing in Premiere Pro and Photoshop.',
      'Built C-I-K-E (Because I Know Everything), a conceptual search engine interface project.',
      'Stayed active in the school robotics group and received regional newspaper recognition for a project showcase.'
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
    title: 'Science Competitions',
    highlights: [
      'Participated in regional science competitions and academic exhibitions.',
      'Secured 1st place in science aggregation at the regional level and represented the school at nationals.',
      'Helped build confidence in working with science and analytical problems.'
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
    title: 'First Practical Web App',
    highlights: [
      'Built a full-stack website sharing COVID-19 safety information and local helpline details.',
      'First experience creating a project aimed at an actual everyday problem rather than just a tutorial.',
      'Solidified my interest in building software that people could genuinely use.'
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
    title: 'Programming Fundamentals',
    highlights: [
      'Spent time practicing Python syntax, data types, slicing, loops, and control structures.',
      'Developed a clearer mental model of algorithmic problem solving and writing clean logic.',
      'Set the baseline for later data science and web backend work.'
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
    title: 'Data Foundations & Senior Wins',
    highlights: [
      'Started exploring data analysis using Pandas, Matplotlib, and Scikit-learn.',
      'Won 1st place in National Chemistry and Web Development exhibitions; placed in top 3 in a National Python competition.',
      'Balanced competitive academics with hands-on coding side projects.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 'early_college',
    year: '2023–2024',
    title: 'Early College & Experimentation',
    highlights: [
      'Built websites for NGOs and small projects while trying out tools like Shopify, Twilio, and prompt engineering.',
      'Experimented with digital content, newsletters, and early tech side projects.',
      'A messy, curious phase of discovering what kinds of software and products I enjoyed making most.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 'community_leadership',
    year: '2024',
    title: 'Community & Student Tech',
    highlights: [
      'Helped organize technical events and hackathons with HackWithIndia and the CSIS society at MMMUT.',
      'Mentored junior students and organized coding sessions and orientations.',
      'Learned how technical communities operate and how to collaborate effectively on student-led initiatives.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 'products_infrastructure',
    year: '2024–2025',
    title: 'Building Products & Systems',
    highlights: [
      'Founded Laterally Inverted Studio as a maker collaborative to build real-world software and experiments.',
      'Built and maintained platforms like Prayukti vLAB (funded by a ₹10 Lakh college grant) for student simulations.',
      'Shifted toward managing real system deployments, database performance, and multi-user reliability.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 'startup_experience',
    year: '2025',
    title: 'Startup & Product Ownership',
    highlights: [
      'Co-founded EarnBuddy.io, managing the product stack and scaling to 500+ registered users across multiple colleges.',
      'Iterated based on direct user conversations, handling auth, databases, and continuous updates.',
      'Learned the differences between building a project and actually operating an active platform.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'research_and_ai',
    year: '2025–2026',
    title: 'Research & Applied AI',
    highlights: [
      'Conducted research on bias detection and fairness in LLMs, published with Taylor & Francis.',
      'Pursued B.Sc in Data Science at IIT Madras (CGPA 8.4) alongside B.Tech in CSE at MMMUT.',
      'Built AI workflows and tool-calling agents for real application use cases.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 'professional_engineering',
    year: '2026',
    title: 'Professional Software Engineering',
    highlights: [
      'Worked as Full Stack Engineer at Exaflair Technologies on production web and mobile apps with Next.js, Fastify, and PostgreSQL.',
      'Handled growth engineering at Ganges, automating operations and onboarding early platform users.',
      'Qualified GATE 2026 in Computer Science & Information Technology.'
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 'present',
    year: 'Present',
    title: 'Still Building',
    highlights: [
      'Focusing on full-stack systems, developer tooling, and reliable AI applications.',
      'Enjoy turning rough ideas into working software and exploring problems across different domains.',
      'Still learning, experimenting with new tech, and staying curious.'
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
    <section id="roots" className={styles.rootsSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Roots — Origins</span>
      </div>
      <div className={styles.sectionTitle}>My Roots in STEM</div>

      <div className={styles.timelineContainer}>
        <div className={styles.timelineLine}></div>
        {TIMELINE_DATA.map((node, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={node.id}
              className={`${styles.node} ${isLeft ? styles.leftNode : styles.rightNode}`}
            >
              <div className={styles.iconBox}>{node.icon}</div>
              <div className={styles.content}>
                <div className={styles.year}>{node.year}</div>
                <div className={styles.title}>{node.title}</div>
                <ul className={styles.highlights}>
                  {node.highlights.map((h, i) => (
                    <li key={i}>
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
