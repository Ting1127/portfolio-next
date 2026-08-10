"use client";

import { useState, useRef, useEffect } from "react";

type WorkCard = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  coverImage: string;
  meta: string;
};

type PolaroidHeroProps = {
  work: WorkCard[];
};

const AMBIENT = [
  "/hero/ambient-1.jpg",
  "/hero/ambient-2.jpg",
  "/hero/ambient-3.jpg",
  "/hero/ambient-4.jpg",
];

const AMBIENT_SLOTS = [
  [50, 74, -12],
  [92, 78, 10],
  [66, 90, -6],
  [88, 52, 13],
];
const WORK_SLOTS = [
  [58, 34, -5],
  [82, 40, 6],
  [60, 66, -4],
  [86, 26, 4],
];

type DragState = { id: string; startX: number; startY: number; baseX: number; baseY: number; moved: boolean } | null;

export function PolaroidHero({ work }: PolaroidHeroProps) {
  const [active, setActive] = useState<WorkCard | null>(null);
  // offsets applied on top of the % base position, keyed by card id
  const [offsets, setOffsets] = useState<Record<string, { x: number; y: number }>>({});
  const [zTop, setZTop] = useState(20);
  const [zMap, setZMap] = useState<Record<string, number>>({});
  const drag = useRef<DragState>(null);

  // Typewriter effect for the desktop headline
  const FIRST = "PM with a designer's eye, researcher's instinct, and AI-first mindset — ";
  const SECOND = "turning unfamiliar problems into shipped products. \u27e1";
  const FULL = FIRST + SECOND;
  const [typedLen, setTypedLen] = useState(0);
  useEffect(() => {
    if (typedLen >= FULL.length) return;
    const t = setTimeout(() => setTypedLen((n) => n + 1), 38);
    return () => clearTimeout(t);
  }, [typedLen, FULL.length]);
  const typed = {
    first: FULL.slice(0, Math.min(typedLen, FIRST.length)),
    second: typedLen > FIRST.length ? FULL.slice(FIRST.length, typedLen) : "",
    done: typedLen >= FULL.length,
  };

  const onDown = (id: string) => (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    const cur = offsets[id] || { x: 0, y: 0 };
    drag.current = { id, startX: e.clientX, startY: e.clientY, baseX: cur.x, baseY: cur.y, moved: false };
    const nz = zTop + 1;
    setZTop(nz);
    setZMap((m) => ({ ...m, [id]: nz }));
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) d.moved = true;
    setOffsets((o) => ({ ...o, [d.id]: { x: d.baseX + dx, y: d.baseY + dy } }));
  };
  const onUp = (card: WorkCard | null) => () => {
    const d = drag.current;
    drag.current = null;
    if (d && !d.moved && card) setActive(card);
  };

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <filter id="paperNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.05" />
          </feComponentTransfer>
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>
        <filter id="bgNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.025" />
          </feComponentTransfer>
        </filter>
      </svg>

      {/* ===== DESKTOP ===== */}
      <section className="hidden md:block relative overflow-hidden" style={{ height: "660px" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, filter: "url(#bgNoise)", opacity: 0.5, mixBlendMode: "multiply" }} aria-hidden="true" />
        <div className="absolute inset-0 px-8 pt-24 max-w-5xl mx-auto pointer-events-none" style={{ zIndex: 1 }}>
          <div style={{ maxWidth: "46%" }}>
            <p className="text-2xl md:text-3xl font-medium mb-4" style={{ color: "var(--accent)" }}>
              Hello! I&apos;m Jennie. ⟡
            </p>
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>
              Product Manager
            </p>
            <h1 className="text-2xl md:text-4xl font-medium leading-[1.15] tracking-tight mb-8" style={{ color: "var(--text)", minHeight: "5em" }}>
              <span>{typed.first}</span>
              <span style={{ color: "var(--muted)" }}>{typed.second}</span>
              <span className="type-caret" style={{ opacity: typed.done ? 0 : 1 }}>|</span>
            </h1>
          </div>
        </div>

        {AMBIENT.map((src, i) => {
          const slot = AMBIENT_SLOTS[i];
          const id = "amb-" + i;
          const off = offsets[id] || { x: 0, y: 0 };
          return (
            <div
              key={id}
              onPointerDown={onDown(id)}
              onPointerMove={onMove}
              onPointerUp={onUp(null)}
              className="polaroid select-none"
              style={{
                position: "absolute",
                left: "calc(" + slot[0] + "% + " + off.x + "px)",
                top: "calc(" + slot[1] + "% + " + off.y + "px)",
                transform: "translate(-50%, -50%) rotate(" + slot[2] + "deg)",
                width: "140px",
                padding: "8px 8px 22px",
                zIndex: zMap[id] || (2 + i),
              }}
            >
              <div className="polaroid-img" style={{ height: "170px", backgroundImage: "url(" + src + ")" }} />
            </div>
          );
        })}

        {work.map((card, i) => {
          const slot = WORK_SLOTS[i % WORK_SLOTS.length];
          const id = card.slug || "work-" + i;
          const off = offsets[id] || { x: 0, y: 0 };
          return (
            <div
              key={id}
              onPointerDown={onDown(id)}
              onPointerMove={onMove}
              onPointerUp={onUp(card)}
              className="polaroid select-none"
              style={{
                position: "absolute",
                left: "calc(" + slot[0] + "% + " + off.x + "px)",
                top: "calc(" + slot[1] + "% + " + off.y + "px)",
                transform: "translate(-50%, -50%) rotate(" + slot[2] + "deg)",
                width: "220px",
                padding: "10px 10px 30px",
                zIndex: zMap[id] || (10 + i),
              }}
            >
              <div
                className="polaroid-img"
                style={{ height: "150px", backgroundImage: card.coverImage ? "url(" + card.coverImage + ")" : undefined }}
              />
              <div className="polaroid-title" style={{ marginTop: "10px" }}>{card.title}</div>
            </div>
          );
        })}

        <a
          href="#selected-work"
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ bottom: "18px", zIndex: 3, color: "var(--muted)", textDecoration: "none" }}
        >
          <span className="text-xs tracking-[0.24em] uppercase" style={{ fontFamily: "var(--font-fraunces), serif" }}>
            Selected Work
          </span>
          <span className="polaroid-bounce" style={{ fontSize: "16px", lineHeight: 1 }}>↓</span>
        </a>
      </section>

      {/* ===== MOBILE ===== */}
      <section className="md:hidden px-6 pt-20 pb-8">
        <p className="text-2xl font-medium mb-3" style={{ color: "var(--accent)" }}>
          Hello! I&apos;m Jennie. ⟡
        </p>
        <p className="text-xs tracking-widest uppercase mb-5" style={{ color: "var(--accent)" }}>
          Product Manager
        </p>
        <h1 className="text-2xl font-medium leading-[1.2] tracking-tight mb-8" style={{ color: "var(--text)" }}>
          PM with a designer&apos;s eye, researcher&apos;s instinct, and AI-first mindset —{" "}
          <span style={{ color: "var(--muted)" }}>turning unfamiliar problems into shipped products. ⟡</span>
        </h1>

        <div className="grid grid-cols-1 gap-5">
          {work.map((card, i) => (
            <button
              key={card.slug || "m-work-" + i}
              onClick={() => setActive(card)}
              className="polaroid text-left"
              style={{ padding: "10px 10px 26px", transform: "rotate(-1deg)", width: "100%" }}
            >
              <div
                className="polaroid-img"
                style={{ aspectRatio: "3 / 2", backgroundImage: card.coverImage ? "url(" + card.coverImage + ")" : undefined }}
              />
              <div className="polaroid-title" style={{ marginTop: "10px" }}>{card.title}</div>
            </button>
          ))}
        </div>
      </section>

      {/* ===== ENLARGED ===== */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 flex items-center justify-center px-6"
          style={{ zIndex: 60, background: "rgba(10,13,18,0.72)", backdropFilter: "blur(3px)" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="polaroid"
            style={{ width: "min(440px, 92vw)", padding: "16px 16px 20px", transform: "rotate(-1.2deg)", cursor: "default" }}
          >
            <div
              className="polaroid-img"
              style={{
                aspectRatio: "3 / 2",
                backgroundImage: active.coverImage ? "url(" + active.coverImage + ")" : undefined,
                backgroundColor: "var(--polaroid-placeholder)",
              }}
            />
            <div className="flex justify-between items-start" style={{ marginTop: "16px" }}>
              <div style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "26px", fontWeight: 500, color: "#20242c", lineHeight: 1.12 }}>
                {active.title}
              </div>
              <div style={{ textAlign: "right", fontSize: "10px", letterSpacing: "0.12em", color: "#8a8880", lineHeight: 1.5, whiteSpace: "nowrap", marginTop: "4px" }}>
                {active.meta}
              </div>
            </div>
            {active.tags.length > 0 && (
              <div style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "11px", letterSpacing: "0.16em", color: "#6f7d92", marginTop: "8px", textTransform: "uppercase" }}>
                {active.tags.join(" · ")}
              </div>
            )}
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#4a4d54", margin: "12px 0 16px" }}>
              {active.summary}
            </p>
            <a
              href={"/work/" + active.slug}
              style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "13px", letterSpacing: "0.04em", color: "#3a6ab5", textDecoration: "none" }}
            >
              View case study →
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .polaroid {
          background: var(--polaroid-paper);
          border-radius: 3px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.08);
          cursor: grab;
          touch-action: none;
          border: none;
        }
        .polaroid:active { cursor: grabbing; }
        .polaroid::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 3px;
          filter: url(#paperNoise);
          opacity: 0.6;
          pointer-events: none;
          mix-blend-mode: multiply;
        }
        .polaroid-img {
          border-radius: 2px;
          background-color: var(--polaroid-placeholder);
          background-size: cover;
          background-position: center;
          position: relative;
          z-index: 1;
        }
        .polaroid-title {
          text-align: center;
          font-family: var(--font-fraunces), serif;
          font-weight: 500;
          font-size: 14px;
          color: #2c2c2a;
          letter-spacing: 0.01em;
          position: relative;
          z-index: 1;
        }
        .type-caret {
          display: inline-block;
          margin-left: 2px;
          font-weight: 300;
          animation: caret-blink 1s step-end infinite;
        }
        @keyframes caret-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .fade-line {
          opacity: 0;
          animation: fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fade-line { opacity: 1; animation: none; }
        }
        .polaroid-bounce {
          animation: polaroid-bob 1.8s ease-in-out infinite;
        }
        @keyframes polaroid-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .polaroid-bounce { animation: none; }
        }
      `}</style>
    </>
  );
}