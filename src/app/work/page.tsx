import { getProjects } from "@/lib/notion";
import { ThemeToggle } from "@/components/ThemeToggle";

const earlyWork = [
  {
    title: "Synology Photos Home User Research",
    company: "Synology",
    role: "PM Intern",
    year: "2022",
    desc: "Led user research on home photo management — interviews and surveys across user types, synthesized into personas and an optimization roadmap.",
    cover: "/case/early/synology.jpg",
  },
  {
    title: "Cross-Device Multilingual Keyboard",
    company: "BenQ",
    role: "UX Design Intern",
    year: "2020",
    desc: "Designed a multilingual keyboard app for smart displays across device sizes.",
    cover: "/case/early/benq.jpg",
  },
  {
    title: "Singapore Brand Website UI",
    company: "Snapask",
    role: "UIUX Designer",
    year: "2021",
    desc: "Redesigned the Singapore learning platform with a self-directed learning visual identity.",
    cover: "/case/early/snapask.jpg",
  },
  {
    title: "OCR in Open Account Journey",
    company: "NEXT BANK",
    role: "Product Design Intern",
    year: "2020",
    desc: "Designed the OCR-assisted onboarding flow for Taiwan's first pure digital bank.",
    cover: "/case/early/nextbank.jpg",
  },
];

export default async function WorkPage() {
  const projects = await getProjects();

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
          <a href="/work" style={{ color: "var(--accent)" }}>Work</a>
          <a href="/drift" className="hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>Drift</a>
          <a href="/about" className="hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>About</a>
          <a href="https://drive.google.com/file/d/1sF1Nc4DJH51pFhCwRmBJBhDAHtIR7XmX/view?usp=sharing" target="_blank"
            className="hidden sm:block hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>Resume</a>
          <a href="https://linkedin.com/in/yuting-zeng1127" target="_blank"
            className="hidden sm:block hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>LinkedIn ↗︎</a>
          <ThemeToggle />
        </div>
      </nav>

      <section className="pt-48 pb-32 px-8 max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>Work</p>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4" style={{ color: "var(--text)" }}>
          All Projects
        </h1>
        <p className="text-sm mb-16" style={{ color: "var(--muted)" }}>
          {projects.length} cases across product, consulting, and research
        </p>

        {/* Main cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {projects.map((project: any) => {
            const props = project.properties;
            const title = props.Name?.title?.[0]?.plain_text || "";
            const slug = props.Slug?.rich_text?.[0]?.plain_text || "";
            const summary = props.Summary?.rich_text?.[0]?.plain_text || "";
            const tags = props.Tags?.multi_select?.map((t: any) => t.name) || [];
            const coverImage = props["Cover Image"]?.rich_text?.[0]?.plain_text || "";

            return (
              <a key={project.id} href={`/work/${slug}`} className="case-card">
                {/* Cover wrap */}
                <div className="card-cover-wrap aspect-[4/3]" style={{ background: "var(--border)" }}>
                  {coverImage ? (
                    <img
                      src={coverImage}
                      alt={title}
                      className="w-full h-full object-cover card-cover-img"
                    />
                  ) : (
                    <div className="w-full h-full" style={{ background: "var(--border)" }} />
                  )}
                  {/* Tag overlay on cover */}
                  {tags.length > 0 && (
                    <div className="card-tag-overlay">
                      {tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.9)",
                            backdropFilter: "blur(4px)",
                            color: "#0F1B33",
                            border: "1px solid rgba(255,255,255,0.5)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h2 className="text-xl font-medium mb-2" style={{ color: "var(--text)" }}>{title}</h2>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{summary}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Early work */}
        <div className="border-t pt-16" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>Earlier Work</p>
          <p className="text-sm mb-10" style={{ color: "var(--muted)" }}>Design & UX internships before moving into product.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {earlyWork.map((w) => (
              <div key={w.title} className="case-card">
                <div className="card-cover-wrap aspect-[4/3]" style={{ background: "var(--border)" }}>
                  <img
                    src={w.cover}
                    alt={w.title}
                    className="w-full h-full object-cover card-cover-img"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs uppercase tracking-widest" style={{ color: "var(--muted)" }}>{w.company}</p>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>{w.year}</p>
                  </div>
                  <h3 className="text-base font-medium mb-1" style={{ color: "var(--text)" }}>{w.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-8 py-12 border-t max-w-5xl mx-auto w-full" style={{ borderColor: "var(--border)" }}>
        <div className="flex justify-between items-center">
          <span className="text-xs" style={{ color: "var(--muted)" }}>Jennie Z © 2026</span>
          <div className="flex items-center gap-6">
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