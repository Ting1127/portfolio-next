import { ThemeToggle } from "@/components/ThemeToggle";

export default function KadoSubscriptionPage() {
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
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>Product</p>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-6" style={{ color: "var(--text)" }}>
          Kado+ Subscription
        </h1>
        <p className="text-xl max-w-2xl" style={{ color: "var(--muted)" }}>
          Building a 0→1 subscription service for Japanese light novels — from zero revenue to 10% growth.
        </p>
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

      {/* Cover video */}
      <div className="w-full mb-16 px-8 max-w-5xl mx-auto">
        <div className="rounded-2xl overflow-hidden">
          <video
            src="/case/kado/KadoPlus_project_cover.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full object-cover"
          />
        </div>
      </div>

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
                { number: "10%", label: "Boosted overall product revenue after launch" },
                { number: "0→1", label: "Built Taiwan's first subscription service for Japanese light novels" },
                { number: "3", label: "Payment integrations shipped — Apple IAP, Google Play, web" },
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
            <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text)" }}>About KadoKawa & Kado+</h2>
            <p className="leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              KadoKawa is a publicly listed Japanese media group operating under a Global Media-Mix philosophy — creating IP with authors, distributing it across platforms, and connecting fans through communities. Major shareholders include Sony, Tencent, and Kakao.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              Kado+ is a subscription service tailored for Japanese light novel enthusiasts, offering digital, chapter-based access to the latest titles. The goal: reduce cost and time barriers for Taiwanese readers while building a sustainable content ecosystem for readers, the platform, and creators.
            </p>
            <div className="rounded-2xl p-6 border mb-8" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Team</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["2 Product Designers", "5 Engineers", "2 App Developers", "2 Data Scientists", "2 Marketing", "2 Content Strategy"].map(r => (
                  <span key={r} className="text-sm" style={{ color: "var(--muted)" }}>{r}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
              <img src="/case/kado/service-diagram.jpg" alt="Kado+ service diagram" className="w-full" />
            </div>
          </section>

          {/* Problem */}
          <section id="problem">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Problem</p>
            <h2 className="text-2xl font-medium mb-8" style={{ color: "var(--text)" }}>Three barriers blocking readers — and the business</h2>
            <div className="space-y-6">
              {[
                {
                  label: "Reader",
                  points: [
                    "Licensing barrier — official Japanese light novels require Taiwanese company authorization, limiting supply",
                    "Cost barrier — high per-book pricing made casual reading expensive",
                    "Time barrier — translation and licensing cycles delayed new releases significantly",
                  ]
                },
                {
                  label: "Business",
                  points: [
                    "IP Synergy — needed to leverage in-house IP to amplify PGC visibility",
                    "Anticipation & Insight — wanted pre-release warm-up data to understand reader preferences",
                    "Creator Economy — needed to offer creators diverse revenue streams beyond one-time sales",
                  ]
                },
              ].map((block) => (
                <div key={block.label} className="rounded-2xl p-6 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>{block.label}</p>
                  <ul className="space-y-3">
                    {block.points.map(pt => (
                      <li key={pt} className="text-sm leading-relaxed flex gap-3" style={{ color: "var(--muted)" }}>
                        <span style={{ color: "var(--accent)" }}>—</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Approach */}
          <section id="approach">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>My Approach</p>
            <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text)" }}>Defining the model before building the product</h2>
            <p className="leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              As the sole PM, I was responsible for defining the product model, feature requirements, and business logic needed to support the subscription structure. This meant working across content, marketing, tech, and data teams to align on what "success" looked like before a single line of code was written.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              The service ecosystem was designed around three roles — Reader, Platform, and Creator — each with distinct needs that had to be balanced without compromising the others.
            </p>
          </section>

          {/* What I Shipped */}
          <section id="shipped">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>What I Shipped</p>
            <h2 className="text-2xl font-medium mb-8" style={{ color: "var(--text)" }}>From MVP to retention-driving features</h2>
            <div className="space-y-4">
              {[
                { title: "Subscription MVP", desc: "Defined core feature set and payment flow, shipped on 2024/11/20" },
                { title: "Hero Banner & Thematic Stratification", desc: "Guided users to second and subsequent novels to reduce single-title churn" },
                { title: "Targeted Push Notifications", desc: "Used CTR variance across notification types to validate value propositions and improve reading initiation" },
                { title: "CMS Integration", desc: "Enabled content team to manage subscription titles independently" },
                { title: "3 Payment Integrations", desc: "Apple IAP, Google Play, and web — each with significant technical and policy coordination" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <span style={{ color: "var(--accent)" }}>⟡</span>
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: "var(--text)" }}>{item.title}</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section id="results">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Results & Impact</p>
            <h2 className="text-2xl font-medium mb-8" style={{ color: "var(--text)" }}>Measurable outcomes across retention and revenue</h2>
            <div className="space-y-4">
              {[
                { metric: "10%", desc: "Boost in overall product revenue post-launch" },
                { metric: "↑ Retention", desc: "Mitigated single-title churn through Hero Banner and thematic stratification, driving users to consume second and subsequent novels" },
                { metric: "↑ Insight", desc: "Validated user value propositions by correlating push notification CTRs with new reading initiation rates" },
                { metric: "🚀 First", desc: "Launched Taiwan's first subscription service for Japanese light novels" },
              ].map((item) => (
                <div key={item.metric} className="flex gap-6 p-5 rounded-2xl border items-start" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-xl font-medium w-28 flex-shrink-0" style={{ color: "var(--accent)" }}>{item.metric}</p>
                  <p className="text-sm leading-relaxed pt-1" style={{ color: "var(--muted)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Learnings */}
          <section id="learnings">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Learnings</p>
            <h2 className="text-2xl font-medium mb-8" style={{ color: "var(--text)" }}>What building 0→1 taught me</h2>
            <div className="space-y-6">
              {[
                { title: "Communication Alignment", body: "Establishing unified metric consensus among all stakeholders — Content, Marketing, Tech — is critical. Without shared definitions of success, resources scatter and cross-functional trust breaks down." },
                { title: "Third-Party Integration Complexity", body: "Integrating Apple and Google payment platforms involves significant technical and policy pitfalls that can't be rushed. Multi-round communication with platform representatives is non-negotiable for compliance and stability." },
                { title: "Balancing Internal vs. External Needs", body: "The core tension of 0→1 product building: internal business goals (content promotion, cost-efficiency) vs. external user expectations (ease-of-use, perceived value). Neither can dominate — the PM's job is to find the equilibrium." },
              ].map((item) => (
                <div key={item.title} className="border-l-2 pl-6" style={{ borderColor: "var(--accent)" }}>
                  <p className="text-sm font-medium mb-2" style={{ color: "var(--text)" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.body}</p>
                </div>
              ))}
            </div>
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
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/yuting-zeng1127" target="_blank"
              className="text-xs hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>LinkedIn ↗</a>
            <a href="mailto:zyting.info@gmail.com"
              className="text-xs hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>zyting.info@gmail.com</a>
            <span style={{ color: "var(--accent)" }}>⟡</span>
          </div>
        </div>
      </footer>

    </main>
  );
}