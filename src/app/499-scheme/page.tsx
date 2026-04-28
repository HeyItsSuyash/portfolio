'use client';

import { useState } from 'react';
import styles from './scheme.module.css';
import Link from 'next/link';

export default function SchemePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    idea: '',
    problem: '',
    audience: '',
    whatToBuild: '',
    timeline: '',
    worth: '',
    type: 'tool',
    publicBuild: false,
    understood: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className={styles.main}>
        <div className={styles.successContainer}>
          <h1 className={styles.heroTitle}>Got it.</h1>
          <p className={styles.description}>If this stands out, I’ll get back to you.</p>
          <Link href="/" className={styles.backHome}>Back to Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>I build ideas for ₹499.</h1>
        <div className={styles.context}>
          <p>This isn’t a service. I just like building things.</p>
          <p>If something sounds interesting, I pick it up and turn it into something real.</p>
        </div>
      </section>

      <section className={styles.descriptionSection}>
        <div className={styles.contentBlock}>
          <p className={styles.emphasize}>This can be anything small but useful:</p>
          <ul>
            <li>Web apps or landing pages</li>
            <li>Chrome extensions or small tools</li>
            <li>Scripts and automations</li>
            <li>AI-based experiments or integrations</li>
            <li>Simple design, graphics, or concept work</li>
            <li>Anything else that can be built fast and actually used</li>
          </ul>
        </div>

        <div className={styles.contentBlock}>
          <p className={styles.emphasize}>What you’ll get:</p>
          <ul>
            <li>A working build (not just an idea)</li>
            <li>Something you can use or share</li>
            <li>Built in a few days</li>
            <li>Clean and practical execution</li>
          </ul>
        </div>

        <div className={styles.contentBlock}>
          <p>I like exploring different kinds of problems and building across domains. This is just a way to do more of that, without overthinking it.</p>
        </div>

        <div className={styles.contentBlock}>
          <p className={styles.emphasize}>Boundaries:</p>
          <ul>
            <li>Small scope only (something that can be built fast)</li>
            <li>One idea at a time</li>
            <li>One round of changes</li>
            <li>I decide what I take up</li>
          </ul>
        </div>

        <div className={styles.contentBlock}>
          <p>I won’t take up anything that’s too large or time-heavy for this format. For example, full-scale apps or game development aren’t part of this.</p>
        </div>

        <div className={styles.contentBlock}>
          <p className={styles.price}>₹499.</p>
          <p className={styles.subtext}>If you liked it, you can buy me a treat after.</p>
        </div>

        <div className={styles.contentBlock}>
          <p>I won’t take everything. I’m more likely to pick ideas that solve a real problem or feel interesting to build.</p>
        </div>
      </section>

      <section id="pitch" className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Pitch your idea</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>What’s your idea?</label>
            <textarea required value={formData.idea} onChange={(e) => setFormData({...formData, idea: e.target.value})} placeholder="Describe your vision..." />
          </div>

          <div className={styles.field}>
            <label>What problem does it solve?</label>
            <textarea required value={formData.problem} onChange={(e) => setFormData({...formData, problem: e.target.value})} />
          </div>

          <div className={styles.field}>
            <label>Who is this for?</label>
            <input type="text" required value={formData.audience} onChange={(e) => setFormData({...formData, audience: e.target.value})} />
          </div>

          <div className={styles.field}>
            <label>What do you want me to build?</label>
            <textarea required value={formData.whatToBuild} onChange={(e) => setFormData({...formData, whatToBuild: e.target.value})} placeholder="e.g. A chrome extension that..." />
          </div>

          <div className={styles.field}>
            <label>How soon do you need it?</label>
            <input type="text" required value={formData.timeline} onChange={(e) => setFormData({...formData, timeline: e.target.value})} />
          </div>

          <div className={styles.field}>
            <label>Why do you think this is worth building?</label>
            <textarea required value={formData.worth} onChange={(e) => setFormData({...formData, worth: e.target.value})} />
          </div>

          <div className={styles.field}>
            <label>What type of build is this?</label>
            <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
              <option value="tool">Tool</option>
              <option value="app">App</option>
              <option value="extension">Extension</option>
              <option value="automation">Automation</option>
              <option value="AI">AI</option>
              <option value="something else">Something Else</option>
            </select>
          </div>

          <div className={styles.checkboxField}>
            <input type="checkbox" id="publicBuild" checked={formData.publicBuild} onChange={(e) => setFormData({...formData, publicBuild: e.target.checked})} />
            <label htmlFor="publicBuild">Are you okay with me building this in public? (This helps with visibility and feedback)</label>
          </div>

          <div className={styles.checkboxField}>
            <input type="checkbox" id="understood" required checked={formData.understood} onChange={(e) => setFormData({...formData, understood: e.target.checked})} />
            <label htmlFor="understood">I understand this is a small ₹499 build with limited scope.</label>
          </div>

          <button type="submit" className={styles.submitBtn}>Send It</button>
        </form>
      </section>

      <section className={styles.nextSection}>
        <h2 className={styles.sectionTitle}>If this works, we can take it further</h2>
        <div className={styles.nextContent}>
          <p>If you like how I build and the idea has real potential, we can keep working on it.</p>
          <p>That could mean improving it, finding users, and turning it into something bigger.</p>
          <p>I’m open to continuing on an equity basis if it makes sense.</p>
          <p className={styles.groundingLine}>Not every idea will go there. But if it clicks, I’m open to building it properly.</p>
        </div>
      </section>
    </main>
  );
}
