"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggle() {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.documentElement.classList.add("light");
      localStorage.setItem("naifa-theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("naifa-theme", "dark");
    }
  }

  if (!mounted) {
    return <div className="h-7 w-12" aria-hidden />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="group relative flex h-7 w-12 items-center rounded-full border border-default bg-card transition-colors hover:border-strong"
    >
      <span
        className="absolute top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-base transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          left: isLight ? "calc(100% - 1.375rem)" : "0.125rem",
          background: "var(--accent)",
        }}
      >
        <span className="font-mono text-[8px] uppercase tracking-widest text-fg">
          {isLight ? "L" : "D"}
        </span>
      </span>
    </button>
  );
}
