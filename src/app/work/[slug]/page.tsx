import { ThemeToggle } from "@/components/ThemeToggle";

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
          <a href="/drift" className="hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>Drift</a>
          <a href="/about" className="hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>About</a>
          <a href="https://linkedin.com/in/yuting-zeng1127" target="_blank"
            className="hidden sm:block hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>LinkedIn ↗</a>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-48 pb-16 px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-6" style={{ color: "var(--text)" }}>
          Kado+ Subscription
        </h1>
        <p className="text-xl max-w-2xl" style={{ color: "var(--muted)" }}>
          Building a 0→1 subscription product with global payment integration — from zero revenue to 10% growth.
        </p>

        {/* Overview bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          {[
            { label: "Role", value: "Product Manager" },
            { label: "Timeline", value: "Jun 2023 – Jul 2025" },
            { label: "Company", value: "KadoKawa Corp." },
            { label: "Tools", value: "Figma · Amplitude · Notion" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>{item.label}</p>
              <p className="text-sm" style={{ color: "var(--text)" }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cover image */}
      <div className="w-full aspect-[16/7] mb-16" style={{ background: "var(--bg-card)" }} />

      {/* Content + Sidebar */}
      <div className="px-8 max-w-5xl mx-auto flex gap-16 pb-32">

        {/* Sticky sidebar */}
        <aside className="hidden lg:block w-48 flex-shrink-0">
          <div className="sticky top-32">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Contents</p>
            <nav className="space-y-3">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`}
                  className="block text-sm hover:opacity-80 transition-opacity"
                  style={{ color: "var(--muted)" }}>
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
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>TL;DR</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: "0→1", label: "Built subscription product from scratch" },
                { number: "10%", label: "Revenue growth after launch" },
                { number: "3", label: "Payment integrations shipped (Apple IAP, Google Play, web)" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl p-6 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-3xl font-medium mb-2" style={{ color: "var(--accent)" }}>{stat.number}</p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Context */}
          <section id="context">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Context</p>
            <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text)" }}>Background placeholder</h2>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>Content coming soon...</p>
          </section>

          {/* Problem */}
          <section id="problem">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Problem</p>
            <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text)" }}>Problem placeholder</h2>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>Content coming soon...</p>
          </section>

          {/* Approach */}
          <section id="approach">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>My Approach</p>
            <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text)" }}>Approach placeholder</h2>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>Content coming soon...</p>
          </section>

          {/* What I Shipped */}
          <section id="shipped">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>What I Shipped</p>
            <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text)" }}>Shipped placeholder</h2>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>Content coming soon...</p>
          </section>

          {/* Results */}
          <section id="results">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Results & Impact</p>
            <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text)" }}>Results placeholder</h2>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>Content coming soon...</p>
          </section>

          {/* Learnings */}
          <section id="learnings">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Learnings</p>
            <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text)" }}>Learnings placeholder</h2>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>Content coming soon...</p>
          </section>

        </div>
      </div>

      {/* Next case */}
      <div className="px-8 pb-16 max-w-5xl mx-auto">
        <div className="border-t pt-12" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Next Case</p>
          <a href="/work/geo-monitoring"
            className="group flex justify-between items-center hover:opacity-70 transition-opacity">
            <p className="text-2xl font-medium" style={{ color: "var(--text)" }}>GEO Monitoring & Strategy →</p>
          </a>
        </div>
      </div>

      <footer className="px-8 py-12 border-t max-w-5xl mx-auto w-full" style={{ borderColor: "var(--border)" }}>
        <div className="flex justify-between items-center text-xs">
          <span style={{ color: "var(--muted)" }}>Jennie Z © 2026</span>
          <span style={{ color: "var(--accent)" }}>⟡</span>
        </div>
      </footer>

    </main>
  );
}