import { ThemeToggle } from "@/components/ThemeToggle";

export default function CreatorCenterPage() {
  const sections = [
    { id: "tldr", label: "TL;DR" },
    { id: "context", label: "Context" },
    { id: "problem", label: "Problem" },
    { id: "approach", label: "My Approach" },
    { id: "redesign", label: "The Redesign" },
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
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>Product · KadoKawa Corp.</p>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-6" style={{ color: "var(--text)" }}>
          Creator Center Redesign
        </h1>
        <p className="text-xl max-w-2xl" style={{ color: "var(--muted)" }}>
          Using mixed-methods research to cut through competing team priorities — and redesign a creator dashboard that actually reflects what creators need.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          {[
            { label: "Role", value: "Product Manager" },
            { label: "Timeline", value: "Jun 2023 – Jul 2025" },
            { label: "Company", value: "KadoKawa Corp." },
            { label: "Research", value: "258 surveys · 4 interviews" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>{item.label}</p>
              <p className="text-sm" style={{ color: "var(--text)" }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cover image */}
      <div className="w-full aspect-[16/7] mb-16 flex items-center justify-center"
        style={{ background: "var(--bg-card)" }}>
        {/* 📷 Replace with: /case/creator/cover.png */}
        <p className="text-xs" style={{ color: "var(--muted)" }}>📷 cover.png</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { number: "16.3%", label: "Boost in chapter editing rate after redesign" },
                { number: "258", label: "Survey responses collected across the creator ecosystem" },
                { number: "4", label: "In-depth creator interviews, selected to maximize profile diversity" },
                { number: "↑", label: "Certified Author application rate, creator education blog usage, and cross-departmental alignment — all improved" },
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
            <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text)" }}>
              A dashboard that hadn't been touched in two years
            </h2>
            <p className="leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
              KadoKado's Creator Center is the primary interface where novel writers manage their works, track performance, and interact with the platform. After 2+ years without a redesign, it had accumulated significant technical debt — key workflows required excessive steps, and creators were disengaged with features that should have been central to their experience.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              I led this project as the PM, owning the research strategy, feature prioritization, and redesign direction.
            </p>

            {/* 📷 */}
            <div className="mt-8 rounded-2xl border flex items-center justify-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "180px" }}>
              <p className="text-xs" style={{ color: "var(--muted)" }}>📷 creator-center-before.png — 舊版創作中心截圖</p>
            </div>
          </section>

          {/* Problem */}
          <section id="problem">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Problem</p>
            <h2 className="text-2xl font-medium mb-6" style={{ color: "var(--text)" }}>
              A product problem that had become a politics problem
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              The Creator Center had accumulated issues across two dimensions simultaneously:
            </p>

            <div className="space-y-4 mb-8">
              <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Product</p>
                <p className="text-sm font-medium mb-2" style={{ color: "var(--text)" }}>Technical debt and fragmented UX</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  2+ years without a redesign meant key feature operations required excessive steps. Data showed suboptimal engagement, but feedback from community channels was highly fragmented — vocal and unrepresentative. We had signal but no synthesis.
                </p>
              </div>
              <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Organizational</p>
                <p className="text-sm font-medium mb-2" style={{ color: "var(--text)" }}>Every team believed their feature was highest priority</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  The Creator Center had become a contested surface — content team, marketing, and engineering each had different views on what needed fixing most. Without a shared, evidence-based framework, there was no way to resolve competing priorities or commit resources to a redesign.
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-6 border-l-2" style={{ borderColor: "var(--accent)", background: "var(--bg-card)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                Before redesigning anything, we needed to understand the creator ecosystem systematically — and generate data that could speak for users when teams couldn't agree.
              </p>
            </div>
          </section>

          {/* Approach */}
          <section id="approach">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>My Approach</p>
            <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text)" }}>
              Research first — then redesign
            </h2>
            <p className="leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
              The instinct in a busy product org is to start building. I pushed for research first — not to slow things down, but because the cost of building the wrong thing was higher than the cost of a 2-week study.
            </p>

            {/* Phase 1: Survey */}
            <div className="mb-16">
              <div className="flex gap-4 items-start mb-6">
                <span className="text-2xl font-medium flex-shrink-0 w-10" style={{ color: "var(--accent)" }}>01</span>
                <h3 className="text-xl font-medium" style={{ color: "var(--text)" }}>Survey — understand the ecosystem at scale</h3>
              </div>

              <p className="leading-relaxed mb-6 pl-14" style={{ color: "var(--muted)" }}>
                258 valid responses collected Oct 26 – Nov 5, 2024, covering six key Creator Center functions.
              </p>

              {/* Demographics */}
              <div className="pl-14 grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {[
                  { stat: "42.2%", label: "25–34 years old — dominant age group" },
                  { stat: "72.5%", label: "Both readers and creators (not creator-only)" },
                  { stat: "82.7%", label: "Create primarily on desktop" },
                  { stat: "48.5%", label: "Also manage fan communities or social media" },
                  { stat: "~30%", label: "Use competing platforms simultaneously (POPO, Penana)" },
                  { stat: "45.6%", label: "Office workers; 25.5% students; 10% full-time writers" },
                ].map((item) => (
                  <div key={item.stat} className="rounded-xl p-4 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                    <p className="text-xl font-medium mb-1" style={{ color: "var(--accent)" }}>{item.stat}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Creator segmentation */}
              <div className="pl-14 mb-6">
                <p className="text-sm font-medium mb-4" style={{ color: "var(--text)" }}>
                  Creator segmentation: platform loyalty × usage frequency
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "C1", label: "High Loyalty · High Usage", desc: "Data-driven creators who value exposure and publishing workflow — the core audience to retain" },
                    { id: "C2", label: "Low Loyalty · High Usage", desc: "Power users who are active but not committed — at risk of leaving for a competitor with better tooling" },
                    { id: "C3", label: "Medium Loyalty · Medium Usage", desc: "Platform residents who know the ecosystem but have friction in daily workflow" },
                    { id: "C4", label: "Low Loyalty · Low Usage", desc: "Former creators who left due to poor experience — the most honest source of structural feedback" },
                  ].map((c) => (
                    <div key={c.id} className="rounded-2xl p-5 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--accent)" }}>{c.id}</p>
                      <p className="text-sm font-medium mb-2" style={{ color: "var(--text)" }}>{c.label}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 📷 */}
              <div className="pl-14 rounded-2xl border flex items-center justify-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "120px" }}>
                <p className="text-xs" style={{ color: "var(--muted)" }}>📷 creator-segmentation.png — C1/C2/C3/C4 象限圖（loyalty × usage frequency）</p>
              </div>
            </div>

            {/* Phase 2: Interviews */}
            <div className="mb-16">
              <div className="flex gap-4 items-start mb-6">
                <span className="text-2xl font-medium flex-shrink-0 w-10" style={{ color: "var(--accent)" }}>02</span>
                <h3 className="text-xl font-medium" style={{ color: "var(--text)" }}>Interviews — go deep on the quadrant extremes</h3>
              </div>

              <p className="leading-relaxed mb-6 pl-14" style={{ color: "var(--muted)" }}>
                4 one-on-one interviews (1–1.5 hours each), selected to maximize quadrant diversity. Key patterns:
              </p>

              <div className="pl-14 space-y-3 mb-6">
                {[
                  { label: "How creators arrive", desc: "Via Million Novel Awards and the Kadokawa brand — not through organic discovery. Entry point matters for onboarding design." },
                  { label: "Why creators stay", desc: "Platform investment (IP potential, marketing support), diverse audience, and community. Not the tooling — which means tooling friction is a churn risk." },
                  { label: "Why creators leave", desc: "Poor platform UX, low traffic, resource allocation issues. Competing platforms used: Penana (scheduled posting, instant customer service), POPO (paying readers), Haiwang (high traffic)." },
                  { label: "The C4 signal", desc: "One churned creator ended the interview by asking if Kadokawa was hiring. Disengaged users who've already left carry the most honest feedback — and their exit reasons often reveal structural problems that active users have learned to work around." },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 pl-5" style={{ borderColor: "var(--border)" }}>
                    <p className="text-sm font-medium mb-1" style={{ color: "var(--text)" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* 📷 */}
              <div className="pl-14 rounded-2xl border flex items-center justify-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "120px" }}>
                <p className="text-xs" style={{ color: "var(--muted)" }}>📷 user-journey-map.png — 四位創作者旅程圖（Pre-creation → During → Post-publication）</p>
              </div>
            </div>

            {/* Phase 3: IPA */}
            <div className="mb-16">
              <div className="flex gap-4 items-start mb-6">
                <span className="text-2xl font-medium flex-shrink-0 w-10" style={{ color: "var(--accent)" }}>03</span>
                <h3 className="text-xl font-medium" style={{ color: "var(--text)" }}>IPA Analysis — find the gaps that matter most</h3>
              </div>

              <p className="leading-relaxed mb-6 pl-14" style={{ color: "var(--muted)" }}>
                Importance-Performance Analysis mapped all six Creator Center functions against how much creators cared about them vs. how satisfied they were. The gap revealed the redesign priorities.
              </p>

              <div className="pl-14 space-y-3 mb-6">
                <div className="rounded-2xl p-5 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>High importance · Low satisfaction — fix first</p>
                  <div className="space-y-2">
                    {[
                      "Exposure and promotion — creators care deeply about visibility, but the platform gives them little transparency or control",
                      "Publishing workflow — core daily task, but required excessive steps and had poor error handling",
                      "Comment management — the primary creator-reader interaction channel, but usability was poor",
                    ].map((item) => (
                      <p key={item} className="text-sm flex gap-2" style={{ color: "var(--muted)" }}>
                        <span style={{ color: "var(--accent)" }}>—</span>{item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl p-5 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>Other critical findings</p>
                  <div className="space-y-2">
                    {[
                      "Page lag and unclear notifications reduced creators' willingness to engage with the platform",
                      "Monetization pathways lacked transparency — creators didn't know how to grow revenue",
                      "20.9% of respondents were dissatisfied; high-importance features had the lowest satisfaction scores",
                    ].map((item) => (
                      <p key={item} className="text-sm flex gap-2" style={{ color: "var(--muted)" }}>
                        <span>—</span>{item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* 📷 */}
              <div className="pl-14 rounded-2xl border flex items-center justify-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "120px" }}>
                <p className="text-xs" style={{ color: "var(--muted)" }}>📷 ipa-chart.png — 重要性 vs 滿意度象限圖（6 個創作中心功能）</p>
              </div>
            </div>

            {/* Phase 4: Lifecycle model */}
            <div className="mb-16">
              <div className="flex gap-4 items-start mb-6">
                <span className="text-2xl font-medium flex-shrink-0 w-10" style={{ color: "var(--accent)" }}>04</span>
                <h3 className="text-xl font-medium" style={{ color: "var(--text)" }}>Build a creator lifecycle model to guide feature design</h3>
              </div>

              <p className="leading-relaxed mb-6 pl-14" style={{ color: "var(--muted)" }}>
                Research synthesis led to a creator lifecycle model — six stages from first draft to active advocate, each with defined behavior signals, platform KPIs, and a corresponding feature intervention. This gave the team a shared language for discussing which creators we were designing for, and when.
              </p>

              <div className="pl-14 space-y-3 mb-6">
                {[
                  { stage: "① Start", label: "First draft", desc: "Creator registers and begins writing but hasn't published. Target: get them to publish. Feature intervention: Creator Center homepage redesign." },
                  { stage: "② First publish", label: "Goes live", desc: "First chapter published within 30 days of starting. Target: give enough early exposure to validate the decision to publish. Feature: 潛力新作 promotion zone." },
                  { stage: "③ Interaction", label: "Gets feedback", desc: "Work receives claps, comments, or favorites. Creator replies or updates. Target: reinforce the creator-reader loop." },
                  { stage: "④ Trigger", label: "Joins activities", desc: "Creator enters a contest or platform event. Target: deepen platform commitment. Feature: homepage activity section." },
                  { stage: "⑤ Sticky", label: "Earns revenue", desc: "3+ paid chapter unlocks in 90 days, or 3 consecutive weeks of updates. Platform becomes a stable creative and monetization venue." },
                  { stage: "⑥ Advocate", label: "Spreads the word", desc: "Shares work links or uses referral codes. Creator becomes a platform growth channel." },
                ].map((item) => (
                  <div key={item.stage} className="flex gap-4 p-4 rounded-xl border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                    <span className="text-sm font-medium flex-shrink-0 w-6" style={{ color: "var(--accent)" }}>{item.stage}</span>
                    <div>
                      <p className="text-sm font-medium mb-0.5" style={{ color: "var(--text)" }}>{item.label}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pl-14 rounded-2xl p-5 border-l-2" style={{ borderColor: "var(--accent)", background: "var(--bg-card)" }}>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  The Creator Center redesign targeted stages ① and ② — the highest-dropout moments. A creator who registers but never publishes, or publishes once but gets no traction, is the most at-risk. Every design decision in the redesign was anchored to moving creators through these two transitions.
                </p>
              </div>

              {/* 📷 */}
              <div className="mt-6 pl-14 rounded-2xl border flex items-center justify-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "120px" }}>
                <p className="text-xs" style={{ color: "var(--muted)" }}>📷 creator-lifecycle.png — 六階段創作者旅程模型（① Start → ⑥ Advocate）</p>
              </div>
            </div>

            {/* Cross-dept alignment */}
            <div>
              <div className="flex gap-4 items-start mb-6">
                <span className="text-2xl font-medium flex-shrink-0 w-10" style={{ color: "var(--accent)" }}>05</span>
                <h3 className="text-xl font-medium" style={{ color: "var(--text)" }}>Use research as the alignment mechanism</h3>
              </div>

              <p className="leading-relaxed mb-6 pl-14" style={{ color: "var(--muted)" }}>
                Research findings were shared in a cross-departmental session. When the IPA data showed creators cared most about exposure and publishing workflow, it stopped being anyone's opinion — it became the users speaking. That reframe changed the conversation from competing priorities to shared evidence.
              </p>

              <div className="pl-14 rounded-2xl p-6 border-l-2" style={{ borderColor: "var(--accent)", background: "var(--bg-card)" }}>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  Cross-departmental consensus achieved on redesign priorities. The research didn't just inform the design — it resolved the organizational deadlock that had been blocking it.
                </p>
              </div>

              {/* 📷 */}
              <div className="mt-6 pl-14 rounded-2xl border flex items-center justify-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "120px" }}>
                <p className="text-xs" style={{ color: "var(--muted)" }}>📷 research-sharing.png — 跨部門研究分享簡報截圖</p>
              </div>
            </div>
          </section>

          {/* Redesign */}
          <section id="redesign">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>The Redesign</p>
            <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text)" }}>
              Four principles, directly from the IPA gaps
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              Every redesign decision traced back to a specific research finding. IPA identified exposure and publishing workflow as the highest-priority gaps. The lifecycle model confirmed that stages ① and ② — first draft to first publish — were the highest-dropout moments. Both pointed to the same answer: streamline publishing, surface promotion, make revenue visible. Those became the dominant elements on the redesigned homepage, not widgets or announcements.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  label: "Prioritized data visibility",
                  desc: "Key metrics (Accumulated Views, Accumulated Revenue) prominently featured at the top of the dashboard. Addresses the core need of data-driven C1 creators — and makes monetization pathways visible for the first time.",
                },
                {
                  label: "Streamlined core workflow",
                  desc: "Highly visible \"New Work\" button and \"Recently Edited Works\" list directly on the homepage. Publishing is the most-used daily task — it should be the first thing a creator sees.",
                },
                {
                  label: "Promotion and community hub",
                  desc: "Dedicated sections for Competitions & Activities, Platform Announcements, and Creator Academy. Creators stay because of platform investment and community — these surfaces needed to be discoverable, not buried.",
                },
                {
                  label: "Revenue awareness",
                  desc: "Accumulated Revenue displayed explicitly on the main dashboard. Previously required multiple clicks to find. Visibility alone increases engagement with monetization features.",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 p-5 rounded-2xl border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <span style={{ color: "var(--accent)" }}>⟡</span>
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: "var(--text)" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 📷 */}
            <div className="rounded-2xl border flex items-center justify-center mb-4" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "200px" }}>
              <p className="text-xs" style={{ color: "var(--muted)" }}>📷 creator-center-before-after.png — 舊版 vs 新版首頁並排</p>
            </div>
            <div className="rounded-2xl border flex items-center justify-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "160px" }}>
              <p className="text-xs" style={{ color: "var(--muted)" }}>📷 creator-center-annotated.png — 新設計標注版（指出四個改動點）</p>
            </div>
          </section>

          {/* Results */}
          <section id="results">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Results & Impact</p>
            <h2 className="text-2xl font-medium mb-8" style={{ color: "var(--text)" }}>What moved</h2>

            <div className="space-y-3">
              {[
                { metric: "16.3%", label: "Boost in chapter editing rate", note: "Heatmap analysis confirmed all feature usage ratios increased" },
                { metric: "↑", label: "Certified Author application rate", note: "Button moved from 3 clicks deep to homepage dashboard" },
                { metric: "↑", label: "Creator education blog usage", note: "Creator Academy surface made discoverable from main dashboard" },
                { metric: "↑", label: "Chapter editing duration and frequency", note: "Streamlined workflow reduced friction in daily publishing loop" },
                { metric: "✓", label: "Cross-departmental consensus achieved", note: "Research findings resolved competing team priorities before a single line of design was committed" },
              ].map((item) => (
                <div key={item.metric + item.label} className="flex items-start gap-6 p-5 rounded-2xl border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-2xl font-medium flex-shrink-0 w-16" style={{ color: "var(--accent)" }}>{item.metric}</p>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{item.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Learnings */}
          <section id="learnings">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Learnings</p>
            <h2 className="text-2xl font-medium mb-8" style={{ color: "var(--text)" }}>What this taught me</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Research as organizational alignment tool",
                  body: "The Creator Center had become a political problem before it became a product problem — every team believed their feature request was highest priority. User research gave me a neutral, evidence-based framework to facilitate cross-team alignment. When the IPA data showed creators cared most about exposure and publishing workflow, it stopped being my opinion — it became the users speaking. That reframe changed the conversation entirely.",
                },
                {
                  title: "In-depth research can fit into a busy PM roadmap",
                  body: "This project proved that strategic research doesn't have to slow product advancement. By designing a focused, mixed-methods study — survey for breadth, interviews for depth, IPA for prioritization — we generated actionable insights in a compressed timeline. A design background helps here: understanding how to structure research that produces synthesis, not just data.",
                },
                {
                  title: "Creator churn is a signal worth investigating before it becomes a trend",
                  body: "C4 — the creator who left and came back to ask if Kadokawa was hiring — was the most revealing interview. Disengaged users who've already left carry the most honest feedback, because they have nothing to lose by being direct. Understanding why they left often reveals structural problems that active users have learned to work around. That's the feedback you can't get from a satisfaction survey.",
                },
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
              className="hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>LinkedIn ↗</a>
            <a href="mailto:zyting.info@gmail.com"
              className="hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>zyting.info@gmail.com</a>
            <span style={{ color: "var(--accent)" }}>⟡</span>
          </div>
        </div>
      </footer>

    </main>
  );
}