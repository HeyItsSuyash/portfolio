'use client';

import React, { useRef } from 'react';
import styles from './HangingSkills.module.css';
import { playHoverPop, playClickThud } from '@/utils/audioUtils';

const groups = [
  {
    title: 'Languages & Frameworks',
    code: 'JS/TS',
    items: [
      'Python, TypeScript, JavaScript',
      'Java, C++, SQL',
      'React 18, Next.js 14',
      'Node.js, Express.js, FastAPI',
      'REST, GraphQL, gRPC',
    ],
  },
  {
    title: 'Data & AI / ML',
    code: 'AI/ML',
    items: [
      'PyTorch, TensorFlow',
      'HuggingFace, vLLM',
      'LangChain, LangGraph',
      'RAG, LoRA fine-tuning',
      'MLflow, Weights & Biases',
    ],
  },
  {
    title: 'Infrastructure',
    code: 'INFRA',
    items: [
      'Docker, Kubernetes',
      'GCP, AWS, Vercel',
      'GitHub Actions CI/CD',
      'PostgreSQL, MongoDB',
      'System Design',
    ],
  },
  {
      title: 'Tools & Design',
      code: 'UI/UX',
      items: [
          'Figma, Spline',
          'Adobe CC Suite',
          'Blender (3D Modeling)',
          'Postman, Insomnia',
          'Git, Linux, Bash'
      ]
  }
];

export default function HangingSkills() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" className={styles.sectionWrapper}>
      <div className="section-header">
        <span className="section-label">03 — Skills</span>
      </div>
      <div className="section-title">Technical Stack</div>
      <p className={styles.instruction}>Horizontal exploration of capabilities.</p>
      
      <div className={styles.viewport}>
        {/* The horizontal rod */}
        <div className={styles.rod} />
        
        <div className={styles.scrollContainer} ref={containerRef}>
          {groups.map((g, i) => (
            <div 
              key={g.title} 
              className={styles.skillCard}
              onMouseEnter={playHoverPop}
              onClick={playClickThud}
            >
              {/* The hook element */}
              <div className={styles.hookWrapper}>
                  <div className={styles.hookCircle} />
              </div>

              {/* The Header Pill */}
              <div className={styles.cardHeader}>
                  <div className={styles.typeCode}>{g.code}</div>
                  <div className={styles.timeLabel}>08:20:15</div>
              </div>

              {/* Large Code Display */}
              <div className={styles.largeCode}>{g.code}</div>

              {/* Content Area */}
              <div className={styles.cardBody}>
                  <div className={styles.serviceLabel}>SERVICE</div>
                  <h3 className={styles.cardTitle}>{g.title}</h3>
                  
                  <div className={styles.dividerLine} />
                  
                  <ul className={styles.itemList}>
                      {g.items.map(item => (
                          <li key={item}>{item}</li>
                      ))}
                  </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
