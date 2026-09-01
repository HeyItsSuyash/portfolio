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

  // 7-second invisible auto-advance timer
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === PROJECTS_DATA.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id={id} className={`snap-section ${styles.projectSection}`}>
      <div className={styles.container}>
        {/* Right Section / Laptop Mockup & Section Header */}
        <div className={styles.rightColumn}>
          {/* Ambient Purple Studio LED Workspace Background */}
          <div className={styles.studioBgLayer} />
          <div className={styles.studioVignette} />

          <div className={styles.laptopContainer}>
            {/* Title and Subtitle positioned above the Laptop */}
            <div className={styles.sectionHeaderAbove}>
              <h2 className={styles.showcaseTitle}>WITH THESE PROJECTS!</h2>
              <p className={styles.showcaseSubtitle}>
                I have around 35 major projects created and deployed across many domains and use-cases, some hackathon-winning, and some even had customers! I have a goal to make atleast 100 meaningful projects before I graduate!
              </p>
            </div>

            {/* Laptop Mockup Wrapper */}
            <div className={styles.laptopMockupWrapper}>
              <div className={styles.macbook}>
                {/* Laptop Screen Display Lid */}
                <div className={styles.macbookLid}>
                  <div className={styles.screenBezel}>
                    {/* Top Browser Ribbon with Window Controls & URL Bar */}
                    <div className={styles.browserRibbon}>
                      <div className={styles.windowControls}>
                        <span className={`${styles.windowDot} ${styles.dotClose}`} />
                        <span className={`${styles.windowDot} ${styles.dotMin}`} />
                        <span className={`${styles.windowDot} ${styles.dotMax}`} />
                      </div>
                      <div className={styles.urlPill}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.lockIcon}>
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        <span className={styles.urlText}>
                          {project.liveLink ? project.liveLink.replace('https://', '') : `${project.slug}.dev`}
                        </span>
                      </div>
                    </div>

                    {/* Display Area containing the Project Screen with Slide transition */}
                    <div className={styles.displayArea}>
                      <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                          key={project.slug}
                          custom={direction}
                          initial={{ x: direction * 100 + '%' }}
                          animate={{ x: 0 }}
                          exit={{ x: -direction * 100 + '%' }}
                          transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
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

                    {/* Windows 11 Centered Taskbar Ribbon */}
                    <div className={styles.taskbarRibbon}>
                      {/* Left: Mini Weather/Widget */}
                      <div className={styles.taskbarLeft}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.taskbarWeatherIcon}>
                          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                        </svg>
                        <span className={styles.taskbarTemp}>24°C</span>
                      </div>

                      {/* Center: Windows Logo + App Icons */}
                      <div className={styles.taskbarCenter}>
                        {/* Windows Logo */}
                        <div className={styles.winLogoIcon} title="Start">
                          <span className={styles.winSquare} />
                          <span className={styles.winSquare} />
                          <span className={styles.winSquare} />
                          <span className={styles.winSquare} />
                        </div>

                        {/* Search Icon */}
                        <div className={styles.taskbarAppIcon}>
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                        </div>

                        {/* Active Browser App Icon with Underline Dot */}
                        <div className={`${styles.taskbarAppIcon} ${styles.activeAppIcon}`} title="Active Project">
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                          <span className={styles.appActiveDot} />
                        </div>

                        {/* Terminal / Code Icon */}
                        <div className={styles.taskbarAppIcon}>
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="4 17 10 11 4 5" />
                            <line x1="12" y1="19" x2="20" y2="19" />
                          </svg>
                        </div>

                        {/* Folder Icon */}
                        <div className={styles.taskbarAppIcon}>
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                          </svg>
                        </div>
                      </div>

                      {/* Right System Tray: Sound, WiFi, Battery, Clock */}
                      <div className={styles.taskbarRight}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
                        </svg>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </svg>
                        <span className={styles.taskbarClock}>12:00 PM</span>
                      </div>
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
        </div>

        {/* Fine vertical dividing line between text and image on desktop */}
        <div className={styles.verticalDivider} />

        {/* Left Section / Details: Fade transition between projects */}
        <div className={styles.leftColumn}>
          <AnimatePresence mode="wait">
            <motion.div
              key={project.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
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

          {/* Carousel Arrows: Horizontally Centered */}
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
