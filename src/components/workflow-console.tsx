"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Play, Terminal } from "lucide-react";
import { workflowDemos } from "@/lib/portfolio";

export function WorkflowConsole() {
  const [activeId, setActiveId] = useState<string>(workflowDemos[0].id);
  const [typedCommand, setTypedCommand] = useState("");
  const active = workflowDemos.find((demo) => demo.id === activeId) ?? workflowDemos[0];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      const frame = window.requestAnimationFrame(() => setTypedCommand(active.command));

      return () => window.cancelAnimationFrame(frame);
    }

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedCommand(active.command.slice(0, index));
      if (index >= active.command.length) {
        window.clearInterval(timer);
      }
    }, 18);

    return () => window.clearInterval(timer);
  }, [active.command]);

  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
      <div className="rounded-lg border border-[#ded8cb] bg-[#fffdf7] p-4 shadow-sm sm:p-5">
        <p id="workflow-picker-label" className="mb-4 text-sm font-semibold text-[#2367ff]">
          Choose a workflow
        </p>
        <div className="grid gap-3" aria-labelledby="workflow-picker-label">
          {workflowDemos.map((demo) => {
            const isActive = demo.id === active.id;

            return (
              <button
                key={demo.id}
                type="button"
                onClick={() => setActiveId(demo.id)}
                aria-pressed={isActive}
                className={`group rounded-lg border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#2367ff] focus:ring-offset-2 focus:ring-offset-[#fffdf7] ${
                  isActive
                    ? "border-[#2367ff] bg-[#eef3ff] shadow-sm"
                    : "border-[#ded8cb] bg-[#fbf8f1] hover:border-[#2367ff]/55"
                }`}
              >
                <span className="flex items-center gap-2 text-xs font-semibold text-[#ff6b58]">
                  <span
                    aria-hidden="true"
                    className={`size-1.5 rounded-full bg-[#2367ff] transition-opacity ${
                      isActive ? "data-dot opacity-100" : "opacity-0"
                    }`}
                  />
                  {demo.kicker}
                </span>
                <span className="mt-2 block text-lg font-semibold text-[#151514]">
                  {demo.title}
                </span>
                <span className="mt-2 block text-sm leading-6 text-[#5f625d]">
                  {demo.description}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#151514] bg-[#101110] text-[#f6f2e9] shadow-2xl shadow-[#151514]/20">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#ff6b58]" />
            <span className="size-2.5 rounded-full bg-[#ffd166]" />
            <span className="size-2.5 rounded-full bg-[#66cdb2]" />
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#b9b3a7]">
            <Terminal aria-hidden="true" className="size-4" />
            automation-console
          </div>
        </div>

        <div key={active.id} className="motion-panel grid gap-6 p-5 sm:p-6">
          <div className="rounded-md border border-white/10 bg-black/28 p-4 font-mono text-sm leading-7">
            <p>
              <span className="text-[#66cdb2]">$</span>{" "}
              <span>{typedCommand}</span>
              <span className="terminal-cursor ml-1 inline-block h-4 w-2 translate-y-0.5 bg-[#66cdb2]" />
            </p>
            <div className="mt-4 space-y-2 text-[#d8d1c4]">
              {active.steps.map((step, index) => (
                <p
                  key={step}
                  className="motion-list-item flex gap-3"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <span className="text-[#2367ff]">0{index + 1}</span>
                  <span>{step}</span>
                </p>
              ))}
            </div>
            <p className="mt-4 inline-flex rounded-full px-2 py-1 text-[#66cdb2] status-pulse">
              status: {active.result}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {active.metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="motion-list-item rounded-md border border-white/10 bg-white/[0.04] p-4"
                style={{ animationDelay: `${index * 65}ms` }}
              >
                <p className="text-xs text-[#b9b3a7]">{metric.label}</p>
                <p className="mt-2 text-xl font-semibold text-white">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {active.tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-[#f6f2e9]"
              >
                <CheckCircle2 aria-hidden="true" className="size-3.5 text-[#66cdb2]" />
                {tool}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setActiveId(active.id === workflowDemos.at(-1)?.id ? workflowDemos[0].id : workflowDemos[workflowDemos.findIndex((demo) => demo.id === active.id) + 1].id)}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#ff6b58] px-5 text-sm font-semibold text-[#151514] transition hover:bg-[#66cdb2] focus:outline-none focus:ring-2 focus:ring-[#66cdb2] focus:ring-offset-2 focus:ring-offset-[#101110] sm:w-fit"
          >
            <Play aria-hidden="true" className="size-4" />
            Run another scenario
          </button>
        </div>
      </div>
    </div>
  );
}
