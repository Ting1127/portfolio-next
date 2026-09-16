type MetaItem = { label: string; value: string };

type Cover =
  | { type: "video"; src: string }
  | { type: "image"; src: string; alt: string }
  | { type: "placeholder" };

interface CaseHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  meta: MetaItem[];
  cover?: Cover;
  /** Accent for the eyebrow label. Defaults to var(--accent). */
  accentColor?: string;
  /** Page container width, so the hero lines up with the page's content column. */
  containerClassName?: string;
}

export function CaseHero({
  eyebrow,
  title,
  subtitle,
  meta,
  cover,
  accentColor = "var(--accent)",
  containerClassName = "max-w-6xl",
}: CaseHeroProps) {
  const metaCols = meta.length >= 4 ? "md:grid-cols-4" : "md:grid-cols-3";

  return (
    <>
      {/* Hero text */}
      <section className={`pt-40 pb-12 px-8 mx-auto ${containerClassName}`}>
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: accentColor }}>
          {eyebrow}
        </p>
        <h1
          className="text-3xl md:text-4xl font-medium tracking-tight leading-[1.15] mb-4"
          style={{ color: "var(--text)" }}
        >
          {title}
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
          {subtitle}
        </p>
        <div
          className={`grid grid-cols-2 ${metaCols} gap-6 mt-10 pt-6 border-t`}
          style={{ borderColor: "var(--border)" }}
        >
          {meta.map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>
                {item.label}
              </p>
              <p className="text-sm" style={{ color: "var(--text)" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cover — capped at max-w-4xl and centered */}
      {cover && (
        <div className={`w-full mb-16 px-8 mx-auto ${containerClassName}`}>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
            {cover.type === "video" && (
              <video
                src={cover.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto block"
              />
            )}
            {cover.type === "image" && (
              <img src={cover.src} alt={cover.alt} className="w-full h-auto block" />
            )}
            {cover.type === "placeholder" && (
              <div className="aspect-video" style={{ background: "var(--border)" }} />
            )}
          </div>
        </div>
      )}
    </>
  );
}