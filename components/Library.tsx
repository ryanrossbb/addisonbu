"use client";

import { useState } from "react";
import { type LibraryItem } from "@/lib/data";
import { getEmbedUrl } from "@/lib/airtable";
import SectionHeading from "./SectionHeading";

const KINDS = ["all", "book", "film", "video", "essay", "podcast"] as const;
type Kind = (typeof KINDS)[number];

const KIND_LABEL: Record<string, string> = {
  book: "Book",
  film: "Film",
  video: "Video",
  essay: "Essay",
  podcast: "Podcast",
};

export default function Library({ items: allItems }: { items: LibraryItem[] }) {
  const [kind, setKind] = useState<Kind>("all");
  const items = kind === "all" ? allItems : allItems.filter((l) => l.kind === kind);

  return (
    <section
      className="border-t border-default"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="mx-auto max-w-[1100px] px-6 py-32 md:px-12 md:py-48">
        <SectionHeading
          id="library"
          number="02"
          label="Books · Films · Music · Essays"
          title="The library."
          description="What changed how I see things. The note under each one is when to return to it — most of these are not one-and-done. Videos play inline; everything else opens in a new tab."
        />

        <div className="mt-12 flex flex-wrap gap-2">
          {KINDS.map((k) => (
            <button
              key={k}
              onClick={() => setKind(k)}
              className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-all ${
                kind === k
                  ? "border-strong bg-accent-soft text-accent"
                  : "border-default text-muted hover:border-strong hover:text-fg"
              }`}
            >
              {k === "all" ? "All" : KIND_LABEL[k]}
            </button>
          ))}
        </div>

        <div className="mt-16">
          {items.map((item, i) => (
            <LibraryRow key={`${item.title}-${i}`} item={item} />
          ))}
          <div className="border-t border-default" />
        </div>

        {items.length === 0 && (
          <div className="mt-16 border border-dashed border-default p-12 text-center">
            <p className="font-display text-2xl text-muted">
              Nothing here yet — try another filter, or add something to the Airtable.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function LibraryRow({ item }: { item: LibraryItem }) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = getEmbedUrl(item.link);
  const canEmbed = embedUrl !== null;

  return (
    <article className="group grid grid-cols-12 gap-4 border-t border-default py-12 transition-colors hover:bg-card md:gap-6 md:py-16">
      <div className="col-span-12 flex items-baseline gap-3 md:col-span-2 md:flex-col md:items-start md:gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
          {KIND_LABEL[item.kind] || item.kind}
        </span>
        {item.year && (
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
            {item.year}
          </span>
        )}
      </div>

      <div className="col-span-12 md:col-span-7">
        <h3 className="font-display text-3xl font-normal leading-[1.1] tracking-tight md:text-4xl">
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="link-underline">
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h3>
        {item.author && (
          <div className="mt-3 font-display text-lg italic text-muted">
            {item.author}
          </div>
        )}
        {item.note && (
          <p className="mt-6 max-w-2xl font-display text-base leading-relaxed text-muted md:text-lg md:leading-[1.7]">
            {item.note}
          </p>
        )}

        {canEmbed && (
          <div className="mt-6">
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="group/play flex items-center gap-3 rounded-full border border-strong px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-accent-soft hover:text-accent"
              >
                <span className="flex h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                Watch inline
              </button>
            ) : (
              <div className="relative w-full overflow-hidden border border-default" style={{ aspectRatio: "16 / 9", background: "#000" }}>
                <iframe
                  src={`${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
                  title={item.title}
                  className="absolute inset-0 h-full w-full"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        )}

        {item.link && !canEmbed && (
          <div className="mt-6">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-fg">
              {item.kind === "book" || item.kind === "essay" ? "Read" : item.kind === "podcast" ? "Listen" : "Visit"} ↗
            </a>
          </div>
        )}
      </div>

      {item.whenToReturn && (
        <div className="col-span-12 md:col-span-3">
          <div className="border-l border-default pl-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              ※ When
            </span>
            <p className="mt-3 font-display text-sm italic leading-relaxed text-fg md:text-base">
              {item.whenToReturn}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
