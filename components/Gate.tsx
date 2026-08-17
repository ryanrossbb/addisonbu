"use client";

import { useEffect, useState } from "react";

// The passphrase. Change this to whatever you and Addison agreed on
// (a family inside joke, a pet's name, etc.) before sharing the link.
const PASSPHRASE = "addison2026";

const STORAGE_KEY = "addison-unlocked";

export default function Gate({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(STORAGE_KEY) === "yes") {
      setUnlocked(true);
    }
  }, []);

  function tryUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim().toLowerCase() === PASSPHRASE.toLowerCase()) {
      sessionStorage.setItem(STORAGE_KEY, "yes");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  }

  // Render nothing on the server / first mount — prevents content flash
  if (!mounted) {
    return <div className="min-h-screen bg-base" />;
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3 text-subtle">
          <span className="h-px w-8 bg-[var(--border-strong)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Private · For one person
          </span>
        </div>

        <h1 className="mt-8 font-display text-5xl font-light leading-[1] tracking-tight md:text-6xl">
          For Addison.
        </h1>

        <p className="mt-6 font-display text-lg leading-relaxed text-muted">
          This page wasn&apos;t made for the public. If you have the passphrase, type it below.
          If you don&apos;t — that&apos;s okay. Most things aren&apos;t for everyone.
        </p>

        <form onSubmit={tryUnlock} className="mt-12">
          <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-subtle">
            Passphrase
          </label>
          <input
            type="password"
            autoFocus
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            className="mt-3 w-full border-b border-default bg-transparent py-3 font-display text-2xl text-fg placeholder:text-subtle focus:border-strong focus:outline-none"
            placeholder="…"
          />
          {error && (
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Not quite. Try again.
            </p>
          )}
          <button
            type="submit"
            className="mt-8 rounded-full border border-strong px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] transition-all hover:bg-accent-soft hover:text-accent"
          >
            Open →
          </button>
        </form>

        <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
          If you&apos;ve forgotten the passphrase, text me.
        </p>
      </div>
    </div>
  );
}
