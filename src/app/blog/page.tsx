import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogPosts';
import styles from '../sharedRoute.module.css';

export const metadata: Metadata = {
  title: 'Engineering Notes & Writing — Suyash Shukla',
  description:
    'First-hand technical articles and engineering deep dives by Suyash Shukla on scaling virtual lab simulations with WebSockets, LLM bias mitigation research, and deterministic agentic state machines.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Writing & Engineering Notes | Suyash Shukla',
    description:
      'In-depth technical reflections on systems architecture, machine learning research, and full-stack engineering.',
    url: '/blog',
  },
};

export default function BlogIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Suyash Shukla Engineering Notes',
    description: 'Technical writing and architecture case studies by Suyash Shukla.',
    url: 'https://heyitssuyash.github.io/portfolio/blog',
    author: {
      '@type': 'Person',
      '@id': 'https://heyitssuyash.github.io/portfolio/#person',
      name: 'Suyash Shukla',
      url: 'https://heyitssuyash.github.io/portfolio',
    },
    blogPost: BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.summary,
      datePublished: post.date,
      url: `https://heyitssuyash.github.io/portfolio/blog/${post.slug}`,
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
          <div className={styles.badge}>WRITING &amp; NOTES</div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.subtitle}>ENGINEERING DISPATCHES</div>
          <h1 className={styles.title}>Writing &amp; Technical Notes</h1>
          <p className={styles.tagline}>
            Reflections from building production distributed systems, conducting AI fairness research, and deploying real-world software platforms.
          </p>

          <div className={styles.heroCtaGroup}>
            <Link href="/projects" className={styles.primaryBtn}>
              Browse Projects
            </Link>
            <Link href="/knowledge" className={styles.secondaryBtn}>
              Knowledge Base
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.contentContainer}>
        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>Recent Articles</h2>
          <div className={styles.gridCards}>
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className={styles.card}>
                <div className={styles.cardSubtitle}>
                  {post.date} • {post.readTime}
                </div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardDescription}>{post.summary}</p>

                <div className={styles.cardMeta}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.linkGroup}>
                  <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                    Read Article →
                  </Link>
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
