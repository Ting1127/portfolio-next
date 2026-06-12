"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-8 h-8 rounded-full flex items-center justify-center border transition-all hover:opacity-70"
      style={{
        borderColor: "var(--border)",
        color: "var(--muted)",
      }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "☀" : "☽"}
    </button>
  );
}