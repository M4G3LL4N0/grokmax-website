import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1220",
        panel: "#101a2c",
        line: "#1d2a3f",
        signal: "#22d3ee",
        iris: "#818cf8",
        frost: "#e2e8f0",
        mist: "#94a3b8",
        dim: "#64748b"
      },
      fontFamily: {
        mono: ['"SFMono-Regular"', "ui-monospace", "Menlo", "Consolas", "monospace"],
        sans: ["system-ui", "-apple-system", '"Segoe UI"', "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,211,238,0.25), 0 12px 40px -12px rgba(34,211,238,0.35)",
        card: "0 0 0 1px rgba(226,232,240,0.06), 0 20px 50px -20px rgba(0,0,0,0.6)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(226,232,240,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.045) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
export default config;