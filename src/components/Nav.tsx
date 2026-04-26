import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>SS</Link>
      <div className={styles.links}>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
        <a href="https://blog.suyashshukla.com" target="_blank" rel="noopener noreferrer">The Fallible Journey ↗</a>
      </div>
    </nav>
  );
}
