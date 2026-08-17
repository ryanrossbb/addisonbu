export default function SectionHeading({
  id,
  number,
  label,
  title,
  description,
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="flex items-baseline gap-6 border-b border-default pb-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-subtle">
          {number}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          / {label}
        </span>
      </div>
      <div className="mt-10 grid grid-cols-12 gap-6">
        <h2 className="col-span-12 font-display text-5xl font-light leading-[1] tracking-tight md:col-span-7 md:text-7xl">
          {title}
        </h2>
        {description && (
          <p className="col-span-12 max-w-xl text-base text-muted md:col-span-4 md:col-start-9 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
