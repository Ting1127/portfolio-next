export default function CaseStudyPage() {
    const sections = [
      { id: "tldr", label: "TL;DR" },
      { id: "context", label: "Context" },
      { id: "problem", label: "Problem" },
      { id: "approach", label: "My Approach" },
      { id: "shipped", label: "What I Shipped" },
      { id: "results", label: "Results & Impact" },
      { id: "learnings", label: "Learnings" },
    ];
  
    return (
      <main className="min-h-screen bg-[#0D0F14] text-[#EDE9DF]">
  
        {/* Nav */}
        <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#0D0F14]/90 backdrop-blur-sm border-b border-[#1E2A3A]">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
  <span className="text-[#C9A84C] text-base">⟡</span>
  <span className="text-sm font-medium tracking-tight text-[#EDE9DF]">Jennie Z</span>
</a>
          <div className="flex items-center gap-8 text-sm text-[#EDE9DF]">
            <a href="/work" className="hover:text-[#C9A84C] transition-colors">Work</a>
            <a href="/drift" className="hover:text-[#C9A84C] transition-colors">Drift</a>
            <a href="/about" className="hover:text-[#C9A84C] transition-colors">About</a>
            <a href="https://linkedin.com/in/yuting-zeng1127" target="_blank" className="hover:text-[#C9A84C] transition-colors">LinkedIn ↗</a>
          </div>
        </nav>
  
        {/* Hero */}
        <section className="pt-48 pb-16 px-8 max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[#C9A84C] mb-4">Product · KadoKawa · 2023–2025</p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
            Kado+ Subscription
          </h1>
          <p className="text-xl text-[#6B7280] max-w-2xl">
            Building a 0→1 subscription product with global payment integration — from zero revenue to 10% growth.
          </p>
  
          {/* Overview bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-[#1E2A3A]">
            {[
              { label: "Role", value: "Product Manager" },
              { label: "Timeline", value: "Jun 2023 – Jul 2025" },
              { label: "Company", value: "KadoKawa Corp." },
              { label: "Tools", value: "Figma · Amplitude · Notion" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-[#6B7280] uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-sm text-[#EDE9DF]">{item.value}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Cover image */}
        <div className="w-full aspect-[16/7] bg-[#1E2A3A] mb-16" />
  
        {/* Content + Sidebar */}
        <div className="px-8 max-w-5xl mx-auto flex gap-16 pb-32">
  
          {/* Sticky sidebar */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <div className="sticky top-32">
              <p className="text-xs text-[#6B7280] uppercase tracking-widest mb-4">Contents</p>
              <nav className="space-y-3">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`}
                    className="block text-sm text-[#6B7280] hover:text-[#C9A84C] transition-colors">
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
  
          {/* Main content */}
          <div className="flex-1 space-y-24">
  
            {/* TL;DR */}
            <section id="tldr">
              <p className="text-xs tracking-widest uppercase text-[#C9A84C] mb-6">TL;DR</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { number: "0→1", label: "Built subscription product from scratch" },
                  { number: "10%", label: "Revenue growth after launch" },
                  { number: "3", label: "Payment integrations shipped (Apple IAP, Google Play, web)" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#141820] border border-[#1E2A3A] rounded-2xl p-6">
                    <p className="text-3xl font-medium text-[#C9A84C] mb-2">{stat.number}</p>
                    <p className="text-sm text-[#6B7280]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>
  
            {/* Context */}
            <section id="context">
              <p className="text-xs tracking-widest uppercase text-[#C9A84C] mb-6">Context</p>
              <h2 className="text-2xl font-medium mb-4">Background placeholder</h2>
              <p className="text-[#6B7280] leading-relaxed">Content coming soon...</p>
            </section>
  
            {/* Problem */}
            <section id="problem">
              <p className="text-xs tracking-widest uppercase text-[#C9A84C] mb-6">Problem</p>
              <h2 className="text-2xl font-medium mb-4">Problem placeholder</h2>
              <p className="text-[#6B7280] leading-relaxed">Content coming soon...</p>
            </section>
  
            {/* Approach */}
            <section id="approach">
              <p className="text-xs tracking-widest uppercase text-[#C9A84C] mb-6">My Approach</p>
              <h2 className="text-2xl font-medium mb-4">Approach placeholder</h2>
              <p className="text-[#6B7280] leading-relaxed">Content coming soon...</p>
            </section>
  
            {/* What I Shipped */}
            <section id="shipped">
              <p className="text-xs tracking-widest uppercase text-[#C9A84C] mb-6">What I Shipped</p>
              <h2 className="text-2xl font-medium mb-4">Shipped placeholder</h2>
              <p className="text-[#6B7280] leading-relaxed">Content coming soon...</p>
            </section>
  
            {/* Results */}
            <section id="results">
              <p className="text-xs tracking-widest uppercase text-[#C9A84C] mb-6">Results & Impact</p>
              <h2 className="text-2xl font-medium mb-4">Results placeholder</h2>
              <p className="text-[#6B7280] leading-relaxed">Content coming soon...</p>
            </section>
  
            {/* Learnings */}
            <section id="learnings">
              <p className="text-xs tracking-widest uppercase text-[#C9A84C] mb-6">Learnings</p>
              <h2 className="text-2xl font-medium mb-4">Learnings placeholder</h2>
              <p className="text-[#6B7280] leading-relaxed">Content coming soon...</p>
            </section>
  
          </div>
        </div>
  
        {/* Next case */}
        <div className="px-8 pb-16 max-w-5xl mx-auto">
          <div className="border-t border-[#1E2A3A] pt-12">
            <p className="text-xs text-[#6B7280] uppercase tracking-widest mb-4">Next Case</p>
            <a href="/work/geo-monitoring"
              className="group flex justify-between items-center hover:opacity-70 transition-opacity">
              <p className="text-2xl font-medium">GEO Monitoring & Strategy →</p>
            </a>
          </div>
        </div>
  
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