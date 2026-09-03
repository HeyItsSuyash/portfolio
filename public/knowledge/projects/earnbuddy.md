# EarnBuddy.io — Microservices SaaS Marketplace

## 1. Overview
- **Project Name:** EarnBuddy
- **Live Deployment:** https://earnbuddy.io
- **Case Study Route:** /projects/earnbuddy
- **Role:** Co-Founder & Full-Stack Architect
- **Type:** Freelance & Micro-Task Marketplace Platform
- **Target Audience:** College students, freelance creators, and task commissioners seeking reliable gig exchanges.

## 2. The Problem
Traditional freelancing and task-exchange portals suffer from systemic friction:
- Clunky messaging interfaces resulting in delayed buyer-seller coordination.
- Heavy relational database queries creating severe bottlenecks during campus-wide task campaigns.
- Insecure direct messaging channels vulnerable to fraudulent solicitation and off-platform payment attempts.

## 3. The Solution
EarnBuddy was engineered from the ground up for high throughput and instantaneous communication:
- Domain-driven REST architecture backed by MongoDB aggregation pipelines and Redis caching layers.
- Real-time bidirectional chat rooms powered by Socket.IO with sub-30ms delivery.
- Automated CMS workflow and keyword-filtering algorithms preventing fraudulent transactions.

## 4. Architecture & Engineering Implementation
- **Frontend:** Responsive React application with optimistic UI updates for chat and task progress tracking.
- **Backend:** Node.js with Express implementing domain-driven design principles.
- **Authentication:** Stateless JSON Web Token (JWT) verification paired with rotating refresh tokens stored in secure HTTP-only cookies.
- **Caching & Queue:** Redis cache-aside layer for trending tasks and active user states; pub/sub orchestration for multi-instance socket broadcasts.
- **Database:** MongoDB configured with compound indexes on active listings and buyer/seller interaction logs.

## 5. Challenges & Solutions
- **Challenge:** Preventing message drops and socket connection stalls when university networks experienced intermittent packet loss.
  - **Resolution:** Implemented client-side retry buffers with message sequence identifiers and Redis fallback queues to reconcile delivered messages automatically upon reconnection.

## 6. Key Results & Metrics
- **Registered Users:** 1,000+ university users.
- **API Latency:** 85ms p95 response time under concurrent task launches.
- **Messaging Latency:** <30ms end-to-end WebSocket transit.
- **Database Load:** 80% reduction in direct database reads via Redis cache-aside layer.

## 7. Current Status & Future Work
- Successfully operated across college campuses.
- Architectural insights applied to subsequent enterprise SaaS backends.
