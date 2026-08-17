export default function Footer() {
  return (
    <footer className="border-t border-default">
      <div className="mx-auto max-w-[1100px] px-6 py-32 md:px-12 md:py-40">
        {/* Closing note — short, warm */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-subtle">
              One more thing
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="font-display text-3xl font-light leading-[1.25] tracking-tight text-fg md:text-5xl md:leading-[1.2]">
              You are going to be okay.
            </p>
            <p className="mt-8 max-w-2xl font-display text-lg leading-relaxed text-muted md:text-xl md:leading-[1.7]">
              Not because nothing bad will happen — plenty will. But because you have people
              who love you, a brain that works, and a habit of paying attention. Those three
              things will get you through almost anything. The rest is just figuring it out
              as you go, which is what everybody else is doing too, even the ones who look
              like they know what they&apos;re doing.
            </p>
            <p className="mt-8 max-w-2xl font-display text-lg leading-relaxed text-muted md:text-xl md:leading-[1.7]">
              Call me whenever. About anything. Even if it&apos;s late.
            </p>
            <p className="mt-12 font-display text-lg italic text-fg">
              — Uncle [Your Name]
            </p>
          </div>
        </div>

        {/* Quiet wordmark — much smaller than the chapter version */}
        <div className="mt-32 border-t border-default pt-12">
          <div className="flex flex-col items-baseline justify-between gap-4 md:flex-row">
            <span className="font-display text-2xl italic text-fg">
              For Addison<span className="text-accent">.</span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-subtle">
              Made with love, 2026. Just for you.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
