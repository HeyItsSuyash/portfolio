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
          <div className={styles.sectionLabel}>04 / WHY ME?</div>
          <h2 className={styles.title}>WHY ME?</h2>
          <h3 className={styles.subHeading}>So, have I answered them?</h3>
          <blockquote className={styles.narrativeQuote}>
            <p>I&apos;ve answered that question before.</p>
            <p>I&apos;ve answered that one too.</p>
            <p>After a while, the answers start sounding the same.</p>
            <p className={styles.quoteEmphasis}>
              So instead of answering them again, I built this section to answer them for me.
            </p>
          </blockquote>
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
          <div className={styles.searchMeta}>
            Showing {filteredQuestions.length} of {questions.length} questions
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
                          <div className={styles.answerPrefix}>ANSWER //</div>
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
              <div className={styles.emptySubtitle}>You might have to ask me yourself.</div>
              <a href="#how" className={styles.emptyCta}>
                ASK DIRECTLY →
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
