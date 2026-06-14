"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

export function TableOfContents({
  sections,
  accentColor = "var(--accent)",
}: {
  sections: Section[];
  accentColor?: string;
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="space-y-3">
      {sections.map((s) => {
        const isActive = activeId === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="block text-sm pl-3 border-l transition-colors hover:opacity-80"
            style={{
              color: isActive ? accentColor : "var(--muted)",
              borderColor: isActive ? accentColor : "transparent",
              fontWeight: isActive ? 500 : 400,
            }}
          >
            {s.label}
          </a>
        );
      })}
    </nav>
  );
}