export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'scaling-virtual-labs-websockets',
    title: 'Architecting Prayukti: Scaling a Browser-Based Virtual Lab for 400+ Concurrent Students',
    subtitle: 'Low-latency simulation math, state diffs, and WebSocket orchestration on GCP.',
    date: 'February 2026',
    readTime: '6 min read',
    summary:
      'Lessons learned from building Prayukti vLAB: why REST polling failed under high concurrency, how WebSocket state diffs reduced measurement latency by 70%, and how containerized FastAPI workers handle mathematical simulation logic.',
    tags: ['Architecture', 'WebSockets', 'FastAPI', 'GCP', 'React'],
    content: [
      'When students step into an engineering laboratory, whether physical or virtual, the tactile feedback of turning a dial or closing a switch must be instantaneous. During early prototype testing of Prayukti vLAB across university computer centers, standard HTTP REST polling to recalculate circuit voltages produced stuttering dials and 600ms latency spikes.',
      'To solve this, we decoupled the mathematical simulation engine from session state management. We transitioned the simulation communication channel to persistent WebSocket connections. Instead of re-transmitting the complete circuit topology on every input tick, the client only dispatches delta changes (e.g. knob parameter changed to 4.5V).',
      'The FastAPI calculation service evaluates the differential equations in C-optimized Python routines and streams back binary state diffs in sub-50ms round trips. Coupled with client-side HTML5 canvas rendering, this eliminated visual lag completely.',
      'When 400+ students logged in simultaneously during end-semester practical exams, Dockerized FastAPI containers orchestrated on Google Cloud Platform scaled automatically with zero downtime, maintaining 99.8% platform uptime throughout the examination cycle.'
    ]
  },
  {
    slug: 'llm-bias-detection-counterfactual-fairness',
    title: 'Mitigating Bias in Generative Language Models: A Counterfactual Logit Approach',
    subtitle: 'Key takeaways from our Taylor & Francis (CRC Press) 2025 published research paper.',
    date: 'January 2026',
    readTime: '8 min read',
    summary:
      'A deep dive into our published research paper examining demographic bias in foundation models, how counterfactual prompt pairs reveal hidden representational harms, and how post-hoc inference adjustment avoids expensive retraining.',
    tags: ['Machine Learning', 'Research', 'NLP', 'Ethical AI'],
    content: [
      'Pre-trained autoregressive language models absorb deep cultural and societal biases embedded across web-scraped training corpora. In our research paper published with Taylor & Francis (CRC Press) in 2025, we set out to address two core questions: How can we reliably quantify representational disparity across diverse demographic cohorts, and how can we mitigate it without the prohibitive computational expense of model retraining?',
      'We designed an automated counterfactual evaluation harness that tests foundation models against paired sentence prompts differing solely by protected demographic markers. By measuring the variance in perplexity scores and token probability distributions, we uncovered systematic stereotyping patterns in default sampling behavior.',
      'To mitigate this without fine-tuning billions of parameters, we formulated an inference-time logit adjustment mechanism. By contrasting logits against a reference neutral prior, our method dampens disparate toxicity and occupational stereotyping while maintaining high semantic coherence and zero downstream accuracy degradation on standard NLP benchmarks.'
    ]
  },
  {
    slug: 'deterministic-agentic-ai-with-langgraph',
    title: 'Why Prompt Engineering Is Not Enough: Deterministic Multi-Agent State Machines with LangGraph',
    subtitle: 'Moving beyond linear prompt chains to cyclic validation graphs and tool-calling reliability.',
    date: 'December 2025',
    readTime: '5 min read',
    summary:
      'Why linear LLM chains break down in real-world systems, how cyclical graphs enable self-healing tool calls, and how we engineered Genwin to achieve 98.4% schema validation accuracy.',
    tags: ['Agentic AI', 'LangGraph', 'Python', 'System Design'],
    content: [
      'Simple linear prompt pipelines—where step A feeds into step B—invariably fail when applied to complex enterprise automations. If an external API returns an unexpected error format or rate limit, a linear chain breaks down, leaving the system in an indeterminate state.',
      'In building Genwin, we embraced deterministic state machines utilizing LangGraph. By modeling agent reasoning as a directed acyclic graph (DAG) with cyclical fallback edges, our agents can evaluate tool responses, identify when an output fails Pydantic schema validation, and autonomously re-prompt with targeted error diagnostics.',
      'Furthermore, we introduced vector semantic caching to store validated reasoning paths. When incoming user requests are semantically similar to historical queries, the system recalls the verified execution graph, reducing inference cost by 60% and response time to under 650ms.'
    ]
  }
];
