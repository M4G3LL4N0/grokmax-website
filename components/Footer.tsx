export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-dim sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 font-mono text-xs tracking-tight">
          <span className="grid h-5 w-5 place-items-center rounded bg-gradient-to-br from-[#22d3ee] to-[#818cf8] font-bold text-ink">G</span>
          grokmax · deterministic-first agent routing
        </div>
        <div className="font-mono text-xs">
          <a href="https://github.com/M4G3LL4N0/grokmax" target="_blank" rel="noreferrer" className="transition-colors hover:text-signal">
            GitHub
          </a>
          <span className="mx-3 text-line">|</span>
          <a href="mailto:noaerth@noaerth.com" className="transition-colors hover:text-signal">
            noaerth@noaerth.com
          </a>
          <span className="mx-3 text-line">|</span>
          <span>MIT</span>
        </div>
      </div>
    </footer>
  );
}