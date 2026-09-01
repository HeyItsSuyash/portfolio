import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS_DATA } from '@/data/projectsData';
import styles from './caseStudy.module.css';

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.main}>
      {/* Top Header / Breadcrumb */}
      <header className={styles.header}>
        <div className={styles.topNav}>
          <Link href="/#where" className={styles.backLink}>
            ← Back to Projects
          </Link>
          <div className={styles.projectBadge}>
            PROJECT {project.index} / {project.total}
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.subtitle}>{project.subtitle}</div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{project.tagline}</p>

          <div className={styles.heroCtaGroup}>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryBtn}
              >
                Launch Live Project
              </a>
            )}
            <Link href="/#contact" className={styles.secondaryBtn}>
              Get In Touch
            </Link>
          </div>
        </div>
      </header>

      {/* Featured Banner Showcase */}
      <section className={styles.bannerSection}>
        <div className={styles.bannerWrapper}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1400}
            height={780}
            className={styles.bannerImage}
            priority
          />
        </div>
      </section>

      {/* Metrics Strip */}
      <section className={styles.metricsSection}>
        <div className={styles.metricsGrid}>
          {project.metrics.map((metric) => (
            <div key={metric.label} className={styles.metricCard}>
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Editorial Sections */}
      <div className={styles.contentContainer}>
        {/* Overview */}
        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>01. Overview</h2>
          <p className={styles.paragraph}>{project.overview}</p>
        </section>

        {/* Problem & Solution Grid */}
        <section className={styles.detailBlock}>
          <div className={styles.dualGrid}>
            <div className={styles.gridCard}>
              <h3 className={styles.cardHeading}>The Problem</h3>
              <p className={styles.cardText}>{project.problem}</p>
            </div>
            <div className={styles.gridCard}>
              <h3 className={styles.cardHeading}>The Solution</h3>
              <p className={styles.cardText}>{project.solution}</p>
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>02. Architecture & Engineering</h2>
          <ul className={styles.featureList}>
            {project.architecture.map((item, idx) => (
              <li key={idx} className={styles.listItem}>
                <span className={styles.listBullet}>▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Key Features */}
        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>03. Key Capabilities</h2>
          <ul className={styles.featureList}>
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className={styles.listItem}>
                <span className={styles.listBullet}>▹</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>04. Technology Stack</h2>
          <div className={styles.tagsContainer}>
            {project.techStack.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Footer Navigation Strip */}
      <footer className={styles.footerNav}>
        <Link href="/#where" className={styles.footerBackBtn}>
          ← Return to All Projects
        </Link>
      </footer>
    </main>
  );
}
