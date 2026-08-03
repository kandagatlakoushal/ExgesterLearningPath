# Mission: Mastering the Exgester Codebase

## Why
I work at S&P Global Market Intelligence on the Cappitech project's **Exgester** module — a Spring Boot event-driven trade reporting engine that receives trade events from AMQ/JMS, decides whether a trade must be reported, determines applicable regulatory regions (EMIR, FCA, ASIC, CFTC, etc.), creates regulatory submission messages, and sends them downstream. I need to be able to **independently modify, debug, and extend** the Exgester codebase — including its railway-oriented decision pipelines, multi-tenant Spring profiles, and client-specific flows — without supervision.

## Success looks like
- I can read an Exgester decision pipeline (`Either<L,R>` chain) and explain exactly what each step does and why it short-circuits
- I can add a new client-specific reporting rule by creating the right `@Profile`, YAML config, and decision step
- I can trace a trade event from JMS receipt → decision engine → regulatory submission and debug any failures along the way
- I can write Cucumber BDD tests that cover new decision flows end-to-end
- I can confidently refactor existing pipelines using Strategy, Factory, Template Method, and Chain of Responsibility patterns
- I understand the regulatory domain well enough to reason about *why* a flow exists, not just *how* it works

## Constraints
- 1–2 hours per day, 4+ weeks
- Learning happens outside work hours — no access to the real Exgester repo during study sessions, so exercises must be self-contained
- Java 11+ environment with Maven already available locally
- Prefer hands-on coding exercises over passive reading

## Out of scope
- Deep regulatory compliance expertise (legal interpretations of EMIR/CFTC rules)
- DevOps / Kubernetes deployment of Exgester
- Frontend / UI development
- Database schema design (Exgester is event-driven, not CRUD)
