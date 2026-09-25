const modes = [
  {
    name: "Edge Mode",
    status: "verification candidate",
    command: "grokmax edge \"<task>\"",
    body: "Runs the real pipeline and only touches GrokBot when the router concludes no other executor can do the job. A task is reported as GrokBot-avoided only if it completed, met its contract, and GrokBot was never invoked. Failed work is never counted as savings.",
    shipped: "Code and tests exist in v0.2.0-rc.1.",
    notYet: "No independent GrokBot audit has verified live behaviour. Not production-verified.",
  },
  {
    name: "In-Bot Mode",
    status: "verification candidate",
    command: "grokmax preflight \"<task>\" --json",
    body: "A tiny GrokBot skill calls preflight once and receives one of four actions: return an existing result, delegate to another worker, act yourself, or fail. It is told not to redo cached work, not to redo repository engineering, and not to ingest context it was not given.",
    shipped: "Code, contract and skill exist in v0.2.0-rc.1.",
    notYet: "No independent GrokBot audit has verified live behaviour. Not production-verified.",
  },
];

export default function Modes() {
  return (
    <section id="modes" className="border-t border-line py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">
          Product modes
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-frost md:text-4xl">
          Two ways to reach GrokBot — or not reach it at all.
        </h2>
        <p className="mt-4 max-w-2xl text-mist">
          Both modes exist as runnable code with test coverage. Neither is
          production-verified: that requires an independent GrokBot audit that
          has not happened yet.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {modes.map((m) => (
            <div key={m.name} className="rounded-lg border border-line bg-panel p-6">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-frost">{m.name}</h3>
                <span className="rounded border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-amber-300">
                  {m.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-mist">{m.body}</p>
              <code className="mt-4 block overflow-x-auto rounded border border-line bg-ink/60 px-3 py-2 font-mono text-xs text-signal">
                {m.command}
              </code>
              <dl className="mt-4 space-y-2 text-xs">
                <div>
                  <dt className="inline font-mono uppercase tracking-wider text-dim">Shipped: </dt>
                  <dd className="inline text-mist">{m.shipped}</dd>
                </div>
                <div>
                  <dt className="inline font-mono uppercase tracking-wider text-dim">Not yet: </dt>
                  <dd className="inline text-mist">{m.notYet}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-dim">
          No savings percentage is published for either mode. Any number of the
          form &ldquo;avoided GrokBot on N/M tasks&rdquo; is generated only when
          every task in the denominator completed, met its contract, and left
          GrokBot uninvoked — and until an independent audit has run the live
          suite, that number would be a projection, not a measurement.
        </p>
      </div>
    </section>
  );
}
