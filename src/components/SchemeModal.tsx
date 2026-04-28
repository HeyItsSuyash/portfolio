'use client';

import { useState } from 'react';
import styles from './SchemeModal.module.css';

interface SchemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SchemeModal({ isOpen, onClose }: SchemeModalProps) {
  const [view, setView] = useState<'desc' | 'form'>('desc');
  const [formData, setFormData] = useState({
    name: '',
    domain: '',
    buildInPublic: false,
    details: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add submission logic here
    alert('Thank you! I will get back to you soon.');
    onClose();
    setView('desc'); // Reset for next time
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        
        {view === 'desc' ? (
          <div className={styles.content}>
            <h2 className={styles.title}>The 499 Scheme</h2>
            <p className={styles.description}>
              I build high-quality, production-ready projects for a fixed price of ₹499. 
              My process involves deep collaboration, rapid prototyping, and a focus on scalability and performance.
            </p>
            <div className={styles.howItWorks}>
              <h3>How I build your project:</h3>
              <ul>
                <li><strong>Discovery:</strong> We define the core problem and scope.</li>
                <li><strong>Design & Dev:</strong> I build using modern tech (Next.js, AI, etc.).</li>
                <li><strong>Delivery:</strong> You get a ready-to-deploy codebase.</li>
              </ul>
            </div>
            <button className={styles.actionBtn} onClick={() => setView('form')}>
              Let&apos;s Build Together
            </button>
          </div>
        ) : (
          <div className={styles.content}>
            <h2 className={styles.title}>Project Details</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label>Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your Name"
                />
              </div>
              <div className={styles.field}>
                <label>Project Domain</label>
                <input 
                  type="text" 
                  required 
                  value={formData.domain}
                  onChange={(e) => setFormData({...formData, domain: e.target.value})}
                  placeholder="e.g. SaaS, AI Tool, E-commerce"
                />
              </div>
              <div className={styles.checkboxField}>
                <input 
                  type="checkbox" 
                  id="public"
                  checked={formData.buildInPublic}
                  onChange={(e) => setFormData({...formData, buildInPublic: e.target.checked})}
                />
                <label htmlFor="public">Fine if I build this in public?</label>
              </div>
              <div className={styles.field}>
                <label>Anything else?</label>
                <textarea 
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  placeholder="Tell me more about your vision..."
                />
              </div>
              <div className={styles.formActions}>
                <button type="button" className={styles.backBtn} onClick={() => setView('desc')}>Back</button>
                <button type="submit" className={styles.submitBtn}>Submit Request</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
