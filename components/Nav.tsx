import Link from "next/link";

const links: Array<[string, string]> = [
  ["How it works", "#how"],
  ["Why honest", "#honest"],
  ["CLI", "#cli"],
  ["Get started", "#get"],
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-frost">
          <span className="grid h-6 w-6 place-items-center rounded bg-gradient-to-br from-[#22d3ee] to-[#818cf8] font-bold text-ink">G</span>
          grokmax
        </a>
        <div className="flex items-center gap-5 font-mono text-xs uppercase tracking-wider text-mist">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition-colors hover:text-signal">
              {label}
            </Link>
          ))}
          <a
            href="https://github.com/M4G3LL4N0/grokmax"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-3 py-1.5 text-frost transition-colors hover:border-signal hover:text-signal"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}