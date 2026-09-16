import fs from "fs";
import path from "path";
import { ThemeToggle } from "@/components/ThemeToggle";

// 圖片放在 public/drift/，檔名 = 卡片 id（例如 public/drift/coffee-log.jpg）
// 檔案不存在時自動顯示灰色佔位，不會出現破圖
const coverFor = (id: string) => {
  const src = `/drift/${id}.jpg`;
  return fs.existsSync(path.join(process.cwd(), "public", src)) ? src : null;
};

export default function DriftPage() {
  const projects = [
    {
      id: "learning-japanese",
      title: "Learning Japanese",
      description: "An interactive phonetics tool I built to learn hiragana, katakana, and pitch accent — because existing apps didn't work for me.",
      tag: "Tool",
      status: "live",
      link: null as string | null, // 先不放連結（之後填回網址即可）
    },
    {
      id: "travel",
      title: "Ting & Guan Journey",
      description: "971 days of travels mapped and documented together. A collaborative record built on Google Sites.",
      tag: "Log",
      status: "live",
      link: null as string | null, // 先不放連結（之後填回網址即可）
    },
    {
      id: "coffee-log",
      title: "Coffee Log",
      description: "Researching coffee brand experience since 2021. Tracking every café and coffee brand I've visited — photos, notes, and the story behind each cup.",
      tag: "Log",
      status: "in progress",
      link: null,
    },
    {
      id: "pm-workflow",
      title: "PM Workflow",
      description: "Templates, frameworks, and thinking tools I actually use as a PM. Opinionated and evolving.",
      tag: "Workflow",
      status: "in progress",
      link: null,
    },
    {
      id: "exhibitions-films",
      title: "Exhibitions & Films",
      description: "A running collection of exhibitions and movies that shaped how I think about design and storytelling.",
      tag: "Collection",
      status: "in progress",
      link: null,
    },
  ];

  const communityWork = [
    {
      title: "2021 Taiwan UX Industry Survey",
      org: "UXTW",
      desc: "Led visual design for the annual UX industry report — data visualization, infographics, and survey analysis.",
      cover: "/case/community/uxtw.jpg",
      link: "https://drive.google.com/file/d/1Iv4QPX-FaPmPtG3pGEe8216bxHdY0RlS/view" as string | null,
    },
    {
      title: "Event Branding & Communications",
      org: "Taiwan Data Science",
      desc: "Designed event banners, managed LinkedIn and FB channels, and handled speaker communications since 2022.",
      cover: "/case/community/twds.jpg",
      link: null as string | null,
    },
  ];

  const tagColors: Record<string, { border: string; color: string }> = {
    Tool:       { border: "var(--accent)",        color: "var(--accent)" },
    Log:        { border: "#1D9E75",               color: "#1D9E75" },
    Workflow:   { border: "var(--accent-purple)",  color: "var(--accent-purple)" },
    Collection: { border: "#D4537E",               color: "#D4537E" },
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm border-b"
        style={{ background: "color-mix(in srgb, var(--bg) 90%, transparent)", borderColor: "var(--border)" }}>
        <a href="/" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <span className="text-sm" style={{ color: "var(--accent)" }}>⟡</span>
          <span className="text-sm font-medium tracking-tight" style={{ color: "var(--text)" }}>Jennie Z</span>
        </a>
        <div className="flex items-center gap-5 text-sm">
          <a href="/work" className="hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>Work</a>
          <a href="/drift" style={{ color: "var(--accent)" }}>Drift</a>
          <a href="/about" className="hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>About</a>
          <a href="https://drive.google.com/file/d/1sF1Nc4DJH51pFhCwRmBJBhDAHtIR7XmX/view?usp=sharing" target="_blank"
            className="hidden sm:block hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>Resume</a>
          <a href="https://linkedin.com/in/yuting-zeng1127" target="_blank"
            className="hidden sm:block hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>LinkedIn ↗︎</a>
          <ThemeToggle />
        </div>
      </nav>

      <section className="pt-48 pb-32 px-8 max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>Drift</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4" style={{ color: "var(--text)" }}>
          Things I drift into
        </h1>
        <p className="text-sm mb-6 max-w-xl" style={{ color: "var(--muted)" }}>
          Tools I build, logs I keep, and rabbit holes I fall into — outside of work.
        </p>

        {/* Work-in-progress notice */}
        <div role="status"
          className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-dashed mb-16"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
          <span style={{ color: "var(--accent)" }}>⟡</span>
          This page is still being built. More covers and stories coming soon.
        </div>

        {/* Playground projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {projects.map((p) => {
            const tc = tagColors[p.tag] ?? { border: "var(--border)", color: "var(--muted)" };
            const Wrapper = p.link ? "a" : "div";
            const wrapperProps = p.link
              ? { href: p.link, target: p.link.startsWith("http") ? "_blank" : undefined }
              : {};

            return (
              <Wrapper key={p.title} id={p.id} {...(wrapperProps as any)}
                className="block rounded-2xl overflow-hidden border transition-all duration-300 scroll-mt-24 relative hover:z-10 hover:rotate-2"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <div className="aspect-[16/9] overflow-hidden" style={{ background: "var(--border)" }}>
                  {coverFor(p.id) && (
                    <img src={coverFor(p.id)!} alt={p.title} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs px-2.5 py-1 rounded-full border"
                      style={{ borderColor: tc.border, color: tc.color }}>
                      {p.tag}
                    </span>
                    {p.status === "in progress" && (
                      <span className="text-xs" style={{ color: "var(--muted)" }}>In progress</span>
                    )}
                    {p.status === "live" && (
                      <span className="text-xs" style={{ color: "#1D9E75" }}>{p.link ? "↗︎ Live" : "Live"}</span>
                    )}
                  </div>
                  <h2 className="text-lg font-medium mb-2" style={{ color: "var(--text)" }}>{p.title}</h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{p.description}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>

        {/* Community design */}
        <div id="community-design" className="border-t pt-16 scroll-mt-24" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>Community Design</p>
          <p className="text-sm mb-10" style={{ color: "var(--muted)" }}>Visual work for communities I care about.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityWork.map((w) => {
              const CardTag = w.link ? "a" : "div";
              const linkProps = w.link ? { href: w.link, target: "_blank", rel: "noopener noreferrer" } : {};
              return (
              <CardTag key={w.title} {...(linkProps as any)} className="block rounded-2xl overflow-hidden border transition-all duration-300 relative hover:z-10 hover:rotate-2" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <div className="aspect-[4/3] overflow-hidden" style={{ background: "var(--border)" }}>
                  <img src={w.cover} alt={w.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs uppercase tracking-widest" style={{ color: "var(--muted)" }}>{w.org}</p>
                    {w.link && (
                      <span className="text-xs" style={{ color: "var(--accent)" }}>View report ↗︎</span>
                    )}
                  </div>
                  <h3 className="text-base font-medium mb-1" style={{ color: "var(--text)" }}>{w.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{w.desc}</p>
                </div>
              </CardTag>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="px-8 py-12 border-t max-w-5xl mx-auto w-full" style={{ borderColor: "var(--border)" }}>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <span className="text-xs" style={{ color: "var(--muted)" }}>Jennie Z © 2026</span>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a href="https://drive.google.com/file/d/1sF1Nc4DJH51pFhCwRmBJBhDAHtIR7XmX/view?usp=sharing" target="_blank"
              className="text-xs hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>Resume</a>
            <a href="https://linkedin.com/in/yuting-zeng1127" target="_blank"
              className="text-xs hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>LinkedIn ↗︎</a>
            <a href="mailto:zyting.info@gmail.com"
              className="text-xs hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>zyting.info@gmail.com</a>
            <span style={{ color: "var(--accent)" }}>⟡</span>
          </div>
        </div>
      </footer>

    </main>
  );
}