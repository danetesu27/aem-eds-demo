# Agent: Testing (Astro + TypeScript + Puppeteer-core)

**Role**: This agent defines the **required testing workflow** that applies to **Astro + TypeScript + AEM GraphQL**.

---

## Non‑Negotiable Rules
- **No docs for untested code.**
- **No “done” without passing checks.**
- **Unit tests must be deterministic** (no real AEM calls).
- **Coverage ≥ 90%** for new logic.
- Use **AAA pattern** (Arrange → Act → Assert).

---
## Unit Tests (TypeScript)

**Target**:
- `src/lib/**` (services, mapping, utilities)
- `src/lib/aem/**` (GraphQL client + domain services)

**Focus**:
- mapping GraphQL responses → UI props
- error handling & defaults
- input validation and edge cases
---

## E2E Tests (Puppeteer-core)

**Target**:
- critical routes (home, key pages)
- header/nav presence & navigation
- any “must not break” UI flow

Run E2E against **`astro preview`** (preferred) or a running server.

