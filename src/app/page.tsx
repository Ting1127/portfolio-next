import { getFeaturedProjects } from "@/lib/notion";
import { Nav } from "@/components/Nav";
import { PolaroidHero } from "@/components/PolaroidHero";

const testimonials = [
  {
    name: "PinChen Wu",
    role: "Web & UI Designer, KadoKawa",
    avatar: "/avatars/pinpin.jpeg",
    text: "Ting is a proactive and detail-oriented Product Owner who consistently drove product development forward with clarity and focus. She's quick to identify challenges, propose solutions, and facilitate team discussions to keep momentum going. She excels at aligning cross-functional teams around shared goals, and led user research initiatives and data tracking strategies to evaluate product impact — always seeking ways to iterate and improve based on real insights.",
  },
  {
    name: "Cloudia Shen",
    role: "UIUX / Product Designer, AI-integrated Design",
    avatar: "/avatars/cloudia.jpeg",
    text: "One thing I really appreciate about Ting is how she often shares new insights about the industry, especially around user experience and business trends. Every time we chat, I walk away with a new idea or perspective. If you're looking for someone who's smart, curious, and always eager to learn and share, Ting's the kind of person you want on your team.",
  },
];

export default async function Home() {
  const featured = await getFeaturedProjects();

  // Shape Notion data into the props PolaroidHero expects.
  const workCards = featured.map((project: any) => {
    const props = project.properties;
    return {
      title: props.Name?.title?.[0]?.plain_text || "",
      slug: props.Slug?.rich_text?.[0]?.plain_text || "",
      summary: props.Summary?.rich_text?.[0]?.plain_text || "",
      tags: props.Tags?.multi_select?.map((t: any) => t.name) || [],
      coverImage: props["Cover Image"]?.rich_text?.[0]?.plain_text || "",
      meta: props.Company?.rich_text?.[0]?.plain_text || "",
    };
  });

  return (
    <main className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>

      <Nav />

      {/* Hero — draggable polaroid cards */}
      <PolaroidHero work={workCards} />

      {/* Featured Cases */}
      <section className="px-8 pb-32 max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--muted)" }}>
          Selected Work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project: any) => {
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

        {/* Explore more */}
        <div className="flex justify-center mt-12">
          <a href="/work" className="btn-secondary">Explore more</a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 pb-32 max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--muted)" }}>
          What people say
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i}
              className="rounded-2xl p-8 border"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
              <p className="text-lg mb-6" style={{ color: "var(--accent)" }}>⟡</p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text)" }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
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