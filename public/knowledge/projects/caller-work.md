# Caller.work — Fault-Tolerant Automated Telephony Backend

## 1. Overview
- **Project Name:** Caller.work
- **Live Deployment:** https://caller.work
- **Case Study Route:** /projects/caller-work
- **Role:** Backend Architect & Systems Engineer
- **Type:** Event-Driven Telephony Infrastructure & Webhook Orchestrator
- **Target Audience:** Enterprise support desks, incident response desks, and automated notification systems.

## 2. The Problem
Third-party telecom providers and carrier gateways frequently experience dropped HTTP webhooks and timeout spikes under concurrent outbound bursts:
- Silent notification drops during critical system alerts.
- Duplicate call placement when client retry scripts do not manage idempotency correctly.
- Lack of granular tracing across distributed telephony status transitions (ringing, answered, failed, completed).

## 3. The Solution
Caller.work provides a resilient middle layer between application workflows and carrier networks:
- Idempotent request queuing backed by Redis distributed locks, eliminating accidental duplicate call initiations.
- Decoupled message queues using GCP Pub/Sub and serverless compute workers to absorb sudden traffic surges.
- End-to-end distributed tracing via OpenTelemetry and automated dead-letter queues with real-time Slack incident alerting.

## 4. Architecture & Engineering Implementation
- **Compute Layer:** Google Cloud Functions (Node.js) triggered by Cloud Pub/Sub topics.
- **Idempotency & Locks:** Redis with Redlock algorithm validating unique request hashes.
- **Telephony Provider:** Twilio API integration with fallback routing to alternate carrier endpoints.
- **Observability:** Distributed structured logging with OpenTelemetry tracing context propagation.

## 5. Challenges & Solutions
- **Challenge:** Handling out-of-order webhook delivery from telecommunication carriers (e.g. receiving a "completed" event before an "in-progress" event).
  - **Resolution:** Designed a finite state machine that validates chronological timestamp headers and stores out-of-order events in temporary staging keys before final database persistence.

## 6. Key Results & Metrics
- **Deliverability:** 99.95% verified call dispatch and status delivery.
- **Monthly Concurrency:** 50,000+ automated outbound calls processed.
- **Webhook Response Time:** 180ms p95 ACK latency back to client callers.
- **Failover Recovery:** <2s automatic fallback to secondary carrier endpoints.

## 7. Current Status & Future Work
- Operational infrastructure serving automated outbound alerting workflows.
