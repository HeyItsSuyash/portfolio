import styles from './Projects.module.css';

const projects = [
  {
    num: '01',
    name: 'Prayukti vLAB',
    desc: 'Multi-tenant virtual laboratory platform with RBAC, real-time experiment execution over WebSockets, and automated grading. 50+ experiments, 99%+ uptime. Reduced deployment cycle time by 70%.',
    tags: ['React', 'Node.js', 'MongoDB', 'Docker', 'GCP', 'WebSockets'],
    link: 'https://mmmut.prayukti.org',
    linkLabel: 'mmmut.prayukti.org',
  },
  {
    num: '02',
    name: 'EarnBuddy',
    desc: 'Microservices SaaS platform with domain-driven REST APIs, JWT auth with RBAC, real-time bidirectional chat, and CMS workflow automation. Cut p95 latency by 40% via MongoDB pipeline + Redis optimization.',
    tags: ['Node.js', 'Express', 'Socket.IO', 'Redis', 'JWT', 'Microservices'],
    link: 'https://earnbuddy.io',
    linkLabel: 'earnbuddy.io',
  },
  {
    num: '03',
    name: 'Agentic AI Pipeline',
    desc: 'Fully autonomous multi-agent pipeline using LangGraph DAG orchestration and LangChain tool-calling to scrape, deduplicate, quality-filter, and schema-validate instruction-tuning datasets — zero manual intervention in the hot path.',
    tags: ['LangChain', 'LangGraph', 'OpenAI API', 'FastAPI', 'PostgreSQL', 'Docker'],
    link: null,
    linkLabel: null,
  },
  {
    num: '04',
    name: 'LLM Benchmark Suite',
    desc: 'Evaluation harness benchmarking LLaMA, Mistral, and Phi across reasoning, code synthesis, and instruction-following. SQL-backed metrics store with window functions and CTEs tracking accuracy, throughput, and token efficiency per model version.',
    tags: ['Python', 'HuggingFace', 'vLLM', 'MLflow', 'PostgreSQL'],
    link: null,
    linkLabel: null,
  },
  {
    num: '05',
    name: 'Voice AI Agent',
    desc: 'Production voice AI pipeline: Whisper ASR → LLM reasoning with multi-turn memory and tool-calling → neural TTS. Captures structured interaction datasets enabling continuous RLHF-style improvement.',
    tags: ['Whisper ASR', 'LangChain', 'GCP', 'Twilio', 'Python'],
    link: null,
    linkLabel: null,
  },
  {
    num: '06',
    name: 'Caller.work',
    desc: 'Fault-tolerant event-driven automated calling backend with webhook orchestration, structured logging, and distributed tracing on GCP. Sustained 50+ automated calls/month at sub-second response latency.',
    tags: ['Node.js', 'GCP', 'Twilio', 'Event-driven', 'Webhooks'],
    link: 'https://caller.work',
    linkLabel: 'caller.work',
  },
];

export default function Projects() {
  return (
    <section id="work">
      <div className="section-header">
        <span className="section-label">02 — Projects</span>
      </div>
      <div className="section-title">Selected Work</div>
      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.num} className={styles.card}>
            <div className={styles.cardNum}>Project — {p.num}</div>
            <div className={styles.cardName}>{p.name}</div>
            <p className={styles.cardDesc}>{p.desc}</p>
            <div className={styles.tags}>
              {p.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            {p.link && (
              <a className={styles.link} href={p.link} target="_blank" rel="noopener noreferrer">
                {p.linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
