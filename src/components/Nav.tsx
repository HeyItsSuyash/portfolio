'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Nav.module.css';
import { playHoverPop, playClickThud, playSoftClick } from '@/utils/audioUtils';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navGroup}>
        <Link href="/" className={styles.logo} onMouseEnter={playHoverPop} onClick={playSoftClick}>
          <Image src="/images/other-illustrations/logo.png" alt="Logo" width={40} height={40} className={styles.logoImage} />
        </Link>
      </div>
      
      <button className={styles.mobileToggle} onClick={() => { setIsOpen(!isOpen); playClickThud(); }} onMouseEnter={playHoverPop}>
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <div className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
        <Link href="/#about" onClick={() => { setIsOpen(false); playClickThud(); }} onMouseEnter={playHoverPop}>About</Link>
        <Link href="/#roots" onClick={() => { setIsOpen(false); playClickThud(); }} onMouseEnter={playHoverPop}>Roots</Link>
        <Link href="/#work" onClick={() => { setIsOpen(false); playClickThud(); }} onMouseEnter={playHoverPop}>Projects</Link>
        <Link href="/#skills" onClick={() => { setIsOpen(false); playClickThud(); }} onMouseEnter={playHoverPop}>Skills</Link>
        <Link href="/#education" onClick={() => { setIsOpen(false); playClickThud(); }} onMouseEnter={playHoverPop}>Education</Link>
        <Link href="/#achievements" onClick={() => { setIsOpen(false); playClickThud(); }} onMouseEnter={playHoverPop}>Awards</Link>
        <Link href="/#development" onClick={() => { setIsOpen(false); playClickThud(); }} onMouseEnter={playHoverPop}>Ecosystem</Link>
        <a href="https://blog.suyashshukla.com" target="_blank" rel="noopener noreferrer" onMouseEnter={playHoverPop} onClick={playClickThud}>The Fallible Journey</a>
        
        <Link href="/499-scheme" className={`${styles.pizzaCta} gloss-effect-reverse`} onClick={() => { setIsOpen(false); playClickThud(); }} onMouseEnter={playHoverPop}>
          <Image src="/images/other-illustrations/pizzafull.png" alt="Pizza" width={24} height={24} className={styles.pizzaIcon} />
          <span>Project</span>
        </Link>
      </div>
    </nav>
  );
}
