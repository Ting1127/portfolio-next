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

const STICKERS = [
  "/hero/sticker-2.png",
  "/hero/sticker-3.png",
  "/hero/sticker-4.png",   // character — sits beside the right-hand cards
];

// [leftPct, topPct, rotateDeg, zIndex] — orbiting a centred text block
const WORK_SLOTS = [
  [15, 36, -4, 11],   // Kado+, upper-left
  [13, 70, 3, 12],    // GEO, lower-left, overlapping Kado+
  [88, 74, -3, 14],   // Creator Center, lower-right, front-most
  [86, 38, 5, 13],    // Discovery, upper-right
];
// [leftPct, topPct, rotateDeg] — repositioned now that the ambient photos are gone
// Stickers keep their scattered positions; z-index (below) keeps them on top
const STICKER_SLOTS = [
  [5, 10, 4],      // green tag, tucked top-left
  [96, 92, -5],    // spare tag, tucked bottom-right
  [76, 53, 4],     // character, between the two right-hand cards
];

type DragState = { id: string; startX: number; startY: number; baseX: number; baseY: number; moved: boolean } | null;

export function PolaroidHero({ work }: PolaroidHeroProps) {
  const [active, setActive] = useState<WorkCard | null>(null);
  const [offsets, setOffsets] = useState<Record<string, { x: number; y: number }>>({});
  const [zTop, setZTop] = useState(20);
  const [zMap, setZMap] = useState<Record<string, number>>({});
  const [wiggling, setWiggling] = useState<string | null>(null);
  const drag = useRef<DragState>(null);

  // "Deal out" intro: cards start stacked at centre, then fly to their slots.
  const [dealt, setDealt] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDealt(true), 80);
    return () => clearTimeout(t);
  }, []);
  // returns the transform + positional style for a card given its slot + index.
  // `order` controls the deal sequence (lower slot = comes out first → bottom-to-top).
  const dealStyle = (slot: number[], off: { x: number; y: number }, order: number, dragged: boolean) => {
    const delay = 0.13 * order;
    const dur = 0.9;
    if (dealt) {
      return {
        left: "calc(" + slot[0] + "% + " + off.x + "px)",
        top: "calc(" + slot[1] + "% + " + off.y + "px)",
        transform: "translate(-50%, -50%) rotate(" + slot[2] + "deg)",
        opacity: 1,
        transition: dragged
          ? "none"
          : "left " + dur + "s cubic-bezier(0.22,1,0.36,1) " + delay + "s, top " + dur + "s cubic-bezier(0.22,1,0.36,1) " + delay + "s, transform " + dur + "s cubic-bezier(0.22,1,0.36,1) " + delay + "s, opacity 0.6s ease " + delay + "s",
      };
    }
    // Pre-deal: sitting lower + faded, so it rises upward into place
    return {
      left: "calc(" + slot[0] + "% + " + off.x + "px)",
      top: "calc(" + (slot[1] + 12) + "% + " + off.y + "px)",
      transform: "translate(-50%, -50%) rotate(0deg)",
      opacity: 0,
      transition: "none",
    };
  };

  // Deal order: bottom cards first. Higher topPct (further down) = smaller order number.
  const dealOrder = (slot: number[]) => (100 - slot[1]) / 12;

  // Typewriter effect for the desktop headline
  const FIRST = "I learn unfamiliar industries fast and ship. ";
  const SECOND = "Digital content, finance, now semiconductors and AI search.";
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
  const onUpCard = (card: WorkCard | null) => () => {
    const d = drag.current;
    drag.current = null;
    if (d && !d.moved && card) setActive(card);
  };
  // Smooth scroll to Selected Work, honouring reduced-motion preferences
  const scrollToWork = (e: React.MouseEvent) => {
    const target = document.getElementById("selected-work");
    if (!target) return;
    e.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  const onUpSticker = (id: string) => () => {
    const d = drag.current;
    drag.current = null;
    if (d && !d.moved) {
      setWiggling(id);
      setTimeout(() => setWiggling((w) => (w === id ? null : w)), 500);
    }
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
      </svg>

      {/* ===== DESKTOP ===== */}
      <section className="hidden md:block relative overflow-hidden" style={{ height: "620px" }}>
        <div className="absolute inset-0 px-8 flex items-center justify-center pointer-events-none" style={{ zIndex: 1 }}>
          <div className="text-center" style={{ width: "44%" }}>
            <p className="text-2xl md:text-3xl font-medium mb-4" style={{ color: "var(--accent)" }}>
              Hello! I&apos;m Jennie. ⟡
            </p>
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>
              Product Manager
            </p>
            {/* Spacer reserves the final wrapped layout so typing never reflows the lines */}
            <div className="relative mb-8">
              <div className="text-xl md:text-3xl font-medium leading-[1.2] tracking-tight" aria-hidden="true" style={{ visibility: "hidden" }}>
                {FULL}
              </div>
              <h1 className="text-xl md:text-3xl font-medium leading-[1.2] tracking-tight absolute inset-0" style={{ color: "var(--text)" }}>
                <span>{typed.first}</span>
                <span style={{ color: "var(--muted)" }}>{typed.second}</span>
                <span className="type-caret" style={{ opacity: typed.done ? 0 : 1 }}>|</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Stickers (die-cut, draggable, tap to wiggle) */}
        {STICKERS.map((src, i) => {
          const slot = STICKER_SLOTS[i];
          const id = "sticker-" + i;
          const off = offsets[id] || { x: 0, y: 0 };
          const dragged = !!offsets[id];
          const ds = dealStyle(slot, off, dealOrder(slot), dragged);
          return (
            <img
              key={id}
              src={src}
              alt=""
              onPointerDown={onDown(id)}
              onPointerMove={onMove}
              onPointerUp={onUpSticker(id)}
              draggable={false}
              className={"sticker select-none" + (wiggling === id && dealt ? " sticker-wiggle" : "")}
              style={{
                position: "absolute",
                width: i === 2 ? "150px" : "130px",
                zIndex: zMap[id] || (20 + i),
                cursor: "grab",
                touchAction: "none",
                ["--rot" as any]: slot[2] + "deg",
                ...ds,
              }}
            />
          );
        })}

        {/* Work (landscape) */}
        {work.map((card, i) => {
          const slot = WORK_SLOTS[i % WORK_SLOTS.length];
          const id = card.slug || "work-" + i;
          const off = offsets[id] || { x: 0, y: 0 };
          const dragged = !!offsets[id];
          return (
            <div
              key={id}
              onPointerDown={onDown(id)}
              onPointerMove={onMove}
              onPointerUp={onUpCard(card)}
              className="polaroid work-card select-none"
              style={{
                position: "absolute",
                width: "220px",
                padding: "10px 10px 30px",
                zIndex: zMap[id] || slot[3] || (10 + i),
                ...dealStyle(slot, off, dealOrder(slot), dragged),
              }}
            >
              <div
                className="polaroid-img"
                style={{ height: "150px", backgroundImage: card.coverImage ? "url(" + card.coverImage + ")" : undefined }}
              />
              <div className="polaroid-title" style={{ marginTop: "10px" }}>{card.title}</div>
              <span className="polaroid-view">View ↗</span>
            </div>
          );
        })}

        <a
          href="#selected-work"
          onClick={scrollToWork}
          aria-label="Scroll to selected work"
          className="scroll-cue absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{ top: "79%", zIndex: 3, textDecoration: "none" }}
        >
          <span className="scroll-cue-label text-xs tracking-[0.24em] uppercase">
            Selected Work
          </span>
          <span className="scroll-cue-ring" aria-hidden="true">
            <span className="scroll-cue-arrow">↓</span>
          </span>
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
          I learn unfamiliar industries fast and ship.{" "}
          <span style={{ color: "var(--muted)" }}>Digital content, finance, now semiconductors and AI search.</span>
        </h1>

        <div className="grid grid-cols-1 gap-5">
          {work.map((card, i) => (
            <button
              key={card.slug || "m-work-" + i}
              onClick={() => setActive(card)}
              className="polaroid text-left"
              style={{ padding: "10px 10px 26px", transform: "rotate(" + (i % 2 === 0 ? -1.5 : 1.5) + "deg)", width: "100%" }}
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
        .work-card {
          transition: box-shadow 0.28s ease;
        }
        .work-card:hover {
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.20), 0 2px 6px rgba(0, 0, 0, 0.10);
        }
        .work-card .polaroid-img {
          transition: transform 0.28s ease;
        }
        .work-card:hover .polaroid-img {
          transform: translateY(-3px);
        }
        .polaroid-view {
          position: absolute;
          top: 16px;
          right: 16px;
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: #20242c;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          padding: 6px 13px;
          border-radius: 999px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.10);
          opacity: 0;
          transform: translateY(-2px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          pointer-events: none;
          z-index: 2;
        }
        .work-card:hover .polaroid-view {
          opacity: 1;
          transform: translateY(0);
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
          font-weight: 400;
          font-size: 14px;
          color: var(--polaroid-ink);
          letter-spacing: 0.01em;
          position: relative;
          z-index: 1;
        }
        .sticker {
          filter:
            drop-shadow(3px 0 0 #fff) drop-shadow(-3px 0 0 #fff)
            drop-shadow(0 3px 0 #fff) drop-shadow(0 -3px 0 #fff)
            drop-shadow(0 4px 6px rgba(0, 0, 0, 0.12));
        }
        .sticker:active { cursor: grabbing; }
        .sticker-wiggle {
          animation: sticker-wiggle-kf 0.5s ease-in-out;
        }
        @keyframes sticker-wiggle-kf {
          0%, 100% { transform: translate(-50%, -50%) rotate(var(--rot)); }
          25% { transform: translate(-50%, -50%) rotate(calc(var(--rot) - 6deg)); }
          75% { transform: translate(-50%, -50%) rotate(calc(var(--rot) + 6deg)); }
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
        /* Scroll cue — reads as a control, not just a label */
        .scroll-cue {
          color: var(--muted);
          transition: color 0.25s ease;
          cursor: pointer;
        }
        .scroll-cue:hover,
        .scroll-cue:focus-visible {
          color: var(--text);
        }
        .scroll-cue-label {
          font-family: var(--font-fraunces), serif;
          position: relative;
          padding-bottom: 5px;
        }
        .scroll-cue-label::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .scroll-cue:hover .scroll-cue-label::after,
        .scroll-cue:focus-visible .scroll-cue-label::after {
          transform: scaleX(1);
        }
        .scroll-cue-ring {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border: 1px solid currentColor;
          border-radius: 999px;
          opacity: 0.5;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .scroll-cue:hover .scroll-cue-ring,
        .scroll-cue:focus-visible .scroll-cue-ring {
          opacity: 1;
          transform: translateY(3px);
        }
        .scroll-cue-arrow {
          font-size: 14px;
          line-height: 1;
          animation: cue-bob 1.9s ease-in-out infinite;
        }
        .scroll-cue:hover .scroll-cue-arrow {
          animation-duration: 0.9s;
        }
        @keyframes cue-bob {
          0%, 100% { transform: translateY(-1px); }
          50% { transform: translateY(3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .scroll-cue-arrow, .sticker-wiggle { animation: none; }
          .scroll-cue-label::after, .scroll-cue-ring { transition: none; }
        }
      `}</style>
    </>
  );
}