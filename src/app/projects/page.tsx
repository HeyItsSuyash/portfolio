import type { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS_DATA } from '@/data/projectsData';
import styles from '../sharedRoute.module.css';

export const metadata: Metadata = {
  title: 'Projects & Engineering Case Studies',
  description:
    'Engineering portfolio of Suyash Shukla featuring full-stack applications, distributed architectures, agentic AI platforms, and microservices including Prayukti, EarnBuddy, Genwin, and Caller.work.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | Suyash Shukla',
    description:
      'Explore production systems, virtual laboratory platforms, SaaS backends, and AI agent platforms built by Suyash Shukla.',
    url: '/projects',
  },
};

export default function ProjectsIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects & Case Studies | Suyash Shukla',
    description:
      'Portfolio of production web applications, AI systems, and microservices built by Suyash Shukla.',
    url: 'https://heyitssuyash.github.io/portfolio/projects',
    hasPart: PROJECTS_DATA.map((p) => ({
      '@type': 'SoftwareApplication',
      name: p.title,
      description: p.description,
      url: `https://heyitssuyash.github.io/portfolio/projects/${p.slug}`,
    })),
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
          <div className={styles.badge}>INDEX / {PROJECTS_DATA.length} PROJECTS</div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.subtitle}>PORTFOLIO WORK &amp; EXPERIMENTS</div>
          <h1 className={styles.title}>Projects &amp; Case Studies</h1>
          <p className={styles.tagline}>
            A curated index of production software, microservices, cloud simulations, and agentic AI platforms built from idea to deployment.
          </p>

          <div className={styles.heroCtaGroup}>
            <Link href="/#where" className={styles.primaryBtn}>
              Interactive Project Carousel
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Discuss a Project
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.contentContainer}>
        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>Featured Systems</h2>
          <div className={styles.gridCards}>
            {PROJECTS_DATA.map((project) => (
              <article key={project.slug} className={styles.card}>
                <div className={styles.cardSubtitle}>
                  PROJECT {project.index} — {project.subtitle}
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>

                <div className={styles.cardMeta}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.linkGroup}>
                  <Link href={`/projects/${project.slug}`} className={styles.cardLink}>
                    Read Case Study →
                  </Link>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      Live Project ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
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
