"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, FileCode2 } from "lucide-react";
import { projectFilters, projects } from "@/lib/portfolio";

type FilterValue = (typeof projectFilters)[number]["value"];

export function ProjectExplorer() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [activeProjectTitle, setActiveProjectTitle] = useState<string>(projects[0].title);
  const visibleProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );
  const activeProject =
    projects.find((project) => project.title === activeProjectTitle) ?? visibleProjects[0] ?? projects[0];

  function setFilter(value: FilterValue) {
    setActiveFilter(value);
    const nextProject =
      value === "all" ? projects[0] : projects.find((project) => project.category === value) ?? projects[0];
    setActiveProjectTitle(nextProject.title);
  }

  return (
    <div className="mt-12">
      <div className="flex gap-2 overflow-x-auto pb-3">
        {projectFilters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setFilter(filter.value)}
                aria-pressed={isActive}
                className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#2367ff] focus:ring-offset-2 focus:ring-offset-[#fbf8f1] ${
                  isActive
                    ? "border-[#151514] bg-[#151514] text-[#fffdf7]"
                  : "border-[#ded8cb] bg-[#fffdf7] text-[#5f625d] hover:border-[#2367ff] hover:text-[#2367ff]"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
        </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.44fr]">
        <div className="order-2 grid gap-5 md:grid-cols-2 lg:order-1">
          {visibleProjects.map((project, projectIndex) => {
            const isActive = project.title === activeProject.title;

            return (
              <article
                key={project.title}
                onMouseEnter={() => setActiveProjectTitle(project.title)}
                className={`motion-list-item group overflow-hidden rounded-lg border bg-[#fffdf7] shadow-sm transition duration-300 hover:shadow-md hover:shadow-[#151514]/10 ${
                  isActive ? "border-[#2367ff]/70" : "border-[#ded8cb] hover:border-[#2367ff]/45"
                }`}
                style={{ animationDelay: `${projectIndex * 70}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setActiveProjectTitle(project.title)}
                  onFocus={() => setActiveProjectTitle(project.title)}
                  className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-[#2367ff] focus:ring-offset-2 focus:ring-offset-[#fbf8f1]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#ece7dc]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="motion-scan absolute inset-0" />
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#151514]/78 px-3 py-1.5 text-xs font-medium text-[#fffdf7] opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
                      <span className="data-dot size-1.5 rounded-full bg-[#66cdb2]" />
                      Inspectable build
                    </div>
                  </div>
                </button>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 text-xs font-semibold text-[#5f625d]">
                    <span>{project.eyebrow}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-[#151514]">
                    {project.title}
                  </h3>
                  <p className="mt-3 min-h-24 text-base leading-7 text-[#5f625d]">
                    {project.description}
                  </p>
                  <p className="mt-5 rounded-md border border-[#f0c9bf] bg-[#fff3ef] px-4 py-3 text-sm font-medium leading-6 text-[#2a2b29]">
                    {project.highlight}
                  </p>
                  <div className="mt-5 rounded-md border border-[#ded8cb] bg-[#fbf8f1] p-4">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#151514]">
                      <FileCode2 aria-hidden="true" className="size-4 text-[#2367ff]" />
                      Evidence in this build
                    </div>
                    <div className="grid gap-2">
                      {project.evidence.map((item, index) => (
                        <div
                          key={`${project.title}-${item.label}`}
                          className="motion-list-item grid grid-cols-[0.42fr_0.58fr] gap-3 rounded-sm px-2 py-1 text-sm transition hover:bg-white"
                          style={{ animationDelay: `${index * 60}ms` }}
                        >
                          <span className="text-[#5f625d]">{item.label}</span>
                          <span className="min-w-0 break-words font-mono text-xs leading-6 text-[#151514]">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#ded8cb] bg-[#fbf8f1] px-3 py-1 text-xs font-medium text-[#5f625d]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#151514]/15 bg-[#fffdf7] px-4 text-sm font-semibold text-[#151514] transition hover:border-[#2367ff] hover:text-[#2367ff] focus:outline-none focus:ring-2 focus:ring-[#2367ff] focus:ring-offset-2 focus:ring-offset-[#fffdf7]"
                      >
                        {link.label}
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="order-1 h-fit overflow-hidden rounded-lg border border-[#ded8cb] bg-[#151514] p-5 text-[#fffdf7] lg:order-2 lg:sticky lg:top-24">
          <div key={activeProject.title} className="motion-panel">
            <p className="flex items-center gap-2 text-xs font-semibold text-[#66cdb2]">
              <span className="data-dot size-1.5 rounded-full bg-[#66cdb2]" />
              Active case signal
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight">
              {activeProject.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#d8d1c4]">
              {activeProject.highlight}
            </p>
            <div className="mt-6 grid gap-3">
              {activeProject.outcomes.map((outcome, index) => (
                <div
                  key={outcome.label}
                  className="motion-list-item rounded-md border border-white/10 bg-white/[0.05] p-4"
                  style={{ animationDelay: `${index * 65}ms` }}
                >
                  <p className="text-xs text-[#b9b3a7]">{outcome.label}</p>
                  <p className="mt-1 text-xl font-semibold text-white">{outcome.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-md border border-white/10 bg-white/[0.05] p-4">
              <p className="text-xs font-semibold text-[#66cdb2]">Inspectable evidence</p>
              <div className="mt-3 grid gap-2">
                {activeProject.evidence.map((item, index) => (
                  <div
                    key={`${activeProject.title}-${item.value}`}
                    className="motion-list-item text-sm"
                    style={{ animationDelay: `${index * 65}ms` }}
                  >
                    <p className="text-[#b9b3a7]">{item.label}</p>
                    <p className="mt-1 break-words font-mono text-xs leading-5 text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
