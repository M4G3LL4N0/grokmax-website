const cmds: Array<[string, string]> = [
  ["grokmax optimize \"<goal>\"", "Full pipeline: plan + outcome"],
  ["grokmax route \"<goal>\"", "Routing decision only — never executes"],
  ["grokmax dry-run \"<goal>\"", "Skip execution, show what would happen"],
  ["grokmax doctor", "Health checks across every subsystem"],
  ["grokmax benchmark", "Run the fixture suites, measured locally"],
  ["grokmax savings", "Honest report — proxies labeled as such"],
  ["grokmax cache stats | prune | clear", "Cache health and maintenance"],
  ["grokmax status", "One-view aggregate across everything"],
];

const code = `$ grokmax doctor
STATUS: 17 healthy, 1 warning, 0 failure
  ✓ node            Node 26.5.0
  ✓ sqlite          SQLite read/write verified
  ✓ exact-cache     L1 round-trip verified
  ✓ semantic-cache  reachable, cold miss as expected
  ✓ routing         router works; sample route=opencode
  ✓ prompt-compiler constraints preserved verbatim
  ✓ opencode-cli    OpenCode CLI detected
  ! grokbot-bridge  GROKMAX_GROKBOT_BRIDGE unset; deemed unavailable`;

export default function CLI() {
  return (
    <section id="cli" className="border-t border-line py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">
          CLI
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-frost md:text-4xl">
          One binary. Honest answers.
        </h2>
        <p className="mt-4 max-w-2xl text-mist">
          Install locally with pnpm, run the doctor, and let the pipeline decide who pays for
          what.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-line bg-ink/60">
            <div className="border-b border-line bg-panel px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-dim">
              Inside the terminal
            </div>
            <pre className="overflow-x-auto px-5 py-5 font-mono text-[0.78rem] leading-relaxed text-mist">
              {code}
            </pre>
          </div>

          <div className="rounded-lg border border-line bg-panel p-6">
            <h3 className="font-mono text-sm uppercase tracking-wider text-signal">Commands</h3>
            <ul className="mt-4 space-y-3">
              {cmds.map(([cmd, desc]) => (
                <li key={cmd} className="flex flex-col gap-0.5">
                  <code className="font-mono text-sm text-frost">{cmd}</code>
                  <span className="text-sm text-mist">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}