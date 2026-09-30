export const profile = {
  firstName: "Shadrack",
  lastName: "Kioko",
  name: "Shadrack Kioko",
  initials: "SK",
  role: "Senior Software Engineer",
  roleLine: "Senior Software Engineer & Hands-on Technical Lead",
  tagline: "Available for senior engineering and technical leadership roles",
  location: "Nairobi, Kenya",
  email: "shkmusembi@gmail.com",
  phone: "+254 701 841 549",
  phoneHref: "tel:+254701841549",
  linkedin: "https://www.linkedin.com/in/shadrack-kioko",
  github: "https://github.com/kiokoshedy",
  summary:
    "Senior software engineer and hands-on technical leader with 7+ years designing and delivering customer-facing platforms across payments, insurance, and financial services. Combines full-stack engineering depth — Java / Spring Boot, React / Next.js, TypeScript, PostgreSQL — with cloud-native architecture on Azure and AWS, including microservices, event-driven systems, and Kubernetes-based delivery.",
  summarySecondary:
    "Experienced taking complex, data-dependent products from design through implementation, integration, and production release in regulated enterprise environments. Embeds AI-assisted engineering (GitHub Copilot, Claude) across the development lifecycle to raise delivery speed and code quality, and coaches engineers on clean architecture, testing, and secure API design.",
  rotatingTitles: [
    "Senior Software Engineer",
    "Java / Spring Boot Engineer",
    "Cloud-Native Architect",
    "Technical Lead",
  ],
};

export const positioning = {
  statement:
    "I am the engineer a product or platform team brings in when the work is too regulated, too integrated or too performance-sensitive to ship on a first attempt — and it still has to ship.",
  pillars: [
    {
      title: "Who I work best with",
      icon: "people",
      points: [
        "Teams shipping customer-facing financial, insurance or payments products",
        "Product owners who need an engineer in design conversations, not just delivery tickets",
        "Organisations consolidating services without pausing the roadmap",
      ],
    },
    {
      title: "What I deliver",
      icon: "rocket",
      points: [
        "Production platforms designed end to end — API, data model, UI, deployment and observability",
        "Release pipelines and quality gates that make safe releases routine",
        "Fewer regressions, faster cycle times and systems that stay maintainable after handover",
      ],
    },
    {
      title: "How I work",
      icon: "compass",
      points: [
        "Bias to the smallest shippable slice, backed by measurable evidence",
        "Secure and testable by default — no retrofitted quality gate at the end",
        "Unblocking others: reviews, pairing, documentation and honest trade-off calls",
      ],
    },
  ],
  idealRoles: [
    "Senior Software Engineer",
    "Tech Lead",
    "Staff Engineer",
    "Cloud / Platform Engineer",
    "Engineering Manager (player-coach)",
  ],
};

// Headline outcomes. Every figure is drawn from the career data above — replace
// with hard numbers (cycle time, uptime, volume) as soon as they can be cited.
export const impactMetrics = [
  {
    value: "7+",
    label: "Years in production engineering",
    detail: "Java, TypeScript and cloud delivery since 2019.",
    icon: "clock",
  },
  {
    value: "3",
    label: "Regulated industries shipped",
    detail: "Insurance, payments and enterprise financial reporting.",
    icon: "shield",
  },
  {
    value: "20+",
    label: "Technologies in daily use",
    detail: "Backend, frontend, data and infrastructure in one delivery chain.",
    icon: "stack",
  },
  {
    value: "2",
    label: "Cloud platforms operated",
    detail: "Azure (incl. AKS) in production, AWS at scale.",
    icon: "cloud",
  },
];

// Proof behind each competency. Keyed by the competency title in `competencies`
// so evidence and proficiency never drift apart.
export const skillEvidence = [
  {
    skill: "Architecture",
    claim: "Ships systems that survive contact with production traffic.",
    evidence: [
      "Decomposed legacy estate into containerised Spring Boot microservices with explicit domain boundaries",
      "Designed event-driven flows so payment processing never blocks the customer request path",
    ],
  },
  {
    skill: "Languages & Stacks",
    claim: "Delivers across the whole stack, not a single layer.",
    evidence: [
      "Spring Boot + Java for regulated backends; React, Next.js and TypeScript for customer portals",
      "Same feature shipped end to end — API contract, data model, UI and instrumentation",
    ],
  },
  {
    skill: "Data & Platforms",
    claim: "Treats the data model as a design decision.",
    evidence: [
      "PostgreSQL schema and query optimisation on high-volume transaction paths",
      "Transaction integrity for payment flows, with Redis for hot-path caching and coordination",
    ],
  },
  {
    skill: "Cloud & Delivery",
    claim: "Runs the platform, not just the build.",
    evidence: [
      "Workloads in Azure Kubernetes Service with infrastructure defined in Terraform",
      "GitHub Actions and Jenkins pipelines gating every merge through build, test and scan",
    ],
  },
  {
    skill: "AI in Engineering",
    claim: "Uses AI where it measurably raises throughput or quality.",
    evidence: [
      "GitHub Copilot and Claude across design, implementation, review and documentation",
      "Adopted deliberately and reviewed as a first-class tool — output still held to the same bar",
    ],
  },
  {
    skill: "Security & Quality",
    claim: "Security and testing are part of the definition of done.",
    evidence: [
      "JWT and OAuth-style auth on customer-facing APIs in regulated environments",
      "Automated and integration testing wired in as pipeline gates, not post-release cleanups",
    ],
  },
  {
    skill: "Leadership",
    claim: "Leads through design, review and unblocking.",
    evidence: [
      "Leads frontend architecture and reusable component libraries across teams",
      "Mentors engineers via structured code review, pairing and technical guidance",
    ],
  },
];

// Update these two if the site moves to a custom domain.
export const site = {
  url: "https://kiokoshedy.github.io/personal-portfolio/",
  // Drop a PDF at public/cv/Shadrack-Kioko-CV.pdf and the download button
  // uses it automatically; otherwise the button opens the printable CV view.
  cvPdf: "/cv/Shadrack-Kioko-CV.pdf",
};

export const heroStats = [
  { value: "7+", label: "Years building production software" },
  { value: "3", label: "Industries: insurance, payments, enterprise" },
  { value: "2", label: "Cloud platforms: Azure & AWS" },
  { value: "20+", label: "Technologies in daily use" },
];

export const competencies = [
  {
    title: "Architecture",
    level: 90,
    icon: "layers",
    items: [
      "Microservices",
      "Event-driven systems",
      "Distributed systems",
      "Clean architecture",
      "0-to-1 product design",
      "Enterprise integrations",
    ],
  },
  {
    title: "Languages & Stacks",
    level: 92,
    icon: "code",
    items: [
      "Java",
      "Spring Boot",
      "TypeScript",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "React Native",
    ],
  },
  {
    title: "Data & Platforms",
    level: 85,
    icon: "database",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Data-intensive APIs",
      "Transaction processing",
      "Query & performance optimisation",
    ],
  },
  {
    title: "Cloud & Delivery",
    level: 86,
    icon: "cloud",
    items: [
      "Azure",
      "AWS",
      "Docker",
      "Kubernetes (AKS)",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
      "Observability (Grafana)",
    ],
  },
  {
    title: "AI in Engineering",
    level: 88,
    icon: "robot",
    items: [
      "GitHub Copilot",
      "Claude",
      "AI-assisted design & review",
      "AI-assisted documentation",
      "Productivity & quality practices",
    ],
  },
  {
    title: "Security & Quality",
    level: 84,
    icon: "shield",
    items: [
      "Secure API design (JWT, OAuth)",
      "Automated & integration testing",
      "Performance & accessibility",
      "Code review",
      "SOLID / clean code",
    ],
  },
  {
    title: "Leadership",
    level: 85,
    icon: "people",
    items: [
      "Technical mentoring",
      "Pair programming",
      "Design reviews",
      "Cross-functional Agile delivery",
      "Product, UX, QA & DevOps partners",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Britam",
    sector: "Insurance & Financial Services",
    period: "July 2023 – Present",
    current: true,
    highlights: [
      "Architect and deliver enterprise web platforms for insurance and financial services using React.js, Next.js, TypeScript, Java Spring Boot, and REST APIs — from technical design through production release.",
      "Design and implement Spring Boot microservices and cloud-native services on Microsoft Azure, including workloads deployed to Azure Kubernetes Service (AKS), with CI/CD via GitHub Actions and Jenkins.",
      "Lead frontend architecture for reusable component libraries and maintainable application structure; integrate customer-facing portals with payment gateways, authentication services, and core enterprise backends.",
      "Partner with UX, product, QA, and DevOps on architecture discussions and design reviews; raise reliability through performance, accessibility, and automated testing.",
      "Mentor junior engineers through structured code reviews, technical guidance, and pair programming; champion clean architecture and engineering standards.",
      "Use Claude and GitHub Copilot as first-class tools across design, implementation, and review to accelerate delivery while holding a high bar on security and maintainability.",
    ],
    stack: ["React.js", "Next.js", "TypeScript", "Spring Boot", "Azure", "AKS", "GitHub Actions", "Jenkins"],
  },
  {
    role: "Software Engineer",
    company: "Littlepay",
    sector: "Payments",
    period: "May 2022 – May 2023",
    current: false,
    highlights: [
      "Built secure, high-volume payment backend services and REST APIs in Java Spring Boot on AWS, consumed by modern web clients and external partners.",
      "Designed scalable microservices and event-driven patterns for payment processing; integrated external payment providers and enterprise platforms under security and reliability constraints.",
      "Improved transactional throughput and reliability by optimising PostgreSQL schemas and queries; introduced automated testing and CI/CD as part of quality gates.",
      "Operated in lean Agile pods with frontend, QA, and DevOps counterparts — the same high-collaboration model required for early-stage product work.",
    ],
    stack: ["Java", "Spring Boot", "AWS", "PostgreSQL", "REST APIs", "CI/CD"],
  },
  {
    role: "Software Developer",
    company: "Data Integrated Ltd",
    sector: "Enterprise Software",
    period: "August 2019 – April 2022",
    current: false,
    highlights: [
      "Designed and shipped full-stack business applications for enterprise clients, spanning modern JavaScript frontends, Java backend services, and financial reporting systems.",
      "Contributed to migration of legacy systems onto Dockerized microservices; improved database performance through targeted SQL optimisation.",
      "Established engineering hygiene through code reviews, mentoring of junior developers, and knowledge sharing across the SDLC.",
    ],
    stack: ["JavaScript", "Java", "Docker", "SQL optimisation", "Financial reporting"],
  },
];

// Deep dives. `diagram` links a study to an entry in `architectureDiagrams`.
// `confidential` renders the NDA note instead of naming the client systems.
export const caseStudies = [
  {
    id: "insurance-platforms",
    title: "Customer insurance portals, designed and shipped to production",
    sector: "Insurance & Financial Services",
    period: "2023 – Present",
    role: "Lead engineer — architecture, delivery, production support",
    diagram: "platform",
    problem:
      "Insurance customers needed self-service journeys across quoting, policy servicing and payments. The work sat in a regulated estate where integrations to core policy and payment systems were slow to change, integration tests were manual, and any UI change risked breaking a regulated journey.",
    approach: [
      {
        title: "Contract-first boundaries",
        detail:
          "Modelled quoting, policy servicing, payments and notifications as separate Spring Boot services with explicit API contracts, so core-system changes stopped rippling through the UI.",
      },
      {
        title: "Reusable frontend foundation",
        detail:
          "Led frontend architecture for a shared component and structure library in React, Next.js and TypeScript, so new portals and features shipped on top of tested, accessible building blocks.",
      },
      {
        title: "Integrations with a safety net",
        detail:
          "Wrapped payment gateways, identity services and core insurance backends behind typed clients with retry, timeout and audit behaviour, then covered them with automated integration tests.",
      },
      {
        title: "Release and observe",
        detail:
          "Containerised services on Azure Kubernetes Service with GitHub Actions and Jenkins pipelines, centralised logging and Grafana dashboards so regressions surface before customers report them.",
      },
    ],
    outcome:
      "Customer self-service journeys shipped to production with payments, identity and core systems integrated behind them — and the component library meant the next portal was a configuration exercise rather than a rebuild.",
    metrics: [
      { value: "4", label: "Domain services separated" },
      { value: "100%", label: "Merges gated by CI" },
      { value: "3", label: "Core systems integrated" },
    ],
    stack: ["React", "Next.js", "TypeScript", "Spring Boot", "Azure", "AKS", "REST"],
  },
  {
    id: "payments-platform",
    title: "High-volume payment services on an event-driven backbone",
    sector: "Payments",
    period: "2022 – 2023",
    role: "Backend engineer — service design, data and reliability",
    diagram: "events",
    problem:
      "Payment processing has to be fast for the customer and safe for the business. Requests needed to return quickly, provider calls needed to be resilient, and every state transition had to be traceable — with no double charges when a provider timed out or a message was retried.",
    approach: [
      {
        title: "Async by default",
        detail:
          "Took provider calls and settlement off the request path behind an event-driven flow, so customer requests returned promptly and slow third parties could not exhaust the connection pool.",
      },
      {
        title: "Idempotency and traceability",
        detail:
          "Made every state transition idempotent and auditable so retries and replays could not double-charge, and any transaction could be reconstructed end to end.",
      },
      {
        title: "Data-path performance",
        detail:
          "Optimised PostgreSQL schemas, indexes and queries on the hot transaction path and introduced Redis where caching beat repeated reads.",
      },
      {
        title: "Quality gates",
        detail:
          "Introduced automated and integration testing into CI/CD so regressions in payment logic failed the build rather than a reconciliation run.",
      },
    ],
    outcome:
      "Payment throughput and reliability improved while the service stayed maintainable under external provider failure — the reconciliation and retry story is the part I am proudest of.",
    metrics: [
      { value: "1", label: "Write path per transaction" },
      { value: "0", label: "Duplicate charges on retry" },
      { value: "AWS", label: "Runtime platform" },
    ],
    stack: ["Java", "Spring Boot", "AWS", "PostgreSQL", "Redis", "REST APIs"],
  },
  {
    id: "delivery-ownership",
    title: "From Dockerised legacy estate to a delivered cloud platform",
    sector: "Enterprise Software",
    period: "2019 – 2022",
    role: "Full-stack engineer — migration, delivery, team practice",
    diagram: "delivery",
    problem:
      "Business-critical enterprise applications ran as monoliths with manual releases and slow reporting. Teams needed containerisation and a repeatable deployment path without a big-bang rewrite or a roadmap freeze.",
    approach: [
      {
        title: "Incremental migration",
        detail:
          "Moved functionality out of legacy systems into Dockerised services in slices, keeping the monolith as the system of record until each new path was trusted.",
      },
      {
        title: "One pipeline, repeatable releases",
        detail:
          "Standardised builds, tests and environment promotion so releases stopped being a manual, risky ritual.",
      },
      {
        title: "Reporting performance",
        detail:
          "Targeted SQL optimisation and query tuning on financial reporting paths that had become the slowest part of the product.",
      },
      {
        title: "Raised the team, not just the ticket",
        detail:
          "Introduced code review standards, mentored junior developers and shared knowledge across the SDLC so the practice outlived the project.",
      },
    ],
    outcome:
      "A containerised, repeatable delivery path with faster reporting and a team that could carry it forward without me — the clearest example of production ownership I can point to.",
    metrics: [
      { value: "1", label: "Deployment path, standardised" },
      { value: "SQL", label: "Reporting paths optimised" },
      { value: "3", label: "Junior engineers mentored" },
    ],
    stack: ["Docker", "Java", "JavaScript", "SQL optimisation", "CI/CD"],
  },
];

export const architectureDiagrams = [
  {
    id: "platform",
    title: "Customer-facing platform topology",
    caption:
      "How a customer journey travels from the browser to core systems: presentation, edge, domain services and data stay separable so each layer can change, scale and fail independently.",
    layerLabels: ["Experience", "Edge", "Domain services", "Data & integrations"],
    highlights: [
      "Stateless services behind a managed gateway — scale horizontally, deploy independently",
      "Domain boundaries mirror the business, so core-system changes stay contained",
      "Typed integration clients with timeout, retry and audit behaviour",
    ],
  },
  {
    id: "events",
    title: "Event-driven payment processing",
    caption:
      "The request path stays short: customer calls return fast, while payment work is driven by events that are idempotent, replayable and observable.",
    layerLabels: ["Request path", "Event backbone", "Consumers"],
    highlights: [
      "Every consumer is idempotent — replaying an event cannot double-charge",
      "Poison messages are dead-lettered rather than blocking the stream",
      "State transitions are auditable, so a transaction can be reconstructed end to end",
    ],
  },
  {
    id: "delivery",
    title: "Delivery pipeline and production feedback loop",
    caption:
      "One path from commit to production, with automated gates, progressive rollout and observability feeding back into the next build.",
    layerLabels: ["Commit", "Build & test", "Scan", "Publish", "Deploy", "Observe"],
    highlights: [
      "Merge is gated on tests, scans and build health — not on reviewer confidence",
      "Immutable artefacts are promoted between environments; nothing is rebuilt",
      "Logs, metrics and traces from production are the input to the next change",
    ],
  },
];

export const leadershipHighlights = [
  {
    title: "Technical leadership on the work",
    headline:
      "Own architecture end to end — service boundaries, API contracts, data models — and write the trade-offs down.",
    icon: "compass",
    summary:
      "I own architecture decisions end to end — from the first design conversation through production release — and I keep the decision, its trade-offs and its evidence written down.",
    points: [
      "Lead architecture for customer-facing platforms, including service boundaries, API contracts and data models",
      "Run design reviews with product, UX, QA and DevOps so decisions land before code does",
      "Choose the simplest design that meets the requirement, and say why the alternatives lost",
    ],
  },
  {
    title: "Raising engineers, not just shipping tickets",
    headline:
      "Mentor engineers through structured review and pairing; set standards a team follows without me.",
    icon: "people",
    summary:
      "Most of my leverage is other people's code getting better. Mentorship is structured, not ad hoc, so it survives my calendar and my next role.",
    points: [
      "Mentor junior and mid-level engineers through structured code review and pairing",
      "Coach on clean architecture, testing strategy, secure API design and trade-off reasoning",
      "Set engineering standards that teams can follow without me in the room",
    ],
  },
  {
    title: "Alignment across the whole delivery chain",
    headline:
      "Turn product intent into shippable slices early, with UX, QA and DevOps inside the loop.",
    icon: "layers",
    summary:
      "I translate between product intent and engineering reality early — flagging the constraint, the risk and the cost while there is still time to change the plan.",
    points: [
      "Break large, vague asks into shippable slices with clear acceptance criteria",
      "Partner with UX on accessibility and performance as design concerns, not afterthoughts",
      "Keep QA, DevOps and security inside the delivery loop instead of at the end of it",
    ],
  },
  {
    title: "AI-assisted engineering, deliberately",
    headline:
      "Use Copilot and Claude across design, review and docs, held to the same quality bar.",
    icon: "robot",
    summary:
      "I treat GitHub Copilot and Claude as engineering tools with a review standard — adopted where they raise throughput or quality, rejected where they quietly lower the bar.",
    points: [
      "Use AI assistants across design, implementation, review and documentation",
      "Keep security, correctness and maintainability as non-negotiable review criteria",
      "Share what worked so the whole team gets the benefit, not just the individual",
    ],
  },
];

export const ownershipPractices = [
  {
    title: "Delivery & release",
    headline:
      "Gated CI/CD on every merge; immutable artefacts promoted to AKS via Terraform.",
    points: [
      "Automated build, test and security gates on every merge via GitHub Actions and Jenkins",
      "Immutable container artefacts promoted through environments — no rebuilds in production",
      "Containerised deployment to Azure Kubernetes Service with infrastructure in Terraform",
    ],
  },
  {
    title: "Reliability & observability",
    headline:
      "Centralised logging, Grafana dashboards and audit trails around payment state changes.",
    points: [
      "Centralised logging with Grafana dashboards on the services I own",
      "Structured error handling and audit trails around payment and policy state changes",
      "Performance and accessibility treated as acceptance criteria, measured before release",
    ],
  },
  {
    title: "On-call & incident response",
    headline:
      "First responder in production: triage, mitigate, then blameless post-incident review.",
    points: [
      "First responder for production services — triage, mitigate, then fix the cause",
      "Blameless post-incident review: timeline, contributing factors, concrete follow-ups",
      "Alerting tuned to be actionable, so the signal that wakes someone is real",
    ],
  },
  {
    title: "Security & data handling",
    headline:
      "JWT/OAuth auth, validated input and least privilege on APIs handling financial data.",
    points: [
      "JWT and OAuth-style authentication and authorisation on customer-facing APIs",
      "Secure API design as a default: validate input, least privilege, no secrets in code",
      "Careful handling of financial and personal data in regulated enterprise environments",
    ],
  },
];

// Add quotes here and the Testimonials section renders them automatically, e.g.
// { quote: "…", name: "…", role: "…", company: "…" }
// Until then the section shows reserved slots, so nothing looks broken.
export const testimonials = [];

export const education = [
  {
    qualification: "Bachelor of Science, Mathematics & Computer Science",
    institution: "Meru University",
    period: "2013 – 2016",
    detail: "Mathematics and Computer Science",
  },
];

// Add credentials here and the Certifications section renders automatically,
// e.g. { name: "Microsoft Certified: Azure Solutions Architect", issuer: "Microsoft", year: "2024" }
export const certifications = [];

export const references = [
  {
    name: "Francis Kiarie",
    role: "Tech Lead",
    company: "Data Integrated Ltd",
  },
  {
    name: "Swee Nyin Lim",
    role: "Tech Lead, Payments",
    company: "Littlepay",
  },
];

// Kept to what fits the navbar. Everything else is still one scroll away and
// listed in the footer via `footerLinks`.
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "case-studies", label: "Case Studies" },
  { id: "architecture", label: "Architecture" },
  { id: "skills", label: "Skills" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

export const footerLinks = [
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "case-studies", label: "Case Studies" },
  { id: "architecture", label: "Architecture" },
  { id: "skills", label: "Skills" },
  { id: "leadership", label: "Leadership" },
  { id: "ownership", label: "Production ownership" },
  { id: "testimonials", label: "Testimonials" },
  { id: "education", label: "Education" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export const socials = [
  { name: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { name: "GitHub", href: profile.github, icon: "github" },
  { name: "Email", href: `mailto:${profile.email}`, icon: "mail" },
  { name: "Phone", href: profile.phoneHref, icon: "phone" },
];
