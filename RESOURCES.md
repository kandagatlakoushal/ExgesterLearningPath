# Exgester Learning Path Resources

## Knowledge

### Java & Functional Programming
- [Book: _Effective Java, 3rd Edition_ — Joshua Bloch](https://www.oreilly.com/library/view/effective-java/9780134686097/)
  The definitive Java style guide. Use for: generics, immutability, Optional, functional interfaces, lambdas, streams. Items 26–33 (generics), 42–48 (lambdas/streams), 55 (Optional).

- [Official Vavr User Guide — vavr.io](https://www.vavr.io/vavr-docs/)
  Primary documentation for Either, Option, Try, Tuple, persistent collections, pattern matching. Use for: any Vavr question before parametric knowledge.

- [Vavr API Javadoc](https://www.javadoc.io/doc/io.vavr/vavr/latest/index.html)
  Full API reference. Use for: method signatures, type hierarchies, edge cases.

- [Talk: "Railway Oriented Programming" — Scott Wlaschin (NDC London)](https://fsharpforfunandprofit.com/rop/)
  The original source for the two-track error-handling metaphor. Use for: understanding *why* Either pipelines look the way they do. Written in F# but the concept is language-agnostic.

- [Article: "Functional Error Handling with Either in Vavr" — Baeldung](https://www.baeldung.com/vavr-either)
  Practical Java-specific walkthrough of Either. Use for: quick reference on map, flatMap, fold, mapLeft.

- [Article: "Introduction to Vavr" — Baeldung](https://www.baeldung.com/vavr)
  Overview of Try, Option, Tuple, and collections. Use for: initial orientation to the library.

### Spring Boot & Multi-Tenant Architecture
- [Official Spring Boot Reference — spring.io](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
  Canonical reference. Use for: @Profile, @Configuration, @Bean, YAML external config, constructor injection, auto-configuration.

- [Guide: "Spring Profiles" — Baeldung](https://www.baeldung.com/spring-profiles)
  Focused walkthrough. Use for: understanding how Exgester selects client-specific beans via @Profile("anz"), @Profile("wbc"), etc.

- [Guide: "Spring Boot YAML Configuration" — Baeldung](https://www.baeldung.com/spring-yaml)
  Use for: understanding hierarchical YAML configs and profile-specific application-{profile}.yml files.

### Messaging (JMS / ActiveMQ)
- [Guide: "Messaging with JMS" — Spring Official](https://spring.io/guides/gs/messaging-jms)
  Minimal Spring-blessed tutorial. Use for: @JmsListener, JmsTemplate, ConnectionFactory basics.

- [Article: "Spring JMS Guide" — Baeldung](https://www.baeldung.com/spring-jms)
  More detailed treatment. Use for: Queue vs Topic, message selectors, acknowledgment modes, error handling.

- [ActiveMQ Documentation — apache.org](https://activemq.apache.org/components/classic/documentation)
  Official docs. Use for: broker configuration, persistence, dead-letter queues, advisory topics.

### Design Patterns
- [Book: _Head First Design Patterns_ — Freeman & Robson](https://www.oreilly.com/library/view/head-first-design/9781492077992/)
  Most accessible first-read on OOP patterns. Use for: Strategy, Factory, Template Method, Observer. Visual, example-heavy.

- [Site: Refactoring.Guru — Design Patterns in Java](https://refactoring.guru/design-patterns/java)
  Free, modern, well-illustrated. Use for: Chain of Responsibility, Composite, Builder — with Java code samples.

- [Book: _Design Patterns: Elements of Reusable Object-Oriented Software_ — GoF](https://www.oreilly.com/library/view/design-patterns-elements/0201633612/)
  The original reference. Dense. Use for: deep-dive after initial understanding, especially Composite and Chain of Responsibility.

### Libraries (Lombok, Jackson)
- [Project Lombok Official — projectlombok.org](https://projectlombok.org/features/)
  Feature reference. Use for: @Data, @Builder, @Value, @Slf4j, @RequiredArgsConstructor — all commonly used in Exgester.

- [Jackson Tutorial — Baeldung](https://www.baeldung.com/jackson)
  Comprehensive series. Use for: ObjectMapper, @JsonProperty, @JsonIgnore, custom serializers, polymorphic type handling.

### Testing (Cucumber, JUnit, BDD)
- [Cucumber Official Docs — cucumber.io](https://cucumber.io/docs/guides/)
  The definitive resource. Use for: Gherkin syntax, step definitions, hooks, data tables, scenario outlines.

- [Guide: "Cucumber + Spring Boot" — Baeldung](https://www.baeldung.com/cucumber-spring-integration)
  Spring integration walkthrough. Use for: @CucumberContextConfiguration, @SpringBootTest, sharing state between steps.

- [JUnit 5 User Guide — junit.org](https://junit.org/junit5/docs/current/user-guide/)
  Official reference. Use for: @Test, @ParameterizedTest, @Nested, assertions, lifecycle hooks.

### Build & Quality
- [Maven Official Getting Started — maven.apache.org](https://maven.apache.org/guides/getting-started/index.html)
  Use for: POM structure, dependency management, build lifecycle, profiles.

- [JaCoCo Documentation — jacoco.org](https://www.jacoco.org/jacoco/trunk/doc/)
  Use for: code coverage configuration, report interpretation, exclusion rules.

### Regulatory Domain
- [Overview: "What is EMIR?" — TractionFintech](https://tractionfintech.com/)
  Accessible introduction to EU derivatives reporting. Use for: domain context, not legal advice.

- [Overview: "CFTC Derivatives Reporting" — QomplyReporting](https://qomplyreporting.com/)
  Explains Part 43/45, SDR, UTI, CDE. Use for: understanding CFTC-specific field requirements.

- [Overview: "ASIC Derivative Transaction Reporting" — KaizenReporting](https://kaizenreporting.com/)
  Australian regime context. Use for: understanding ASIC rewrite and T+2 deadlines.

## Wisdom (Communities)

- [r/java — Reddit](https://reddit.com/r/java)
  Well-moderated Java community. Use for: questions about modern Java idioms, library choices.

- [r/javahelp — Reddit](https://reddit.com/r/javahelp)
  Beginner-friendly. Use for: getting help with specific coding problems.

- [Stack Overflow — [vavr] tag](https://stackoverflow.com/questions/tagged/vavr)
  The best place for specific Vavr questions. High signal.

- [Spring Community Forum](https://github.com/spring-projects/spring-boot/discussions)
  Use for: Spring Boot specific questions, profile configuration issues.

## Gaps

- No open-source Exgester-like reference application exists. Exercises must be built from scratch.
- No comprehensive "Railway Oriented Programming in Java" book exists — must be assembled from Wlaschin's talk + Vavr docs + blog posts.
- Cappitech/S&P Global specific reporting semantics are proprietary; domain exercises will use simplified analogs.
