"use client";

import { useEffect, useRef } from "react";

export function CursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Skip on touch devices — no mouse to trail
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lastTime = 0;
    const throttleMs = 22; // spawn interval — lower = denser trail

    function handleMouseMove(e: MouseEvent) {
      const now = Date.now();
      if (now - lastTime < throttleMs) return;
      lastTime = now;

      const square = document.createElement("div");
      square.className = "cursor-trail-square";
      square.style.left = `${e.clientX}px`;
      square.style.top = `${e.clientY}px`;
      container?.appendChild(square);

      setTimeout(() => {
        square.remove();
      }, 1600);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={containerRef} className="cursor-trail-container" aria-hidden="true" />;
}