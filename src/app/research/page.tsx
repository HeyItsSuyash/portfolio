import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../sharedRoute.module.css';

export const metadata: Metadata = {
  title: 'Research & Publications — Machine Learning & LLM Fairness',
  description:
    'Academic research and publications by Suyash Shukla, including research on bias detection and mitigation in large language models published with Taylor & Francis (CRC Press) 2025.',
  alternates: {
    canonical: '/research',
  },
  openGraph: {
    title: 'Research & Publications | Suyash Shukla',
    description:
      'Explore research contributions on fairness in Large Language Models, algorithmic evaluations, and published scientific works.',
    url: '/research',
  },
};

export default function ResearchPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    name: 'Bias Detection and Mitigation in Large Language Models: A Fairness-Driven Approach',
    author: {
      '@type': 'Person',
      name: 'Suyash Shukla',
      url: 'https://heyitssuyash.github.io/portfolio',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Taylor & Francis (CRC Press)',
    },
    datePublished: '2025',
    description:
      'Research focusing on evaluation metrics and counterfactual debiasing frameworks for contemporary generative foundation models.',
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
          <div className={styles.badge}>ACADEMIA &amp; PUBLICATIONS</div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.subtitle}>RESEARCH PAPERS &amp; SCHOLARSHIP</div>
          <h1 className={styles.title}>Research &amp; Publications</h1>
          <p className={styles.tagline}>
            Investigating algorithmic fairness, demographic bias detection, and ethical alignment in generative foundation models and deep learning architectures.
          </p>

          <div className={styles.heroCtaGroup}>
            <Link href="/projects" className={styles.primaryBtn}>
              AI Engineering Projects
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Research Inquiries
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.contentContainer}>
        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>Published Works</h2>
          <div className={styles.gridCards}>
            <article className={styles.card}>
              <div className={styles.cardSubtitle}>TAYLOR &amp; FRANCIS (CRC PRESS) — 2025</div>
              <h3 className={styles.cardTitle}>
                Bias Detection and Mitigation in Large Language Models: A Fairness-Driven Approach
              </h3>
              <p className={styles.cardDescription}>
                Investigates systematic demographic and representational bias in autoregressive large language models. Proposes automated counterfactual evaluation benchmarks and post-hoc debiasing strategies to improve equitable outcomes across multi-lingual outputs without compromising generative capability.
              </p>
              <div className={styles.cardMeta}>
                <span className={styles.tag}>LLM Evaluation</span>
                <span className={styles.tag}>Algorithmic Fairness</span>
                <span className={styles.tag}>NLP</span>
                <span className={styles.tag}>CRC Press</span>
              </div>
            </article>

            <article className={styles.card}>
              <div className={styles.cardSubtitle}>ACADEMIC SCHOLARSHIP &amp; CHAPTERS</div>
              <h3 className={styles.cardTitle}>
                Book Chapters &amp; Forthcoming Research
              </h3>
              <p className={styles.cardDescription}>
                Co-authored 3 book chapters and 2 research papers focusing on applied data science, student virtual laboratories, and real-time calculation engines, with ongoing peer reviews.
              </p>
              <div className={styles.cardMeta}>
                <span className={styles.tag}>Data Science</span>
                <span className={styles.tag}>Virtual Labs</span>
                <span className={styles.tag}>Applied Machine Learning</span>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>Research Interests</h2>
          <ul className={styles.featureList}>
            <li className={styles.listItem}>
              <span className={styles.listBullet}>▹</span>
              <span><strong>LLM Reliability &amp; Safety:</strong> Designing deterministic evaluation harnesses for tool-calling agents and mitigating hallucination risks.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.listBullet}>▹</span>
              <span><strong>Efficient Model Alignment:</strong> Exploring parameter-efficient fine-tuning (LoRA/QLoRA) combined with reinforcement learning from human/AI feedback.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.listBullet}>▹</span>
              <span><strong>Cloud-Native Simulation Engines:</strong> High-throughput distributed calculation systems for STEM practical pedagogy in browser environments.</span>
            </li>
          </ul>
        </section>
      </div>

      <footer className={styles.footerNav}>
        <Link href="/" className={styles.footerBackBtn}>
          ← Return to Home
        </Link>
      </footer>
    </main>
  );
}
