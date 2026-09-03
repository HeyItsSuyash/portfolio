import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../sharedRoute.module.css';

export const metadata: Metadata = {
  title: 'Now — What I’m Currently Working On',
  description:
    'A current snapshot of what Suyash Shukla is building, studying, researching, and focusing on right now.',
  alternates: {
    canonical: '/now',
  },
  openGraph: {
    title: 'Now — Suyash Shukla',
    description:
      'Current engineering priorities, active startup experiments, and ongoing research focus.',
    url: '/now',
  },
};

export default function NowPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'What Suyash Shukla is Doing Now',
    description: 'Current priorities, projects, and learning objectives of Suyash Shukla.',
    url: 'https://heyitssuyash.github.io/portfolio/now',
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
          <div className={styles.badge}>CURRENT FOCUS • UPDATED 2026</div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.subtitle}>THE /NOW PAGE</div>
          <h1 className={styles.title}>What I&apos;m Doing Now</h1>
          <p className={styles.tagline}>
            A public declaration of current priorities, engineering projects, and research pursuits. Inspired by Derek Sivers&apos; now-page movement.
          </p>

          <div className={styles.heroCtaGroup}>
            <Link href="/projects" className={styles.primaryBtn}>
              View Projects
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Get In Touch
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.contentContainer}>
        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>1. Professional Engineering</h2>
          <p className={styles.paragraph}>
            Working as a Full Stack Engineer at <strong>Exaflair Technologies</strong>, designing modular web systems and mobile backends using Next.js, Fastify, and PostgreSQL. Focusing heavily on clean API contracts, error boundaries, and database query optimizations.
          </p>
        </section>

        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>2. Building &amp; Prototyping</h2>
          <p className={styles.paragraph}>
            Running the <strong>₹499 Build Initiative</strong> (<Link href="/499-scheme" style={{ color: '#F5F5DC', textDecoration: 'underline' }}>learn more</Link>), taking interesting ideas from students and builders and rapidly turning them into working web apps, Chrome extensions, and automations within days.
          </p>
          <p className={styles.paragraph}>
            Maintaining open-source tools under <strong>Laterally Inverted Studio</strong> and continuously refining the Prayukti virtual laboratory platform for engineering colleges.
          </p>
        </section>

        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>3. Academics &amp; Learning</h2>
          <ul className={styles.featureList}>
            <li className={styles.listItem}>
              <span className={styles.listBullet}>▹</span>
              <span>Finalizing B.Tech in Computer Science &amp; Engineering at MMMUT Gorakhpur.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.listBullet}>▹</span>
              <span>Advancing through B.Sc coursework in Data Science and Applications at IIT Madras.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.listBullet}>▹</span>
              <span>Deepening practical knowledge in distributed consensus systems, high-throughput message brokers (Kafka/RabbitMQ), and local LLM deployment with vLLM.</span>
            </li>
          </ul>
        </section>

        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>4. Research</h2>
          <p className={styles.paragraph}>
            Following our published paper on LLM bias mitigation with Taylor &amp; Francis (CRC Press), I am actively exploring deterministic state-graph evaluation harnesses to eliminate hallucinations in agentic tool-calling workflows.
          </p>
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
