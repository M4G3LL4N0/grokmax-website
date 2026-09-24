const lines = [
  ["$ grokmax route \"Calculate 7*8 and return the integer result\"", "text-frost"],
  ["ROUTE  DETERMINISTIC", "text-signal"],
  ["CACHE  MISS (cold)", "text-mist"],
  ["7*8 = 56   (zero cost, cached for the next identical ask)", "text-mist"],
  ["", ""],
  ["$ grokmax optimize \"Calculate 7*8 and return the integer result\"", "text-frost"],
  ["ROUTE  NONE", "text-mist"],
  ["CACHE  L0 hit — exact cache hit (canonical hash)", "text-signal"],
  ["served from cache in 0ms · GrokBot not invoked", "text-mist"],
] as const;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">
            Deterministic-first agent routing · v0.1.1
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-frost md:text-6xl">
            Scale down before you{" "}
            <span className="bg-gradient-to-r from-[#22d3ee] to-[#818cf8] bg-clip-text text-transparent">
              scale up.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
            GrokMax is a deterministic-first execution pipeline for GrokBot-heavy teams. It
            sends each task to the cheapest executor that can actually do the work, slims
            context to what matters, and caches the result so an identical ask is not paid
            for twice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/M4G3LL4N0/grokmax"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-gradient-to-r from-[#22d3ee] to-[#818cf8] px-5 py-2.5 font-mono text-sm font-semibold text-ink shadow-glow transition-opacity hover:opacity-90"
            >
              Get GrokMax
            </a>
            <a
              href="#how"
              className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-frost transition-colors hover:border-signal hover:text-signal"
            >
              See the pipeline
            </a>
          </div>
          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["$0", "model spend on a math task"],
              ["5", "cache layers (+L0 hot)"],
              ["33", "benchmark fixtures, 100% match"],
              ["151", "tests, all passing"],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="font-mono text-2xl font-semibold text-signal">{n}</dt>
                <dd className="mt-1 font-mono text-[0.7rem] uppercase tracking-wider text-mist">{label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-dim">
            Fixtures and tests run locally with the deterministic resolver only — zero model
            spend, no model in the loop. 5 of the 33 fixtures are escape cases where declining
            is the correct outcome. Savings on GrokBot usage are router-level proxies, honestly
            labeled as such. The terminal above is an illustrative example, not captured output.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl px-5" aria-label="Demo output from the GrokMax CLI" role="img">
        <TerminalCard lines={lines} />
      </div>
    </section>
  );
}

export function TerminalCard({ lines }: { lines: readonly (readonly [string, string])[] }) {
  return (
    <div className="mx-auto max-w-3xl rounded-lg border border-line bg-panel/90 shadow-card">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[0.7rem] text-dim">grokmax — deterministic-first</span>
      </div>
      <div className="space-y-2 px-5 py-5 font-mono text-[0.8rem] leading-relaxed">
        {lines.map(([line, className], i) => (
          <p key={i} className={className}>
            {line || "\u00a0"}
          </p>
        ))}
      </div>
    </div>
  );
}