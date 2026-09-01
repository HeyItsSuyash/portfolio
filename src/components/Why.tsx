'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import interviewData from '@/data/interviewQuestions.json';
import styles from './Why.module.css';

interface InterviewQuestion {
  id: string;
  question: string;
  category: string;
  answer: string;
}

export default function Why({ id = 'why' }: { id?: string }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

  const questions: InterviewQuestion[] = interviewData as InterviewQuestion[];

  const filteredQuestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return questions;
    return questions.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
  }, [searchQuery, questions]);

  const handleToggle = (questionId: string) => {
    setOpenQuestionId((prev) => (prev === questionId ? null : questionId));
  };

  return (
    <section id={id} className={`snap-section ${styles.whySection}`}>
      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header}>
          <h2 className={styles.title}>Why Should We Choose You?</h2>
          <h3 className={styles.subHeading}>And alot of other similar questions have been asked to me quite a few times, so I decided to curate an FAQ section to answer them, <br /> here are some of the questions most commonly asked to me (and their answers).</h3>
        </header>

        {/* Live Search Bar */}
        <div className={styles.searchWrapper}>
          <div className={styles.searchBar}>
            <span className={styles.searchIcon} aria-hidden="true">
              ⌕
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search an interview question..."
              className={styles.searchInput}
              aria-label="Search interview questions"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className={styles.clearSearch}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Question Accordions List */}
        <div className={styles.questionsList}>
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((item, idx) => {
              const isOpen = openQuestionId === item.id;
              const formattedIndex = String(idx + 1).padStart(2, '0');

              return (
                <div
                  key={item.id}
                  className={`${styles.questionCard} ${isOpen ? styles.cardOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.questionHeader}
                    onClick={() => handleToggle(item.id)}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.leftMetaGroup}>
                      <span className={styles.questionIndex}>{formattedIndex}</span>
                      <span className={styles.questionText}>{item.question}</span>
                    </div>

                    <div className={styles.rightMetaGroup}>
                      <span className={styles.categoryBadge}>{item.category}</span>
                      <span className={styles.toggleIndicator}>{isOpen ? '−' : '+'}</span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={`answer-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className={styles.answerWrapper}
                      >
                        <div className={styles.answerContent}>
                          <p className={styles.answerText}>{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            /* Empty Search State */
            <div className={styles.emptyState}>
              <div className={styles.emptyTitle}>Couldn&apos;t find your question?</div>
              <div className={styles.emptySubtitle}>I would love to respond to your question personally!</div>
              <a href="#how" className={styles.emptyCta}>
                Schedule a Meet
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Smooth Gradient Overlay Transitioning to Next Section */}
      <div className={styles.bottomOverlay} />
    </section>
  );
}
