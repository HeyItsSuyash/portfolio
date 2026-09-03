import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../sharedRoute.module.css';

export const metadata: Metadata = {
  title: 'Uses — Hardware, Software & Developer Tooling',
  description:
    'A living catalog of hardware, software, developer tools, editors, and terminal setups used daily by Suyash Shukla for full-stack engineering and machine learning.',
  alternates: {
    canonical: '/uses',
  },
  openGraph: {
    title: 'What Suyash Uses — Tooling & Setup',
    description:
      'The developer setup, software, terminal configurations, and daily tools used by Suyash Shukla.',
    url: '/uses',
  },
};

const gearCategories = [
  {
    title: 'Development & Editors',
    items: [
      { name: 'VS Code & Antigravity IDE', desc: 'Primary code editors with custom keybindings, TypeScript server integration, and Copilot/Claude extension harnesses.' },
      { name: 'Windows Terminal + PowerShell & WSL2 (Ubuntu)', desc: 'Daily driver terminal environment with Starship prompt and zoxide fast directory navigation.' },
      { name: 'Git & GitHub CLI (gh)', desc: 'Version control, interactive pull requests, and automated GitHub Actions workflow verification.' },
      { name: 'Postman & Bruno', desc: 'REST, WebSocket, and GraphQL API debugging and automated endpoint integration assertions.' },
    ],
  },
  {
    title: 'Languages & Runtime Environments',
    items: [
      { name: 'Node.js (LTS) & pnpm / npm', desc: 'JavaScript and TypeScript runtime for Next.js, Fastify, and microservices tooling.' },
      { name: 'Python 3.11 / 3.12 & uv / venv', desc: 'High-speed package management and virtual environment orchestration for AI/ML development.' },
      { name: 'Docker & Docker Compose', desc: 'Local database spinning (PostgreSQL, Redis, MongoDB) and reproducible containerized staging.' },
    ],
  },
  {
    title: 'Cloud Services & Production Infrastructure',
    items: [
      { name: 'Google Cloud Platform (GCP)', desc: 'Cloud Run serverless containers, Cloud Functions event workers, and Cloud Pub/Sub message queues.' },
      { name: 'Vercel', desc: 'Zero-configuration edge hosting, incremental static regeneration (ISR), and Next.js production deployments.' },
      { name: 'PostgreSQL & pgvector', desc: 'Primary relational database for transactional integrity and vector similarity embeddings.' },
      { name: 'Redis', desc: 'In-memory caching layer, pub/sub communication channels, and distributed locking (Redlock).' },
    ],
  },
  {
    title: 'Hardware & Everyday Carry',
    items: [
      { name: 'Primary Workstation', desc: 'High-performance multi-core machine running Windows 11 with WSL2 for native Linux kernel operations.' },
      { name: 'Audio', desc: 'Low-latency noise-canceling headphones for deep focus and engineering flow states.' },
    ],
  },
];

export default function UsesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    name: 'What Suyash Shukla Uses — Tooling & Setup',
    description: 'Hardware, software, and developer tools used by Suyash Shukla.',
    url: 'https://heyitssuyash.github.io/portfolio/uses',
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
          <div className={styles.badge}>LIVING SPECIFICATION</div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.subtitle}>SETUP &amp; WORKSPACE</div>
          <h1 className={styles.title}>What I Use</h1>
          <p className={styles.tagline}>
            A curated list of developer tools, hardware, software environments, and infrastructure services I use daily to build software.
          </p>

          <div className={styles.heroCtaGroup}>
            <Link href="/skills" className={styles.primaryBtn}>
              Technical Skills
            </Link>
            <Link href="/now" className={styles.secondaryBtn}>
              What I&apos;m Doing Now
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.contentContainer}>
        {gearCategories.map((cat) => (
          <section key={cat.title} className={styles.detailBlock}>
            <h2 className={styles.sectionHeading}>{cat.title}</h2>
            <div className={styles.gridCards}>
              {cat.items.map((item) => (
                <div key={item.name} className={styles.card}>
                  <h3 className={styles.cardTitle} style={{ fontSize: '17px' }}>{item.name}</h3>
                  <p className={styles.cardDescription}>{item.desc}</p>
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
