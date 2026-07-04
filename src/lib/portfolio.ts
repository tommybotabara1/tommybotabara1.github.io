export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Project = {
  title: string;
  eyebrow: string;
  year: string;
  category: "event-system" | "growth-site" | "content-pipeline" | "workspace";
  description: string;
  highlight: string;
  evidence: readonly {
    label: string;
    value: string;
  }[];
  image: string;
  imageAlt: string;
  stack: readonly string[];
  outcomes: readonly {
    label: string;
    value: string;
  }[];
  links: readonly {
    label: string;
    href: string;
  }[];
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: readonly string[];
};

export type Note = {
  title: string;
  description: string;
  meta: string;
};

export type SocialLink = {
  label: string;
  href: string;
  download?: boolean;
  external?: boolean;
};

export const resumeHref = "/Tommy-Botabara-CV.pdf";

export const linkedinHref = "https://www.linkedin.com/in/tommy-botabara-b13496193/";

export type CareerStory = {
  intro: string;
  paragraphs: readonly string[];
};

export type ExperienceHighlight = {
  organization: string;
  context: string;
  title: string;
  description: string;
  signals: readonly string[];
};

export type TeamReliance = {
  label: string;
  detail: string;
};

export type WorkflowDemo = {
  id: string;
  title: string;
  kicker: string;
  description: string;
  command: string;
  steps: readonly string[];
  result: string;
  metrics: readonly {
    label: string;
    value: string;
  }[];
  tools: readonly string[];
};

export type BuildTreeNode = {
  name: string;
  kind: "folder" | "file";
  tone?: "blue" | "coral" | "mint" | "gold" | "neutral";
  children?: readonly BuildTreeNode[];
};

export type BuildSnapshot = {
  id: string;
  title: string;
  kicker: string;
  repo: string;
  description: string;
  result: string;
  metrics: readonly {
    label: string;
    value: string;
  }[];
  tree: readonly BuildTreeNode[];
};

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Event systems", value: "event-system" },
  { label: "Growth sites", value: "growth-site" },
  { label: "Content pipelines", value: "content-pipeline" },
  { label: "AI workspaces", value: "workspace" },
] as const;

export const navItems = [
  { label: "Builds", href: "#builds" },
  { label: "Systems", href: "#systems" },
  { label: "Projects", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
] as const satisfies readonly NavItem[];

export const careerStory = {
  intro:
    "I did not start out trying to become a consultant. My first role put me there, and it turned into the place where I learned how messy real business problems can be before they become clean technical work.",
  paragraphs: [
    "Across six years, I have worked through different roles, projects, and industries across Southeast Asia. Consulting gave me exposure to experts, managers, client teams, and regional stakeholders, often in rooms where the problem was not purely technical or purely functional.",
    "That mix shaped how I work now. I can sit with business requirements, controls, timelines, and user concerns, then turn the repeatable parts into Python scripts, SQL checks, reconciliations, reporting automation, or structured workflows.",
    "The work I became known for was technical: automation, Python, SQL, data migration support, and practical tooling that helped teams reduce manual effort and make delivery more reliable.",
  ],
} as const satisfies CareerStory;

export const experienceHighlights = [
  {
    organization: "Regional audit and assurance practice",
    context: "Regional data migration",
    title: "Led migration work across 10 countries with inconsistent local data formats.",
    description:
      "Worked on a regional implementation for an audit and assurance group, helping teams migrate data from 10 countries while handling country-specific formats, reconciliation gaps, and validation concerns.",
    signals: ["10 countries", "Data migration", "Reconciliation", "Python + SQL"],
  },
  {
    organization: "Telecommunications enterprise",
    context: "Telecommunications engagement",
    title: "Worked inside a large enterprise environment with mixed business and technical needs.",
    description:
      "Supported work in a telecommunications context where delivery required coordination with different stakeholders, practical analysis, and enough technical structure to keep complex work moving.",
    signals: ["Telecom", "Enterprise stakeholders", "Process analysis", "Delivery support"],
  },
  {
    organization: "Current insurance operations role",
    context: "Current engineering work",
    title: "Building production-minded data automation with Python, SQL, and Snowflake.",
    description:
      "Currently focused on Python ETL, Snowflake data pipelines, validation rules, reconciliation, and automation that has to be traceable, maintainable, and aligned with operational requirements.",
    signals: ["Python ETL", "Snowflake", "Validation rules", "Automation"],
  },
] as const satisfies readonly ExperienceHighlight[];

export const teamReliance = [
  {
    label: "Automation",
    detail:
      "Finding repeatable work, reducing manual effort, and turning recurring tasks into scripts or workflows.",
  },
  {
    label: "Python + SQL",
    detail:
      "Building data checks, transformations, reconciliations, and utility scripts that teams can actually use.",
  },
  {
    label: "Bridge role",
    detail:
      "Translating between business requirements, technical constraints, and delivery realities.",
  },
  {
    label: "Solution shape",
    detail:
      "Helping structure the approach when a process, migration, or automation needs clearer architecture.",
  },
] as const satisfies readonly TeamReliance[];

export const projects = [
  {
    title: "Wedding Planning Operating System",
    eyebrow: "Event automation",
    year: "2026",
    category: "event-system",
    description:
      "A private planning workspace that combines guest data, seating logic, RSVP setup, generated pages, and vendor/event references.",
    highlight:
      "Turned spreadsheets, floor plans, and event pages into one structured operating system for planning decisions.",
    evidence: [
      { label: "Public shape", value: "docs/ event pages" },
      { label: "Automation", value: "generate_site.py" },
      { label: "Workflow note", value: "rsvp_setup.md" },
    ],
    image: "/portfolio/project-analytics.jpg",
    imageAlt:
      "Abstract generated project thumbnail with layered planning and data panels.",
    stack: ["Python", "Google Sheets", "Apps Script", "HTML", "Planning Workflows"],
    outcomes: [
      { label: "Guest plan", value: "135 pax" },
      { label: "Seating", value: "16 tables" },
      { label: "Published views", value: "5 pages" },
    ],
    links: [
      {
        label: "Discuss build",
        href: "mailto:tommybotabara@gmail.com?subject=Wedding%20planning%20OS",
      },
    ],
  },
  {
    title: "Real Estate Brand Growth Site",
    eyebrow: "Growth platform",
    year: "2026",
    category: "growth-site",
    description:
      "An Astro-based brand site and operating workspace for listings, lead capture, social posting, Google Sheets data, and listing photos.",
    highlight:
      "Connected content, listings, data capture, and prebuild scripts so the brand can operate from a repeatable system.",
    evidence: [
      { label: "Site layer", value: "Astro pages" },
      { label: "Data flow", value: "Sheets + Drive" },
      { label: "Prebuild", value: "prebuild-photos.ts" },
    ],
    image: "/portfolio/project-ai-workflows.jpg",
    imageAlt:
      "Abstract generated project thumbnail with website cards, data paths, and automation blocks.",
    stack: ["Astro", "TypeScript", "Google Sheets", "Google Drive", "Tailwind", "Automation"],
    outcomes: [
      { label: "Site engine", value: "Astro" },
      { label: "Data source", value: "Sheets" },
      { label: "Media flow", value: "Photo prebuild" },
    ],
    links: [
      {
        label: "Discuss build",
        href: "mailto:tommybotabara@gmail.com?subject=Real%20estate%20growth%20site",
      },
    ],
  },
  {
    title: "Course Content Pipeline",
    eyebrow: "Education automation",
    year: "2026",
    category: "content-pipeline",
    description:
      "A course-development workspace for research packs, module extracts, syllabus refreshes, assessment content, and DOCX generation.",
    highlight:
      "Converted loose teaching material into structured source files, extracts, research packs, and regeneratable outputs.",
    evidence: [
      { label: "Source", value: "Markdown pack" },
      { label: "Generated", value: "DOCX output" },
      { label: "Extractor", value: "_extract_modules.py" },
    ],
    image: "/portfolio/project-immersive-web.jpg",
    imageAlt:
      "Abstract generated project thumbnail with content modules, document panels, and generated output blocks.",
    stack: ["Markdown", "DOCX", "Node.js", "Python", "Research", "Course Design"],
    outcomes: [
      { label: "Course map", value: "12 modules" },
      { label: "Source format", value: "MD + DOCX" },
      { label: "Extraction", value: "11 modules" },
    ],
    links: [
      {
        label: "Discuss build",
        href: "mailto:tommybotabara@gmail.com?subject=Course%20content%20pipeline",
      },
    ],
  },
  {
    title: "AIOS Workspace Toolkit",
    eyebrow: "Operator workspace",
    year: "2026",
    category: "workspace",
    description:
      "A personal AI operating-system workspace with context, decisions, reusable skills, scripts, project folders, and output templates.",
    highlight:
      "Created a durable working structure for turning repeatable tasks into documented, reusable automation capabilities.",
    evidence: [
      { label: "Memory", value: "context/ logs" },
      { label: "Tooling", value: "Python + JS scripts" },
      { label: "Reuse", value: "skills + templates" },
    ],
    image: "/portfolio/project-power-apps.jpg",
    imageAlt:
      "Abstract generated project thumbnail with structured app screens and workflow blocks.",
    stack: ["AI coding tools", "Python", "Node.js", "Skills", "Templates", "Decision Logs"],
    outcomes: [
      { label: "Workstreams", value: "5 projects" },
      { label: "Reusable tools", value: "Python + JS" },
      { label: "Memory layer", value: "Context + logs" },
    ],
    links: [
      {
        label: "Discuss build",
        href: "mailto:tommybotabara@gmail.com?subject=AIOS%20workspace%20toolkit",
      },
    ],
  },
] as const satisfies readonly Project[];

export const buildSnapshots = [
  {
    id: "event-planning-os",
    title: "An event planning OS that turns spreadsheets into event decisions.",
    kicker: "Featured local build",
    repo: "event-planning-os/",
    description:
      "Built a private planning system for guest data, seating assignments, RSVP setup, generated event pages, and venue references. It is shareable as architecture without exposing personal guest details.",
    result:
      "The result is a single workspace that connects planning data, web pages, scripts, and repeatable workflows.",
    metrics: [
      { label: "Guests", value: "135" },
      { label: "Tables", value: "16" },
      { label: "Pages", value: "5" },
      { label: "Workflows", value: "2" },
    ],
    tree: [
      { name: "PRODUCT.md", kind: "file", tone: "neutral" },
      { name: "DESIGN.md", kind: "file", tone: "neutral" },
      {
        name: "docs",
        kind: "folder",
        tone: "gold",
        children: [
          { name: "index.html", kind: "file", tone: "blue" },
          { name: "invitation.html", kind: "file", tone: "blue" },
          { name: "reception.html", kind: "file", tone: "blue" },
          { name: "floor-plan.html", kind: "file", tone: "blue" },
          { name: "journey.html", kind: "file", tone: "blue" },
        ],
      },
      {
        name: "planning",
        kind: "folder",
        tone: "gold",
        children: [
          { name: "guest-list-clean.xlsx", kind: "file", tone: "mint" },
          { name: "seating-mockup.png", kind: "file", tone: "coral" },
          { name: "venue-floor-layout.pdf", kind: "file", tone: "neutral" },
        ],
      },
      {
        name: "tools",
        kind: "folder",
        tone: "gold",
        children: [
          { name: "generate_site.py", kind: "file", tone: "blue" },
          { name: "apply_seating.py", kind: "file", tone: "blue" },
          { name: "apps_script_rsvp.js", kind: "file", tone: "mint" },
          { name: "gws.py", kind: "file", tone: "blue" },
        ],
      },
      {
        name: "workflows",
        kind: "folder",
        tone: "gold",
        children: [
          { name: "generate_site.md", kind: "file", tone: "neutral" },
          { name: "rsvp_setup.md", kind: "file", tone: "neutral" },
        ],
      },
    ],
  },
  {
    id: "property-growth-platform",
    title: "A property growth site wired to content, listings, and lead capture.",
    kicker: "Shareable platform build",
    repo: "property-growth-site/",
    description:
      "Built an Astro site and operating workspace around listings, brand content, photo processing, Google Sheets, and repeatable capture workflows.",
    result:
      "The result is a brand-growth platform where content, listings, and automations live in one system.",
    metrics: [
      { label: "Framework", value: "Astro" },
      { label: "Skills", value: "10+" },
      { label: "Scripts", value: "7" },
      { label: "Data", value: "Sheets" },
    ],
    tree: [
      {
        name: "site",
        kind: "folder",
        tone: "gold",
        children: [
          {
            name: "src",
            kind: "folder",
            tone: "gold",
            children: [
              { name: "components", kind: "folder", tone: "gold" },
              { name: "content", kind: "folder", tone: "gold" },
              { name: "pages", kind: "folder", tone: "gold" },
              { name: "lib", kind: "folder", tone: "gold" },
            ],
          },
          {
            name: "public",
            kind: "folder",
            tone: "gold",
            children: [
              { name: "assets", kind: "folder", tone: "gold" },
              { name: "listings-photos", kind: "folder", tone: "gold" },
            ],
          },
          {
            name: "scripts",
            kind: "folder",
            tone: "gold",
            children: [
              { name: "prebuild-photos.ts", kind: "file", tone: "blue" },
              { name: "smoke-listings.ts", kind: "file", tone: "blue" },
              { name: "sheet-deploy-trigger.gs", kind: "file", tone: "mint" },
            ],
          },
        ],
      },
      {
        name: ".claude/skills",
        kind: "folder",
        tone: "gold",
        children: [
          { name: "capture-listing", kind: "folder", tone: "gold" },
          { name: "capture-lead", kind: "folder", tone: "gold" },
          { name: "post-listing", kind: "folder", tone: "gold" },
          { name: "search-listings", kind: "folder", tone: "gold" },
          { name: "upload-to-drive", kind: "folder", tone: "gold" },
        ],
      },
      {
        name: "marketing",
        kind: "folder",
        tone: "gold",
        children: [{ name: "facebook-launch-posts.md", kind: "file", tone: "neutral" }],
      },
    ],
  },
  {
    id: "course-pipeline",
    title: "A course content pipeline that regenerates packs from source material.",
    kicker: "Education automation",
    repo: "course-content-pipeline/",
    description:
      "Built a course-development workspace with research packs, module extracts, syllabus files, generated DOCX output, and decision logs.",
    result:
      "The result is a teaching-material pipeline where source material, research, and outputs remain traceable.",
    metrics: [
      { label: "Modules", value: "12" },
      { label: "Extracts", value: "11" },
      { label: "Formats", value: "MD/DOCX" },
      { label: "Scripts", value: "2" },
    ],
    tree: [
      { name: "README.md", kind: "file", tone: "neutral" },
      {
        name: "term-startup-2026",
        kind: "folder",
        tone: "gold",
        children: [
          { name: "course-research-pack-2026.md", kind: "file", tone: "neutral" },
          { name: "course-research-pack-2026.docx", kind: "file", tone: "blue" },
          { name: "_extract_modules.py", kind: "file", tone: "blue" },
          { name: "_md_to_docx.js", kind: "file", tone: "mint" },
          {
            name: "_module_extracts",
            kind: "folder",
            tone: "gold",
            children: [
              { name: "01 Course Introduction.extract.txt", kind: "file", tone: "neutral" },
              { name: "06 Prospecting.extract.txt", kind: "file", tone: "neutral" },
              { name: "11 Unit Turnover.extract.txt", kind: "file", tone: "neutral" },
            ],
          },
        ],
      },
      {
        name: "decisions",
        kind: "folder",
        tone: "gold",
        children: [{ name: "log.md", kind: "file", tone: "neutral" }],
      },
      {
        name: "references",
        kind: "folder",
        tone: "gold",
        children: [{ name: "3ms-framework.md", kind: "file", tone: "neutral" }],
      },
    ],
  },
  {
    id: "operator-workspace",
    title: "An AIOS workspace for turning repeatable tasks into reusable capabilities.",
    kicker: "Operator system",
    repo: "operator-workspace/",
    description:
      "Built a workspace with context memory, project folders, reusable scripts, skills, templates, and decision logs for recurring planning and business workflows.",
    result:
      "The result is a structure where project knowledge and automation tools can compound instead of staying scattered.",
    metrics: [
      { label: "Projects", value: "5" },
      { label: "Tools", value: "30+" },
      { label: "Scripts", value: "7" },
      { label: "Memory", value: "Context" },
    ],
    tree: [
      { name: "ASSISTANT.md", kind: "file", tone: "neutral" },
      {
        name: "context",
        kind: "folder",
        tone: "gold",
        children: [
          { name: "current-priorities.md", kind: "file", tone: "neutral" },
          { name: "goals.md", kind: "file", tone: "neutral" },
          { name: "team.md", kind: "file", tone: "neutral" },
        ],
      },
      {
        name: "projects",
        kind: "folder",
        tone: "gold",
        children: [
          { name: "course-content-development", kind: "folder", tone: "gold" },
          { name: "property-brand-growth", kind: "folder", tone: "gold" },
          { name: "supplier-accreditation-digitalization", kind: "folder", tone: "gold" },
        ],
      },
      {
        name: "tools",
        kind: "folder",
        tone: "gold",
        children: [
          { name: "build_guest_list.py", kind: "file", tone: "blue" },
          { name: "generate_exam_ppt.py", kind: "file", tone: "blue" },
          { name: "seating_plan.py", kind: "file", tone: "blue" },
        ],
      },
      {
        name: "scripts",
        kind: "folder",
        tone: "gold",
        children: [
          { name: "build_operator_tracker.py", kind: "file", tone: "blue" },
          { name: "generate-checklists.js", kind: "file", tone: "mint" },
        ],
      },
      {
        name: "templates",
        kind: "folder",
        tone: "gold",
        children: [{ name: "session-summary.md", kind: "file", tone: "neutral" }],
      },
    ],
  },
] as const satisfies readonly BuildSnapshot[];

export const workflowDemos = [
  {
    id: "event-site",
    title: "Generate event pages",
    kicker: "Event OS",
    description:
      "Turn event planning data and page templates into a small static website for guests and planning review.",
    command: "python tools/generate_site.py --input planning --out docs",
    steps: [
      "Read planning data and event page content",
      "Generate invitation, reception, and floor-plan pages",
      "Keep site files under docs for simple hosting",
      "Document the repeatable workflow",
    ],
    result: "Updated event pages with a repeatable build path",
    metrics: [
      { label: "Pages", value: "5" },
      { label: "Source", value: "Planning files" },
      { label: "Output", value: "Static docs" },
    ],
    tools: ["Python", "HTML", "Google Sheets", "Apps Script"],
  },
  {
    id: "listing-site",
    title: "Prebuild listing photos",
    kicker: "Real estate site",
    description:
      "Prepare listing media before deploy so the site can render property content quickly and consistently.",
    command: "npm run prebuild:photos",
    steps: [
      "Read listing references from the site workspace",
      "Inspect source image links and local photo folders",
      "Prepare public listing-photo assets",
      "Run smoke checks before publish",
    ],
    result: "Listing pages receive prepared media before deployment",
    metrics: [
      { label: "Framework", value: "Astro" },
      { label: "Data", value: "Sheets" },
      { label: "Media", value: "Prebuilt" },
    ],
    tools: ["Astro", "TypeScript", "Google Sheets", "Google Drive"],
  },
  {
    id: "course-pack",
    title: "Compile course research pack",
    kicker: "Teaching pipeline",
    description:
      "Convert editable Markdown research material into a polished DOCX deliverable while retaining source control.",
    command: "node term-startup-2026/_md_to_docx.js",
    steps: [
      "Extract prior module text from DOCX files",
      "Draft and revise the research pack in Markdown",
      "Convert Markdown into a reviewable DOCX",
      "Track module decisions in the project log",
    ],
    result: "Course material becomes editable, traceable, and regeneratable",
    metrics: [
      { label: "Modules", value: "12" },
      { label: "Formats", value: "MD/DOCX" },
      { label: "Extracts", value: "11" },
    ],
    tools: ["Node.js", "Python", "Markdown", "DOCX"],
  },
] as const satisfies readonly WorkflowDemo[];

export const skillGroups = [
  {
    title: "Core Engineering",
    description:
      "Production-minded data and automation work across Python, SQL, Snowflake, and structured ETL workflows.",
    skills: ["Python", "SQL", "Snowflake", "ETL", "Data Validation", "Data Reconciliation"],
  },
  {
    title: "Tools & Platforms",
    description:
      "Practical delivery with analytics, automation, low-code applications, and team collaboration platforms.",
    skills: ["Pandas", "Power BI", "Power Apps", "Power Automate", "Git", "Jira"],
  },
  {
    title: "Web & Applications",
    description:
      "Application development foundations that support internal tools, business apps, and technical delivery.",
    skills: ["HTML", "CSS", "JavaScript", "Django", "PHP", "MySQL"],
  },
  {
    title: "Professional Strengths",
    description:
      "Consulting and delivery skills that help technical work stay aligned with business outcomes.",
    skills: [
      "Stakeholder management",
      "Requirements gathering",
      "UAT/SIT support",
      "Business analysis",
      "Documentation",
      "Solution design",
    ],
  },
] as const satisfies readonly SkillGroup[];

export const notes = [
  {
    title: "Practical Solutions First",
    description:
      "I focus on tools that solve real process problems, reduce manual work, and make technical outcomes easier to trust.",
    meta: "Value",
  },
  {
    title: "Clean Automation",
    description:
      "Good automation is traceable, explainable, and maintainable, especially when it supports reporting, migration, or validation.",
    meta: "Value",
  },
  {
    title: "Business-Aligned Engineering",
    description:
      "The strongest technical solutions are shaped by requirements, stakeholder needs, controls, and production realities.",
    meta: "Value",
  },
] as const satisfies readonly Note[];

export const socialLinks = [
  { label: "Email", href: "mailto:tommybotabara@gmail.com", download: false, external: false },
  { label: "LinkedIn", href: linkedinHref, download: false, external: true },
  { label: "Download CV", href: resumeHref, download: true, external: false },
] as const satisfies readonly SocialLink[];
