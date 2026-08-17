"use client";

import { useState } from "react";
import { VAULT } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const CATEGORIES = [
  "All",
  "Personal Records",
  "Financial",
  "Medical",
  "Legal",
  "Digital",
] as const;
type Cat = (typeof CATEGORIES)[number];

export default function Vault() {
  const [cat, setCat] = useState<Cat>("All");
  const items = cat === "All" ? VAULT : VAULT.filter((v) => v.category === cat);

  return (
    <section
      className="border-t border-default"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="mx-auto max-w-[1100px] px-6 py-32 md:px-12 md:py-48">
        <SectionHeading
          id="vault"
          number="04"
          label="Where the documents live"
          title="The boring-but-important section."
          description="An index, not the documents themselves. The actual files live in 1Password, where they should — encrypted, two-factor protected, recoverable. This page just tells you what's there and how to get it."
        />

        {/* Important security preamble */}
        <div
          className="mt-12 border border-default p-6 md:p-8"
          style={{ background: "var(--bg-card)" }}
        >
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              ※ Before you read further
            </span>
          </div>
          <p className="mt-4 max-w-3xl font-display text-base leading-relaxed text-muted md:text-lg md:leading-[1.7]">
            None of your sensitive documents are stored on this page itself. This is just an
            index. Each entry tells you where the actual document lives — usually in a shared
            1Password vault that I&apos;ve already set up under your name. You&apos;ll get an
            invite to that vault by email. The master password is in the sealed envelope I
            handed you with this gift.
          </p>
        </div>

        {/* Category filter */}
        <div className="mt-12 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-all ${
                cat === c
                  ? "border-strong bg-accent-soft text-accent"
                  : "border-default text-muted hover:border-strong hover:text-fg"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Index list */}
        <ul className="mt-12">
          {items.map((v, i) => (
            <li
              key={i}
              className="group grid grid-cols-12 items-baseline gap-4 border-t border-default py-8 transition-colors hover:bg-card md:gap-6"
            >
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                  {v.category}
                </div>
              </div>

              <div className="col-span-12 md:col-span-6">
                <h4 className="font-display text-xl text-fg md:text-2xl">{v.label}</h4>
                {v.note && (
                  <p className="mt-2 max-w-xl font-display text-sm italic leading-relaxed text-muted md:text-base">
                    {v.note}
                  </p>
                )}
              </div>

              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
                  Lives at
                </div>
                <div className="mt-1 font-display text-sm italic text-fg">
                  {v.whereItLives}
                </div>
              </div>
            </li>
          ))}
          <div className="border-t border-default" />
        </ul>

        {/* Emergency-contact card */}
        <div
          className="mt-20 grid grid-cols-12 gap-6 border border-default p-8 md:p-12"
          style={{ background: "var(--bg-card)" }}
        >
          <div className="col-span-12 md:col-span-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              ※ If something happens to me
            </span>
            <h3 className="mt-4 font-display text-3xl font-light leading-tight tracking-tight md:text-4xl">
              Call your aunt first. Then this lawyer.
            </h3>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <div className="space-y-4 font-display text-base text-fg">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-subtle">
                  Aunt [Name]
                </div>
                <div className="mt-1">(555) 123-4567 · aunt@example.com</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-subtle">
                  Family attorney
                </div>
                <div className="mt-1">[Firm name] · (555) 234-5678</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-subtle">
                  Will & estate documents
                </div>
                <div className="mt-1 italic text-muted">
                  Filed with the attorney above. They know who you are.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
