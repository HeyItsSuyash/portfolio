"use client";

import styles from './Who.module.css';

export default function Who({ id = 'who' }: { id?: string }) {
  return (
    <section id={id} className={`snap-section ${styles.whoSection}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.bgVideo}
      >
        <source src="/videos/polymath.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      
      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.smallText}>I AM A</div>
        <div className={styles.mainPhrase}>
          <span className={styles.strikethrough}>wannabe</span>
          <span className={styles.polymath}>POLYMATH</span>
        </div>
      </div>

      {/* Description in Bottom Left */}
      <div className={styles.description}>
        That brings trouble in focus, excessive juggling, a Notes app full of things to try, a blog full of drafts, and a GitHub full of unfinished projects. But I&rsquo;m doing fine, I guess. I like learning a little about a lot of things, getting curious about something new every other week, and occasionally turning that curiosity into something real. It&rsquo;s messy, but I think I&rsquo;d rather have too many things to explore than run out of them.
      </div>

      {/* Phonetic Definition (Plain Text - No Box) */}
      <div className={styles.definition}>
        <div className={styles.defWord}>Polymath</div>
        <div className={styles.defType}>
          <span className={styles.phonetic}>/ˈpɒl.i.mæθ/ &nbsp;&nbsp;</span>(noun)
        </div>
        <div className={styles.defMeaning}>
          A person of wide knowledge or learning whose expertise spans a significant number of different subject areas.
        </div>
      </div>
    </section>
  );
}
