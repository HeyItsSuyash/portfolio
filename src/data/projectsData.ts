export interface ProjectCaseStudy {
  slug: string;
  index: string;
  total: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  metrics: { label: string; value: string }[];
  techStack: string[];
  caseStudyLink: string;
  liveLink: string | null;
  image: string;
  imageAlt: string;
}

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    slug: 'prayukti',
    index: '01',
    total: '05',
    title: 'PRAYUKTI',
    subtitle: 'VIRTUAL LABORATORY PLATFORM',
    tagline: 'Empowering students and institutions with interactive cloud simulations.',
    description:
      'An interactive virtual laboratory platform for colleges and schools to conduct experiments online, making practical learning accessible to everyone.',
    overview:
      'Prayukti vLAB was built to solve the lack of physical lab equipment across colleges in India. By bringing high-fidelity physics, chemistry, and electronics experiments directly to the browser, over 400 concurrent students can interact with simulations, measure values in real-time, and submit lab records automatically.',
    problem:
      'Tier-2 and Tier-3 institutions often suffer from high equipment costs, maintenance downtime, and lack of individual access to apparatus for every student during practical exams and regular coursework.',
    solution:
      'Developed a scalable, low-latency virtual lab platform powered by React and FastAPI, utilizing WebSockets for real-time calculation engines and automated lab report generation.',
    architecture: [
      'Microservices architecture separating simulation calculations from user authentication',
      'WebSocket bi-directional communication channels for sub-50ms measurement updates',
      'Dockerized deployment orchestrated on Google Cloud Platform with automated scaling'
    ],
    keyFeatures: [
      '50+ standardized STEM laboratory experiments',
      'Live instrument dials, parameter sliders, and real-time visualization graphs',
      'Automated grading and plagiarism-checked submission portal for professors',
      'Role-based access control (RBAC) for admins, professors, and students'
    ],
    metrics: [
      { label: 'Active Users', value: '400+' },
      { label: 'Uptime', value: '99.8%' },
      { label: 'Experiments', value: '50+' },
      { label: 'Latency Cut', value: '70%' }
    ],
    techStack: ['React', 'FastAPI', 'MongoDB', 'Docker', 'GCP', 'WebSockets'],
    caseStudyLink: '/projects/prayukti',
    liveLink: 'https://mmmut.prayukti.org',
    image: '/images/prayukti.png',
    imageAlt: 'Prayukti Virtual Laboratory Platform Dashboard'
  },
  {
    slug: 'earnbuddy',
    index: '02',
    total: '05',
    title: 'EARNBUDDY',
    subtitle: 'MICROSERVICES SAAS PLATFORM',
    tagline: 'High-throughput freelance and task exchange marketplace.',
    description:
      'Domain-driven REST APIs with role-based access control, real-time bidirectional chat, and CMS workflow automation, optimized for high throughput.',
    overview:
      'EarnBuddy is a microservices-based SaaS marketplace that connects content creators, gig seekers, and task commissioners. Built with Node.js, Express, and Redis pub/sub, it delivers sub-100ms API response times even during peak campaigns.',
    problem:
      'Traditional freelancing platforms suffer from sluggish messaging, delayed escrow tracking, and excessive database overhead caused by un-optimized relational queries on volatile task queues.',
    solution:
      'Implemented domain-driven REST APIs backed by MongoDB aggregation pipelines and Redis caching layers, combined with Socket.IO for instantaneous status notifications and chat.',
    architecture: [
      'JWT authentication with stateless session verification and refresh token rotations',
      'Redis cache-aside pattern for trending tasks and active user states',
      'Socket.IO room orchestration for isolated buyer-seller communication channels'
    ],
    keyFeatures: [
      'Real-time encrypted direct messaging with file attachments',
      'Instant payout status tracking and automated receipt generation',
      'Automated CMS workflow with anti-fraud keyword detection',
      'Comprehensive admin analytics dashboard for monitoring platform GMV'
    ],
    metrics: [
      { label: 'Registered Users', value: '1,000+' },
      { label: 'p95 Latency', value: '85ms' },
      { label: 'Chat Latency', value: '<30ms' },
      { label: 'Queries Cached', value: '80%' }
    ],
    techStack: ['Node.js', 'Express', 'Socket.IO', 'Redis', 'JWT', 'MongoDB'],
    caseStudyLink: '/projects/earnbuddy',
    liveLink: 'https://earnbuddy.io',
    image: '/images/earnbuddy.png',
    imageAlt: 'EarnBuddy SaaS Platform UI'
  },
  {
    slug: 'genwin',
    index: '03',
    total: '05',
    title: 'GENWIN',
    subtitle: 'AGENTIC AI PLATFORM',
    tagline: 'Automated workflow intelligence and generative agent orchestration.',
    description:
      'Autonomous generative intelligence platform streamlining structured knowledge extraction, code generation, and multi-agent workflow execution.',
    overview:
      'Genwin enables teams to deploy autonomous AI agents with structured tools, live web searching, and deterministic validation graphs. Built to handle complex enterprise workflows with high accuracy and low latency.',
    problem:
      'Disconnected AI tools result in inconsistent prompt outputs, lack of deterministic execution guarantees, and fragmented memory state across multi-turn interactions.',
    solution:
      'Built an end-to-end agentic workflow pipeline with LangGraph DAG orchestration, vector search embeddings, and strict Pydantic output validation.',
    architecture: [
      'LangGraph deterministic state machines with cyclical retry logic',
      'Vector semantic caching reducing repetitive LLM inference costs by 60%',
      'FastAPI async distributed task queue with real-time SSE streaming'
    ],
    keyFeatures: [
      'Multi-agent collaborative planning and execution',
      'Real-time token streaming and reasoning trace visualizer',
      'Automated prompt optimization and evaluation feedback loops',
      'Enterprise RBAC and secure API key management'
    ],
    metrics: [
      { label: 'Workflows Executed', value: '25k+' },
      { label: 'Accuracy Score', value: '98.4%' },
      { label: 'Cost Reduction', value: '60%' },
      { label: 'Response Time', value: '<650ms' }
    ],
    techStack: ['LangChain', 'LangGraph', 'FastAPI', 'Next.js', 'PostgreSQL', 'Docker'],
    caseStudyLink: '/projects/genwin',
    liveLink: 'https://genwin-psi.vercel.app',
    image: '/images/genwin.png',
    imageAlt: 'Genwin AI Agentic Platform'
  },
  {
    slug: 'caller-work',
    index: '04',
    total: '05',
    title: 'CALLER.WORK',
    subtitle: 'FAULT-TOLERANT BACKEND',
    tagline: 'Reliable webhook-driven automated telephony infrastructure.',
    description:
      'Fault-tolerant event-driven automated calling backend with webhook orchestration, structured logging, and distributed tracing on GCP with sub-second response latency.',
    overview:
      'A rock-solid backend infrastructure built to trigger, monitor, and retry mission-critical outbound calls and SMS verification alerts for enterprise customer support desks.',
    problem:
      'Third-party telephony carriers frequently drop webhooks under high concurrency, causing silent notification failures in critical workflow automations.',
    solution:
      'Architected an idempotent queue-based webhook processing system with automated exponential backoff, dead-letter queues, and OpenTelemetry tracing.',
    architecture: [
      'GCP Cloud Functions and Cloud Pub/Sub handling decoupled message queuing',
      'Idempotent Redis locks preventing duplicate call initiations',
      'Distributed structured logging with real-time alerting via Slack webhooks'
    ],
    keyFeatures: [
      'Automatic failover across multiple telecom providers',
      'Real-time call state webhooks with millisecond execution timestamps',
      'Comprehensive error reporting and automatic retry queues',
      'Secure signed webhook verification'
    ],
    metrics: [
      { label: 'Deliverability', value: '99.95%' },
      { label: 'Monthly Calls', value: '50k+' },
      { label: 'Response Latency', value: '180ms' },
      { label: 'Failover Recovery', value: '<2s' }
    ],
    techStack: ['Node.js', 'GCP', 'Twilio', 'Event-Driven', 'Webhooks', 'Redis'],
    caseStudyLink: '/projects/caller-work',
    liveLink: 'https://caller.work',
    image: '/images/caller.png',
    imageAlt: 'Caller.work Webhook Infrastructure'
  },
  {
    slug: 'we-wont-forget',
    index: '05',
    total: '05',
    title: "WE WON'T FORGET",
    subtitle: 'MEMORIAL & ARCHIVAL PLATFORM',
    tagline: 'Digital memorial and interactive historical archive.',
    description:
      'A digital memorial and archival web platform honoring memories, history, and community narratives through immersive storytelling and visual preservation.',
    overview:
      'An archival platform engineered to preserve memories and historical accounts with dignified typography, interactive timelines, and community tribute submissions.',
    problem:
      'Digital preservation archives often suffer from poor discovery, cluttered layouts, and lack of performant media rendering on mobile devices.',
    solution:
      'Created an elegant, high-performance web experience with fluid typography, responsive image optimization, and static pre-rendering for lightning-fast access.',
    architecture: [
      'Next.js static site generation (SSG) with incremental static regeneration',
      'Optimized asset delivery pipeline with WebP conversion and responsive caching',
      'Sanity CMS headless integration for curated storytelling'
    ],
    keyFeatures: [
      'Chronological archival interactive timeline',
      'Community tribute submission portal with moderation workflow',
      'High-resolution archival photo galleries with zero layout shifts',
      'Accessibility-first design with high contrast readability'
    ],
    metrics: [
      { label: 'Lighthouse Score', value: '100/100' },
      { label: 'Page Load', value: '<0.4s' },
      { label: 'Tributes Recorded', value: '5,000+' },
      { label: 'Bounce Rate', value: '<18%' }
    ],
    techStack: ['Next.js', 'TypeScript', 'CSS Modules', 'Sanity CMS', 'Vercel'],
    caseStudyLink: '/projects/we-wont-forget',
    liveLink: 'https://wewontforget.in',
    image: '/images/wewontforget.png',
    imageAlt: "We Won't Forget Archival Platform"
  }
];
