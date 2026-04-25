import styles from './Contact.module.css';

const links = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/suyashshukla' },
  { label: 'GitHub', href: 'https://github.com/HeyItsSuyash' },
  { label: 'Email', href: 'mailto:suyash@example.com' },
  { label: 'Portfolio', href: 'https://earnbuddy.io' },
];

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className={styles.inner}>
          <div className={styles.big}>
            Let&apos;s<br />Build<br /><span>Together.</span>
          </div>
          <div className={styles.links}>
            {links.map((l) => (
              <a
                key={l.label}
                className={styles.link}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span>↗</span> {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>Suyash Shukla — 2026</p>
        <p>CS@MMMUT · DS@IIT Madras</p>
      </footer>
    </>
  );
}
