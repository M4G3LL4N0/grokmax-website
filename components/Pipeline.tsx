const stages = [
  {
    n: "01",
    title: "Slice context",
    body: "Target ~1,500 relevant tokens instead of 20,000. That is a design budget, not a measured typical result — and token reduction is a proxy for cost, never a billed measurement.",
  },
  {
    n: "02",
    title: "Compile the micro-prompt",
    body: "Hard constraints survive verbatim. validatePreservation fails loudly if a constraint token — including a negation like “do not” — is ever lost in compression.",
  },
  {
    n: "03",
    title: "Route to the cheapest capable worker",
    body: "deterministic > api > chatgpt > opencode > grokbot. GrokBot is the most capable and the most expensive, so it sits last in the hierarchy — unless you explicitly pin an executor.",
  },
  {
    n: "04",
    title: "Execute responsibly",
    body: "Zero-model-cost local resolvers handle math, hashing, file counts, and git. A worker that exits non-zero is reported as a failure, never as a success.",
  },
  {
    n: "05",
    title: "Cache across five layers",
    body: "L1 exact, L2 normalized, L3 semantic, L4 artifact, L5 durable knowledge, plus an L0 in-flight hot cache. A cached result is only reused when its critical literals still match.",
  },
  {
    n: "06",
    title: "Ledger everything",
    body: "Every run is recorded with honest labels: measured, estimated, or proxy. Measured and proxy rows are never averaged into one number.",
  },
];

const lanes = [
  ["deterministic", "$0", "math · hash · file-count · git", true],
  ["api", "$", "direct tools and endpoints", true],
  ["chatgpt", "$$", "research & cheap generation", true],
  ["opencode", "$$", "repository modification", true],
  ["grokbot", "$$$$", "persistent · authed · unavailable", false],
] as const;

export default function Pipeline() {
  return (
    <section id="how" className="border-t border-line py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">
          How it works
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-frost md:text-4xl">
          Most tasks are not GrokBot-only tasks.
        </h2>
        <p className="mt-4 max-w-2xl text-mist">
          GrokMax catches cheap work before it becomes an expensive invocation. The pipeline
          treats GrokBot as the last resort, not the default.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((s) => (
            <div key={s.n} className="rounded-lg border border-line bg-panel p-5">
              <div className="font-mono text-sm text-signal">{s.n}</div>
              <h3 className="mt-2 font-semibold text-frost">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-lg border border-line">
          <table className="w-full text-left font-mono text-sm">
            <thead className="bg-panel text-xs uppercase tracking-wider text-dim">
              <tr>
                <th className="px-5 py-3">Route</th>
                <th className="px-5 py-3">Est. cost</th>
                <th className="px-5 py-3">Handles</th>
                <th className="px-5 py-3 text-right">Chosen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-frost">
              {lanes.map(([route, cost, handles, preferred]) => (
                <tr key={route} className="bg-ink/60">
                  <td className="px-5 py-3 font-semibold text-signal">{route}</td>
                  <td className="px-5 py-3 text-mist">{cost}</td>
                  <td className="px-5 py-3 text-mist">{handles}</td>
                  <td className="px-5 py-3 text-right">{preferred ? "when it fits" : "only when nothing else can"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="border-t border-line px-5 py-3 text-xs leading-relaxed text-dim">
            Cost column is a relative ranking from GrokMax&rsquo;s internal estimate model, not a
            measured price sheet. GrokBot is unavailable unless a bridge is configured.
          </p>
        </div>
      </div>
    </section>
  );
}