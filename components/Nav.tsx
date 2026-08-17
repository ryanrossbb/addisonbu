"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const SECTIONS = [
  { id: "quotes", label: "Quotes" },
  { id: "library", label: "Library" },
  { id: "lessons", label: "Lessons" },
  { id: "vault", label: "Vault" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-default backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
      style={{
        background: scrolled
          ? "color-mix(in srgb, var(--bg) 78%, transparent)"
          : "transparent",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12">
        <a href="#top" className="group flex items-baseline gap-3">
          <span className="font-display text-xl italic tracking-tight">
            For Addison<span className="text-accent">.</span>
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-subtle md:inline">
            Private · 2026
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="link-underline font-mono text-[11px] uppercase tracking-[0.2em] text-muted hover:text-fg"
            >
              {s.label}
            </a>
          ))}
          <div className="h-4 w-px bg-[var(--border)]" />
          <ThemeToggle />
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((o) => !o)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-px w-5 bg-current transition-all duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-current transition-all duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-default bg-base transition-[max-height] duration-500 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-default py-3 font-mono text-xs uppercase tracking-[0.2em] text-muted"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
