"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/portfolio";

export function SiteHeader() {
  const [activeHref, setActiveHref] = useState<string>(navItems[0].href);

  useEffect(() => {
    let frame = 0;
    const timeouts: number[] = [];

    const updateActiveSection = () => {
      const marker = 120;
      let currentHref: (typeof navItems)[number]["href"] = navItems[0].href;

      navItems.forEach((item) => {
        const section = document.querySelector<HTMLElement>(item.href);

        if (section && section.getBoundingClientRect().top <= marker) {
          currentHref = item.href;
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24) {
        currentHref = navItems.at(-1)?.href ?? currentHref;
      }

      setActiveHref(currentHref);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    const setActiveFromHash = () => {
      const hash = window.location.hash as (typeof navItems)[number]["href"];

      if (navItems.some((item) => item.href === hash)) {
        setActiveHref(hash);
        return true;
      }

      return false;
    };

    const scheduleUpdate = () => {
      const hasActiveHash = setActiveFromHash();

      if (!hasActiveHash) {
        requestUpdate();
      }

      timeouts.push(window.setTimeout(requestUpdate, 350));
      timeouts.push(window.setTimeout(requestUpdate, 800));
    };

    scheduleUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ded8cb]/80 bg-[#fbf8f1]/88 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#content"
          onClick={() => setActiveHref(navItems[0].href)}
          aria-label="Go to Tommy Botabara portfolio intro"
          className="group flex min-h-11 min-w-11 shrink-0 items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#2367ff] focus:ring-offset-2 focus:ring-offset-[#fbf8f1]"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-[#151514] text-sm font-semibold text-[#fbf8f1]">
            TB
          </span>
          <span className="hidden text-sm font-semibold text-[#151514] sm:block">
            Tommy Botabara
          </span>
        </a>

        <nav aria-label="Primary navigation" className="-mr-4 overflow-x-auto pr-4 sm:mr-0 sm:pr-0">
          <div className="flex min-w-max items-center gap-1 rounded-full border border-[#ded8cb] bg-[#fffdf7]/80 p-1 shadow-sm">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setActiveHref(item.href)}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full px-3.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#2367ff] focus:ring-offset-2 focus:ring-offset-[#fbf8f1] ${
                    isActive
                      ? "bg-[#151514] text-[#fffdf7]"
                      : "text-[#5f625d] hover:bg-[#151514] hover:text-[#fffdf7]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`size-1.5 rounded-full bg-[#66cdb2] transition-opacity ${
                      isActive ? "data-dot opacity-100" : "opacity-0"
                    }`}
                  />
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
