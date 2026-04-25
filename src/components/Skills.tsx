import styles from './Skills.module.css';

const groups = [
  {
    title: 'Languages & Frameworks',
    items: [
      'Python, TypeScript, JavaScript',
      'Java, C++, SQL',
      'React 18, Next.js 14',
      'Node.js, Express.js, FastAPI',
      'REST, GraphQL, gRPC, WebSockets',
    ],
  },
  {
    title: 'Data & AI / ML',
    items: [
      'PyTorch, TensorFlow, scikit-learn',
      'HuggingFace Transformers, vLLM',
      'LangChain, LangGraph, OpenAI API',
      'RAG, RLHF, LoRA / QLoRA fine-tuning',
      'MLflow, Weights & Biases',
    ],
  },
  {
    title: 'Infrastructure & Systems',
    items: [
      'Docker, Kubernetes (K8s)',
      'GCP, AWS, Vercel',
      'GitHub Actions CI/CD',
      'PostgreSQL, MongoDB, Redis',
      'System Design (HLD / LLD), DBMS',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-label">03 — Skills</span>
      </div>
      <div className="section-title">Technical Stack</div>
      <div className={styles.grid}>
        {groups.map((g) => (
          <div key={g.title} className={styles.group}>
            <h3>{g.title}</h3>
            <ul className={styles.list}>
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
