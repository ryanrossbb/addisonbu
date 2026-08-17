import { QUOTES } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Quotes() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-32 md:px-12 md:py-48">
      <SectionHeading
        id="quotes"
        number="01"
        label="Macro's Absolute Guide to Excellence"
        title="Thirty lines, in order."
        description="A deck I made years ago. Quotes about excellence, perseverance, and the decision to try. They don't need my commentary — they made it onto the list because they don't."
      />

      {/* The list — long, contemplative, one quote per band */}
      <ol className="mt-20">
        {QUOTES.map((q, i) => (
          <li
            key={i}
            className="group grid grid-cols-12 gap-4 border-t border-default py-16 last:border-b md:gap-6 md:py-24"
          >
            {/* Index number — large, like a chapter marker */}
            <div className="col-span-12 md:col-span-2">
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-subtle">
                №{String(i + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
              </div>
            </div>

            {/* The quote */}
            <div className="col-span-12 md:col-span-10">
              <blockquote className="relative">
                <span
                  className="absolute -left-2 -top-10 font-display text-[7rem] leading-none text-accent opacity-30 md:-left-6 md:-top-14 md:text-[9rem]"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <div className="font-display text-2xl font-light leading-[1.2] tracking-tight md:text-4xl md:leading-[1.15]">
                  {q.text.split("\n\n").map((para, pi) => (
                    <p key={pi} className={pi > 0 ? "mt-6" : ""}>
                      {para}
                    </p>
                  ))}
                </div>
              </blockquote>

              {/* Attribution row */}
              <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-t border-default pt-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg">
                  — {q.attribution}
                </span>
                {q.context && (
                  <span className="font-display text-sm italic text-muted">
                    · {q.context}
                  </span>
                )}
                {q.tags && q.tags.length > 0 && (
                  <span className="ml-auto flex gap-2">
                    {q.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-default px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                )}
              </div>

              {/* Optional annotation — only renders if you've written one */}
              {q.explanation && (
                <div className="mt-10 grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                      ※ Why
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <p className="font-display text-lg leading-relaxed text-muted md:text-xl md:leading-[1.7]">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>

      {/* Closing tag — the kind of thing a deck ends with */}
      <div className="mt-24 flex items-baseline justify-between border-t border-default pt-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-subtle">
          End of the guide
        </span>
        <span className="font-display text-sm italic text-muted">— Ryan Ross</span>
      </div>
    </section>
  );
}
