"use client";

import React from 'react';
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
import styles from './How.module.css';

export default function How({ id = 'how' }: { id?: string }) {
  return (
    <footer id={id} className={`snap-section ${styles.howSection}`}>
      <div className={styles.container}>
        {/* Very Large Centered Handle using Outfit font */}
        <h1 className={styles.handleText}>@heyitssuyash</h1>

        {/* Theme Consistent Social & Contact Icons from react-icons */}
        <div className={styles.socialIconsRow}>
          {/* Email */}
          <a
            href="mailto:yolo@suyashshukla.com"
            className={styles.socialLink}
            aria-label="Email"
            title="Email: yolo@suyashshukla.com"
          >
            <FaEnvelope size={22} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/HeyItsSuyash"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn size={22} />
          </a>

          {/* Twitter / X */}
          <a
            href="https://x.com/HeyItsSuyash"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Twitter / X"
            title="Twitter / X"
          >
            <FaXTwitter size={21} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/HeyItsSuyash"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub size={22} />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/HeyItsSuyash"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Instagram"
            title="Instagram"
          >
            <FaInstagram size={22} />
          </a>

          {/* Discord */}
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Discord"
            title="Discord"
          >
            <FaDiscord size={22} />
          </a>

          {/* Bluesky (Blue Butterfly) */}
          <a
            href="https://bsky.app/profile/heyitssuyash.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Bluesky"
            title="Bluesky"
          >
            <SiBluesky size={20} />
          </a>

          {/* Threads */}
          <a
            href="https://threads.net/@HeyItsSuyash"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Threads"
            title="Threads"
          >
            <SiThreads size={21} />
          </a>

          {/* Official WhatsApp Icon from react-icons */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <FaWhatsapp size={23} />
          </a>
        </div>
      </div>

      {/* Email badge */}
      <a href="mailto:yolo@suyashshukla.com" className={styles.bottomLeftMail}>
        <span className={styles.mailDot} />
        yolo@suyashshukla.com
      </a>
    </footer>
  );
}
