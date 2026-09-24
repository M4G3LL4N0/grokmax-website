const rows = [
  {
    label: "Benchmark fixtures",
    value: "33 fixtures · 5 suites · 100% match",
    kind: "measured locally, deterministic resolver only. 5 escape fixtures are expected declines, not successful resolutions",
  },
  {
    label: "Automated tests",
    value: "163 tests across 19 files",
    kind: "locally verified at v0.1.1, reproducible via pnpm test in the grokmax repo",
  },
  {
    label: "Math task",
    value: "$0.00 — local evaluator, no model in the loop",
    kind: "measured",
  },
  {
    label: "Savings on GrokBot usage",
    value: "router-level avoided-GrokBot counts",
    kind: "proxy — GrokBot platform usage is not directly observable",
  },
  {
    label: "Context reduction",
    value: "proportion of tokens trimmed",
    kind: "proxy for token cost, not a billed measurement",
  },
];

export default function Honest() {
  return (
    <section id="honest" className="border-t border-line bg-panel/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">
          Why the honesty matters
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-frost md:text-4xl">
          Integrity is the product.
        </h2>
        <p className="mt-4 max-w-2xl text-mist">
          Every number GrokMax reports is labeled. Savings are proxies unless they were
          manually imported from live observation — because that is the only honest way to
          talk about a platform we cannot see into.
        </p>

        <div className="mt-10 overflow-hidden rounded-lg border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-panel text-xs uppercase tracking-wider text-dim">
              <tr>
                <th className="px-5 py-3">Claim</th>
                <th className="px-5 py-3">Figure</th>
                <th className="px-5 py-3 w-72">Honest label</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-ink/60">
              {rows.map((r) => (
                <tr key={r.label}>
                  <td className="px-5 py-4 font-medium text-frost">{r.label}</td>
                  <td className="px-5 py-4 font-mono text-signal">{r.value}</td>
                  <td className="px-5 py-4 text-mist">{r.kind}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-dim">
          We never claim to measure GrokBot&rsquo;s platform usage. We also never ship a
          version whose lint, typecheck, test, or build gates are red. If GrokMax cannot prove
          it, GrokMax does not claim it.
        </p>
      </div>
    </section>
  );
}