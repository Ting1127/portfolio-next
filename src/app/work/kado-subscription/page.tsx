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
              Kado+ is a subscription service tailored for Japanese light novel enthusiasts, offering unlimited, chapter-based access to officially licensed Japanese titles. The goal: reduce cost and time barriers for Taiwanese readers while building a sustainable content ecosystem that works for readers, the platform, and creators simultaneously.
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
              <img src="/case/kado/service-diagram.jpg" alt="Kado+ service diagram — Reader, Platform, Creator ecosystem" className="w-full" />
            </div>
          </section>

          {/* Problem */}
          <section id="problem">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Problem</p>
            <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text)" }}>Three barriers blocking readers — and the business</h2>
            <p className="leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              The real challenge wasn't solving any one of these in isolation — it was designing a model where all three stakeholders (Reader, Platform, Creator) could win simultaneously without one group subsidizing another.
            </p>
            <div className="space-y-6">
              {[
                {
                  label: "Reader",
                  points: [
                    "Licensing barrier — Officially licensed Japanese light novels require a Taiwanese company to obtain separate authorization, limiting available supply.",
                    "Cost barrier — High per-book pricing made casual or exploratory reading expensive.",
                    "Time barrier — Translation and licensing cycles meant new Japanese releases took significantly longer to reach Taiwanese readers.",
                  ]
                },
                {
                  label: "Business",
                  points: [
                    "IP Synergy — Needed to leverage in-house IP to amplify the visibility of platform-exclusive content.",
                    "Anticipation & Insight — Wanted pre-release warm-up data to understand reader preferences before physical book publication.",
                    "Creator Economy — Needed to offer creators diverse revenue streams beyond one-time licensing fees.",
                  ]
                },
              ].map((block) => (
                <div key={block.label} className="rounded-2xl p-6 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>{block.label}</p>
                  <ul className="space-y-3">
                    {block.points.map(pt => (
                      <li key={pt} className="text-sm leading-relaxed flex gap-3" style={{ color: "var(--muted)" }}>
                        <span className="flex-shrink-0" style={{ color: "var(--accent)" }}>—</span>
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
              As the sole PM, I was responsible for defining the product model, business logic, and feature requirements before engineering started. This meant working across content, marketing, tech, data, and finance teams to align on what "success" looked like — and more importantly, how to measure it.
            </p>
            <div className="rounded-2xl p-6 border mb-8" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Three roles, one model</p>
              <div className="space-y-3">
                {[
                  { role: "Reader", desc: "pays a monthly fee → gets unlimited access to subscription-exclusive chapters" },
                  { role: "Platform", desc: "curates and licenses titles → earns platform revenue, gains reader preference data" },
                  { role: "Creator", desc: "provides content licensing → earns revenue share proportional to actual readership" },
                ].map((item) => (
                  <div key={item.role} className="flex gap-3 text-sm" style={{ color: "var(--muted)" }}>
                    <span className="font-medium w-20 flex-shrink-0" style={{ color: "var(--text)" }}>{item.role}</span>
                    <span>{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              I ran two parallel workstreams before launch: define the subscription business logic (pricing, revenue share formula, platform rules), and define the user-facing product (flows, copy, states, edge cases). Both had to be ready simultaneously — you can't ship a subscription service without a working revenue model, and you can't ship a revenue model without a working product.
            </p>
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
              <img src="/case/kado/subscription-architecture.jpg" alt="Subscription architecture — User to IAP to platform auto-renewal flow" className="w-full" />
            </div>
          </section>

          {/* What I Shipped */}
          <section id="shipped">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>What I Shipped</p>
            <h2 className="text-2xl font-medium mb-12" style={{ color: "var(--text)" }}>From MVP to a full subscription ecosystem</h2>

            <div className="space-y-20">

              {/* 01 MVP */}
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>⟡</span>
                  <div>
                    <p className="text-base font-medium mb-0.5" style={{ color: "var(--text)" }}>01 · Subscription MVP</p>
                    <p className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>Shipped 2024 / 11 / 20</p>
                  </div>
                </div>
                <div className="pl-6 space-y-4">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    Defined the full user journey from discovery to purchase — subscription-gated chapter logic, plan page copy in both Traditional and Simplified Chinese, error states, processing states, cancellation flow, and subscription state management across App and Web.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    One early call: web users can browse but can't subscribe directly. This was a three-way tradeoff — Apple and Google IAP policies restrict web-based payment flows; building a parallel web checkout would have delayed launch by months; and strategically, we wanted to drive app downloads. Rather than ship a half-baked web checkout, I designed a clear web-to-app handoff: desktop users see a QR code, mobile users get a deep link that opens the App Store or launches the app directly.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                      <img src="/case/kado/mvp-web.jpg" alt="Web subscription plan page — desktop QR code and mobile deep link variants" className="w-full" />
                      <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Web — desktop QR code · mobile deep link</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                      <img src="/case/kado/mvp-app.jpg" alt="App subscription plan page, IAP payment screen, and subscription success screen" className="w-full" />
                      <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>App — plan page · IAP payment · success state</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 02 CMS */}
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>⟡</span>
                  <div>
                    <p className="text-base font-medium" style={{ color: "var(--text)" }}>02 · CMS Subscription Management</p>
                  </div>
                </div>
                <div className="pl-6 space-y-4">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    The content team needed full operational control over subscription titles — adding chapters, setting activation dates, adjusting display order — without filing an engineering request every time. I designed the complete back-end workflow from scratch and conducted internal training sessions before launch.
                  </p>
                  <div className="space-y-3 mt-2">
                    {[
                      { title: "Subscription Management Page", desc: "Lists all active plans (e.g., KAKUYOMU NEXT Basic / Premium) with Plan IDs mapped to Apple/Google platform IDs. Content editors navigate from here to each plan's title list." },
                      { title: "Plan Title Page", desc: "Shows all titles in a plan with drag-to-reorder. This order directly controls front-end display on the plan page and homepage section. Titles with no active subscription chapters are automatically hidden — no manual toggle needed." },
                      { title: "Chapter Subscription Page", desc: "The core operational tool. Editors set activation and removal dates for individual or bulk chapters. Key rules: chapters entering subscription automatically override existing unlock settings (voucher, paid); scheduling is D+1 minimum; removing all subscription chapters from a title restores each chapter to its original unlock setting and hides the title automatically." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl p-5 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                        <p className="text-sm font-medium mb-2" style={{ color: "var(--text)" }}>{item.title}</p>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    I also designed the subscription hierarchy: a Subscription Theme (Product ID) contains multiple Subscription Plans (Plan IDs) — a user can only subscribe to one plan per theme (Basic or Premium, not both). This maps to Apple and Google's subscription group logic and required careful coordination between our internal system and both platform back-ends.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                      <img src="/case/kado/cms-plan-list.jpg" alt="CMS subscription management page showing KAKUYOMU NEXT Basic and Premium plans" className="w-full" />
                      <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Subscription management — plan list</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                      <img src="/case/kado/cms-title-list.jpg" alt="CMS plan title page with drag-to-reorder and chapter edit entry" className="w-full" />
                      <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Plan title page — drag-to-reorder</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                      <img src="/case/kado/cms-chapter-edit.jpg" alt="CMS chapter subscription page — bulk activation and removal date scheduling" className="w-full" />
                      <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Chapter subscription page — bulk scheduling</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                      <img src="/case/kado/cms-workflow.jpg" alt="CMS three-column workflow — iOS/Android backend to internal CMS to front-end/App" className="w-full" />
                      <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Workflow — platform backend → CMS → front-end</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 03 Revenue Formula */}
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>⟡</span>
                  <div>
                    <p className="text-base font-medium" style={{ color: "var(--text)" }}>03 · Revenue-Sharing Formula</p>
                  </div>
                </div>
                <div className="pl-6 space-y-4">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    Co-designed with my manager, the formula distributes revenue proportionally by actual readership — not equally across titles — accounting for subscription fee, platform operating costs, and per-title chapter page views relative to total subscription chapter PVs.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    Getting it right required aligning Finance, Content, and Engineering on shared definitions: what counts as a "valid" read, whether content removed mid-cycle still earns that month, and how to track free, paid, and subscription chapter PVs separately in the data pipeline. The hardest part wasn't the logic itself — it was getting three teams to agree on a shared definition before any pipeline was built.
                  </p>
                  <div className="rounded-2xl overflow-hidden border mt-6" style={{ borderColor: "var(--border)" }}>
                    <img src="/case/kado/revenue-formula.jpg" alt="Chapter PV calculation tree — free chapter PV, paid chapter PV, subscription chapter PV" className="w-full" />
                    <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Chapter PV calculation — three-way split</p>
                  </div>
                </div>
              </div>

              {/* 04 Research → Content Discovery */}
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>⟡</span>
                  <div>
                    <p className="text-base font-medium" style={{ color: "var(--text)" }}>04 · Research → Content Discovery & Retention</p>
                  </div>
                </div>
                <div className="pl-6 space-y-4">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    Post-launch, I established a structured feedback framework across five subscriber lifecycle stages to drive iteration:
                  </p>
                  <div className="flex flex-wrap gap-2 my-2">
                    {["Potential Audience", "Subscribed Active Readers", "Inactive Subscribers", "Unsubscribed Users", "Returning Users"].map((stage, i) => (
                      <div key={stage} className="flex items-center gap-2">
                        <span className="text-xs px-3 py-1.5 rounded-full border text-sm" style={{ color: "var(--text)", borderColor: "var(--border)", background: "var(--bg-card)" }}>{stage}</span>
                        {i < 4 && <span className="text-xs" style={{ color: "var(--muted)" }}>→</span>}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    Data was synthesized from four sources: Amplitude behavioral analytics, customer service feedback logs, user satisfaction surveys, and exit surveys from churned subscribers. Key findings from churned subscriber surveys:
                  </p>
                  <div className="rounded-2xl p-5 border space-y-2" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                    {[
                      "Finished all available content — nothing left to read",
                      "Couldn't find similar titles after finishing one",
                      "Intro chapters weren't compelling enough to continue",
                      "Price too high — though push data later showed price wasn't the primary driver",
                    ].map((finding) => (
                      <div key={finding} className="flex gap-3 text-sm" style={{ color: "var(--muted)" }}>
                        <span className="flex-shrink-0" style={{ color: "var(--accent)" }}>—</span>
                        <span>{finding}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    I developed detailed Customer Journey Maps across all five stages and used them in cross-functional workshops to align stakeholders on iteration direction before development started.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                      <img src="/case/kado/user-lifecycle.jpg" alt="Five-stage subscriber lifecycle framework" className="w-full" />
                      <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Five-stage subscriber lifecycle framework</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                      <img src="/case/kado/churn-survey.jpg" alt="Churned subscriber exit survey results" className="w-full" />
                      <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Exit survey — churn reasons and feature requests</p>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                    <img src="/case/kado/journey-map.jpg" alt="Customer Journey Map across all five subscriber lifecycle stages" className="w-full" />
                    <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Customer Journey Map — all five stages</p>
                  </div>

                  {/* Hero Banner */}
                  <div className="pt-4">
                    <p className="text-sm font-medium mb-3" style={{ color: "var(--text)" }}>Hero Banner & Thematic Discovery</p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                      Pivoted content strategy from "Blockbuster Title Attraction" to "User-Centric Content Discovery." The Hero Banner surfaces thematically curated titles to drive clicks to key content. A layered recommendation system — popular titles combined with thematic suggestions based on reading history — supports the content team's promotion of Taiwan-exclusive and pre-published novels. A limited-time offer near the CTA accelerates subscription decisions.
                    </p>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                      Framing this to the content team as an editorial decision — not a retention mechanism — was what got it shipped.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                        <img src="/case/kado/hero-banner-app.jpg" alt="Kado+ App main page — Hero Banner and layered thematic recommendations" className="w-full" />
                        <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>App — Hero Banner · layered recommendations · limited-time offer</p>
                      </div>
                      <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                        <img src="/case/kado/hero-banner-web.jpg" alt="Kado+ Web main page — subscription value proposition and content update schedule" className="w-full" />
                        <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Web — value proposition · content update schedule</p>
                      </div>
                    </div>
                  </div>

                  {/* Push Notifications */}
                  <div className="pt-4">
                    <p className="text-sm font-medium mb-3" style={{ color: "var(--text)" }}>Targeted Push Notifications</p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                      Built a three-wave automated push system for potential subscribers, each entering a 14-day cycle when they visit a subscription page or gated chapter. Three message angles were tested: content-led (24hrs), price-led (day 4), and social proof (day 7).
                    </p>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                      Day 4's price-led push had significantly lower conversions than Day 1. This told us something useful: price perception wasn't the primary barrier. The problem was content discovery and fit — which directly validated the Hero Banner and genre-based recommendation direction. For existing subscribers, push runs on two tracks timed to each user's last reading completion: genre-based recommendations to encourage a second novel, and weekly update reminders for titles already started.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                        <img src="/case/kado/push-amplitude.jpg" alt="Amplitude dashboard showing three-wave push notification conversion rates" className="w-full" />
                        <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Amplitude — three-wave push conversion rates</p>
                      </div>
                      <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                        <img src="/case/kado/push-mechanism.jpg" alt="Push notification segmentation table — audience, purpose, content, timing" className="w-full" />
                        <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Push segmentation — audience · content · timing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 05 Subscription Code */}
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>⟡</span>
                  <div>
                    <p className="text-base font-medium" style={{ color: "var(--text)" }}>05 · Backend Subscription Code Generation</p>
                  </div>
                </div>
                <div className="pl-6 space-y-4">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    A dedicated back-end tool for batch or individual generation of redeemable codes for the subscription service — primarily used for comic convention promotions, partner campaigns, and internal testing.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    Unlike the existing point-based promo system (1 pt = NT$1, real cost), subscription codes have zero generation cost. This opened up new promotional scenarios: comic convention gift-with-purchase, partnership bundles with external brands, and free trial codes for influencer campaigns — all without the fraud risk and traceability issues of bulk point distribution.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    The system allows ops teams to set code quantity, expiry rules, and redemption limits per batch. Each code grants a defined period of subscription access rather than currency, which also simplifies accounting.
                  </p>
                  <div className="rounded-2xl overflow-hidden border mt-6" style={{ borderColor: "var(--border)" }}>
                    <img src="/case/kado/subscription-code-admin.jpg" alt="Backend subscription code generation interface" className="w-full" />
                    <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Backend — subscription code generation interface</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Results */}
          <section id="results">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Results & Impact</p>
            <h2 className="text-2xl font-medium mb-8" style={{ color: "var(--text)" }}>Measurable outcomes across revenue, retention, and insight</h2>
            <div className="space-y-4">
              {[
                { metric: "10%", desc: "Boost in overall product revenue post-launch" },
                { metric: "↑ Retention", desc: "Mitigated single-title churn through Hero Banner and thematic stratification, driving subscribers toward second and subsequent novels" },
                { metric: "↑ Insight", desc: "Validated user value propositions by correlating push notification CTRs with new reading initiation rates; Day 4 price-led push underperforming confirmed content discovery — not price — was the core retention lever" },
                { metric: "🚀 First", desc: "Launched Taiwan's first subscription service for officially licensed Japanese light novels" },
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
            <h2 className="text-2xl font-medium mb-12" style={{ color: "var(--text)" }}>What building 0→1 taught me</h2>
            <div className="space-y-10">
              {[
                {
                  title: "Communication Alignment",
                  body: "Establishing unified metric consensus among all stakeholders (Content, Marketing, Tech) is critical to prevent resource scattering and ensure all cross-functional partners share a common definition of product success."
                },
                {
                  title: "Third-Party Integration",
                  body: "Integrating platforms like Google/Apple involves significant technical and policy pitfalls. This demands substantial time and multi-round communication with platform representatives to ensure compliance and a stable user experience."
                },
                {
                  title: "Balancing Demands",
                  body: "The core challenge in building a product from scratch is balancing internal business goals (e.g., content promotion, cost-efficiency) with external user expectations (e.g., ease-of-use, perceived value)."
                },
              ].map((item) => (
                <div key={item.title} className="border-l-2 pl-6" style={{ borderColor: "var(--accent)" }}>
                  <p className="text-sm font-medium mb-3" style={{ color: "var(--text)" }}>{item.title}</p>
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