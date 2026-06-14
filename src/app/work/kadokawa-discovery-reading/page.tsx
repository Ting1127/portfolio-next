import { ThemeToggle } from "@/components/ThemeToggle";
import { TableOfContents } from "@/components/TableOfContents";

export default function DiscoveryReadingPage() {
  const sections = [
    { id: "tldr", label: "TL;DR" },
    { id: "context", label: "Context" },
    { id: "problem", label: "Problem" },
    { id: "search", label: "Search & Discovery" },
    { id: "chapter", label: "Chapter Reading" },
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
          Discovery & Reading
        </h1>
        <p className="text-xl max-w-2xl" style={{ color: "var(--muted)" }}>
          Redesigning how readers find and experience stories — from a broken search system to a layered discovery engine and a fully native reading surface.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          {[
            { label: "Role", value: "Product Manager" },
            { label: "Timeline", value: "Jun 2023 – Jul 2025" },
            { label: "Company", value: "KadoKawa Corp." },
            { label: "Platform", value: "iOS · Android · Web" },
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
        {/* 📷 Replace with: /case/discovery/cover.png */}
        <p className="text-xs" style={{ color: "var(--muted)" }}>📷 cover.png</p>
      </div>

      {/* Content + Sidebar */}
      <div className="px-8 max-w-5xl mx-auto flex gap-16 pb-32">

        {/* Sticky sidebar */}
        <aside className="hidden lg:block w-48 flex-shrink-0">
          <div className="sticky top-32">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Contents</p>
            <TableOfContents sections={sections} />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 space-y-24">

          {/* TL;DR */}
          <section id="tldr">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>TL;DR</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[
                { number: "27%", label: "Reduction in Zero Results Rate — 1.26% → 0.92% after A/B test" },
                { number: "11.6%", label: "Increase in search result CTR after tag search launch" },
                { number: "10.2%", label: "Increase in start-read rate of recommended novels" },
                { number: "−8s", label: "Reduction in time to task completion" },
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
              From "enough content" to "the right content"
            </h2>
            <p className="leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
              KadoKado is a digital platform offering Taiwanese original novels and Japanese light novels, dedicated to promoting digital reading and nurturing Chinese-language creators. With a rapidly growing content library, the core challenge shifted from having enough content to helping readers find the right content.
            </p>
            <p className="leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
              I led the product definition across two interconnected systems: the Explore and Search feature — a discovery layer that needed to serve readers who want to find stories and creators who want their work to be found — and the App chapter reading page, the surface where readers actually spend their time.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              These aren't separate projects. Search gets readers to the door. The reading experience determines whether they come back.
            </p>

            {/* 📷 Ecosystem diagram */}
            <div className="mt-8 rounded-2xl border flex items-center justify-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "180px" }}>
              <p className="text-xs" style={{ color: "var(--muted)" }}>📷 ecosystem-diagram.png — Reader ↔ KadoKado ↔ Creator</p>
            </div>
          </section>

          {/* Problem */}
          <section id="problem">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Problem</p>
            <h2 className="text-2xl font-medium mb-8" style={{ color: "var(--text)" }}>
              Two surfaces, two failure modes
            </h2>

            <div className="space-y-6">
              {/* Search problem */}
              <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Search & Discovery</p>
                <p className="text-sm font-medium mb-3" style={{ color: "var(--text)" }}>
                  Search only worked if you already knew exactly what you were looking for
                </p>
                <ul className="space-y-2">
                  {[
                    "Search matched only exact titles or author names — any input variation returned zero results",
                    "Simplified Chinese input (e.g. '恋爱脑君' instead of '戀愛腦君') or extra spaces caused complete search failure",
                    "No support for exploratory search — users looking by genre, theme, or mood had no clear path",
                    "Baseline Zero Results Rate: 1.26% — a hard failure that sent users away with nothing",
                  ].map((item) => (
                    <li key={item} className="text-sm flex gap-2" style={{ color: "var(--muted)" }}>
                      <span className="flex-shrink-0" style={{ color: "var(--accent)" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chapter problem */}
              <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Chapter Reading</p>
                <p className="text-sm font-medium mb-3" style={{ color: "var(--text)" }}>
                  The reading surface was slow, inflexible, and poorly connected to retention
                </p>
                <ul className="space-y-2">
                  {[
                    "Chapter page ran on Webview — slow load times disrupted reading flow, complex bridging increased engineering overhead",
                    "Ad placements were inflexible, limiting monetization potential",
                    "Clapping rate was 14.8% but favoriting rate was far lower than on the novel page — the most retention-connected action was the least triggered",
                    "No systematic nudge to convert reading momentum into a return visit",
                  ].map((item) => (
                    <li key={item} className="text-sm flex gap-2" style={{ color: "var(--muted)" }}>
                      <span className="flex-shrink-0" style={{ color: "var(--accent)" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Search & Discovery */}
          <section id="search">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Search & Discovery</p>
            <h2 className="text-2xl font-medium mb-10" style={{ color: "var(--text)" }}>
              Building a search system that works for how people actually search
            </h2>

            {/* Step 1: Scenario Analysis */}
            <div className="mb-16">
              <div className="flex gap-4 items-start mb-6">
                <span className="text-2xl font-medium flex-shrink-0 w-10" style={{ color: "var(--accent)" }}>01</span>
                <h3 className="text-xl font-medium" style={{ color: "var(--text)" }}>Map the search landscape before redesigning anything</h3>
              </div>
              <p className="leading-relaxed mb-6 pl-14" style={{ color: "var(--muted)" }}>
                Before touching the backend, I mapped all the ways users search — four distinct scenarios with very different intent and tolerance for imprecision.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-14 mb-6">
                {[
                  { id: "1-1", label: "Clear Goal", desc: "Specific novel title or author name — exact match expected" },
                  { id: "1-2", label: "Exploratory", desc: "Category, genre, theme, story element — fuzzy match acceptable" },
                  { id: "1-3", label: "Status-based", desc: '"Updated in last 7 days," followed authors, personalized filters' },
                  { id: "1-4", label: "Input Errors", desc: "Typos, Simplified Chinese input, missing or extra characters" },
                ].map((s) => (
                  <div key={s.id} className="rounded-2xl p-5 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>{s.id} · {s.label}</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>{s.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pl-14 rounded-2xl p-5 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  The existing system was optimized only for Scenario 1-1. All other cases — which account for the majority of real search behavior — were failing users silently.
                </p>
              </div>

              {/* 📷 */}
              <div className="mt-6 pl-14 rounded-2xl border flex items-center justify-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "120px" }}>
                <p className="text-xs" style={{ color: "var(--muted)" }}>📷 search-scenario-analysis.png</p>
              </div>
            </div>

            {/* Step 2: A/B Test */}
            <div className="mb-16">
              <div className="flex gap-4 items-start mb-6">
                <span className="text-2xl font-medium flex-shrink-0 w-10" style={{ color: "var(--accent)" }}>02</span>
                <h3 className="text-xl font-medium" style={{ color: "var(--text)" }}>Fix Zero Results with an A/B test — and make the right trade-off</h3>
              </div>

              <p className="leading-relaxed mb-6 pl-14" style={{ color: "var(--muted)" }}>
                The root cause of Scenario 1-4 failures was a weighting imbalance — author name weight was lower than novel title weight, so variant author inputs got buried. Hypothesis: equalizing the weights would reduce Zero Results Rate.
              </p>

              {/* Experiment design */}
              <div className="pl-14 mb-6 space-y-3">
                <div className="rounded-2xl p-5 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>Experiment · 27 days · All users</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-medium mb-2" style={{ color: "var(--muted)" }}>Group A (Control)</p>
                      <p className="text-sm" style={{ color: "var(--muted)" }}>Novel name {">"} Author name = Category = Tags</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-2" style={{ color: "var(--accent)" }}>Group B (Treatment)</p>
                      <p className="text-sm" style={{ color: "var(--muted)" }}>Novel name = Author name = Category = Tags</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results table */}
              <div className="pl-14 mb-6">
                <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                  <div className="grid grid-cols-4 gap-0">
                    {["Metric", "Group A", "Group B", "Impact"].map((h) => (
                      <div key={h} className="p-4 text-xs uppercase tracking-widest border-b" style={{ borderColor: "var(--border)", background: "var(--bg-card)", color: "var(--muted)" }}>
                        {h}
                      </div>
                    ))}
                    {[
                      ["Zero Results Rate", "1.26%", "0.92%", "↓ 27% ✓"],
                      ["Start-Read Rate", "68.3%", "69.0%", "↑ Quality"],
                      ["Search CTR", "82.2%", "80.2%", "↓ 2% (minor)"],
                      ["Avg Result Rank", "6.25", "6.56", "Slightly lower"],
                    ].map((row, i) => (
                      row.map((cell, j) => (
                        <div key={`${i}-${j}`} className="p-4 text-sm border-b"
                          style={{
                            borderColor: "var(--border)",
                            color: j === 3 && i === 0 ? "var(--accent)" : "var(--muted)",
                            background: i % 2 === 0 ? "var(--bg)" : "var(--bg-card)",
                          }}>
                          {cell}
                        </div>
                      ))
                    ))}
                  </div>
                </div>
              </div>

              {/* Decision rationale */}
              <div className="pl-14">
                <div className="rounded-2xl p-6 border-l-2" style={{ borderColor: "var(--accent)", background: "var(--bg-card)" }}>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>The decision</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    Quantitative metrics showed minimal overall difference — CTR dropped 2%, within acceptable variance. But six qualitative scenario tests told a clearer story: B version was superior in 4 of 6 real-world cases, particularly for author search with input variations. Combined with a meaningful 27% reduction in Zero Results Rate, the case for B was clear.
                  </p>
                  <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--muted)" }}>
                    When quantitative data says "similar," qualitative scenarios are the tiebreaker.
                  </p>
                </div>
              </div>

              {/* 📷 */}
              <div className="mt-6 pl-14 rounded-2xl border flex items-center justify-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "120px" }}>
                <p className="text-xs" style={{ color: "var(--muted)" }}>📷 ab-test-results.png + scenario-comparison.png</p>
              </div>
            </div>

            {/* Step 3: Tag Search */}
            <div className="mb-16">
              <div className="flex gap-4 items-start mb-6">
                <span className="text-2xl font-medium flex-shrink-0 w-10" style={{ color: "var(--accent)" }}>03</span>
                <h3 className="text-xl font-medium" style={{ color: "var(--text)" }}>Build a tag taxonomy for exploratory search</h3>
              </div>

              <p className="leading-relaxed mb-6 pl-14" style={{ color: "var(--muted)" }}>
                Fixing Scenario 1-4 wasn't enough. Scenario 1-2 (exploratory search) had no real solution. I designed a multi-layered tag system to support readers who don't know the exact title they want — only the feeling.
              </p>

              <div className="pl-14 space-y-3 mb-6">
                {[
                  { label: "Novel Type tags", desc: "Genre and subgenre classifications" },
                  { label: "Platform Service tags", desc: "KadoPlus, Million Novel Awards, contest entries — directly searchable" },
                  { label: "Theme tags", desc: "Story themes, settings, and content flags" },
                  { label: "Result segmentation", desc: '"All" view and "Tags" view — browse all matches or filter for strongly tag-associated content' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 p-4 rounded-xl border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                    <span style={{ color: "var(--accent)" }}>⟡</span>
                    <div>
                      <p className="text-sm font-medium mb-0.5" style={{ color: "var(--text)" }}>{item.label}</p>
                      <p className="text-sm" style={{ color: "var(--muted)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm pl-14 mb-4" style={{ color: "var(--muted)" }}>
                Following Tag Search launch, Search Result CTR increased approximately 10% compared to prior weeks.
              </p>

              {/* 📷 */}
              <div className="pl-14 rounded-2xl border flex items-center justify-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "120px" }}>
                <p className="text-xs" style={{ color: "var(--muted)" }}>📷 tag-search-ui.png + result-segmentation.png + ctr-trend.png</p>
              </div>
            </div>

            {/* Step 4: Recommendation */}
            <div className="mb-4">
              <div className="flex gap-4 items-start mb-6">
                <span className="text-2xl font-medium flex-shrink-0 w-10" style={{ color: "var(--accent)" }}>04</span>
                <h3 className="text-xl font-medium" style={{ color: "var(--text)" }}>Recommendation system by login state</h3>
              </div>

              <div className="pl-14 grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Visitors", desc: "Trending and popular novels across the platform — highest-signal content for users with no history" },
                  { label: "Members", desc: "Personalized recommendations based on past reading history and favorites, weighted toward related genres and types" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl p-5 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>{item.label}</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* 📷 */}
              <div className="pl-14 rounded-2xl border flex items-center justify-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "120px" }}>
                <p className="text-xs" style={{ color: "var(--muted)" }}>📷 recommendation-ui.png — visitor vs member side by side</p>
              </div>
            </div>
          </section>

          {/* Chapter Reading */}
          <section id="chapter">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Chapter Reading Experience</p>
            <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text)" }}>
              Native migration — and fixing the favoriting problem
            </h2>
            <p className="leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
              Search gets readers to the door. But the chapter page is where retention is actually won or lost. The data told a clear story: clapping rate was 14.8%, but favoriting — the action most connected to return visits — was far lower. The reading surface needed to both perform better and connect reading momentum to retention.
            </p>

            {/* Phase 1 */}
            <div className="mb-14">
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Phase 1 · Full Native Migration</p>
              <p className="leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
                Converted the chapter page from Webview to Native across three priorities:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { label: "Speed", desc: "Eliminated Webview bridge overhead. Chapter content loads progressively — skeleton state shows before full toolbar renders, so reading starts immediately." },
                  { label: "Format support", desc: "Both novel (vertical scroll) and webtoon (full-bleed image) formats supported in the same chapter. Mixed-format chapters handled gracefully." },
                  { label: "Access control", desc: "Permission logic covering 5 user states (iOS/Android guests, unverified members, verified members) across subscription chapters, paid chapters, and all toolbar actions." },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 pl-5" style={{ borderColor: "var(--border)" }}>
                    <p className="text-sm font-medium mb-1" style={{ color: "var(--text)" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* 📷 */}
              <div className="rounded-2xl border flex items-center justify-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "120px" }}>
                <p className="text-xs" style={{ color: "var(--muted)" }}>📷 chapter-native-ui.png + permission-matrix.png</p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="mb-14">
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Phase 2 · Behavior Nudges + Feature Parity</p>
              <p className="leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
                Added favoriting, comments, and table of contents to the Native page. More importantly, designed behavior nudges to close the gap between reading engagement and retention action.
              </p>

              {/* Competitive research inline */}
              <div className="rounded-2xl p-6 border mb-6" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Competitive reference</p>
                <div className="grid grid-cols-3 gap-4 text-xs" style={{ color: "var(--muted)" }}>
                  <div>
                    <p className="font-medium mb-2" style={{ color: "var(--text)" }}>Qidian</p>
                    <p>Nudge after ~1 min of reading. Auto-favorite option for committed readers.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2" style={{ color: "var(--text)" }}>iQiyi Novel</p>
                    <p>Immediate exit nudge. If already favorited, shows related recommendation instead.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2" style={{ color: "var(--text)" }}>Qimao</p>
                    <p>Continuous navigation — back goes to previous screen, not always novel page.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  {
                    label: "Exit nudge",
                    desc: "When a reader leaves without favoriting, a prompt appears. Timing based on competitive research — after ~1 minute of reading for serialized works. For completed novels, redirects to related work recommendations instead of a favoriting prompt.",
                  },
                  {
                    label: "Chapter-end state",
                    desc: "Two versions: \"You've caught up — favorite to get update notifications\" (serialized) and \"Thanks for reading — explore more on KadoKado\" (completed). Both designed to convert reading momentum into a retention action at peak intent.",
                  },
                  {
                    label: "Table of contents",
                    desc: "New feature showing chapter unlock status (subscription / Kado coins / reading voucher priority logic), read/unread state, and current chapter position — giving readers a map of where they are.",
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
              <div className="rounded-2xl border flex items-center justify-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "120px" }}>
                <p className="text-xs" style={{ color: "var(--muted)" }}>📷 exit-nudge-flow.png + chapter-end-state.png + table-of-contents.png</p>
              </div>
            </div>

            {/* Phase 3 */}
            <div>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Phase 3 · Monetization & Extended Features</p>
              <div className="space-y-3">
                {[
                  { label: "Ad placement flexibility", desc: "Native infrastructure allows dynamic ad slot configuration — not possible with Webview." },
                  { label: "Unlock flow", desc: '"Unlock now" persistent button prevents users from losing context when accidentally closing the payment sheet. Balance display (Kado coins + reading vouchers) links directly to coin store.' },
                  { label: "Reading settings", desc: "Font size (16–40), line spacing (3 options), language (original / Traditional / Simplified Chinese), background theme (light / dark / yellow / green). Settings persist across sessions." },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 pl-5" style={{ borderColor: "var(--border)" }}>
                    <p className="text-sm font-medium mb-1" style={{ color: "var(--text)" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* 📷 */}
              <div className="mt-6 rounded-2xl border flex items-center justify-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minHeight: "120px" }}>
                <p className="text-xs" style={{ color: "var(--muted)" }}>📷 payment-bottom-sheet.png + reading-settings.png</p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section id="results">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Results & Impact</p>
            <h2 className="text-2xl font-medium mb-8" style={{ color: "var(--text)" }}>What moved</h2>

            <div className="space-y-3">
              {[
                { metric: "27%", label: "reduction in Zero Results Rate", note: "1.26% → 0.92% — A/B test confirmed" },
                { metric: "11.6%", label: "increase in search result CTR", note: "Following tag search launch" },
                { metric: "10.2%", label: "increase in start-read rate", note: "Recommended novels" },
                { metric: "−8s", label: "reduction in time to task completion", note: "Search and discovery flow" },
                { metric: "3-phase", label: "Native migration shipped", note: "Webview → Native: faster load, flexible monetization, behavior nudge layer" },
              ].map((item) => (
                <div key={item.metric} className="flex items-start gap-6 p-5 rounded-2xl border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-2xl font-medium flex-shrink-0 w-20" style={{ color: "var(--accent)" }}>{item.metric}</p>
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
                  title: "When quantitative data says 'similar,' qualitative scenarios are the tiebreaker",
                  body: "The A/B test CTR difference (82.2% → 80.2%) was within noise. But scenario testing showed B version was clearly better for the cases that actually mattered — author search with input variations, Simplified Chinese input. The right call wasn't 'which version wins overall' but 'which version better serves the most critical failure mode.' That framing changed the conversation from ambiguity to clarity.",
                },
                {
                  title: "The most-used feature isn't always the most important one",
                  body: "Clapping was the highest-used chapter action at 14.8% — but it has no direct connection to retention. Favoriting does. The gap between clap rate and favorite rate pointed to a design problem: the favorite action wasn't visible or well-timed enough to capture the moment when a reader was most engaged. The exit nudge and chapter-end state were direct responses — placing the right action at the right moment, not just making it available.",
                },
                {
                  title: "Search and discovery require phased optimization, not one-time fixes",
                  body: "B version still couldn't solve typographical errors in novel titles — that requires separate vocabulary expansion work. Knowing when to scope a problem (fix this now, defer that to the next phase) is as important as solving it. Each phase of this project built on the last: fix the hard failures first, then build the exploratory layer, then add the behavior layer on top of a stable reading surface.",
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
          <a href="/work/kadokawa-creator-center"
            className="group flex justify-between items-center hover:opacity-70 transition-opacity">
            <p className="text-2xl font-medium" style={{ color: "var(--text)" }}>KadoKado Creator Center →</p>
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