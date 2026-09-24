export default function Cta() {
  return (
    <section id="get" className="relative overflow-hidden border-t border-line bg-panel/60 py-24">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">
          Get started
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-frost md:text-5xl">
          Scale down before you scale up.
        </h2>
        <p className="mt-5 text-lg text-mist">
          Clone the repo, install with pnpm, and run the doctor on your own workspace. See
          what stops being expensive.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/M4G3LL4N0/grokmax"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-gradient-to-r from-[#22d3ee] to-[#818cf8] px-6 py-3 font-mono text-sm font-semibold text-ink shadow-glow transition-opacity hover:opacity-90"
          >
            git clone grokmax
          </a>
          <span className="rounded-md border border-line px-6 py-3 font-mono text-sm text-mist">
            pnpm install && pnpm cli doctor
          </span>
        </div>
      </div>
    </section>
  );
}