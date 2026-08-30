import { Icons } from "@/components/icons";

export const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "engineering", label: "Engineering" },
  { id: "contact", label: "Contact" },
] as const;

export const ARCHITECTURE_LAYERS = [
  {
    id: "ui",
    label: "Interface",
    description: "Component architecture, design systems, accessibility",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
    ],
    color: "hsl(32, 58%, 58%)",
  },
  {
    id: "state",
    label: "State",
    description: "Client & server state, caching, optimistic updates",
    technologies: ["Zustand", "TanStack Query", "Redux", "Context API"],
    color: "hsl(158, 28%, 48%)",
  },
  {
    id: "data",
    label: "Data",
    description: "REST integrations, BFF patterns, real-time flows",
    technologies: ["REST APIs", "JWT", "Plaid", "Webhooks"],
    color: "hsl(200, 35%, 50%)",
  },
  {
    id: "backend",
    label: "Backend",
    description: "Serverless APIs, authentication, business logic",
    technologies: ["Node.js", "Express.js", "MongoDB", "AWS Lambda"],
    color: "hsl(260, 30%, 55%)",
  },
  {
    id: "cloud",
    label: "Cloud",
    description: "Storage, messaging, deployment pipelines",
    technologies: ["AWS S3", "SES", "SQS", "SNS", "Docker", "GitHub Actions"],
    color: "hsl(32, 40%, 45%)",
  },
  {
    id: "quality",
    label: "Quality",
    description: "Testing, monitoring, performance optimization",
    technologies: ["Jest", "RTL", "Sentry", "Webpack", "Vite", "CI/CD"],
    color: "hsl(158, 18%, 42%)",
  },
] as const;

export const ENGINEERING_PILLARS = [
  {
    title: "Frontend Architecture",
    concepts: [
      "Component patterns",
      "Micro Frontends",
      "Monorepo",
      "RBAC",
      "BFF",
    ],
    description:
      "Structured scalable UI systems with clear boundaries between presentation, state, and data layers.",
  },
  {
    title: "Performance",
    concepts: [
      "Code splitting",
      "Lazy loading",
      "Memoization",
      "Caching",
      "FCP optimization",
    ],
    description:
      "Rendering optimization and intelligent data fetching for production-grade web applications.",
  },
  {
    title: "Engineering Quality",
    concepts: [
      "Jest",
      "React Testing Library",
      "Error boundaries",
      "Sentry",
      "CI/CD",
    ],
    description:
      "Reliable delivery through testing discipline, observability, and automated pipelines.",
  },
] as const;

export const DATA = {
  name: "Nikhil Ranjan Kumar",
  initials: "NRK",
  url: "https://nikhilranjankumar.dev",
  location: "Pune, India",
  role: "Frontend Engineer",
  tagline: "Building production-grade web experiences",
  headline: "Engineering interfaces that perform at scale.",
  description:
    "Fullstack Engineer with 4 years of experience building, testing, and optimizing high-performance web applications using React.js, Next.js, TypeScript, and Node.js.",
  summary:
    "I specialize in frontend architecture, API integrations, and performance optimization for fintech and B2B products. From investor onboarding flows and real-time trading dashboards to serverless backends — I build systems where UI precision meets production reliability.",
  yearsExperience: "4",
  avatarUrl: "/me.png",
  contact: {
    email: "nikhilranjankumar1999@gmail.com",
    tel: "62056666646",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/niku-19",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nikhil-ranjan-kumar/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/19Nikhil99",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nikhilranjankumar1999@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  experience: [
    {
      company: "Neurealm",
      href: "https://neurealm.ai/",
      role: "Software Engineer",
      location: "Pune, India",
      period: "Dec 2024 — Present",
      featured: true,
      products: [
        {
          name: "Aditya Birla Sun Life",
          domain: "Mutual Fund Investor Onboarding",
          highlights: [
            "Built TG1, TG2, and TG3 investor onboarding flows from scratch",
            "Secure journeys with PAN verification, DigiLocker SDK, FATCA declarations, and e-sign",
            "Distributor workflows via SmartLink for TG2/TG3 folio creation",
            "Nominee module with up to three nominees and immediate client-side validation",
            "Asset allocation validation ensuring totals equal exactly 100%",
          ],
          stack: ["React", "Next.js", "TypeScript", "KYC SDKs"],
        },
        {
          name: "Datalign",
          domain: "Real-Time Fintech Trading Platform",
          highlights: [
            "Established frontend architecture from scratch with Next.js, React, and TypeScript",
            "Financial Analysis Report dashboard with D3.js Sankey diagrams and Recharts",
            "State management with Zustand and TanStack Query, reducing unnecessary API requests",
            "Inline AI chat assistant and Plaid Connect for secure bank-account linking",
          ],
          stack: [
            "Next.js",
            "TypeScript",
            "Zustand",
            "TanStack Query",
            "D3.js",
            "Recharts",
            "Plaid",
          ],
        },
        {
          name: "MOFSL",
          domain: "Mutual Fund Investment Platform",
          highlights: [
            "UI journeys for SIP calculators, KYC checks, and e-mandate setups",
            "Jest and React Testing Library unit/integration test suites",
            "Memoization, lazy loading, and code splitting for rendering optimization",
            "Error boundaries, loading states, and Sentry for production bug tracking",
          ],
          stack: ["React", "Next.js", "Jest", "RTL", "Sentry"],
        },
      ],
    },
    {
      company: "Braincells",
      href: "https://course.braincells.in/",
      role: "Software Development Engineer — Full Stack",
      location: "Pune, India",
      period: "Jan 2023 — Dec 2024",
      featured: false,
      products: [
        {
          name: "Trios Plus",
          domain: "B2B Office Management Platform",
          highlights: [
            "UI for B2B platform using Next.js, Material UI, and TypeScript",
            "Invoice PDF generation, supplier onboarding, and digital contract signing",
            "CASL-based role-based UI access control",
            "Serverless backend with AWS Lambda and 100+ JWT-secured APIs",
            "MongoDB filtering/search, Razorpay webhooks, and AWS S3 file uploads",
            "Automated email alerts via AWS SES",
          ],
          stack: [
            "Next.js",
            "Material UI",
            "AWS Lambda",
            "MongoDB",
            "CASL",
            "Razorpay",
            "S3",
          ],
        },
      ],
    },
  ],

  featuredProjects: [
    {
      title: "Datalign — Financial Analysis Dashboard",
      domain: "Fintech / Trading",
      problem:
        "Complex financial data needed real-time visualization for advisors and traders.",
      built:
        "Interactive FAR dashboard with Sankey diagrams, AI chat, and Plaid bank linking.",
      architecture:
        "Next.js app with Zustand + TanStack Query, component-driven design system.",
      stack: [
        "Next.js",
        "TypeScript",
        "D3.js",
        "Recharts",
        "Zustand",
        "TanStack Query",
        "Plaid",
      ],
      challenges: [
        "Real-time data sync",
        "Complex financial visualizations",
        "Multi-state onboarding flows",
      ],
      image: "/datalign.jpeg",
    },
    {
      title: "ABSL — Investor Onboarding",
      domain: "Fintech / Onboarding",
      problem:
        "Multi-tier investor onboarding required secure KYC, e-sign, and distributor workflows.",
      built:
        "End-to-end TG1/TG2/TG3 flows with nominee management and asset allocation validation.",
      architecture:
        "Modular step-based flows with client-side validation and SDK integrations.",
      stack: ["React", "Next.js", "TypeScript", "DigiLocker SDK", "E-Sign"],
      challenges: [
        "Regulatory compliance",
        "Multi-nominee validation",
        "Distributor SmartLink flows",
      ],
      image: "/absl.jpg",
    },
    {
      title: "Trios Plus — B2B Platform",
      domain: "Enterprise / B2B",
      problem:
        "Office management needed invoicing, contracts, vendor management, and RBAC.",
      built:
        "Full-stack platform with serverless APIs, payment webhooks, and role-based UI.",
      architecture:
        "Next.js frontend, AWS Lambda backend, MongoDB data layer, CASL authorization.",
      stack: [
        "Next.js",
        "TypeScript",
        "AWS Lambda",
        "MongoDB",
        "CASL",
        "Razorpay",
        "S3",
      ],
      challenges: [
        "RBAC at scale",
        "Payment webhook reliability",
        "Large dataset filtering",
      ],
      image: "/logo1.png",
    },
  ],

  projects: [
    {
      title: "BillWise AI",
      href: "https://billwiseai.vercel.app/",
      dates: "2024",
      description:
        "AI-powered invoice generation with natural-language input, Gemini AI integration, JWT auth, and analytics dashboard.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "Gemini AI",
        "JWT",
      ],
      links: [
        {
          type: "Live",
          href: "https://billwiseai.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/niku-19/BillWise",
          icon: Icons.github,
        },
      ],
      video: "/BillWise.mov",
    },
    {
      title: "Nike E-Store",
      href: "https://nike-store-peach-zeta.vercel.app/",
      dates: "2024",
      description:
        "Responsive e-commerce UI with cart functionality and polished animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "Live",
          href: "https://nike-store-peach-zeta.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/niku-19/nike-store.git",
          icon: Icons.github,
        },
      ],
      video: "/nike.mp4",
    },
    {
      title: "Sociabyte",
      href: "https://sociabyte-the-social-media-web-app.vercel.app/",
      dates: "2023",
      description:
        "Full-stack social media app with JWT auth, posts, comments, and notifications.",
      technologies: ["React", "Express.js", "Node.js", "MongoDB"],
      links: [
        {
          type: "Live",
          href: "https://sociabyte-the-social-media-web-app.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/niku-19/SOCIABYTE-the-social-media-webApp.git",
          icon: Icons.github,
        },
      ],
      video: "/Social.mp4",
    },
  ],

  education: [
    {
      school: "Acharya Institute of Technology",
      href: "https://www.acharya.ac.in/",
      degree: "BCA — Bachelor of Computer Applications",
      period: "2019 — 2022",
    },
  ],
} as const;
