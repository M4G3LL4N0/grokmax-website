import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "GrokMax — scale down before you scale up";
const description =
  "Deterministic-first routing, five layers of cache, and honest savings for GrokBot-heavy engineering teams. Most tasks are not GrokBot-only tasks. GrokMax catches them before they cost anything.";

export const metadata: Metadata = {
  metadataBase: new URL("https://grokmax.noaerth.com"),
  title: {
    default: title,
    template: "%s · GrokMax"
  },
  description,
  keywords: [
    "GrokBot",
    "grok",
    "reduce grokbot cost",
    "agent routing",
    "deterministic-first",
    "context slicing",
    "prompt compilation",
    "semantic cache",
    "execution pipeline",
    "save on LLM agents",
    "AI cost optimization"
  ],
  authors: [{ name: "GrokMax contributors" }],
  creator: "GrokMax contributors",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://grokmax.noaerth.com",
    siteName: "GrokMax",
    title,
    description,
    images: [{ url: "https://grokmax.noaerth.com/grokmax-og.png", width: 1200, height: 630, alt: "GrokMax — scale down before you scale up" }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://grokmax.noaerth.com/grokmax-og.png"]
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/grokmax-social-card.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#0b1220"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ink text-frost antialiased">{children}</body>
    </html>
  );
}