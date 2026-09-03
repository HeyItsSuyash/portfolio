import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  FaWhatsapp, 
  FaLinkedinIn, 
  FaXTwitter, 
  FaGithub, 
  FaInstagram, 
  FaDiscord,
  FaEnvelope
} from 'react-icons/fa6';
import { SiBluesky, SiThreads } from 'react-icons/si';
import styles from '../sharedRoute.module.css';

export const metadata: Metadata = {
  title: 'Contact & Connect — Suyash Shukla',
  description:
    'Get in touch with Suyash Shukla for software engineering opportunities, product collaborations, AI consulting, or speaking inquiries. Connect via email, LinkedIn, X, or GitHub.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Suyash Shukla',
    description:
      'Direct contact channels, social networks, and collaboration details for Suyash Shukla.',
    url: '/contact',
  },
};

const directChannels = [
  {
    name: 'Direct Email',
    handle: 'yolo@suyashshukla.com',
    href: 'mailto:yolo@suyashshukla.com',
    detail: 'Best for engineering roles, project inquiries, and formal correspondence.',
    icon: <FaEnvelope size={20} />,
  },
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/suyashshukla',
    href: 'https://linkedin.com/in/suyashshukla',
    detail: 'Professional network, career background, and recommendations.',
    icon: <FaLinkedinIn size={20} />,
  },
  {
    name: 'X (Twitter)',
    handle: '@HeyItsSuyash',
    href: 'https://x.com/HeyItsSuyash',
    detail: 'Fastest for casual tech banter, build-in-public updates, and DMs.',
    icon: <FaXTwitter size={20} />,
  },
  {
    name: 'GitHub',
    handle: 'github.com/HeyItsSuyash',
    href: 'https://github.com/HeyItsSuyash',
    detail: 'Code repositories, open-source work, and active contributions.',
    icon: <FaGithub size={20} />,
  },
  {
    name: 'Product Hunt',
    handle: '@heyitssuyash',
    href: 'https://www.producthunt.com/@heyitssuyash',
    detail: 'Product launches, community discussions, and maker profile.',
    icon: <span style={{ fontWeight: 800, fontSize: '18px' }}>P</span>,
  },
  {
    name: 'Bluesky',
    handle: 'heyitssuyash.bsky.social',
    href: 'https://bsky.app/profile/heyitssuyash.bsky.social',
    detail: 'Decentralized social networking and tech discourse.',
    icon: <SiBluesky size={20} />,
  },
  {
    name: 'Instagram',
    handle: '@HeyItsSuyash',
    href: 'https://instagram.com/HeyItsSuyash',
    detail: 'Life updates and creative design experiments.',
    icon: <FaInstagram size={20} />,
  },
  {
    name: 'Threads',
    handle: '@HeyItsSuyash',
    href: 'https://threads.net/@HeyItsSuyash',
    detail: 'Bite-sized engineering thoughts and reflections.',
    icon: <SiThreads size={20} />,
  },
];

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Suyash Shukla',
    description: 'Direct contact information and channels for Suyash Shukla.',
    url: 'https://heyitssuyash.github.io/portfolio/contact',
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
          <div className={styles.badge}>GET IN TOUCH</div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.subtitle}>COMMUNICATION &amp; SOCIALS</div>
          <h1 className={styles.title}>Contact &amp; Connect</h1>
          <p className={styles.tagline}>
            Always open to discussing software engineering roles, high-throughput backend architecture, AI applications, or new creative builds.
          </p>

          <div className={styles.heroCtaGroup}>
            <a href="mailto:yolo@suyashshukla.com" className={styles.primaryBtn}>
              Send Direct Email
            </a>
            <Link href="/499-scheme" className={styles.secondaryBtn}>
              Pitch a ₹499 Build Idea
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.contentContainer}>
        <section className={styles.detailBlock}>
          <h2 className={styles.sectionHeading}>Direct Channels</h2>
          <div className={styles.gridCards}>
            {directChannels.map((channel) => (
              <div key={channel.name} className={styles.card}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: '#F5F5DC' }}>{channel.icon}</div>
                  <h3 className={styles.cardTitle}>{channel.name}</h3>
                </div>
                <div className={styles.cardSubtitle}>{channel.handle}</div>
                <p className={styles.cardDescription}>{channel.detail}</p>
                <div className={styles.linkGroup}>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                  >
                    Open Channel ↗
                  </a>
                </div>
              </div>
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
