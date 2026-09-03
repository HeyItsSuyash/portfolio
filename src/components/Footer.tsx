'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import styles from './Footer.module.css';
import { playHoverPop, playClickThud } from '@/utils/audioUtils';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/suyashshukla' },
  { name: 'GitHub', href: 'https://github.com/HeyItsSuyash' },
  { name: 'X / Twitter', href: 'https://x.com/HeyItsSuyash' },
  { name: 'Product Hunt', href: 'https://www.producthunt.com/@heyitssuyash' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Decorative Background Pattern */}
      <div className={styles.pattern} />
      
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.brand}>
            <Image src="/images/other-illustrations/logo.png" alt="Logo" width={60} height={60} className={styles.logo} />
            <div className={styles.brandName}>Suyash Shukla</div>
          </div>
          
          <div className={styles.mainGrid}>
            <div className={styles.group}>
              <h4>Navigation</h4>
              <nav className={styles.nav}>
                <Link href="/about" onMouseEnter={playHoverPop} onClick={playClickThud}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  About
                </Link>
                <Link href="/projects" onMouseEnter={playHoverPop} onClick={playClickThud}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                  Projects
                </Link>
                <Link href="/skills" onMouseEnter={playHoverPop} onClick={playClickThud}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                  Skills
                </Link>
                <Link href="/contact" onMouseEnter={playHoverPop} onClick={playClickThud}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Contact
                </Link>
                <Link href="/blog" onMouseEnter={playHoverPop} onClick={playClickThud}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                  Writing
                </Link>
                <Link href="/knowledge" onMouseEnter={playHoverPop} onClick={playClickThud}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
                  Knowledge
                </Link>
              </nav>
            </div>

            <div className={styles.group}>
              <h4>Socials</h4>
              <nav className={styles.nav}>
                <a href="https://linkedin.com/in/suyashshukla" target="_blank" rel="noopener noreferrer" onMouseEnter={playHoverPop} onClick={playClickThud}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
                <a href="https://github.com/HeyItsSuyash" target="_blank" rel="noopener noreferrer" onMouseEnter={playHoverPop} onClick={playClickThud}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  GitHub
                </a>
                <a href="https://x.com/HeyItsSuyash" target="_blank" rel="noopener noreferrer" onMouseEnter={playHoverPop} onClick={playClickThud}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  Twitter
                </a>
              </nav>
            </div>
          </div>

          <div className={styles.copyright}>
            © 2026 Suyash Shukla • All Rights Reserved
          </div>
        </div>

        <div className={styles.right}>
          <Image 
            src="/images/other-illustrations/dog.png" 
            alt="Dog" 
            width={450} 
            height={450} 
            className={styles.dog}
          />
        </div>
      </div>

      {/* The Final Conclusion Strip */}
      <div className={styles.conclusion}>
        <div className={styles.conclusionText}>
          &ldquo;We have a strategic plan. It&apos;s called doing things.&rdquo; — Herb Kelleher
        </div>
      </div>
    </footer>
  );
}
