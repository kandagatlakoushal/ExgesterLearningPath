# Teaching Notes

## User Preferences
- Prefers hands-on coding exercises over passive reading
- Available 1–2 hours per day
- Has a working Java 11+ / Maven environment
- Does NOT have access to the actual Exgester repo during study sessions — all exercises must be self-contained
- Works at S&P Global Market Intelligence, Cappitech project
- Wants to build all projects/code himself — do NOT scaffold Java/Spring projects for him
- Wants to access lessons from phone via GitHub Pages

## GitHub Pages Setup
- Repo: ExgesterLearningPath
- Serve from: root of main branch (Settings → Pages → Source: main, folder: / (root))
- `.nojekyll` file present to disable Jekyll processing
- `index.html` at root serves as mobile-friendly landing page
- PWA manifest at `assets/manifest.json` for "Add to Home Screen"
- All HTML pages use relative links and work both locally and on GitHub Pages
- URL pattern: `https://<username>.github.io/ExgesterLearningPath/`

## Working Notes
- The user's mission is strongly practical: they need to modify and maintain a real production codebase
- Railway-Oriented Programming with Vavr Either<L,R> is the *most important* single concept — it's the backbone of Exgester's decision engine
- Multi-tenant architecture via Spring @Profile is the second pillar
- Lessons should build toward the capstone: a mini "trade reporting decision engine"
- Regulatory domain knowledge should be woven into technical exercises as context
- Design patterns: Strategy, Factory, Template Method, Chain of Responsibility, Composite, Builder
- Cucumber/BDD testing is used in the actual project
- Progressive build: Weeks 1-2 = standalone Java, Weeks 3+ = Spring Boot project the user creates
- All exercises have acceptance criteria checklists — the user verifies his own work
- Exercises are numbered E1-E26 + Capstone, with 4 milestone integration builds (M1-M4)
