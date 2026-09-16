"use client";

import { useEffect, useRef, useState } from "react";

type Photo = { src: string; alt: string };

// 第一張 = 預設顯示；後面三張 = 可以替換 3 次
const PHOTOS: Photo[] = [
  { src: "/about-photo.jpg", alt: "Jennie" },
  { src: "/about-photo-2.jpg", alt: "Jennie" },
  { src: "/about-photo-3.jpg", alt: "Jennie" },
  { src: "/about-photo-4.jpg", alt: "Jennie" },
];

// 每往後一層：往右移多少 %（相對卡片寬）、旋轉幾度、縮小多少
// REST = 預設微微露出，暗示可以翻；FAN = 滑鼠移上時展開
const REST = { x: 4, rotate: 2, scale: 0.03 };
const FAN = { x: 18, rotate: 5, scale: 0.05 };
const EASE = "cubic-bezier(0.2, 0.8, 0.2, 1)";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function PhotoStack({
  photos = PHOTOS,
  className = "w-40 md:w-48",
}: {
  photos?: Photo[];
  className?: string;
}) {
  const [front, setFront] = useState(0);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const reduced = usePrefersReducedMotion();
  const n = photos.length;

  // 手機：點照片以外的地方就收起來
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  const handleClick = () => {
    // 手機第一次點：先展開；之後每點一次換下一張
    if (!open) {
      setOpen(true);
      return;
    }
    setFront((f) => (f + 1) % n);
  };

  return (
    <button
      ref={ref}
      type="button"
      aria-label={`Photo ${front + 1} of ${n}. Click to see the next one.`}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setOpen(false);
      }}
      onFocus={(e) => {
        if (e.currentTarget.matches(":focus-visible")) setOpen(true);
      }}
      onBlur={() => setOpen(false)}
      onClick={handleClick}
      className={`relative block flex-shrink-0 cursor-pointer rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--polaroid-ink)] ${className}`}
      style={{ aspectRatio: "3 / 4" }}
    >
      {photos.map((photo, i) => {
        const depth = (i - front + n) % n; // 0 = 最前面
        const isFront = depth === 0;

        const s = open ? FAN : REST;
        const transform = isFront
          ? "none"
          : `translateX(${depth * s.x}%) rotate(${depth * s.rotate}deg) scale(${1 - depth * s.scale})`;

        return (
          <div
            key={photo.src}
            aria-hidden={!isFront}
            className="absolute inset-0 overflow-hidden rounded-2xl"
            style={{
              zIndex: n - depth,
              background: "var(--polaroid-placeholder)",
              transform,
              transformOrigin: "50% 100%",
              boxShadow: reduced
                ? "none"
                : open
                  ? "0 14px 32px -16px rgba(40, 30, 20, 0.35)"
                  : "0 8px 20px -14px rgba(40, 30, 20, 0.3)",
              transition: reduced
                ? "none"
                : `transform 550ms ${EASE}, box-shadow 300ms ease`,
              transitionDelay: open && !reduced ? `${depth * 40}ms` : "0ms",
            }}
          >
            <img
              src={photo.src}
              alt={isFront ? photo.alt : ""}
              draggable={false}
              className="w-full h-full object-cover select-none"
            />
          </div>
        );
      })}
    </button>
  );
}