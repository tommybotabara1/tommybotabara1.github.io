"use client";

import { useState } from "react";
import { ChevronDown, FileText, Folder, Sparkles } from "lucide-react";
import { buildSnapshots, type BuildSnapshot, type BuildTreeNode } from "@/lib/portfolio";

const toneClasses = {
  blue: "text-[#6aa8ff]",
  coral: "text-[#ff6b58]",
  mint: "text-[#66cdb2]",
  gold: "text-[#ffca57]",
  neutral: "text-[#a9aaa6]",
} as const;

export function BuildSkeletonShowcase() {
  const [activeId, setActiveId] = useState<string>(buildSnapshots[0].id);
  const active = buildSnapshots.find((snapshot) => snapshot.id === activeId) ?? buildSnapshots[0];

  return (
    <div className="mt-12 overflow-hidden rounded-lg border border-white/10 bg-[#111312] text-[#f8f3ea] shadow-2xl shadow-[#151514]/25">
      <div className="grid gap-px bg-white/10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="bg-[#111312] p-6 sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-wrap gap-2">
            {buildSnapshots.map((snapshot) => {
              const isActive = snapshot.id === active.id;

              return (
              <button
                key={snapshot.id}
                type="button"
                onClick={() => setActiveId(snapshot.id)}
                aria-pressed={isActive}
                className={`min-h-11 rounded-full border px-4 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#66cdb2] focus:ring-offset-2 focus:ring-offset-[#111312] ${
                  isActive
                    ? "border-[#66cdb2] bg-[#66cdb2] text-[#111312]"
                      : "border-white/12 bg-white/[0.04] text-[#d8d1c4] hover:border-[#66cdb2]/60"
                  }`}
                >
                  {snapshot.repo}
                </button>
              );
            })}
          </div>

          <div key={active.id} className="motion-panel">
            <p className="font-mono text-sm font-semibold text-[#ff6b58]">
              {active.kicker}
            </p>
            <h3 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {active.title}
            </h3>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c9c4ba]">
              {active.description}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#f8f3ea]">
              {active.result}
            </p>
          </div>

          <div className="mt-9 h-px bg-white/10" />

          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {active.metrics.map((metric, index) => (
              <div
                key={`${active.id}-${metric.label}`}
                className="motion-list-item"
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <p className="font-mono text-3xl font-semibold text-[#ff6b58]">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs font-semibold text-[#8c8f8a]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0d0f0e] p-4 sm:p-6 lg:p-10">
          <FolderWindow key={active.id} snapshot={active} />
        </div>
      </div>
    </div>
  );
}

function FolderWindow({ snapshot }: { snapshot: BuildSnapshot }) {
  return (
    <div className="motion-panel overflow-hidden rounded-lg border border-white/10 bg-[#141716] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#ffbd2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-sm text-[#b8b9b3]">{snapshot.repo}</span>
      </div>

      <div className="max-h-[620px] overflow-auto p-4 font-mono text-sm sm:p-5">
        <div className="space-y-1">
          {snapshot.tree.map((node) => (
            <TreeNode key={node.name} node={node} depth={0} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TreeNode({ node, depth }: { node: BuildTreeNode; depth: number }) {
  const Icon = node.kind === "folder" ? Folder : FileText;
  const tone = toneClasses[node.tone ?? (node.kind === "folder" ? "gold" : "neutral")];
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className="grid grid-cols-[auto_1fr] items-center gap-2 rounded-md px-2 py-1.5 text-[#d8d1c4] transition hover:translate-x-1 hover:bg-white/[0.04]"
        style={{ paddingLeft: `${depth * 18 + 8}px` }}
      >
        <span className="flex w-4 items-center justify-center">
          {hasChildren ? (
            <ChevronDown aria-hidden="true" className="size-3.5 text-[#777b75]" />
          ) : (
            <Sparkles aria-hidden="true" className={`size-3 ${tone}`} />
          )}
        </span>
        <span className="flex min-w-0 items-center gap-2">
          <Icon aria-hidden="true" className={`size-4 shrink-0 ${tone}`} />
          <span className={node.kind === "folder" ? "font-semibold text-white" : "truncate"}>
            {node.name}
          </span>
        </span>
      </div>
      {hasChildren ? (
        <div>
          {node.children?.map((child) => (
            <TreeNode key={`${node.name}-${child.name}`} node={child} depth={depth + 1} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
