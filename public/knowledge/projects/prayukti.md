# Prayukti Virtual Laboratory Platform

## 1. Overview
- **Project Name:** Prayukti (vLAB)
- **Live Deployment:** https://mmmut.prayukti.org
- **Case Study Route:** /projects/prayukti
- **Role:** Creator, System Architect & Lead Developer
- **Type:** Browser-based Virtual Laboratory & Cloud Simulation Platform
- **Target Audience:** Engineering colleges, technical universities, and STEM students across India.

## 2. The Problem
Higher education institutions in Tier-2 and Tier-3 cities in India frequently face significant constraints in physical laboratory infrastructure:
- High procurement and maintenance costs for electrical and electronics test benches, oscilloscopes, and optical apparatus.
- Limited lab hours and equipment shortages resulting in multiple students sharing a single apparatus without individual hands-on measurement experience.
- Manual record maintenance leading to delays in submission, grading, and plagiarism detection.

## 3. The Solution
Prayukti provides an interactive, browser-based simulation platform:
- Over 50 standardized STEM experiments available 24/7 on low-spec hardware.
- Mathematical calculation engines running on the server delivering sub-50ms reactive updates when students manipulate virtual knobs, sliders, and wiring.
- Automated data logging, graph plotting, and report generation with professor oversight dashboards.

## 4. Architecture & Engineering Implementation
- **Frontend:** React with canvas-based visual apparatus rendering and interactive circuit boards.
- **Backend:** FastAPI (Python) microservices handling computational formulas and experiment logic.
- **Real-Time Layer:** Bi-directional WebSockets ensuring sub-50ms measurement latencies between virtual dials and backend computation.
- **Database:** MongoDB for schema-flexible student experiment records and session parameters.
- **Infrastructure:** Docker containerized deployment orchestrated on Google Cloud Platform (GCP) with autoscaling worker pods.

## 5. Challenges & Solutions
- **Challenge:** Maintaining calculation accuracy and low latency during peak hours with 400+ simultaneous laboratory exam sessions.
  - **Resolution:** Decoupled computation engines from user session management; offloaded static rendering to client-side canvas while streaming only state diffs over binary WebSocket frames.

## 6. Key Results & Metrics
- **Active Users:** 400+ concurrent students across engineering cohorts.
- **Uptime:** 99.8% across semester lab exam cycles.
- **Experiments:** 50+ accredited STEM experiments implemented.
- **Latency Reduction:** 70% decrease in measurement render latency compared to legacy Flash/Java applets.

## 7. Current Status & Future Work
- In active production use at MMMUT Gorakhpur.
- Future work includes incorporating WebAssembly (Wasm) calculation modules to enable full offline execution for areas with unreliable internet connectivity.
