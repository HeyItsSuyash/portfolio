import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogPosts';
import styles from '@/app/sharedRoute.module.css';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} — Suyash Shukla`,
    description: post.summary,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `/blog/${post.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      '@id': 'https://heyitssuyash.github.io/portfolio/#person',
      name: 'Suyash Shukla',
      url: 'https://heyitssuyash.github.io/portfolio',
    },
    publisher: {
      '@type': 'Person',
      '@id': 'https://heyitssuyash.github.io/portfolio/#person',
    },
    url: `https://heyitssuyash.github.io/portfolio/blog/${post.slug}`,
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <header className={styles.header}>
        <div className={styles.topNav}>
          <Link href="/blog" className={styles.backLink}>
            ← Back to Articles
          </Link>
          <div className={styles.badge}>{post.readTime} • {post.date}</div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.subtitle}>ENGINEERING NOTE</div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.tagline}>{post.subtitle}</p>

          <div className={styles.cardMeta} style={{ marginTop: '16px' }}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className={styles.contentContainer}>
        <article className={styles.detailBlock} style={{ borderTop: 'none', paddingTop: 0 }}>
          {post.content.map((paragraph, idx) => (
            <p key={idx} className={styles.paragraph} style={{ fontSize: '17px', lineHeight: '1.85', marginBottom: '24px' }}>
              {paragraph}
            </p>
          ))}
        </article>

        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>About the Author</h2>
          <p className={styles.paragraph}>
            Suyash Shukla is a Full Stack Engineer at Exaflair Technologies, an undergraduate in Computer Science at MMMUT Gorakhpur, and concurrently studies Data Science at IIT Madras. He is a published researcher in machine learning with Taylor &amp; Francis (CRC Press).
          </p>
          <div className={styles.linkGroup}>
            <Link href="/about" className={styles.cardLink}>
              About Suyash →
            </Link>
            <Link href="/projects" className={styles.cardLink}>
              View All Projects →
            </Link>
          </div>
        </section>
      </div>

      <footer className={styles.footerNav}>
        <Link href="/blog" className={styles.footerBackBtn}>
          ← Return to All Articles
        </Link>
      </footer>
    </main>
  );
}
