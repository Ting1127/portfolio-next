"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

interface NavProps {
  accent?: string; // e.g. "var(--accent)" or "var(--accent-purple)"
}

export function Nav({ accent = "var(--accent)" }: NavProps) {
  return (
    <nav
      className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm border-b"
      style={{ background: "color-mix(in srgb, var(--bg) 90%, transparent)", borderColor: "var(--border)" }}
    >
      <a href="/" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
        <span className="text-sm" style={{ color: accent }}>⟡</span>
        <span className="text-sm font-medium tracking-tight" style={{ color: "var(--text)" }}>Jennie Z</span>
      </a>
      <div className="flex items-center gap-5 text-sm">
        <a href="/work" className="hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>Work</a>
        <a href="/drift" className="hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>Drift</a>
        <a href="/about" className="hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>About</a>
        <a
          href="https://drive.google.com/file/d/1sF1Nc4DJH51pFhCwRmBJBhDAHtIR7XmX/view?usp=sharing"
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