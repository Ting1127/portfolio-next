import { getFeaturedProjects } from "@/lib/notion";

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

  return (
    <main className="min-h-screen bg-[#0D0F14] text-[#EDE9DF]">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-[#0D0F14]/90 backdrop-blur-sm border-b border-[#1E2A3A]">
  <a href="/" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
    <span className="text-[#C9A84C] text-sm">⟡</span>
    <span className="text-sm font-medium tracking-tight text-[#EDE9DF]">Jennie Z</span>
  </a>
  <div className="flex items-center gap-5 text-sm text-[#EDE9DF]">
    <a href="/work" className="hover:text-[#C9A84C] transition-colors">Work</a>
    <a href="/drift" className="hover:text-[#C9A84C] transition-colors">Drift</a>
    <a href="/about" className="hover:text-[#C9A84C] transition-colors">About</a>
    <a href="https://linkedin.com/in/yuting-zeng1127" target="_blank"
      className="hidden sm:block hover:text-[#C9A84C] transition-colors">LinkedIn ↗</a>
  </div>
</nav>

      {/* Hero */}
      <section className="pt-48 pb-32 px-8 max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-[#C9A84C] mb-6">
          Product Manager
        </p>
        <h1 className="text-4xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-8">
          PM with a designer&apos;s eye,<br />
          researcher&apos;s instinct,<br />
          and AI-first mindset —<br />
          <span className="text-[#6B7280]">
            turning unfamiliar problems<br />into shipped products. ⟡
          </span>
        </h1>
        <div className="flex gap-6 mt-12">
          <a href="/work"
            className="px-6 py-3 border border-[#C9A84C] text-[#C9A84C] text-sm rounded-full hover:bg-[#C9A84C] hover:text-[#0D0F14] transition-all">
            View Work
          </a>
          <a href="/about"
            className="px-6 py-3 border border-[#1E2A3A] text-[#6B7280] text-sm rounded-full hover:border-[#EDE9DF] hover:text-[#EDE9DF] transition-all">
            About Me
          </a>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="px-8 pb-32 max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-[#6B7280] mb-8">
          Selected Work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project: any) => {
            const props = project.properties;
            const title = props.Name?.title?.[0]?.plain_text || "";
            const slug = props.Slug?.rich_text?.[0]?.plain_text || "";
            const summary = props.Summary?.rich_text?.[0]?.plain_text || "";
            const category = props.Category?.select?.name || "";
            const tags = props.Tags?.multi_select?.map((t: any) => t.name) || [];
            
            return (
              <a key={project.id} href={`/work/${slug}`}
                className="group block bg-[#141820] border border-[#1E2A3A] rounded-2xl overflow-hidden hover:border-[#C9A84C]/40 transition-all duration-300">
                <div className="aspect-[4/3] bg-[#1E2A3A]" />
                <div className="p-6">
                  <p className="text-xs text-[#C9A84C] mb-3 uppercase tracking-widest">
                    {category}
                  </p>
                  <h2 className="text-xl font-medium mb-2 text-[#EDE9DF]">{title}</h2>
                  <p className="text-sm text-[#6B7280] mb-4">{summary}</p>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag: string) => (
                        <span key={tag}
                          className="text-xs px-2 py-1 rounded-full border border-[#1E2A3A] text-[#6B7280]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 pb-32 max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-[#6B7280] mb-8">
          What people say
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i}
              className="bg-[#141820] border border-[#1E2A3A] rounded-2xl p-8">
              <p className="text-[#C9A84C] text-lg mb-6">⟡</p>
              <p className="text-[#EDE9DF] text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
  <img
    src={t.avatar}
    alt={t.name}
    className="w-10 h-10 rounded-full object-cover"
  />
  <div>
    <p className="text-sm font-medium text-[#EDE9DF]">{t.name}</p>
    <p className="text-xs text-[#6B7280] mt-0.5">{t.role}</p>
  </div>
</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-[#1E2A3A] max-w-5xl mx-auto w-full">
  <div className="flex justify-between items-center">
  <span className="text-xs text-[#6B7280]">Jennie Z © 2026</span>
    <div className="flex items-center gap-6">
      <a href="https://linkedin.com/in/yuting-zeng1127" target="_blank"
        className="text-xs text-[#6B7280] hover:text-[#C9A84C] transition-colors">LinkedIn ↗</a>
      <a href="mailto:zyting.info@gmail.com"
        className="text-xs text-[#6B7280] hover:text-[#C9A84C] transition-colors">zyting.info@gmail.com</a>
      <span className="text-[#C9A84C]">⟡</span>
    </div>
  </div>
</footer>

    </main>
  );
}