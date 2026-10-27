"use client";

import { useEffect, useSyncExternalStore } from "react";
import { MODE_STORAGE_KEY, type SiteMode } from "@/lib/siteMode";

const noopSubscribe = () => () => {};

function readStoredMode(): SiteMode {
  try {
    return sessionStorage.getItem(MODE_STORAGE_KEY) === "design" ? "design" : "pm";
  } catch {
    return "pm";
  }
}

/** "/" or "/design", depending on which homepage this visitor entered from. */
export function useHomeHref(mode?: SiteMode) {
  const stored = useSyncExternalStore(noopSubscribe, readStoredMode, () => "pm" as SiteMode);
  return (mode ?? stored) === "design" ? "/design" : "/";
}

/** The "⟡ Jennie Z" logo link used in every nav bar. */
export function HomeLink({ mode, accent = "var(--accent)" }: { mode?: SiteMode; accent?: string }) {
  const href = useHomeHref(mode);
  return (
    <a href={href} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
      <span className="text-sm" style={{ color: accent }}>⟡</span>
      <span className="text-sm font-medium tracking-tight" style={{ color: "var(--text)" }}>Jennie Z</span>
    </a>
  );
}

/** Rendered on each homepage to record which version the visitor is on. */
export function ModeMarker({ mode }: { mode: SiteMode }) {
  useEffect(() => {
    try {
      if (mode === "design") sessionStorage.setItem(MODE_STORAGE_KEY, "design");
      else sessionStorage.removeItem(MODE_STORAGE_KEY);
    } catch {
      // Storage blocked (private mode etc.) — links just fall back to "/".
    }
  }, [mode]);
  return null;
}