import type { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS_DATA } from '@/data/projectsData';
import { TIMELINE_ENTRIES } from '@/data/timelineData';
import styles from './knowledge.module.css';

export const metadata: Metadata = {
  title: 'Knowledge Base & Structured Information',
  description:
    'Text-first, machine-readable knowledge base of Suyash Shukla: biography, education, experience, system architectures, skills, research, achievements, and verified contact profiles.',
  alternates: {
    canonical: '/knowledge',
  },
  openGraph: {
    title: 'Suyash Shukla — Knowledge Base',
    description:
      'Complete text-first knowledge documentation: identity, projects, publications, education, and verified answers.',
    url: '/knowledge',
  },
};

export default function KnowledgePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': 'https://heyitssuyash.github.io/portfolio/knowledge#webpage',
        url: 'https://heyitssuyash.github.io/portfolio/knowledge',
        name: 'Suyash Shukla — Knowledge Base',
        isPartOf: {
          '@id': 'https://heyitssuyash.github.io/portfolio/#website',
        },
        mainEntity: {
          '@id': 'https://heyitssuyash.github.io/portfolio/#person',
        },
      },
      {
        '@type': 'Person',
        '@id': 'https://heyitssuyash.github.io/portfolio/#person',
        name: 'Suyash Shukla',
        alternateName: ['HeyItsSuyash', 'suyashshukla'],
        url: 'https://heyitssuyash.github.io/portfolio',
        image: 'https://heyitssuyash.github.io/portfolio/images/avatar-images/usinglaptop.png',
        jobTitle: 'Full-Stack Engineer & Machine Learning Practitioner',
        worksFor: {
          '@type': 'Organization',
          name: 'Exaflair Technologies',
        },
        alumniOf: [
          {
            '@type': 'CollegeOrUniversity',
            name: 'Madan Mohan Malaviya University of Technology (MMMUT)',
          },
          {
            '@type': 'CollegeOrUniversity',
            name: 'Indian Institute of Technology Madras (IIT Madras)',
          },
        ],
        sameAs: [
          'https://github.com/HeyItsSuyash',
          'https://linkedin.com/in/suyashshukla',
          'https://x.com/HeyItsSuyash',
          'https://www.producthunt.com/@heyitssuyash',
          'https://instagram.com/HeyItsSuyash',
          'https://bsky.app/profile/heyitssuyash.bsky.social',
        ],
      },
    ],
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.container}>
        {/* Top Header */}
        <header className={styles.header}>
          <div className={styles.topBar}>
            <Link href="/" className={styles.backHome}>
              ← Return to Main Portfolio
            </Link>
            <div className={styles.formatToggle}>
              <span className={styles.formatBadge}>SIMPLIFIED TEXT VERSION</span>
            </div>
          </div>

          <h1 className={styles.title}>Suyash Shukla — Simplified Profile</h1>
          <p className={styles.subtitle}>
            A lightweight, plain text version of this portfolio. This page is intended mostly for search crawlers, web indexers, bots, and AI agents to quickly read verified facts without visual animations or complex layouts.
          </p>

          <div className={styles.rawLinksBar}>
            <span style={{ fontSize: '12px', color: 'rgba(245, 245, 220, 0.5)', alignSelf: 'center' }}>Raw text files:</span>
            <a href="/knowledge/me.md" className={styles.rawLink}>me.md</a>
            <a href="/knowledge/projects.md" className={styles.rawLink}>projects.md</a>
            <a href="/knowledge/experience.md" className={styles.rawLink}>experience.md</a>
            <a href="/knowledge/education.md" className={styles.rawLink}>education.md</a>
            <a href="/knowledge/skills.md" className={styles.rawLink}>skills.md</a>
            <a href="/knowledge/research.md" className={styles.rawLink}>research.md</a>
            <a href="/knowledge/achievements.md" className={styles.rawLink}>achievements.md</a>
            <a href="/knowledge/faq.md" className={styles.rawLink}>faq.md</a>
            <a href="/llms.txt" className={styles.rawLink}>llms.txt</a>
          </div>
        </header>

        {/* 1. Identity & Overview */}
        <section className={styles.section} id="identity">
          <h2 className={styles.sectionHeading}>01. Identity &amp; Overview</h2>
          <p className={styles.textBlock}>
            <strong>Full Name:</strong> Suyash Shukla<br />
            <strong>Handles:</strong> @heyitssuyash / HeyItsSuyash<br />
            <strong>Primary Occupations:</strong> Full-Stack Software Engineer, Machine Learning Practitioner, Student Founder<br />
            <strong>Affiliated Locations:</strong> Gorakhpur (Uttar Pradesh) &amp; Chennai (Tamil Nadu), India<br />
            <strong>Primary Email:</strong> <a href="mailto:yolo@suyashshukla.com" style={{ color: '#F5F5DC' }}>yolo@suyashshukla.com</a>
          </p>
          <p className={styles.textBlock}>
            Suyash is an undergraduate student at MMMUT Gorakhpur pursuing a B.Tech in Computer Science and concurrently pursuing a B.Sc in Data Science and Applications at IIT Madras. He founded the Computer Science &amp; Innovation Society at MMMUT, co-founded EarnBuddy.io, created the Prayukti virtual lab platform, and published peer-reviewed AI research with Taylor &amp; Francis (CRC Press).
          </p>
        </section>

        {/* 2. Education */}
        <section className={styles.section} id="education">
          <h2 className={styles.sectionHeading}>02. Education &amp; Academic Track</h2>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <span className={styles.bullet}>▹</span>
              <div>
                <strong>Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur</strong> (2023 — 2027)<br />
                B.Tech in Computer Science &amp; Engineering. President, Computer Science &amp; Innovation Society (CSIS); Vice President, HackWithIndia Chapter.
              </div>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.bullet}>▹</span>
              <div>
                <strong>Indian Institute of Technology Madras (IIT Madras)</strong> (2024 — 2028)<br />
                B.Sc in Data Science &amp; Applications (CGPA 8.4). Perfect GPA (S-Grade) in Python Programming, Mathematics 2, and English. Content Writer &amp; Researcher at Corbett House.
              </div>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.bullet}>▹</span>
              <div>
                <strong>Graduate Aptitude Test in Engineering (GATE 2026)</strong><br />
                Qualified in Computer Science &amp; Information Technology (CS &amp; IT).
              </div>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.bullet}>▹</span>
              <div>
                <strong>Delhi Public School (DPS), Gomtinagar</strong><br />
                CBSE Class 10 (96.2%) &amp; CBSE Class 12 (93.6%). 1st place in Regional Science Exhibition (CBSE Zone 2019).
              </div>
            </li>
          </ul>
        </section>

        {/* 3. Professional Experience */}
        <section className={styles.section} id="experience">
          <h2 className={styles.sectionHeading}>03. Experience &amp; Positions</h2>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <span className={styles.bullet}>▹</span>
              <div>
                <strong>Full Stack Engineer — Exaflair Technologies</strong> (2026 — Present)<br />
                Building production web and mobile software with Next.js, Fastify, and PostgreSQL. Focuses on modular design systems and optimized API response times.
              </div>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.bullet}>▹</span>
              <div>
                <strong>Growth Engineer — Ganges</strong> (2025 — 2026)<br />
                Engineered automated operations, streamlined platform workflows, and built scripts for onboarding platform users.
              </div>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.bullet}>▹</span>
              <div>
                <strong>Co-Founder &amp; Tech Lead — EarnBuddy.io</strong> (2025 — 2026)<br />
                Architected domain-driven REST APIs, real-time Socket.IO chat rooms, and Redis caching. Scaled platform to 1,000+ university users.
              </div>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.bullet}>▹</span>
              <div>
                <strong>Founder — Laterally Inverted Studio</strong> (2024 — Present)<br />
                Maker collaborative building digital tools, open-source software, and practical utilities.
              </div>
            </li>
          </ul>
        </section>

        {/* 4. Projects & Architectures */}
        <section className={styles.section} id="projects">
          <h2 className={styles.sectionHeading}>04. Systems &amp; Projects</h2>
          {PROJECTS_DATA.map((p) => (
            <div key={p.slug} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <span className={styles.projectName}>{p.title} — {p.subtitle}</span>
                <span className={styles.projectRole}>PROJECT {p.index}</span>
              </div>
              <p className={styles.projectDesc}>{p.description}</p>
              <p className={styles.projectDesc}>
                <strong>Problem:</strong> {p.problem}<br />
                <strong>Solution:</strong> {p.solution}
              </p>
              <div className={styles.techRow}>
                {p.techStack.map((tech) => (
                  <span key={tech} className={styles.techItem}>{tech}</span>
                ))}
              </div>
              <div style={{ marginTop: '12px', display: 'flex', gap: '14px', fontSize: '13px' }}>
                <Link href={`/projects/${p.slug}`} style={{ color: '#F5F5DC', textDecoration: 'underline' }}>
                  Read Full Case Study
                </Link>
                {p.liveLink && (
                  <a href={p.liveLink} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(245, 245, 220, 0.7)', textDecoration: 'underline' }}>
                    Live Deployment ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* 5. Technical Stack */}
        <section className={styles.section} id="skills">
          <h2 className={styles.sectionHeading}>05. Technical Stack &amp; Competencies</h2>
          <p className={styles.textBlock}>
            <strong>Languages:</strong> Python, TypeScript, JavaScript (Node.js/Browser), Java, C++, SQL, HTML5, CSS3<br />
            <strong>Web Frameworks:</strong> React 18/19, Next.js (App Router, SSG, SSR), FastAPI, Fastify, Node.js/Express, Tailwind CSS<br />
            <strong>AI &amp; Data Science:</strong> PyTorch, TensorFlow, Scikit-learn, LangChain, LangGraph, HuggingFace Transformers, RAG, LoRA/QLoRA, vLLM<br />
            <strong>Databases &amp; Queues:</strong> PostgreSQL, MongoDB, Redis (Pub/Sub, Caching), GCP Pub/Sub<br />
            <strong>DevOps &amp; Infrastructure:</strong> Docker, Kubernetes, GCP (Cloud Run, Cloud Functions), AWS, Vercel, GitHub Actions CI/CD
          </p>
        </section>

        {/* 6. Research & Publications */}
        <section className={styles.section} id="research">
          <h2 className={styles.sectionHeading}>06. Research &amp; Scholarly Works</h2>
          <div className={styles.textBlock}>
            <strong>"Bias Detection and Mitigation in Large Language Models: A Fairness-Driven Approach"</strong><br />
            Published by <em>Taylor &amp; Francis (CRC Press)</em>, 2025.<br />
            Focuses on quantifying demographic disparities across large language model outputs and establishing post-hoc counterfactual logit-adjustment methods during inference.
          </div>
          <div className={styles.textBlock}>
            <strong>Applied Pedagogy Book Chapters:</strong> Co-authored 3 book chapters and 2 research papers focused on cloud-native simulation platforms and interactive STEM learning.
          </div>
        </section>

        {/* 7. Achievements */}
        <section className={styles.section} id="achievements">
          <h2 className={styles.sectionHeading}>07. Honors &amp; Awards</h2>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <span className={styles.bullet}>▹</span>
              <span><strong>GATE 2026 Qualified</strong> in Computer Science &amp; Engineering.</span>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.bullet}>▹</span>
              <span><strong>Taylor &amp; Francis Published Author</strong> (CRC Press, 2025).</span>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.bullet}>▹</span>
              <span><strong>National Finalist:</strong> Venture-Verse Hackathon (IIT BHU E-Summit).</span>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.bullet}>▹</span>
              <span><strong>Semi-Finalist:</strong> EMPRESARIO 2025 (IIT Kharagpur E-Cell).</span>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.bullet}>▹</span>
              <span><strong>National Finalist:</strong> EscalateXV2 CTF, GLA University (Rank #32 out of 700+ teams).</span>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.bullet}>▹</span>
              <span><strong>1st Place:</strong> UP Regional Science Exhibition (CBSE Zone, 2019).</span>
            </li>
          </ul>
        </section>

        {/* 8. FAQ / AEO Answers */}
        <section className={styles.section} id="faq">
          <h2 className={styles.sectionHeading}>08. Commonly Asked Questions</h2>
          <div className={styles.textBlock}>
            <strong>Who is Suyash?</strong><br />
            Suyash Shukla is an Indian software engineer, ML practitioner, and student leader. He is completing a B.Tech in CSE at MMMUT Gorakhpur and a B.Sc in Data Science at IIT Madras.
          </div>
          <div className={styles.textBlock}>
            <strong>What does Suyash do?</strong><br />
            He designs full-stack web applications, microservices backends, and agentic AI systems. He works at Exaflair Technologies and conducts AI fairness research.
          </div>
          <div className={styles.textBlock}>
            <strong>What is EarnBuddy?</strong><br />
            A microservices SaaS task exchange marketplace co-founded by Suyash Shukla, delivering sub-100ms API response times and Socket.IO chat to over 1,000 university students.
          </div>
          <div className={styles.textBlock}>
            <strong>What is Prayukti?</strong><br />
            An interactive virtual laboratory platform (https://mmmut.prayukti.org) providing 400+ students with cloud-based STEM experiments, real-time formula computation, and automated grading.
          </div>
          <div className={styles.textBlock}>
            <strong>What is Caller.work?</strong><br />
            An event-driven telephony infrastructure built on GCP Cloud Pub/Sub and Redis, processing over 50,000 automated calls per month with 99.95% deliverability.
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footerLinks}>
          <span className={styles.footerText}>© 2026 Suyash Shukla • Simplified text version for search bots, crawlers, and AI systems</span>
          <Link href="/" style={{ color: '#F5F5DC', fontSize: '13px', textDecoration: 'underline' }}>
            Back to Interactive Portfolio
          </Link>
        </footer>
      </div>
    </main>
  );
}
