import { LETTER } from "@/lib/data";

export default function Letter() {
  return (
    <section id="top" className="relative pt-32 md:pt-40">
      {/* Subtle diagonal accent — much softer than the chapter version */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-32 top-32 h-px w-[140%] origin-left rotate-[-2deg] opacity-20"
          style={{ background: "var(--accent)" }}
        />
      </div>

      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 text-subtle">
          <span className="h-px w-12 bg-[var(--border-strong)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
            A graduation gift · 2026
          </span>
        </div>

        {/* The greeting — display-scale but not screaming */}
        <h1
          className="rise mt-12 font-display text-[clamp(3rem,9vw,8rem)] font-light leading-[0.95] tracking-tight"
          style={{ animationDelay: "0.05s" }}
        >
          {LETTER.greeting}
        </h1>

        {/* The letter itself — generous serif body */}
        <div className="mt-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="space-y-7 font-display text-xl leading-relaxed text-fg md:text-2xl md:leading-[1.55]">
              {LETTER.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="rise"
                  style={{ animationDelay: `${0.25 + i * 0.12}s` }}
                >
                  {p}
                </p>
              ))}
            </div>

            <div
              className="rise mt-16 border-t border-default pt-8 font-display text-lg italic text-muted"
              style={{ animationDelay: `${0.25 + LETTER.paragraphs.length * 0.12}s` }}
            >
              {LETTER.signoff}
            </div>
          </div>
        </div>

        {/* What's inside — quick anchors */}
        <div className="mt-32 grid grid-cols-12 gap-6 border-t border-default pt-16">
          <div className="col-span-12 md:col-span-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-subtle">
              What&apos;s inside
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <ul className="grid grid-cols-1 gap-px md:grid-cols-2" style={{ background: "var(--border)" }}>
              {[
                { id: "quotes", label: "Quotes & ideas", n: "01" },
                { id: "library", label: "Books, films, music", n: "02" },
                { id: "lessons", label: "Things I've learned", n: "03" },
                { id: "vault", label: "Where the documents live", n: "04" },
              ].map((item) => (
                <li key={item.id} className="bg-base">
                  <a
                    href={`#${item.id}`}
                    className="group flex items-baseline justify-between p-6 transition-colors hover:bg-elevated"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-subtle">
                        {item.n}
                      </span>
                      <span className="font-display text-xl text-fg">{item.label}</span>
                    </span>
                    <span className="font-mono text-xs text-muted transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
