import type { Metadata } from 'next';
import Link from 'next/link';
import { TIMELINE_ENTRIES } from '@/data/timelineData';
import styles from '../sharedRoute.module.css';

export const metadata: Metadata = {
  title: 'Experience & Timeline — Engineering Journey',
  description:
    'Detailed chronological engineering timeline of Suyash Shukla: from early maker experiments, community hackathons, founding EarnBuddy and Laterally Inverted Studio, to production full-stack engineering at Exaflair.',
  alternates: {
    canonical: '/experience',
  },
  openGraph: {
    title: 'Experience & Timeline | Suyash Shukla',
    description:
      'The engineering journey of Suyash Shukla: software roles, startup products, research, community leadership, and academic milestones.',
    url: '/experience',
  },
};

export default function ExperiencePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Experience & Engineering Journey | Suyash Shukla',
    description: 'Chronological timeline of software engineering roles, ventures, and milestones.',
    url: 'https://heyitssuyash.github.io/portfolio/experience',
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
          <div className={styles.badge}>CHRONOLOGY / EXPERIENCE</div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.subtitle}>MILESTONES &amp; ROLES</div>
          <h1 className={styles.title}>Experience &amp; Timeline</h1>
          <p className={styles.tagline}>
            From early robotics and maker exploration to engineering production microservices, startup co-founding, and applied AI research.
          </p>

          <div className={styles.heroCtaGroup}>
            <Link href="/projects" className={styles.primaryBtn}>
              View Projects
            </Link>
            <Link href="/skills" className={styles.secondaryBtn}>
              Technical Skills
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.contentContainer}>
        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>Professional Experience &amp; Ventures</h2>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <div className={styles.cardSubtitle}>2026 — Present</div>
              <h3 className={styles.cardTitle}>Full Stack Engineer</h3>
              <div className={styles.tag}>Exaflair Technologies</div>
              <p className={styles.cardDescription}>
                Engineered production web and mobile applications with Next.js, Fastify, and PostgreSQL. Focused on clean architecture, API responsiveness, and robust component hierarchies.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardSubtitle}>2025 — 2026</div>
              <h3 className={styles.cardTitle}>Co-Founder &amp; Tech Lead</h3>
              <div className={styles.tag}>EarnBuddy.io</div>
              <p className={styles.cardDescription}>
                Co-founded a microservices SaaS task exchange platform. Built domain-driven REST APIs, real-time Socket.IO communication, and scaled to 1,000+ registered users across multiple colleges.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardSubtitle}>2024 — Present</div>
              <h3 className={styles.cardTitle}>Founder</h3>
              <div className={styles.tag}>Laterally Inverted Studio</div>
              <p className={styles.cardDescription}>
                Maker collective built to launch experimental software, digital products, and utilities. Overseeing system architecture, cloud deployment, and rapid prototyping.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>Chronological Timeline</h2>
          <ul className={styles.featureList}>
            {TIMELINE_ENTRIES.map((item) => (
              <li key={item.id} className={styles.listItem}>
                <span className={styles.listBullet}>▹</span>
                <div>
                  <strong>{item.year} — {item.title}</strong>
                  <ul style={{ marginTop: '8px', paddingLeft: '16px', listStyleType: 'disc' }}>
                    {item.highlights.map((h, i) => (
                      <li key={i} style={{ marginBottom: '4px' }}>{h}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
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
