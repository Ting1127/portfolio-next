import { CaseSidebar } from "@/components/CaseSidebar";
import { Nav } from "@/components/Nav";

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

      <Nav />

      {/* Hero */}
      <section className="pt-48 pb-16 px-8 max-w-6xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>Product</p>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-6" style={{ color: "var(--text)" }}>
          Kado+ Subscription
        </h1>
        <p className="text-2xl max-w-2xl" style={{ color: "var(--muted)" }}>
          Building a 0→1 subscription service for Japanese light novels — from zero revenue to 10% growth.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          {[
            { label: "Role", value: "Product Manager" },
            { label: "Timeline", value: "Jun 2023 – Jul 2025" },
            { label: "Company", value: "KadoKawa Corp." },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>{item.label}</p>
              <p className="text-sm" style={{ color: "var(--text)" }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cover video */}
      <div className="w-full mb-16 px-8 max-w-6xl mx-auto">
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
      <div className="px-8 max-w-6xl mx-auto flex gap-16 pb-32">

        <CaseSidebar sections={sections} />

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
                  <p className="text-4xl md:text-5xl font-medium mb-2" style={{ color: "var(--accent)" }}>{stat.number}</p>
                  <p className="text-base" style={{ color: "var(--muted)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Context */}
          <section id="context">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Context</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-4" style={{ color: "var(--text)" }}>About KadoKawa & Kado+</h2>
            <div className="flex gap-4 items-start mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white flex items-center justify-center border flex-shrink-0" style={{ borderColor: "var(--border)" }}>
                <img src="/logos/kadokawa.png" alt="KadoKawa" className="w-9 h-9 object-contain" />
              </div>
              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                KadoKawa is a publicly listed Japanese media group operating under a Global Media-Mix philosophy — creating IP with authors, distributing it across platforms, and connecting fans through communities. Major shareholders include Sony, Tencent, and Kakao.
              </p>
            </div>
            <div className="flex gap-4 items-start mb-8">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white flex items-center justify-center border flex-shrink-0" style={{ borderColor: "var(--border)" }}>
                <img src="/logos/kadoplus.png" alt="Kado+" className="w-9 h-9 object-contain" />
              </div>
              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                Kado+ is a subscription service tailored for Japanese light novel enthusiasts, offering unlimited, chapter-based access to officially licensed Japanese titles. The goal: reduce cost and time barriers for Taiwanese readers while building a sustainable content ecosystem that works for readers, the platform, and creators simultaneously.
              </p>
            </div>
            <div className="rounded-2xl p-6 border mb-8" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Team</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["Product Manager", "2 Product Designers", "5 Engineers", "2 App Developers", "2 Data Scientists", "2 Marketing", "2 Content Strategy"].map(r => (
                  <span key={r} className="text-base" style={{ color: "var(--muted)" }}>{r}</span>
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
            <h2 className="text-3xl md:text-4xl font-medium mb-8" style={{ color: "var(--text)" }}>Three barriers blocking readers — and the business</h2>
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
                      <li key={pt} className="text-base leading-relaxed flex gap-3" style={{ color: "var(--muted)" }}>
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
            <h2 className="text-3xl md:text-4xl font-medium mb-4" style={{ color: "var(--text)" }}>Defining the model before building the product</h2>
            <p className="leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              As the lead PM, I was responsible for defining the product model, business logic, and feature requirements before engineering started. This meant working across content, marketing, tech, data, and finance teams to align on development phases and expected outcomes.
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
              I ran two parallel workstreams before launch: define the subscription business logic (pricing, revenue share formula, platform rules), and define the user-facing product (flows, copy, states, edge cases). Both had to be ready simultaneously.
            </p>
            <div className="rounded-2xl overflow-hidden border max-w-lg mx-auto" style={{ borderColor: "var(--border)" }}>
              <img src="/case/kado/subscription-architecture.jpg" alt="Subscription architecture — User to IAP to platform auto-renewal flow" className="w-full" />
            </div>
          </section>

          {/* What I Shipped */}
          <section id="shipped">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>What I Shipped</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-12" style={{ color: "var(--text)" }}>From MVP to a full subscription ecosystem</h2>

            <div className="space-y-20">

              {/* 01 MVP — full depth, kept as-is: this is the core 0→1 narrative */}
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>⟡</span>
                  <p className="text-base font-medium" style={{ color: "var(--text)" }}>01 · Subscription MVP</p>
                </div>
                <div className="pl-6 space-y-4">
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                    Defined the full user journey from discovery to purchase — subscription-gated chapter logic, error states, processing states, cancellation flow, and subscription state management across App and Web. This also included working with engineering to define the API call flow.
                  </p>
                  <div className="rounded-2xl p-5 border space-y-3" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                    <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                      <span className="font-medium" style={{ color: "var(--text)" }}>Signal — </span>
                      Building a parallel web checkout would have delayed launch by months, and platform review cycles made the timeline risk worse.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                      <span className="font-medium" style={{ color: "var(--text)" }}>Bet — </span>
                      Strategically, driving app downloads mattered more than a frictionless web checkout — the app is where retention and push infrastructure live.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                      <span className="font-medium" style={{ color: "var(--text)" }}>Decision — </span>
                      Web users can browse but not subscribe directly. I designed a web-to-app handoff instead: desktop users see a QR code, mobile users get a deep link straight into the App Store or the app itself.
                    </p>
                  </div>
                  <div className="rounded-2xl overflow-hidden border mt-6" style={{ borderColor: "var(--border)" }}>
                    <img src="/case/kado/mvp-overview.jpg" alt="Web and App subscription flow — desktop QR code, mobile deep link, IAP payment, and success screen" className="w-full" />
                    <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Web (QR code · deep link) and App (subscription page · IAP payment · success state)</p>
                  </div>
                </div>
              </div>

              {/* 02 CMS — compressed to one paragraph. Image kept since it's a low-cost, high-clarity visual;
                  the three-page rule breakdown and Theme/Plan hierarchy explanation were cut as implementation
                  detail that doesn't change how a NA big-tech PM reader reads your judgment. */}
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>⟡</span>
                  <p className="text-base font-medium" style={{ color: "var(--text)" }}>02 · CMS Subscription Management</p>
                </div>
                <div className="pl-6 space-y-4">
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                    Content editors needed full operational control — adding chapters, setting activation dates, reordering titles — without filing an engineering ticket every time. I designed the back-end workflow from scratch, including the scheduling logic and platform ID mapping to Apple/Google, and ran internal training before launch. This removed a recurring engineering bottleneck for the content team.
                  </p>
                  <div className="rounded-2xl overflow-hidden border mt-6" style={{ borderColor: "var(--border)" }}>
                    <img src="/case/kado/cms-overview.jpg" alt="CMS subscription management — plan list, drag-to-reorder title page, chapter scheduling, and platform-to-front-end workflow" className="w-full" />
                    <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>CMS — plan list · drag-to-reorder · chapter scheduling · platform workflow</p>
                  </div>
                </div>
              </div>

              {/* 03 Revenue Formula — compressed to one paragraph, image kept */}
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>⟡</span>
                  <p className="text-base font-medium" style={{ color: "var(--text)" }}>03 · Revenue-Sharing Formula</p>
                </div>
                <div className="pl-6 space-y-4">
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                    Co-designed with my manager, the formula distributes creator revenue proportionally by actual readership rather than an equal split — factoring in subscription fee, platform operating costs, and per-title chapter views. The hard part wasn't the math: it was getting Finance, Content, and Engineering to agree on shared definitions, like what counts as a valid read and how content removed mid-cycle is treated.
                  </p>
                  <div className="rounded-2xl overflow-hidden border mt-6 max-w-xl mx-auto" style={{ borderColor: "var(--border)" }}>
                    <img src="/case/kado/revenue-formula.jpg" alt="Four chapter list examples, each showing a different unlock badge — free, points (lock), reading voucher (ticket), and subscription (Kado+ logo)" className="w-full" />
                    <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Chapter unlock types — free, points, reading voucher, subscription</p>
                  </div>
                </div>
              </div>

              {/* 04 Research → Retention — full depth, kept as-is: this section carries the strongest
                  judgment evidence (the Day 4 push test) and should stay as the second deep dive. */}
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>⟡</span>
                  <p className="text-base font-medium" style={{ color: "var(--text)" }}>04 · Research → Content Discovery & Retention</p>
                </div>
                <div className="pl-6 space-y-4">
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                    Post-launch, I established a structured feedback framework across five subscriber lifecycle stages to drive iteration:
                  </p>
                  <div className="rounded-2xl overflow-hidden border my-4" style={{ borderColor: "var(--border)" }}>
                    <img src="/case/kado/user-lifecycle.jpg" alt="Five-stage subscriber lifecycle — Potential Audience, Active Readers, Inactive Subscribers, Unsubscribed, Returning User" className="w-full" />
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
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
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                    I developed detailed Customer Journey Maps across all five stages and used them in cross-functional workshops to align stakeholders on iteration direction before development started.
                  </p>
                  <div className="rounded-2xl overflow-hidden border mt-6" style={{ borderColor: "var(--border)" }}>
                    <img src="/case/kado/journey-map.jpg" alt="Customer Journey Map across all five subscriber lifecycle stages" className="w-full" />
                    <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Customer Journey Map — all five stages</p>
                  </div>
                  <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                    <img src="/case/kado/churn-survey.jpg" alt="Churned subscriber exit survey results" className="w-full" />
                    <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Exit survey — churn reasons and feature requests</p>
                  </div>

                  {/* Hero Banner */}
                  <div className="pt-4">
                    <p className="text-base font-semibold mb-3" style={{ color: "var(--text)" }}>Hero Banner & Thematic Discovery</p>
                    <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                      Pivoted content strategy from Blockbuster Title Attraction to User-Centric Content Discovery. The Hero Banner surfaces thematically curated titles to drive clicks to key content. A layered recommendation system — popular titles combined with thematic suggestions based on reading history — supports the content team's promotion of Taiwan-exclusive and pre-published novels. A limited-time offer near the CTA accelerates subscription decisions.
                    </p>
                    <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                      Framing this to the content team as an editorial decision — not a retention mechanism — was what got it shipped.
                    </p>
                    <div className="space-y-4">
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
                    <p className="text-base font-semibold mb-3" style={{ color: "var(--text)" }}>Targeted Push Notifications</p>
                    <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                      Built a three-wave automated push system for potential subscribers, each entering a 14-day cycle when they visit a subscription page or gated chapter. Three message angles were tested: content-led (24hrs), price-led (day 4), and social proof (day 7).
                    </p>
                    <div className="rounded-2xl p-5 border space-y-3 mb-6" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                      <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                        <span className="font-medium" style={{ color: "var(--text)" }}>Signal — </span>
                        Churn survey responses pointed to "price too high" as a leading reason subscribers left.
                      </p>
                      <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                        <span className="font-medium" style={{ color: "var(--text)" }}>Bet — </span>
                        Self-reported churn reasons are often surface-level. I suspected the deeper issue was content discovery, not price, and designed the push test to check that before committing engineering time to either fix.
                      </p>
                      <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                        <span className="font-medium" style={{ color: "var(--text)" }}>Decision — </span>
                        Day 4's price-led push converted significantly worse than Day 1's content-led push — ruling out price as the primary lever. That result directed investment toward the Hero Banner and genre-based recommendation system below, rather than a pricing change. For existing subscribers, push now runs on two tracks timed to each user's last reading completion: genre-based recommendations to encourage a second novel, and weekly update reminders for titles already started.
                      </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                      <img src="/case/kado/push-amplitude.jpg" alt="Amplitude dashboard showing three-wave push notification conversion rates" className="w-full" />
                      <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>Amplitude — three-wave push conversion rates</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 05 Backend Subscription Code Generation — removed entirely.
                  Lowest business impact of the five shipped items; not worth equal real estate
                  next to the MVP and retention work above. If you still want a trace of it,
                  it can be added as a single trailing line inside section 02 instead:
                  "I also extended an internal tool to batch-generate redeemable subscription
                  codes for partner and convention campaigns." — but it's fine to leave out. */}

            </div>
          </section>

          {/* Results */}
          <section id="results">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Results & Impact</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-8" style={{ color: "var(--text)" }}>Measurable outcomes across revenue, retention, and insight</h2>
            <div className="space-y-4">
              {[
                { metric: "10%", desc: "Boost in overall product revenue post-launch" },
                { metric: "↑ Retention", desc: "Mitigated single-title churn through Hero Banner and thematic stratification, driving subscribers toward second and subsequent novels" },
                { metric: "↑ Insight", desc: "Validated user value propositions by correlating push notification CTRs with new reading initiation rates; Day 4 price-led push underperforming confirmed content discovery — not price — was the core retention lever" },
                { metric: "🚀 First", desc: "Launched Taiwan's first subscription service for officially licensed Japanese light novels" },
              ].map((item) => (
                <div key={item.metric} className="flex gap-6 p-5 rounded-2xl border items-start" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-xl font-medium w-28 flex-shrink-0" style={{ color: "var(--accent)" }}>{item.metric}</p>
                  <p className="text-base leading-relaxed pt-1" style={{ color: "var(--muted)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Learnings */}
          <section id="learnings">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Learnings</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-12" style={{ color: "var(--text)" }}>What building 0→1 taught me</h2>
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
                  <p className="text-base font-medium mb-3" style={{ color: "var(--text)" }}>{item.title}</p>
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Next case */}
      <div className="px-8 pb-16 max-w-6xl mx-auto">
        <div className="border-t pt-12" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Next Case</p>
          <a href="/work/geo-monitoring"
            className="group flex justify-between items-center hover:opacity-70 transition-opacity">
            <p className="text-2xl font-medium" style={{ color: "var(--text)" }}>GEO Monitoring & Strategy →</p>
          </a>
        </div>
      </div>

      <footer className="px-8 py-12 border-t max-w-6xl mx-auto w-full" style={{ borderColor: "var(--border)" }}>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <span className="text-xs" style={{ color: "var(--muted)" }}>Jennie Z © 2026</span>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a href="https://linkedin.com/in/yuting-zeng1127" target="_blank"
              className="text-xs hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>LinkedIn ↗︎</a>
            <a href="mailto:zyting.info@gmail.com"
              className="text-xs hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>zyting.info@gmail.com</a>
            <span style={{ color: "var(--accent)" }}>⟡</span>
          </div>
        </div>
      </footer>

    </main>
  );
}