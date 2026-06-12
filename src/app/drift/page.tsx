export default function DriftPage() {
    const projects = [
      {
        title: "Learning Japanese",
        description: "An interactive phonetics tool I built to learn hiragana, katakana, and pitch accent — because existing apps didn't work for me.",
        tag: "Tool",
        status: "live",
        link: "/tools/japanese.html",
        cover: null,
      },
      {
        title: "Journey",
        description: "A collaborative record built on Google Sites.",
        tag: "Log",
        status: "live",
        link: "https://sites.google.com/view/ourjourneytinguan/our-journey",
        cover: null,
      },
      {
        title: "Coffee Log",
        description: "Tracking every café and coffee brand I've visited — photos, notes, and the story behind each cup.",
        tag: "Log",
        status: "in progress",
        link: null,
        cover: null,
      },
      {
        title: "PM Workflow",
        description: "Templates, frameworks, and thinking tools I actually use as a PM. Opinionated and evolving.",
        tag: "Workflow",
        status: "in progress",
        link: null,
        cover: null,
      },
      {
        title: "Exhibitions & Films",
        description: "A running collection of exhibitions and movies that shaped how I think about design and storytelling.",
        tag: "Collection",
        status: "in progress",
        link: null,
        cover: null,
      },
    ];
  
    const tagColors: Record<string, string> = {
      Tool: "border-[#C9A84C] text-[#C9A84C]",
      Log: "border-[#5DCAA5] text-[#5DCAA5]",
      Workflow: "border-[#7F77DD] text-[#7F77DD]",
      Collection: "border-[#D4537E] text-[#D4537E]",
    };
  
    return (
      <main className="min-h-screen bg-[#0D0F14] text-[#EDE9DF]">
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
  
        <section className="pt-48 pb-32 px-8 max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[#C9A84C] mb-4">Drift</p>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Things I drift into
          </h1>
          <p className="text-[#6B7280] text-sm mb-16 max-w-xl">
            Tools I build, logs I keep, and rabbit holes I fall into — outside of work.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => {
              const Wrapper = p.link ? "a" : "div";
              const wrapperProps = p.link
                ? { href: p.link, target: p.link.startsWith("http") ? "_blank" : undefined }
                : {};
  
              return (
                <Wrapper key={p.title} {...wrapperProps}
                  className={`block bg-[#141820] border border-[#1E2A3A] rounded-2xl overflow-hidden ${p.link ? "hover:border-[#C9A84C]/40 transition-all duration-300 cursor-pointer" : ""}`}>
                  <div className="aspect-[4/3] bg-[#1E2A3A] flex items-center justify-center">
                    {p.cover
                      ? <img src={p.cover} alt={p.title} className="w-full h-full object-cover" />
                      : <p className="text-xs text-[#6B7280]">coming soon</p>
                    }
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${tagColors[p.tag]}`}>
                        {p.tag}
                      </span>
                      {p.status === "in progress" && (
                        <span className="text-xs text-[#6B7280]">in progress</span>
                      )}
                    </div>
                    <h2 className="text-xl font-medium mb-2 text-[#EDE9DF]">{p.title}</h2>
                    <p className="text-sm text-[#6B7280]">{p.description}</p>
                    {p.link && (
                      <p className="text-xs text-[#C9A84C] mt-4">
                        {p.link.startsWith("http") ? "Visit ↗" : "Open →"}
                      </p>
                    )}
                  </div>
                </Wrapper>
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