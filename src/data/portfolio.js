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

export const initiatives = [
  {
    title: "Insurance digital platforms",
    summary:
      "Customer-facing portals built on React, Next.js and TypeScript with Spring Boot APIs, integrating payment, identity and core insurance systems.",
    details: [
      "Payment, identity, and core-system integrations",
      "Responsive desktop and mobile experience",
      "Accessible, tested, production-released UI",
    ],
    stack: ["React", "Next.js", "TypeScript", "Spring Boot", "REST"],
  },
  {
    title: "Cloud-native financial APIs",
    summary:
      "Secure REST services and microservices running on Azure Kubernetes Service, with automated pipelines, logging and monitoring for production readiness.",
    details: [
      "Containerised services on AKS",
      "GitHub Actions and Jenkins delivery pipelines",
      "Centralised logging and Grafana monitoring",
    ],
    stack: ["Azure", "AKS", "Docker", "Terraform", "Grafana"],
  },
  {
    title: "Enterprise & partner integrations",
    summary:
      "Third-party APIs and payment providers integrated with JWT/OAuth-style authentication and explicit attention to data handling in financial contexts.",
    details: [
      "JWT and OAuth-style authentication",
      "Payment provider and partner integrations",
      "Transaction processing and data integrity",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "OAuth"],
  },
];

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

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "initiatives", label: "Work" },
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
