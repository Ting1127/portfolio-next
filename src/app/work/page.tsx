import { getProjects } from "@/lib/notion";

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-[#0D0F14] text-[#EDE9DF]">
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#0D0F14]/90 backdrop-blur-sm border-b border-[#1E2A3A]">
      <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
  <span className="text-[#C9A84C] text-base">⟡</span>
  <span className="text-sm font-medium tracking-tight text-[#EDE9DF]">Jennie Z</span>
</a>
        <div className="flex items-center gap-8 text-sm text-[#EDE9DF]">
          <a href="/work" className="text-[#C9A84C]">Work</a>
          <a href="/drift" className="hover:text-[#C9A84C] transition-colors">Drift</a>
          <a href="/about" className="hover:text-[#C9A84C] transition-colors">About</a>
          <a href="https://linkedin.com/in/yuting-zeng1127" target="_blank"
            className="hover:text-[#C9A84C] transition-colors">LinkedIn ↗</a>
        </div>
      </nav>

      <section className="pt-48 pb-32 px-8 max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-[#C9A84C] mb-4">Work</p>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
          All Projects
        </h1>
        <p className="text-[#6B7280] text-sm mb-16">
          {projects.length} cases across product, consulting, and research
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project: any) => {
            const props = project.properties;
            const title = props.Name?.title?.[0]?.plain_text || "";
            const slug = props.Slug?.rich_text?.[0]?.plain_text || "";
            const summary = props.Summary?.rich_text?.[0]?.plain_text || "";
            const category = props.Category?.select?.name || "";
            const year = props.Year?.number || "";
            const company = props.Company?.rich_text?.[0]?.plain_text || "";
            const tags = props.Tags?.multi_select?.map((t: any) => t.name) || [];

            return (
              <a key={project.id} href={`/work/${slug}`}
                className="group block bg-[#141820] border border-[#1E2A3A] rounded-2xl overflow-hidden hover:border-[#C9A84C]/40 transition-all duration-300">
                <div className="aspect-[4/3] bg-[#1E2A3A]" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs text-[#C9A84C] uppercase tracking-widest">{category}</p>
                    <p className="text-xs text-[#6B7280]">{year}</p>
                  </div>
                  <h2 className="text-xl font-medium mb-2 text-[#EDE9DF]">{title}</h2>
                  <p className="text-sm text-[#6B7280] mb-4">{summary}</p>
                  {company && (
                    <p className="text-xs text-[#6B7280] border-t border-[#1E2A3A] pt-3 mb-3">{company}</p>
                  )}
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