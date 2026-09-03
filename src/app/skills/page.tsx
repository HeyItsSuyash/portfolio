import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../sharedRoute.module.css';

export const metadata: Metadata = {
  title: 'Skills & Technical Stack — Languages, Frameworks, Systems',
  description:
    'Comprehensive technical skill set of Suyash Shukla across Languages & Frameworks (Python, TypeScript, React, Next.js, FastAPI, Node.js), Data & AI/ML (PyTorch, LangChain, LangGraph, RAG), and Infrastructure (Docker, GCP, AWS, PostgreSQL, Redis).',
  alternates: {
    canonical: '/skills',
  },
  openGraph: {
    title: 'Skills & Technical Stack | Suyash Shukla',
    description:
      'Explore full-stack, machine learning, system design, and cloud infrastructure competencies.',
    url: '/skills',
  },
};

const skillGroups = [
  {
    title: 'Languages & Core Frameworks',
    category: 'Development',
    items: [
      'Python',
      'TypeScript',
      'JavaScript (ES6+)',
      'Java',
      'C++',
      'SQL',
      'React 18 / 19',
      'Next.js 14 / 15 / 16',
      'Node.js & Express',
      'FastAPI & Fastify',
      'RESTful APIs, GraphQL, gRPC, WebSockets',
    ],
  },
  {
    title: 'Data Science & Artificial Intelligence / Machine Learning',
    category: 'AI / ML',
    items: [
      'PyTorch & TensorFlow',
      'Scikit-learn & Pandas',
      'HuggingFace Transformers & vLLM',
      'LangChain & LangGraph (State Machine DAGs)',
      'Agentic AI Workflows & Tool Calling',
      'Retrieval-Augmented Generation (RAG)',
      'RLHF, LoRA & QLoRA Fine-tuning',
      'MLflow, Weights & Biases',
    ],
  },
  {
    title: 'Cloud, Infrastructure & Distributed Systems',
    category: 'Infrastructure',
    items: [
      'Docker & Containerization',
      'Kubernetes (K8s)',
      'Google Cloud Platform (GCP)',
      'Amazon Web Services (AWS)',
      'Vercel Deployment Workflows',
      'GitHub Actions CI/CD Pipelines',
      'PostgreSQL, MongoDB, Redis Pub/Sub',
      'High-Level & Low-Level System Design (HLD / LLD)',
    ],
  },
];

export default function SkillsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    name: 'Skills & Technical Stack | Suyash Shukla',
    description: 'Technical competencies in full-stack web engineering, machine learning, and cloud infrastructure.',
    url: 'https://heyitssuyash.github.io/portfolio/skills',
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className={styles.header}>
        <div className={styles.topNav}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          <div className={styles.badge}>TECHNICAL EXPERTISE</div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.subtitle}>TOOLS, FRAMEWORKS &amp; DISCIPLINES</div>
          <h1 className={styles.title}>Skills &amp; Technical Stack</h1>
          <p className={styles.tagline}>
            A complete overview of technologies, architectures, and design patterns utilized in production across web applications, microservices, and machine learning pipelines.
          </p>

          <div className={styles.heroCtaGroup}>
            <Link href="/projects" className={styles.primaryBtn}>
              See Applied In Projects
            </Link>
            <Link href="/experience" className={styles.secondaryBtn}>
              Review Timeline
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.contentContainer}>
        {skillGroups.map((group) => (
          <section key={group.title} className={styles.detailBlock}>
            <h2 className={styles.sectionHeading}>{group.title}</h2>
            <div className={styles.gridCards}>
              {group.items.map((item) => (
                <div key={item} className={styles.card} style={{ padding: '18px 24px' }}>
                  <div className={styles.cardSubtitle}>{group.category}</div>
                  <h3 className={styles.cardTitle} style={{ fontSize: '16px' }}>{item}</h3>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className={styles.footerNav}>
        <Link href="/" className={styles.footerBackBtn}>
          ← Return to Home
        </Link>
      </footer>
    </main>
  );
}
