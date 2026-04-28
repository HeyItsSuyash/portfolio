'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navGroup}>
        <Link href="/" className={styles.logo}>SS</Link>
        <Link href="/499-scheme" className={styles.navCta} onClick={() => setIsOpen(false)}>
          499 SCHEME
        </Link>
      </div>
      
      <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
        <Link href="/#work" onClick={() => setIsOpen(false)}>Work</Link>
        <Link href="/#skills" onClick={() => setIsOpen(false)}>Skills</Link>
        <Link href="/#education" onClick={() => setIsOpen(false)}>Education</Link>
        <Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <a href="https://blog.suyashshukla.com" target="_blank" rel="noopener noreferrer">The Fallible Journey ↗</a>
      </div>
    </nav>
  );
}
