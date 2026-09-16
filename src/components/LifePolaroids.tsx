"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export type LifePhoto = { src: string; alt?: string };
export type LifePile = { id: string; photos: LifePhoto[]; lines: string[] };

// 一堆裡每張卡的位置 [dx px, dy px, rotateDeg]，依照片張數選用
const PILE_LAYOUT: Record<number, number[][]> = {
  1: [[0, 0, -3]],
  2: [[-70, -8, -5], [70, 14, 4]],
  3: [[-80, 16, -6], [0, -24, 3], [80, 12, 5]],
};
const CARD_W = 185; // 拍立得寬度
const SPREAD = 1.08; // 碰到時散開的倍率

// 每堆的寬度 = 最外側卡片的位移 × 2 + 卡片寬度
const pileWidth = (count: number) => {
  const layout = PILE_LAYOUT[Math.min(Math.max(count, 1), 3)];
  const maxDx = Math.max(...layout.map(([dx]) => Math.abs(dx)));
  return Math.round(maxDx * 2 * SPREAD + CARD_W + 10);
};
const EASE = "cubic-bezier(0.22,1,0.36,1)";

type DragState = { id: string; startX: number; startY: number; baseX: number; baseY: number; moved: boolean } | null;

function Bubble({ lines, open, mobile }: { lines: string[]; open: boolean; mobile?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [flip, setFlip] = useState(false);

  // 泡泡會超出視窗右邊時，改成往左長（隱藏時也要算，不然會撐出橫向捲軸）
  useLayoutEffect(() => {
    if (mobile) return;
    const measure = () => {
      const el = ref.current;
      const anchor = el?.parentElement;
      if (!el || !anchor) return;
      const left = anchor.getBoundingClientRect().left;
      setFlip(left + el.offsetWidth > document.documentElement.clientWidth - 16);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [mobile]);

  return (
    <div
      ref={ref}
      aria-hidden={mobile ? undefined : !open}
      className={"bubble" + (open ? " is-open" : "") + (mobile ? " is-mobile" : "") + (flip ? " is-flipped" : "")}
    >
      {lines.map((line) => (
        <span key={line} className="bubble-line">{line}</span>
      ))}
    </div>
  );
}

export function LifePolaroids({ piles }: { piles: LifePile[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [active, setActive] = useState<LifePhoto | null>(null);
  const [offsets, setOffsets] = useState<Record<string, { x: number; y: number }>>({});
  const [zMap, setZMap] = useState<Record<string, number>>({});
  const [zTop, setZTop] = useState(20);
  const [dealt, setDealt] = useState(false);
  const drag = useRef<DragState>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 捲到這一區才發牌
  useEffect(() => {
    const el = areaRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDealt(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDealt(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const openPile = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenId(id);
  };
  const closePile = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenId((cur) => (cur === id ? null : cur)), 120);
  };

  const onDown = (id: string) => (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
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
  const onUp = (photo: LifePhoto) => () => {
    const d = drag.current;
    drag.current = null;
    if (d && !d.moved) setActive(photo);
  };

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <filter id="lifePaperNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.05" />
          </feComponentTransfer>
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>
      </svg>

      {/* ===== DESKTOP（xl 以上，1280px）：三堆拍立得，碰到出現對話泡泡 ===== */}
      <div
        ref={areaRef}
        className="hidden xl:flex justify-between items-end relative"
        style={{ height: "400px", marginLeft: "-190px", marginRight: "-190px" }}
      >
        {piles.map((pile, p) => {
          const open = openId === pile.id;
          const photos = pile.photos.slice(0, 3);
          const layout = PILE_LAYOUT[photos.length] || PILE_LAYOUT[3];

          return (
            <div
              key={pile.id}
              className="relative flex-shrink-0"
              style={{
                width: `${pileWidth(photos.length)}px`,
                height: "290px",
                zIndex: open ? 50 : 10 + p,
              }}
              onPointerEnter={(e) => e.pointerType === "mouse" && openPile(pile.id)}
              onPointerLeave={(e) => e.pointerType === "mouse" && closePile(pile.id)}
              onFocus={() => openPile(pile.id)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) closePile(pile.id);
              }}
            >
              {photos.map((photo, i) => {
                const id = `${pile.id}-${i}`;
                const [dx, dy, rot] = layout[i];
                const s = open ? SPREAD : 1;
                const off = offsets[id] || { x: 0, y: 0 };
                const dragging = drag.current?.id === id;
                const delay = 0.12 * p + 0.06 * i;

                return (
                  <div
                    key={id}
                    role="button"
                    tabIndex={0}
                    aria-label={photo.alt || `${pile.lines[0] ?? "Photo"} ${i + 1}`}
                    onPointerDown={onDown(id)}
                    onPointerMove={onMove}
                    onPointerUp={onUp(photo)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActive(photo);
                      }
                    }}
                    className="polaroid life-card select-none"
                    style={{
                      position: "absolute",
                      width: `${CARD_W}px`,
                      padding: "10px 10px 32px",
                      left: `calc(50% + ${dx * s + off.x}px)`,
                      top: `calc(50% + ${dy * s + off.y + (dealt ? 0 : 40)}px)`,
                      transform: `translate(-50%, -50%) rotate(${dealt ? rot * (open ? 1.2 : 1) : 0}deg)`,
                      opacity: dealt ? 1 : 0,
                      zIndex: zMap[id] || 10 + i,
                      transition: !dealt
                        ? "none"
                        : dragging
                          ? "box-shadow 0.28s ease"
                          : `left 0.6s ${EASE}, top 0.6s ${EASE} ${open ? 0 : delay}s, transform 0.6s ${EASE}, opacity 0.5s ease ${delay}s, box-shadow 0.28s ease`,
                    }}
                  >
                    <div className="polaroid-img">
                      <img src={photo.src} alt={photo.alt || ""} draggable={false} />
                    </div>
                  </div>
                );
              })}

              {/* 泡泡：右上角 */}
              <div className="absolute pointer-events-none" style={{ left: "58%", bottom: "92%", zIndex: 100 }}>
                <Bubble lines={pile.lines} open={open} />
              </div>
            </div>
          );
        })}
      </div>

      {/* ===== 手機與平板：沒有 hover，泡泡直接顯示在每堆上方 ===== */}
      <div className="xl:hidden space-y-10">
        {piles.map((pile) => (
          <div key={pile.id}>
            <div className="mb-4">
              <Bubble lines={pile.lines} open mobile />
            </div>
            <div className="flex pl-2">
              {pile.photos.slice(0, 3).map((photo, i) => (
                <button
                  key={`${pile.id}-m-${i}`}
                  type="button"
                  onClick={() => setActive(photo)}
                  aria-label={photo.alt || `${pile.lines[0] ?? "Photo"} ${i + 1}`}
                  className="polaroid flex-shrink-0"
                  style={{
                    width: "clamp(120px, 38vw, 170px)",
                    padding: "8px 8px 24px",
                    marginLeft: i === 0 ? 0 : "-14px",
                    marginTop: i % 2 ? "14px" : 0,
                    transform: `rotate(${[-4, 3, -2][i]}deg)`,
                    zIndex: i + 1,
                    cursor: "pointer",
                    touchAction: "auto",
                  }}
                >
                  <div className="polaroid-img">
                    <img src={photo.src} alt={photo.alt || ""} draggable={false} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ===== 放大檢視 ===== */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 flex items-center justify-center px-6"
          style={{ zIndex: 60, background: "rgba(10,13,18,0.72)", backdropFilter: "blur(3px)" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            className="polaroid"
            style={{ width: "min(480px, 92vw)", padding: "14px 14px 44px", transform: "rotate(-1.2deg)", cursor: "default" }}
          >
            <img
              src={active.src}
              alt={active.alt || ""}
              className="block w-full object-contain"
              style={{ maxHeight: "70vh", borderRadius: "2px", background: "var(--polaroid-placeholder)" }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .polaroid {
          position: relative;
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
          filter: url(#lifePaperNoise);
          opacity: 0.6;
          pointer-events: none;
          mix-blend-mode: multiply;
        }
        .life-card:hover,
        .life-card:focus-visible {
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.1);
          outline: none;
        }
        .polaroid-img {
          position: relative;
          z-index: 1;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 2px;
          background-color: var(--polaroid-placeholder);
        }
        .polaroid-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      {/* 泡泡樣式作用在 Bubble 子元件上，所以用 global */}
      <style jsx global>{`
        .bubble {
          display: inline-flex;
          flex-direction: column;
          gap: 4px;
          width: max-content;
          max-width: 320px;
          padding: 10px 18px;
          border-radius: 18px;
          background: var(--bg);
          border: 1px solid var(--border);
          box-shadow: 0 10px 24px -14px rgba(20, 25, 40, 0.35);
          color: var(--text);
          font-size: 15px;
          line-height: 1.45;
          transform-origin: 0% 100%;
          opacity: 0;
          visibility: hidden;
          transform: translateY(6px) scale(0.92);
          transition: opacity 0.2s ease, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), visibility 0s linear 0.25s;
        }
        .bubble.is-open {
          opacity: 1;
          visibility: visible;
          transform: none;
          transition: opacity 0.2s ease, transform 0.3s cubic-bezier(0.34, 1.4, 0.5, 1), visibility 0s;
        }
        .bubble.is-mobile {
          font-size: 14px;
          transition: none;
        }
        .bubble.is-flipped {
          position: absolute;
          right: 36px;
          bottom: 0;
          transform-origin: 100% 100%;
        }
        .bubble-line { white-space: nowrap; }
        @media (prefers-reduced-motion: reduce) {
          .bubble, .bubble.is-open { transition: none; }
        }
      `}</style>
    </>
  );
}