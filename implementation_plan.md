# Exgester Mastery: 4-Week Comprehensive Coursework

This plan outlines a 4-week, project-oriented curriculum designed to master the Exgester trade reporting engine architecture. The curriculum requires 1-2 hours of daily study and is structured around building a "MiniExgester" application from scratch.

## User Review Required

> [!IMPORTANT]
> Please review the daily breakdown below. Does the progression from Core Java/Vavr to Spring Boot, Messaging, and finally Testing align with how you prefer to learn?
> Also, confirm that you will be scaffolding the Java/Spring projects yourself, as requested in your preferences.

## Open Questions

1. **JMS Broker:** For the messaging components (Week 3), do you have a preference between running a local ActiveMQ instance vs. using an embedded broker for the exercises?
2. **Delivery Format:** The lessons will be generated as HTML files accessible via your GitHub Pages setup. Does this format work for your daily study routine?

## Proposed Changes

We will generate a series of lesson HTML files, reference documents, and exercise descriptions over the next 4 weeks.

### Course Outline

**Week 1: Core Java & Functional Foundations (Vavr & Railway-Oriented Programming)**
- **Day 1:** Java 11+ Refresher: Immutability, Streams, Lambdas, Optional.
- **Day 2:** Introduction to Vavr: `Option`, `Try`, `Tuple`.
- **Day 3:** Railway-Oriented Programming (ROP): `Either<L,R>`, Happy path vs Error path.
- **Day 4:** Composing Functions: Higher-order functions, functional interfaces, chaining `Either` with `flatMap`.
- **Day 5:** *Milestone 1:* Build a pure Java ROP pipeline for validating a Trade Event (no Spring yet). Side-effect isolation.

**Week 2: Spring Boot & Multi-Tenancy (Architecture & Configuration)**
- **Day 6:** Spring Boot Fundamentals: DI, Constructor Injection, Beans, Scopes.
- **Day 7:** Configuration & YAML: `@ConfigurationProperties`, managing complex YAML structures.
- **Day 8:** Multi-Tenancy with Spring Profiles: Creating profiles for `ANZ`, `Wbc`, `Santander`.
- **Day 9:** Bean Overriding and Conditional Beans: `@ConditionalOnProperty`, `@Profile` to inject client-specific rules.
- **Day 10:** *Milestone 2:* Wrap the Week 1 ROP pipeline in a Spring Boot app, injecting client-specific validation rules based on active profiles.

**Week 3: Design Patterns & Messaging (Event-Driven Architecture)**
- **Day 11:** Behavioral Patterns: Strategy, Chain of Responsibility, and Template Method in Trade Validation.
- **Day 12:** Structural & Creational Patterns: Factory (for regulatory messages), Builder, Composite.
- **Day 13:** Messaging Fundamentals: JMS concepts, ActiveMQ, Queues vs Topics.
- **Day 14:** Spring JMS: `JmsListener`, `JmsTemplate`, JSON serialization/deserialization with Jackson.
- **Day 15:** *Milestone 3:* Connect the Spring Boot app to a queue. Listen for Trade Events, process them through the pipeline, and publish to an output queue.

**Week 4: Testing, Build, & Quality (Production Readiness)**
- **Day 16:** BDD with Cucumber: Writing Gherkin features for Trade Reporting rules.
- **Day 17:** Step Definitions & JUnit Integration: Hooking Cucumber into Spring Boot tests.
- **Day 18:** Build & Quality: Maven setup, JaCoCo coverage, Checkstyle configuration.
- **Day 19:** Containerization: Dockerizing the Application & ActiveMQ.
- **Day 20:** *Milestone 4 (Capstone):* End-to-end BDD tests covering different client profiles running via Maven in Docker.

### Implementation Details
- **Lessons:** Generated sequentially in `./lessons/` as `0001-java-refresher.html`, `0002-vavr-intro.html`, etc.
- **Exercises:** Appended to `./reference/exercises.html`.
- **Glossary:** Maintained at `./reference/glossary.html`.
- **Learning Records:** Added to `./learning-records/` as you complete milestones.

## Verification Plan

### Automated Tests
- You will write and execute JUnit and Cucumber BDD tests as part of Week 4 exercises to verify the logic of the MiniExgester application.

### Manual Verification
- You will manually verify the coursework structure and the clarity of the daily lessons as they are generated.
- Each milestone will have specific acceptance criteria for you to validate your implementation against.
