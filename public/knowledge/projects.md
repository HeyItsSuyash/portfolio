# projects.md — Projects by Suyash Shukla

This document records the major software engineering projects, platforms, and architectures built by Suyash Shukla.

---

## 1. Prayukti Virtual Laboratory Platform
- **Type:** Web Application / EdTech Simulation Engine
- **Role:** Creator & Lead Engineer
- **Live URL:** https://mmmut.prayukti.org
- **Case Study:** /projects/prayukti
- **Target Audience:** Engineering and science colleges lacking physical laboratory equipment.
- **Problem Solved:** High equipment cost, maintenance downtime, and lack of apparatus access in Tier-2/Tier-3 engineering colleges.
- **Solution:** Cloud-native browser platform delivering 50+ interactive STEM laboratory experiments with live dials, real-time formula computation, automated grading, and plagiarism-checked submission.
- **Architecture:** Microservices separating simulation calculations from user authentication; WebSocket channels for <50ms measurement updates; Dockerized deployment on Google Cloud Platform.
- **Tech Stack:** React, FastAPI, MongoDB, Docker, GCP, WebSockets.
- **Metrics:** 400+ active student users; 99.8% uptime; 50+ laboratory experiments; 70% latency cut.

---

## 2. EarnBuddy
- **Type:** Microservices SaaS Platform
- **Role:** Co-Founder & Full-Stack Architect
- **Live URL:** https://earnbuddy.io
- **Case Study:** /projects/earnbuddy
- **Target Audience:** Freelancers, students, task commissioners, and content creators.
- **Problem Solved:** Sluggish messaging, delayed escrow tracking, and excessive DB overhead on high-frequency task exchange marketplaces.
- **Solution:** High-throughput marketplace delivering domain-driven REST APIs, Redis cache-aside querying, and isolated real-time Socket.IO chat rooms.
- **Architecture:** JWT authentication with refresh token rotations; Redis pub/sub caching layer; Socket.IO room orchestration; MongoDB aggregation pipelines.
- **Tech Stack:** Node.js, Express, Socket.IO, Redis, JWT, MongoDB.
- **Metrics:** 1,000+ registered users across multiple universities; 85ms p95 API latency; <30ms chat latency; 80% database queries served from cache.

---

## 3. Genwin
- **Type:** Agentic AI Platform
- **Role:** Creator & AI Systems Engineer
- **Live URL:** https://genwin-psi.vercel.app
- **Case Study:** /projects/genwin
- **Target Audience:** Developers and enterprises needing autonomous, deterministic AI workflows.
- **Problem Solved:** Inconsistent prompt outputs, lack of execution guarantees, and fragmented memory state in multi-turn LLM pipelines.
- **Solution:** Autonomous workflow orchestration using LangGraph deterministic state machines, semantic vector caching, and strict Pydantic output validation.
- **Architecture:** LangGraph cyclical execution graphs; vector semantic caching reducing repetitive inference costs by 60%; FastAPI distributed async queue with Server-Sent Events (SSE) streaming.
- **Tech Stack:** LangChain, LangGraph, FastAPI, Next.js, PostgreSQL, Docker.
- **Metrics:** 25,000+ workflows executed; 98.4% validation accuracy; 60% inference cost reduction; <650ms average execution time.

---

## 4. Caller.work
- **Type:** Telephony Infrastructure & Backend Service
- **Role:** Backend Engineer & Architect
- **Live URL:** https://caller.work
- **Case Study:** /projects/caller-work
- **Target Audience:** Customer support teams and automated alerting desks.
- **Problem Solved:** Third-party carriers dropping webhooks during concurrency spikes, leading to silent notification failures.
- **Solution:** Idempotent, fault-tolerant event-driven outbound call backend with exponential retry queues, dead-letter storage, and distributed tracing.
- **Architecture:** GCP Cloud Functions and Pub/Sub message queuing; Redis distributed locks to prevent duplicate calls; OpenTelemetry tracing and Slack alerting.
- **Tech Stack:** Node.js, GCP, Twilio, Event-Driven Architecture, Webhooks, Redis.
- **Metrics:** 99.95% deliverability; 50,000+ monthly calls processed; 180ms webhook response latency; <2s automatic failover recovery.

---

## 5. We Won't Forget
- **Type:** Digital Memorial & Archival Platform
- **Role:** Full-Stack Web Engineer & Designer
- **Live URL:** https://wewontforget.in
- **Case Study:** /projects/we-wont-forget
- **Target Audience:** Communities, historians, and families preserving historical memory.
- **Problem Solved:** Poor discovery, slow loading, and layout shifts common in media-heavy community memorials.
- **Solution:** High-performance archival platform featuring responsive storytelling, interactive historical timelines, and a community tribute submission workflow.
- **Architecture:** Next.js static site generation (SSG) with incremental static regeneration; responsive WebP media delivery; Sanity headless CMS integration.
- **Tech Stack:** Next.js, TypeScript, CSS Modules, Sanity CMS, Vercel.
- **Metrics:** 100/100 Lighthouse performance score; <0.4s initial page load; 5,000+ community tributes recorded; <18% bounce rate.

---

## 6. Related Resources
- [Knowledge Home](/knowledge/me.md)
- [Skills](/knowledge/skills.md)
- [Experience](/knowledge/experience.md)
- [HTML Project Catalog](/projects)
