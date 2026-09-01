'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '@/data/projectsData';
import styles from './Projects.module.css';

export default function Projects({ id = 'where' }: { id?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const project = PROJECTS_DATA[currentIndex];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === PROJECTS_DATA.length - 1 ? 0 : prev + 1));
  };

  // 3-second invisible auto-advance timer
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === PROJECTS_DATA.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id={id} className={`snap-section ${styles.projectSection}`}>
      <div className={styles.container}>
        {/* Right Section / Laptop Image: Order 1 on Mobile (Top), Order 2 on Desktop (Right) */}
        <div className={styles.rightColumn}>
          {/* Ambient Purple Studio LED Workspace Background */}
          <div className={styles.studioBgLayer} />
          <div className={styles.studioVignette} />

          <div className={styles.laptopMockupWrapper}>
            <div className={styles.macbook}>
              {/* Laptop Screen Display Lid */}
              <div className={styles.macbookLid}>
                <div className={styles.screenBezel}>
                  <div className={styles.webcamNotch}>
                    <div className={styles.webcamLens} />
                  </div>

                  <div className={styles.displayArea}>
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={project.slug}
                        custom={direction}
                        initial={{ opacity: 0, scale: 0.98, x: direction * 15 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.98, x: -direction * 15 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className={styles.imageMotionWrapper}
                      >
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          sizes="(max-width: 1080px) 100vw, 55vw"
                          className={styles.projectImage}
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Laptop Keyboard / Base Chassis */}
              <div className={styles.macbookBase}>
                <div className={styles.notchIndent} />
              </div>
              <div className={styles.macbookBaseBottom} />
            </div>
          </div>
        </div>

        {/* Fine vertical dividing line between text and image on desktop */}
        <div className={styles.verticalDivider} />

        {/* Left Section / Details: Order 2 on Mobile (Bottom), Order 1 on Desktop (Left) */}
        <div className={styles.leftColumn}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.slug}
              custom={direction}
              initial={{ opacity: 0, y: direction * 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -direction * 15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={styles.editorialContent}
            >
              <div className={styles.indexCounter}>
                {project.index} &nbsp;/&nbsp; {project.total}
              </div>
              <div className={styles.counterDivider} />

              <h2 className={styles.projectTitle}>{project.title}</h2>
              <div className={styles.projectSubtitle}>{project.subtitle}</div>

              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.techStackContainer}>
                <div className={styles.techStackLabel}>TECH STACK</div>
                <div className={styles.techStackList}>
                  {project.techStack.map((tech, i) => (
                    <span key={tech} className={styles.techItem}>
                      {tech}
                      {i < project.techStack.length - 1 && <span className={styles.bullet}>•</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.actionButtons}>
                <Link href={project.caseStudyLink} className={styles.fillButton}>
                  View Case Study
                </Link>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.fillButton}
                  >
                    Live Project
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div className={styles.carouselNav}>
            <button
              onClick={handlePrev}
              className={styles.carouselArrowBtn}
              aria-label="Previous Project"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className={styles.carouselArrowBtn}
              aria-label="Next Project"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Smooth Gradient Overlay Transitioning to Next Section */}
      <div className={styles.bottomOverlay} />
    </section>
  );
}
