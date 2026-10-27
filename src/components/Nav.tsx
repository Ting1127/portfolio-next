"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { HomeLink } from "@/components/HomeLink";
import type { SiteMode } from "@/lib/siteMode";

interface NavProps {
  accent?: string; // e.g. "var(--accent)" or "var(--accent-purple)"
  mode?: SiteMode; // set on the two homepages; inner pages read the visitor's entry point
}

export function Nav({ accent = "var(--accent)", mode }: NavProps) {
  return (
    <nav
      className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm border-b"
      style={{ background: "color-mix(in srgb, var(--bg) 90%, transparent)", borderColor: "var(--border)" }}
    >
      <HomeLink mode={mode} accent={accent} />
      <div className="flex items-center gap-5 text-sm">
        <a href="/work" className="hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>Work</a>
        <a href="/drift" className="hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>Drift</a>
        <a href="/about" className="hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>About</a>
        <a
          href="https://drive.google.com/file/d/1Veedrz5855G7Sj98f4ErAEjPii3ISQwp/view?usp=sharing"
          target="_blank"
          className="hidden sm:block hover:opacity-80 transition-opacity"
          style={{ color: "var(--muted)" }}
        >
          Resume
        </a>
        <a
          href="https://linkedin.com/in/yuting-zeng1127"
          target="_blank"
          className="hidden sm:block hover:opacity-80 transition-opacity"
          style={{ color: "var(--muted)" }}
        >
          LinkedIn ↗︎
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}