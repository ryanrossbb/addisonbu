import { type Lesson } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Lessons({ items }: { items: Lesson[] }) {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-32 md:px-12 md:py-48">
      <SectionHeading
        id="lessons"
        number="03"
        label="Things I've learned"
        title="Lessons."
        description="Short essays. The stuff I figured out the hard way. None of this is unique or original — most of it has been said better elsewhere — but it lands different coming from someone who watched you grow up."
      />

      <div className="mt-20 space-y-32 md:space-y-40">
        {items.map((lesson, i) => (
          <article key={`${lesson.number}-${i}`} className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-2">
              <div className="sticky top-32">
                <div className="font-display text-7xl font-light leading-none text-accent opacity-60 md:text-8xl">
                  {lesson.number}
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-subtle">
                  Lesson
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-10">
              <h3 className="font-display text-3xl font-light leading-[1.15] tracking-tight md:text-5xl md:leading-[1.1]">
                {lesson.title}
              </h3>

              <div className="mt-10 max-w-3xl space-y-6 font-display text-lg leading-relaxed text-muted md:text-xl md:leading-[1.75]">
                {lesson.body.split("\n\n").map((para, pi) => (
                  <p key={pi}>{para}</p>
                ))}
              </div>

              {lesson.takeaway && (
                <div className="mt-12 border-l-2 border-[var(--accent)] pl-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    ※ The one-line version
                  </span>
                  <p className="mt-3 font-display text-xl italic leading-relaxed text-fg md:text-2xl">
                    {lesson.takeaway}
                  </p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
