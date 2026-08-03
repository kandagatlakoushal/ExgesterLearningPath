# Week 1 — Java Foundations (Days 1-3)

## Goal
The user needs to refresh and solidify foundational Java concepts before tackling Vavr, ROP, and Spring. The next three days are focused on the exact Java features used heavily in Exgester.

## Zone of Proximal Development
The user is a practicing developer, so we aren't teaching syntax from scratch. We are teaching *why* these concepts matter for large-scale enterprise architecture, specifically linking them to Exgester's domain.
- They need to understand SOLID not as abstract rules, but as the reason why `DecisionStep` exists (SRP/OCP).
- They need to understand bounded wildcards (`? extends`, `? super`) because Vavr and pipelines use them everywhere.
- They need to understand functional interfaces (`Function`, `Predicate`) as the building blocks of composable pipelines.

## Action Taken
Created the first three lessons:
1. `0001-day-1-oop-and-solid.html` -> Linked to E1 (SOLID Trade Refactor)
2. `0002-day-2-generics.html` -> Linked to E2 (Generic DecisionStep)
3. `0003-day-3-lambdas.html` -> Linked to E3 (Lambda Trade Filter)

## Next Steps
The user is expected to read these lessons and complete the corresponding exercises (E1, E2, E3). Once completed, they will report back, and we can proceed to Day 4 (Streams & Optional) and Day 5 (Immutability & Records).
