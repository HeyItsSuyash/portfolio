import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../sharedRoute.module.css';

export const metadata: Metadata = {
  title: 'About — Background & Philosophy',
  description:
    'Learn more about Suyash Shukla — CS undergraduate at MMMUT Gorakhpur, Data Science at IIT Madras, founder of the Computer Science & Innovation Society, and builder of cloud-native systems.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Suyash Shukla',
    description:
      'Full-stack engineer, ML practitioner, and student leader building production web applications, research on LLM bias detection, and cloud platforms.',
    url: '/about',
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Suyash Shukla',
    description:
      'Academic background, technical focus, and journey of full-stack engineer and researcher Suyash Shukla.',
    url: 'https://heyitssuyash.github.io/portfolio/about',
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
          <div className={styles.badge}>PROFILE / ABOUT</div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.subtitle}>WHO I AM &amp; WHAT DRIVES ME</div>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.tagline}>
            A CS undergraduate, data science student, open-source contributor, and software craftsman passionate about turning ideas into high-performance software.
          </p>

          <div className={styles.heroCtaGroup}>
            <Link href="/projects" className={styles.primaryBtn}>
              Explore Projects
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Connect With Me
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.contentContainer}>
        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>Background</h2>
          <p className={styles.paragraph}>
            I&apos;m a Computer Science &amp; Engineering undergraduate at Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur, and concurrently pursuing a Bachelor of Science in Data Science and Applications from the Indian Institute of Technology Madras (IIT Madras).
          </p>
          <p className={styles.paragraph}>
            I founded the Computer Science &amp; Innovation Society (CSIS) at MMMUT, built cloud-native virtual laboratories serving over 400 concurrent students, and co-authored published research on large language model fairness with Taylor &amp; Francis (CRC Press).
          </p>
          <p className={styles.paragraph}>
            I like learning a little about a lot of things, getting curious about new technologies every week, and turning that curiosity into usable, production-ready software.
          </p>
        </section>

        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>Key Milestones</h2>
          <ul className={styles.featureList}>
            <li className={styles.listItem}>
              <span className={styles.listBullet}>▹</span>
              <span><strong>25+ Projects Built:</strong> Full-stack applications, microservices, AI pipelines, and developer tooling.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.listBullet}>▹</span>
              <span><strong>Community Leadership:</strong> President of the Computer Science &amp; Innovation Society; Vice President of HackWithIndia Chapter MMMUT.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.listBullet}>▹</span>
              <span><strong>Published Research:</strong> Research paper on bias detection and mitigation in large language models published with Taylor &amp; Francis (CRC Press) 2025.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.listBullet}>▹</span>
              <span><strong>Academic Excellence:</strong> Qualified GATE 2026 in Computer Science &amp; Information Technology; Perfect GPA (S-Grade) in Python, Maths 2, and English at IIT Madras.</span>
            </li>
          </ul>
        </section>

        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>Education</h2>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <div className={styles.cardSubtitle}>2023 — 2027</div>
              <h3 className={styles.cardTitle}>MMMUT Gorakhpur</h3>
              <p className={styles.cardDescription}>B.Tech in Computer Science &amp; Engineering</p>
              <ul className={styles.featureList}>
                <li className={styles.listItem}>
                  <span className={styles.listBullet}>•</span>
                  <span>President, Computer Science &amp; Innovation Society</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet}>•</span>
                  <span>Vice President, HackWithIndia Chapter</span>
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardSubtitle}>2024 — 2028</div>
              <h3 className={styles.cardTitle}>IIT Madras</h3>
              <p className={styles.cardDescription}>B.Sc in Data Science &amp; Applications</p>
              <ul className={styles.featureList}>
                <li className={styles.listItem}>
                  <span className={styles.listBullet}>•</span>
                  <span>Content Writer &amp; Researcher @ Corbett House</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet}>•</span>
                  <span>PR &amp; Outreach Member @ Corbett House</span>
                </li>
              </ul>
            </div>
          </div>
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
