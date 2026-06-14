import { ThemeToggle } from "@/components/ThemeToggle";
import { TableOfContents } from "@/components/TableOfContents";

export default function GeoMonitoringPage() {
  const sections = [
    { id: "tldr", label: "TL;DR" },
    { id: "context", label: "Context" },
    { id: "problem", label: "The Core Problem" },
    { id: "approach", label: "My Approach" },
    { id: "delivered", label: "What I Delivered" },
    { id: "learnings", label: "Learnings" },
  ];

  return (
    <main className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm border-b"
        style={{ background: "color-mix(in srgb, var(--bg) 90%, transparent)", borderColor: "var(--border)" }}>
        <a href="/" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <span className="text-sm" style={{ color: "var(--accent-purple)" }}>⟡</span>
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
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent-purple)" }}>Consulting</p>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-6" style={{ color: "var(--text)" }}>
          GEO Monitoring & Strategy
        </h1>
        <p className="text-xl max-w-2xl" style={{ color: "var(--muted)" }}>
          Building a Fortune 500 semiconductor brand's first generative engine optimization system — from zero to a full monitoring and strategy framework.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          {[
            { label: "Role", value: "GEO Consultant" },
            { label: "Timeline", value: "Feb 2026 – Present" },
            { label: "Company", value: "Fortune 500 Semiconductor · via Teleworker" },
            { label: "Platforms", value: "ChatGPT · Perplexity · Google AIO" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>{item.label}</p>
              <p className="text-sm" style={{ color: "var(--text)" }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cover image */}
      <div className="w-full mb-16" style={{ background: "var(--bg-card)" }}>
        <div className="aspect-[16/7]" style={{ background: "var(--border)" }} />
      </div>

      {/* Content + Sidebar */}
      <div className="px-8 max-w-5xl mx-auto flex gap-16 pb-32">

        {/* Sticky sidebar */}
        <aside className="hidden lg:block w-48 flex-shrink-0">
          <div className="sticky top-32">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Contents</p>
            <TableOfContents sections={sections} accentColor="var(--accent-purple)" />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 space-y-24">

          {/* TL;DR */}
          <section id="tldr">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent-purple)" }}>TL;DR</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: "0→1", label: "Defined what GEO means for a Fortune 500 semiconductor brand and built the measurement system from scratch" },
                { number: "3", label: "AI platforms monitored — ChatGPT, Perplexity, Google AI Overviews" },
                { number: "New", label: "No established playbook. Every framework, metric, and prioritization rule had to be invented." },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl p-6 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-3xl font-medium mb-2" style={{ color: "var(--accent-purple)" }}>{stat.number}</p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Context */}
          <section id="context">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent-purple)" }}>Context</p>
            <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text)" }}>A new discipline with no established rules</h2>
            <p className="leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              As AI-powered search reshapes how brands get discovered, a new question emerged: when someone asks ChatGPT "which DDR5 memory brand is good?" or "what are the key semiconductor investments in Japan?" — what answer do they get, and is the brand in it?
            </p>
            <p className="leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              GEO (Generative Engine Optimization) is the discipline of ensuring your brand is accurately represented, cited, and contextually positioned in LLM-generated answers. Unlike SEO, there's no established standard, no universal metric, no agreed-upon playbook.
            </p>
            <p className="leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
              I joined as a GEO consultant at Teleworker, embedded within a Fortune 500 semiconductor company's communications team to build their GEO strategy from the ground up.
            </p>

            {/* Why now */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                { stat: "2027", label: "Semrush predicts LLM traffic will surpass Google" },
                { stat: "25%↓", label: "Traditional search volume projected to decline (Gartner)" },
                { stat: "60%", label: "Of search behaviors have evolved into Zero-Click journeys" },
              ].map((item) => (
                <div key={item.stat} className="rounded-2xl p-5 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-2xl font-medium mb-1" style={{ color: "var(--accent-purple)" }}>{item.stat}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{item.label}</p>
                </div>
              ))}
            </div>

            📷 *[AI trends chart — LLM traffic vs Traditional Search 2024–2030]*

            <div className="mt-8 rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
              <div className="p-6" style={{ background: "var(--bg-card)" }}>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>GEO vs SEO</p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Old SEO", items: ["Keywords", "Blue Link Ranking", "Traffic", "Backlinks"] },
                    { label: "New GEO", items: ["Entities & Intent", "Citations & Mentions", "Share of Voice", "Info Gain & E-E-A-T"] },
                  ].map((col) => (
                    <div key={col.label}>
                      <p className="text-xs font-medium mb-3" style={{ color: col.label === "New GEO" ? "var(--accent-purple)" : "var(--muted)" }}>{col.label}</p>
                      <ul className="space-y-2">
                        {col.items.map(item => (
                          <li key={item} className="text-sm" style={{ color: "var(--text)" }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Core Problem */}
          <section id="problem">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent-purple)" }}>The Core Problem</p>
            <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text)" }}>What does "being visible in AI" even mean?</h2>
            <p className="leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              Before I could build anything, I had to answer a harder question: what does "being visible in AI" mean for a semiconductor brand with multiple audiences, products, and regional markets?
            </p>
            <p className="leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              The client isn't one brand story. It's a technology company (AI Memory, HBM, DDR5), an employer (hiring across Asia-Pacific), a policy actor (local investments, government engagement), and an ecosystem partner (supply chain). Each surfaces in AI-generated answers through completely different prompts, asked by completely different people.
            </p>
            <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "var(--text)" }}>The problem wasn't just visibility.</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                It was that visibility meant different things depending on who was asking — and there was no framework to think about it systematically.
              </p>
            </div>
          </section>

          {/* Approach */}
          <section id="approach">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent-purple)" }}>My Approach</p>
            <h2 className="text-2xl font-medium mb-10" style={{ color: "var(--text)" }}>Three decisions that shaped the work</h2>

            {/* Decision 1 */}
            <div className="mb-16">
              <div className="flex gap-4 items-start mb-6">
                <span className="text-2xl font-medium flex-shrink-0" style={{ color: "var(--accent-purple)" }}>01</span>
                <h3 className="text-xl font-medium" style={{ color: "var(--text)" }}>Structure the prompt landscape before optimizing anything</h3>
              </div>
              <div className="space-y-4 pl-10">
                {[
                  { label: "Signal", body: "When I mapped out the types of questions people ask in AI search, a clear pattern emerged — some prompts are inherently global (technology and product comparisons), while others are deeply local (workplace culture, government investments, hiring expectations)." },
                  { label: "Bet", body: "Treating all prompts the same would be a mistake. A globally consistent message about the company's technology is right. A globally consistent message about it as an employer is wrong — what a hiring candidate in Taiwan cares about is fundamentally different from what a policy audience in Japan cares about." },
                  { label: "Decision", body: "Build a two-tier prompt taxonomy: Technology (Global) for product and competitive prompts requiring consistent, authoritative responses — and Brand Perception (Localized by Region) for workplace, policy, and brand awareness prompts requiring market-specific narratives." },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 pl-5" style={{ borderColor: "var(--accent-purple)" }}>
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--accent-purple)" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                <img src="/case/geo/prompt-framework.png" alt="Prompt Framework" className="w-full" />
              </div>
            </div>

            {/* Decision 2 */}
            <div className="mb-16">
              <div className="flex gap-4 items-start mb-6">
                <span className="text-2xl font-medium flex-shrink-0" style={{ color: "var(--accent-purple)" }}>02</span>
                <h3 className="text-xl font-medium" style={{ color: "var(--text)" }}>Fix absence before optimizing presence</h3>
              </div>
              <div className="space-y-4 pl-10">
                {[
                  { label: "Signal", body: "In a new field with no baseline, the instinct is to start building — create content, optimize pages, establish authority. But the first question should be: does the brand even show up? And when it does, is the information accurate?" },
                  { label: "Bet", body: "Misinformation and brand absence are more damaging than low ranking. If AI generates a wrong answer about the company's technology or misrepresents its workplace culture, that's actively harmful — not just a missed opportunity." },
                  { label: "Decision", body: "Establish a prioritization rule: Fix misinformation and missing brand presence first → then improve citation coverage → then build differentiation and authority. This sequencing prevented the team from optimizing the wrong things at the wrong time." },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 pl-5" style={{ borderColor: "var(--accent-purple)" }}>
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--accent-purple)" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decision 3 */}
            <div className="mb-8">
              <div className="flex gap-4 items-start mb-6">
                <span className="text-2xl font-medium flex-shrink-0" style={{ color: "var(--accent-purple)" }}>03</span>
                <h3 className="text-xl font-medium" style={{ color: "var(--text)" }}>Design the measurement system before picking the tools</h3>
              </div>
              <div className="space-y-4 pl-10">
                {[
                  { label: "Signal", body: "GEO metrics aren't standardized. Different platforms define 'visibility' differently. The temptation is to pick a tool and use whatever metrics it provides." },
                  { label: "Bet", body: "If you design your measurement system around tool capabilities, you end up measuring what's easy to track, not what actually matters. The measurement framework should come from the strategy, not from the dashboard." },
                  { label: "Decision", body: "Define a two-tier metric structure — Primary metrics (Brand Mentions, Citations, Cited Pages, LLM Traffic) tracked consistently every month, and Secondary metrics (Share of Voice, Answer Rank, Sentiment, Distribution by LLMs) used diagnostically to explain primary metric changes." },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 pl-5" style={{ borderColor: "var(--accent-purple)" }}>
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--accent-purple)" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.body}</p>
                  </div>
                ))}
              </div>

              {/* Metrics grid */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--accent-purple)" }}>Primary Metrics</p>
                  <ul className="space-y-2">
                    {["Brand Mentions", "Citations", "Cited Pages", "LLM Traffic"].map(m => (
                      <li key={m} className="text-sm flex gap-2" style={{ color: "var(--text)" }}>
                        <span style={{ color: "var(--accent-purple)" }}>—</span>{m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Secondary Metrics</p>
                  <ul className="space-y-2">
                    {["Share of Voice", "Answer Rank", "Sentiment", "Distribution by LLMs", "Mentions by Countries", "AI Visibility Score"].map(m => (
                      <li key={m} className="text-sm flex gap-2" style={{ color: "var(--muted)" }}>
                        <span>—</span>{m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* What I Delivered */}
          <section id="delivered">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent-purple)" }}>What I Delivered</p>
            <h2 className="text-2xl font-medium mb-8" style={{ color: "var(--text)" }}>From strategy to execution infrastructure</h2>
            <div className="space-y-4 mb-8">
              {[
                { title: "GEO Strategy Roadmap", desc: "Full strategy framework covering AI search landscape, GEO vs SEO positioning, prompt taxonomy, measurement system, and 3-month execution plan" },
                { title: "Prompt Framework", desc: "Structured two-tier taxonomy with sample prompts by category and market — Technology (Global) and Brand Perception (Localized by Region)" },
                { title: "Monitoring Infrastructure", desc: "Core Prompt Set (fixed baseline for trend comparison) + Exploratory Prompt Set (20% monthly rolling update to track emerging topics) across ChatGPT, Perplexity, and Google AI Overviews" },
                { title: "Content Execution Plan", desc: "Localized content strategy targeting key audience segments: supply chain partners, hiring candidates, and policy ecosystem audiences" },
                { title: "Monthly Reporting Framework", desc: "Standardized report structure enabling Before / Action / After comparison across platforms" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <span style={{ color: "var(--accent-purple)" }}>⟡</span>
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: "var(--text)" }}>{item.title}</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-5 border text-sm" style={{ background: "var(--bg-card)", borderColor: "var(--border)", color: "var(--muted)" }}>
              Due to NDA, specific performance metrics and client data are not disclosed.
            </div>
          </section>

          {/* Learnings */}
          <section id="learnings">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent-purple)" }}>Learnings</p>
            <h2 className="text-2xl font-medium mb-8" style={{ color: "var(--text)" }}>What building in a nascent field taught me</h2>
            <div className="space-y-6">
              {[
                { title: "GEO is a strategy problem before it's a content problem", body: "The temptation in a new field is to start doing — create content, run experiments, ship. But without a clear framework for what you're optimizing and for whom, execution becomes noise. The most valuable thing I did wasn't any single deliverable. It was defining the prompt taxonomy and measurement structure that made all subsequent decisions coherent." },
                { title: "'Localize' means more than translate", body: "A globally consistent brand message breaks down at the prompt level. The questions a hiring candidate in Taiwan asks are structurally different from the questions a policy audience in Japan asks. Localization in GEO isn't about language — it's about understanding what each audience is actually trying to find out, and making sure the right answer exists where AI will find it." },
                { title: "In nascent fields, the measurement framework is the strategy", body: "Unlike SEO, GEO metrics aren't standardized. There's no Google Analytics for LLM citations. Building a meaningful monitoring system required deciding what matters before knowing what's measurable — and being comfortable operating on judgment when dashboards don't yet exist. That discomfort is the job." },
              ].map((item) => (
                <div key={item.title} className="border-l-2 pl-6" style={{ borderColor: "var(--accent-purple)" }}>
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
          <a href="/work/kado-subscription"
            className="group flex justify-between items-center hover:opacity-70 transition-opacity">
            <p className="text-2xl font-medium" style={{ color: "var(--text)" }}>Kado+ Subscription →</p>
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
            <span style={{ color: "var(--accent-purple)" }}>⟡</span>
          </div>
        </div>
      </footer>

    </main>
  );
}