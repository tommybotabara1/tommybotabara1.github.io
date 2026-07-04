import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Download,
  Layers,
  Link,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Terminal,
} from "lucide-react";
import { BuildSkeletonShowcase } from "@/components/build-skeleton-showcase";
import { CapabilityExplorer } from "@/components/capability-explorer";
import { ProjectExplorer } from "@/components/project-explorer";
import { SiteHeader } from "@/components/site-header";
import { WorkflowConsole } from "@/components/workflow-console";
import {
  careerStory,
  experienceHighlights,
  notes,
  socialLinks,
  teamReliance,
} from "@/lib/portfolio";

const socialIcons = {
  Email: Mail,
  LinkedIn: Link,
  "Download CV": Download,
} satisfies Record<(typeof socialLinks)[number]["label"], LucideIcon>;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbf8f1] text-[#151514]">
      <a href="#content" className="skip-link">
        Skip to portfolio content
      </a>
      <SiteHeader />

      <main id="content">
        <section className="relative isolate overflow-hidden border-b border-[#ded8cb]">
          <Image
            src="/portfolio/hero-visual.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            className="absolute inset-0 -z-20 object-cover"
          />
          <div className="hero-veil absolute inset-0 -z-10" />
          <div className="fine-grid absolute inset-0 -z-10 opacity-40" />

          <div className="mx-auto grid min-h-[560px] max-w-7xl items-center px-4 py-16 sm:min-h-[620px] sm:px-6 lg:min-h-[660px] lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="max-w-3xl fade-in-up">
              <div className="mb-8 flex flex-wrap items-center gap-3 text-sm font-medium text-[#50534f]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ded8cb] bg-[#fffdf7]/76 px-3 py-2">
                  <MapPin aria-hidden="true" className="size-4 text-[#2367ff]" />
                  Technology consultant
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ded8cb] bg-[#fffdf7]/76 px-3 py-2">
                  <Sparkles aria-hidden="true" className="size-4 text-[#ff6b58]" />
                  Data automation engineer
                </span>
              </div>

              <p className="mb-4 text-sm font-semibold text-[#2367ff]">
                Business technology, data automation & AI solutions
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-[#151514] sm:text-6xl lg:text-7xl">
                Tommy Botabara
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3b3d3a] sm:text-xl">
                Technology Consultant & Data Automation Engineer. I bridge
                business requirements, data workflows, and practical automation
                so teams can turn messy processes into reliable systems.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:tommybotabara@gmail.com"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#151514] px-5 text-sm font-semibold text-[#fffdf7] transition hover:bg-[#2367ff] focus:outline-none focus:ring-2 focus:ring-[#2367ff] focus:ring-offset-2 focus:ring-offset-[#fbf8f1]"
                >
                  <Mail aria-hidden="true" className="size-4" />
                  Contact me
                </a>
                <a
                  href="#work"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#151514]/15 bg-[#fffdf7]/82 px-5 text-sm font-semibold text-[#151514] shadow-sm transition hover:border-[#2367ff] hover:text-[#2367ff] focus:outline-none focus:ring-2 focus:ring-[#2367ff] focus:ring-offset-2 focus:ring-offset-[#fbf8f1]"
                >
                  <Layers aria-hidden="true" className="size-4" />
                  View selected work
                </a>
              </div>
            </div>

            <div className="hidden justify-end lg:flex">
              <div className="float-slow max-w-sm rounded-lg border border-[#151514]/15 bg-[#fffdf7]/72 p-6 shadow-sm">
                <p className="font-mono text-xs text-[#5f625d]">
                  Current focus
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight text-[#151514]">
                  Consulting-shaped technical delivery for teams that need
                  cleaner data, better controls, and less manual work.
                </p>
                <div className="accent-rule mt-6 h-1 w-32 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#ded8cb] bg-[#fffdf7]" aria-label="Portfolio stats">
          <div className="mx-auto grid max-w-7xl gap-px border-x border-[#ded8cb] bg-[#ded8cb] sm:grid-cols-3">
            {[
              ["6+", "years across engineering and consulting"],
              ["4", "shareable local build snapshots"],
              ["Bridge", "business requirements and technical delivery"],
            ].map(([value, label]) => (
              <div key={label} className="bg-[#fffdf7] px-6 py-8 sm:px-8">
                <p className="font-mono text-3xl font-semibold text-[#151514]">
                  {value}
                </p>
                <p className="mt-2 text-sm text-[#5f625d]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="builds" className="scroll-mt-24 border-b border-[#ded8cb] bg-[#151514] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-[#66cdb2]">
                Shareable builds
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#fffdf7] sm:text-4xl lg:text-5xl">
                Folder skeletons of systems I can actually show.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#d8d1c4]">
                Instead of exposing previous-job internals, this highlights the
                local systems I have been building: planning tools, growth sites,
                course pipelines, and AIOS-style workspaces.
              </p>
            </div>
            <BuildSkeletonShowcase />
          </div>
        </section>

        <section id="systems" className="scroll-mt-24 border-b border-[#ded8cb] bg-[#fffdf7] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Interactive systems"
              title="See how these local workflows behave."
              description="A lightweight console-style view inspired by automation workbenches: choose a scenario, watch the command run, and see the steps, tools, and outputs."
            />
            <WorkflowConsole />
          </div>
        </section>

        <section id="work" className="scroll-mt-24 border-b border-[#ded8cb] bg-[#fbf8f1] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Selected work"
              title="Shareable project cards from the local build archive."
              description="These are not previous-job deliverables. They are systems from my own workspace that show how I structure, automate, and document practical work."
            />
            <ProjectExplorer />
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-b border-[#ded8cb] bg-[#151514] py-20 text-[#fffdf7] sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr]">
              <div>
                <p className="text-sm font-semibold text-[#66cdb2]">
                  About / Now
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                  I learned consulting first, then kept moving toward the
                  technical work teams relied on.
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-8 text-[#d8d1c4]">
                  <p>{careerStory.intro}</p>
                  {careerStory.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 flex items-start gap-3 rounded-lg border border-[#66cdb2]/35 bg-[#66cdb2]/10 p-4 text-sm leading-6 text-[#d8d1c4]">
                  <Terminal aria-hidden="true" className="size-5 shrink-0 text-[#66cdb2]" />
                  In my current engineering role, I work on Python ETL,
                  Snowflake data pipelines, validation rules, reconciliation,
                  and production-ready automation.
                </div>
              </div>

              <CapabilityExplorer />
            </div>

            <div className="mt-16 grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="rounded-lg border border-[#fffdf7]/12 bg-[#fffdf7]/6 p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#66cdb2] text-[#151514]">
                    <BriefcaseBusiness aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#66cdb2]">
                      Teams rely on me for
                    </p>
                    <p className="text-sm text-[#b9b3a7]">
                      The work that tends to find me inside teams.
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {teamReliance.map((item, index) => (
                    <div
                      key={item.label}
                      className="motion-list-item rounded-md border border-white/10 bg-white/[0.05] p-4"
                      style={{ animationDelay: `${index * 55}ms` }}
                    >
                      <p className="flex items-center gap-2 font-semibold text-white">
                        <CheckCircle2 aria-hidden="true" className="size-4 text-[#66cdb2]" />
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#d8d1c4]">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#fffdf7]/12 bg-[#0f1110] p-6">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#66cdb2]">
                      Work moments I am proud of
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      Real experience, written without exposing client internals.
                    </h3>
                  </div>
                  <Database aria-hidden="true" className="hidden size-6 text-[#ff6b58] sm:block" />
                </div>
                <div className="grid gap-4">
                  {experienceHighlights.map((item, index) => (
                    <article
                      key={item.organization}
                      className="motion-list-item rounded-md border border-white/10 bg-white/[0.04] p-5"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="font-semibold text-white">{item.organization}</p>
                        <span className="w-fit rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-[#d8d1c4]">
                          {item.context}
                        </span>
                      </div>
                      <h4 className="mt-4 text-xl font-semibold leading-tight text-[#fffdf7]">
                        {item.title}
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-[#d8d1c4]">
                        {item.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.signals.map((signal) => (
                          <span
                            key={signal}
                            className="rounded-full border border-[#fffdf7]/12 bg-[#151514] px-3 py-1.5 text-xs font-medium text-[#fffdf7]"
                          >
                            {signal}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="notes" className="scroll-mt-24 border-b border-[#ded8cb] bg-[#f6f8fb] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Notes / values"
              title="Practical, clean, business-aligned."
              description="The principles behind the work: useful solutions, explainable automation, and engineering choices tied to real business needs."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {notes.map((note) => (
                <article
                  key={note.title}
                  className="rounded-lg border border-[#cdd6df] bg-white p-6 shadow-sm transition hover:border-[#2367ff]/35 hover:shadow-md hover:shadow-[#151514]/10"
                >
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-[#e9f4f0] px-3 py-1 text-xs font-semibold text-[#116f59]">
                      {note.meta}
                    </span>
                    <BookOpen aria-hidden="true" className="size-5 text-[#2367ff]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#151514]">
                    {note.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#5f625d]">
                    {note.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-[#fffdf7] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold text-[#ff6b58]">
                Contact
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[#151514] sm:text-4xl lg:text-5xl">
                Let&apos;s talk about data, automation, or practical AI solutions.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f625d]">
                Best for roles, consulting conversations, and teams that need
                practical execution across business and technical stakeholders.
              </p>
            </div>

            <div className="rounded-lg border border-[#ded8cb] bg-[#fbf8f1] p-6">
              <div className="mb-6 flex items-center gap-3 text-sm font-semibold text-[#151514]">
                <Send aria-hidden="true" className="size-5 text-[#2367ff]" />
                Start with a direct link
              </div>
              <div className="grid gap-3">
                {socialLinks.map((link) => {
                  const Icon = socialIcons[link.label];

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      download={link.download}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="flex min-h-14 items-center justify-between gap-4 rounded-lg border border-[#ded8cb] bg-[#fffdf7] px-4 py-3 text-sm font-semibold text-[#151514] transition hover:border-[#2367ff] hover:text-[#2367ff] focus:outline-none focus:ring-2 focus:ring-[#2367ff] focus:ring-offset-2 focus:ring-offset-[#fbf8f1]"
                    >
                      <span className="flex items-center gap-3">
                        <Icon aria-hidden="true" className="size-5" />
                        {link.label}
                      </span>
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ded8cb] bg-[#151514] px-4 py-8 text-sm text-[#d8d1c4] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Tommy Botabara - technology consulting, data automation, and practical technical delivery.</p>
          <a
            href="#content"
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-[#fffdf7] hover:text-[#66cdb2] focus:outline-none focus:ring-2 focus:ring-[#66cdb2] focus:ring-offset-2 focus:ring-offset-[#151514]"
          >
            Back to top
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold text-[#2367ff]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#151514] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-[#5f625d]">{description}</p>
    </div>
  );
}
