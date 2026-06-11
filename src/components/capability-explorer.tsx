"use client";

import { useState } from "react";
import { Code2, Layers, Sparkles, Target } from "lucide-react";
import { skillGroups } from "@/lib/portfolio";

const icons = [Code2, Layers, Sparkles, Target];

export function CapabilityExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = skillGroups[activeIndex];

  return (
    <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr]">
      <div className="grid gap-3">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] ?? Sparkles;
          const isActive = index === activeIndex;

          return (
            <button
              key={group.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className={`group rounded-lg border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#66cdb2] focus:ring-offset-2 focus:ring-offset-[#151514] ${
                isActive
                  ? "border-[#66cdb2] bg-[#fffdf7] text-[#151514]"
                  : "border-[#fffdf7]/12 bg-[#fffdf7]/6 text-[#fffdf7] hover:border-[#66cdb2]/60"
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex size-10 items-center justify-center rounded-full ${
                    isActive ? "bg-[#151514] text-[#fffdf7]" : "bg-[#fffdf7] text-[#151514]"
                  }`}
                >
                  <Icon aria-hidden="true" className="size-5 transition group-hover:rotate-3" />
                </span>
                <span className="font-semibold">{group.title}</span>
              </span>
            </button>
          );
        })}
      </div>

      <article className="overflow-hidden rounded-lg border border-[#fffdf7]/12 bg-[#fffdf7]/6 p-6">
        <div key={activeGroup.title} className="motion-panel" aria-live="polite">
          <p className="flex items-center gap-2 text-sm font-semibold text-[#66cdb2]">
            <span className="data-dot size-1.5 rounded-full bg-[#66cdb2]" />
            Capability detail
          </p>
          <h3 className="mt-4 text-3xl font-semibold leading-tight">
            {activeGroup.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-[#d8d1c4]">
            {activeGroup.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {activeGroup.skills.map((skill, index) => (
              <span
                key={skill}
                className="motion-list-item rounded-full border border-[#fffdf7]/12 bg-[#151514] px-3 py-2 text-sm font-medium text-[#fffdf7]"
                style={{ animationDelay: `${index * 35}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
