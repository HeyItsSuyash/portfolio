'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './bento.module.css';

export interface BentoCardProps {
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  imageUrl?: string;
  fade?: ('top' | 'bottom')[];
}

export function BentoCard({
  className = '',
  eyebrow,
  title,
  description,
  imageUrl,
  fade = ['bottom'],
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`${styles.bentoCard} ${className}`}
    >
      <div className={styles.graphicArea}>
        {imageUrl && (
          <div
            className={styles.graphicImage}
            style={{ backgroundImage: `url('${imageUrl}')` }}
          />
        )}
        {fade.includes('top') && <div className={styles.fadeTop} />}
        {fade.includes('bottom') && <div className={styles.fadeBottom} />}
      </div>

      <div className={styles.contentArea}>
        <div className={styles.eyebrow}>{eyebrow}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </motion.div>
  );
}

export default function FUIBentoGridDark() {
  return (
    <div className={styles.bentoContainer}>
      <div className={styles.bentoGrid}>
        {/* 01: PROFESSIONAL - Exaflair & Startups */}
        <BentoCard
          eyebrow="01 // Professional"
          title="Exaflair Technologies"
          description="Delivered production applications with Next.js, Fastify, NestJS, and PostgreSQL. Built multi-tenant authentication, role-based workflows, and monitored deployments across AWS and GCP."
          imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
          className={styles.colSpan3}
        />

        {/* 02: FOUNDER - EarnBuddy & Laterally Inverted */}
        <BentoCard
          eyebrow="02 // Hacker House & Founder"
          title="Laterally Inverted Studio"
          description="Started with 'let us build a few resume projects' and grew into an active hacker house. Scaled EarnBuddy.io to 500+ users across 5 colleges including 3 IITs."
          imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
          className={styles.colSpan3}
        />

        {/* 03: ACADEMICS - Dual Degree & Research */}
        <BentoCard
          eyebrow="03 // Academics & Research"
          title="IIT Madras & MMMUT"
          description="B.Sc in Data Science at IIT Madras (CGPA 8.4) & B.Tech in CSE at MMMUT. Published research author on LLM bias mitigation in Taylor & Francis. GATE 2026 qualified."
          imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
          className={styles.colSpan2}
        />

        {/* 04: COMMUNITY & LEADERSHIP */}
        <BentoCard
          eyebrow="04 // Leadership"
          title="President @ CSIS MMMUT"
          description="Leading university technical society; secured ₹10 Lakh institutional grant for Prayukti vLAB (400+ concurrent students). Vice President at HackWithIndia coordinating Hackstrom 2025."
          imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
          className={styles.colSpan2}
        />

        {/* 05: CREATOR & EXPLORATION */}
        <BentoCard
          eyebrow="05 // R&D & Competitions"
          title="The Uncertain Engineer"
          description="Writing about lessons and systems engineering experiments. Competed in national cybersecurity CTFs (Rank #32 / 700+ teams) and early robotics maker projects."
          imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
          className={styles.colSpan2}
        />
      </div>
    </div>
  );
}
