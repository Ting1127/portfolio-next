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

          {/* What I Shipped — expanded */}
          <section id="shipped">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>What I Shipped</p>
            <h2 className="text-2xl font-medium mb-12" style={{ color: "var(--text)" }}>From MVP to retention-driving features</h2>

            <div className="space-y-16">

              {/* 1. Subscription MVP */}
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <span className="mt-1 flex-shrink-0" style={{ color: "var(--accent)" }}>⟡</span>
                  <div>
                    <p className="text-base font-medium mb-1" style={{ color: "var(--text)" }}>Subscription MVP · 訂閱制核心流程</p>
                    <p className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>Shipped 2024 / 11 / 20</p>
                  </div>
                </div>
                <div className="pl-6 space-y-4">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    Defined the full user journey from discovery to purchase — subscription-gated chapter logic, plan page copy, cancellation flow, and subscription state management across App and Web. One early call I had to make: web users can browse but can't subscribe directly.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    This was a deliberate three-way tradeoff: Apple and Google IAP policies restrict web-based payment flows; building a parallel web checkout would have pushed launch by months; and strategically, we wanted to drive app downloads. The right call was to design a clear web-to-app handoff instead of a half-baked web checkout.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    上線日 2024/11/20。定義了從發現到購買的完整用戶旅程，包含訂閱限定章節邏輯、方案頁文案與取消訂閱流程。其中一個關鍵決策：Web 端只導流、不提供訂閱。這是三個條件疊在一起的結果 — Apple / Google IAP 政策限制、完整金流開發會延誤上線時程、加上策略上希望導流 App。與其做一個不完整的 Web 金流，不如把 Web → App 的引導體驗做好。
                  </p>
                  <div className="rounded-2xl overflow-hidden border mt-6" style={{ borderColor: "var(--border)" }}>
                    <img
                      src="/case/kado/mvp-web-app-flow.jpg"
                      alt="Web subscription plan page with QR code handoff alongside App IAP purchase screen"
                      className="w-full"
                    />
                    <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>
                      Web 訂閱方案頁（含 QR code 引導下載）→ App IAP 付款畫面
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Revenue-Sharing Formula */}
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <span className="mt-1 flex-shrink-0" style={{ color: "var(--accent)" }}>⟡</span>
                  <div>
                    <p className="text-base font-medium mb-1" style={{ color: "var(--text)" }}>Revenue-Sharing Formula · 分潤計算機制</p>
                  </div>
                </div>
                <div className="pl-6 space-y-4">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    Co-designed with my manager, the revenue split is calculated proportionally by chapter page views — not flat per title. A creator whose novel captures 40% of all subscription reads that month earns 40% of the distributable pool.
                  </p>
                  <div className="rounded-2xl p-5 border font-mono text-sm" style={{ background: "var(--bg-card)", borderColor: "var(--border)", color: "var(--accent)" }}>
                    (subscription fee − 20% platform cost) ÷ total subscription chapter PVs × title PVs × revenue share %
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    It took several iterations to handle edge cases — what if a title spans multiple content bundles? What if a chapter is removed mid-cycle? Shipping this required getting Finance, Content, and Engineering to agree on a single definition of "a valid PV."
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    與主管共同設計的分潤公式，核心邏輯是按章節 PV 比例分配，而非按作品數平均。邊界條件討論了好幾輪 — 作品跨 bundle 怎麼算、章節中途下架怎麼處理。最難的不是公式本身，是讓財務、內容、工程三方對「有效 PV」有一致定義。
                  </p>
                  <div className="rounded-2xl overflow-hidden border mt-6" style={{ borderColor: "var(--border)" }}>
                    <img
                      src="/case/kado/revenue-formula-diagram.jpg"
                      alt="Revenue sharing formula flow diagram from PRD"
                      className="w-full"
                    />
                    <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>
                      PRD 中的分潤計算流程圖（Metabase 報表可替換，敏感數字可馬賽克）
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Push Notifications */}
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <span className="mt-1 flex-shrink-0" style={{ color: "var(--accent)" }}>⟡</span>
                  <div>
                    <p className="text-base font-medium mb-1" style={{ color: "var(--text)" }}>Targeted Push Notifications · 分群自動化推播</p>
                  </div>
                </div>
                <div className="pl-6 space-y-4">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    Built a three-wave push system targeting potential subscribers: content-led at 24hrs, price-led at day 4, social-proof-led at day 7. Each user enters a 14-day cycle triggered by visiting a subscription page or gated chapter. The data was direct:
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { day: "Day 1", label: "Content-led", result: "7 conversions" },
                      { day: "Day 4", label: "Price-led", result: "0 conversions" },
                      { day: "Day 7", label: "Social proof", result: "1 conversion" },
                    ].map((d) => (
                      <div key={d.day} className="rounded-2xl p-4 border text-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                        <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>{d.day}</p>
                        <p className="text-xs mb-2" style={{ color: "var(--muted)" }}>{d.label}</p>
                        <p className="text-sm font-medium" style={{ color: d.result === "0 conversions" ? "var(--muted)" : "var(--accent)" }}>{d.result}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    Day 4 converting zero told us something real: price sensitivity wasn't the main barrier. We flagged this for the next iteration and shifted messaging strategy. For existing subscribers, push logic runs on two tracks — genre-based recommendations (same category, unread titles) and weekly update reminders, both optimized to each user's last reading completion time.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    針對潛在訂戶設計三波推播，觸發條件是造訪過訂閱方案頁或訂閱限定章節，每 14 天一輪。數據很直白：Day 4 的價格訴求轉換率為零，告訴我們「太貴」不是主要障礙，下一輪要調整推薦方向。現有訂閱用戶則分兩條線：依閱讀過的類型推薦同分類未看作品，以及本週更新提醒，推播時間依完讀時間優化。
                  </p>
                  <div className="rounded-2xl overflow-hidden border mt-6" style={{ borderColor: "var(--border)" }}>
                    <img
                      src="/case/kado/push-notification-amplitude.jpg"
                      alt="Amplitude dashboard showing three-wave push notification conversion rates"
                      className="w-full"
                    />
                    <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>
                      Amplitude dashboard — 三波推播轉換率（數字可馬賽克，圖形結構保留）
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Promo Code System */}
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <span className="mt-1 flex-shrink-0" style={{ color: "var(--accent)" }}>⟡</span>
                  <div>
                    <p className="text-base font-medium mb-1" style={{ color: "var(--text)" }}>Promo Code System · 讀角券序號功能</p>
                  </div>
                </div>
                <div className="pl-6 space-y-4">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    Replaced point-based promo giveaways with a serial-code system for chapter unlock vouchers. Points cost real money to mint (1 pt = NT$1); voucher codes cost nothing to generate. This reduced promo cost exposure while solving a security problem — bulk point codes were vulnerable to theft and hard to trace after distribution.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    The new system lets ops teams generate batches, set expiry rules per code, and query redemption status. Voucher usage already sat at ~10% of daily unlocks at launch.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    把行銷發角點改成發讀角券序號。角點有成本（1點 = 台幣1元），讀角券產製成本為零。這個改動同時解了兩個問題 — 降低行銷成本，也修補了大量發點數容易被盜用、難以追蹤的安全漏洞。新系統讓營運人員可以批量產製序號、設定時效、查詢儲值紀錄。上線時讀角券解鎖量已佔每日約 10%。
                  </p>
                  <div className="rounded-2xl overflow-hidden border mt-6" style={{ borderColor: "var(--border)" }}>
                    <img
                      src="/case/kado/promo-code-admin.jpg"
                      alt="Backend serial code management interface"
                      className="w-full"
                    />
                    <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>
                      後台序號管理頁 — 產品列表 / 產製序號頁面
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Hero Banner */}
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <span className="mt-1 flex-shrink-0" style={{ color: "var(--accent)" }}>⟡</span>
                  <div>
                    <p className="text-base font-medium mb-1" style={{ color: "var(--text)" }}>Hero Banner & Thematic Discovery · 首頁 Banner 與分類導流</p>
                  </div>
                </div>
                <div className="pl-6 space-y-4">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    Designed to solve single-title churn — users who subscribed for one novel and left when it ended. The banner surfaces thematically similar titles based on reading history, pushing users toward a second novel before they disengage. Framing it as a content editorial decision rather than a retention mechanism helped get buy-in from the content team.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    針對「看完一本就走」的訂閱流失設計。Banner 根據用戶已讀作品推薦同分類標題，目標是在用戶還在的時候把他們帶進第二本。把這個功能定位成「內容編輯決策」而非「留存機制」，讓內容團隊更容易接受。
                  </p>
                  <div className="rounded-2xl overflow-hidden border mt-6" style={{ borderColor: "var(--border)" }}>
                    <img
                      src="/case/kado/hero-banner.jpg"
                      alt="App home Hero Banner showing thematic novel recommendations"
                      className="w-full"
                    />
                    <p className="px-4 py-3 text-xs" style={{ color: "var(--muted)", background: "var(--bg-card)" }}>
                      App 首頁 Hero Banner — 分類導流設計稿 / 截圖
                    </p>
                  </div>
                </div>
              </div>

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

          {/* Learnings — expanded */}
          <section id="learnings">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Learnings</p>
            <h2 className="text-2xl font-medium mb-12" style={{ color: "var(--text)" }}>What building 0→1 taught me</h2>
            <div className="space-y-10">

              <div className="border-l-2 pl-6" style={{ borderColor: "var(--accent)" }}>
                <p className="text-sm font-medium mb-3" style={{ color: "var(--text)" }}>
                  決策不是一個人的事，但定義是
                </p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
                  Every cross-functional decision — the IAP-only model, the revenue formula, the push cadence — needed alignment across Finance, Content, Marketing, and Engineering. But alignment doesn't happen on its own. Someone has to write down the definition first and hold it. That was my job.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  每一個跨部門決策都需要對齊，但對齊不會自己發生。有人要先把定義寫下來，然後守住它。那是我的工作。
                </p>
              </div>

              <div className="border-l-2 pl-6" style={{ borderColor: "var(--accent)" }}>
                <p className="text-sm font-medium mb-3" style={{ color: "var(--text)" }}>
                  Apple 和 Google 的規則不是技術問題，是談判問題
                </p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
                  IAP and IAB integration isn't just engineering work. Both platforms have policy requirements that can't be brute-forced — they require multiple rounds of communication with platform representatives, documentation reviews, and sometimes waiting for policy clarifications. Starting this process late is a project risk, not just a technical one.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  IAP / IAB 的整合不只是工程問題。兩個平台都有不能硬幹的政策要求 — 需要多輪與平台窗口溝通、審核文件、有時還要等政策說明。這件事如果啟動晚了，是整個專案的風險，不只是技術風險。
                </p>
              </div>

              <div className="border-l-2 pl-6" style={{ borderColor: "var(--accent)" }}>
                <p className="text-sm font-medium mb-3" style={{ color: "var(--text)" }}>
                  「數據說 Day 4 無效」也是一個結論
                </p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
                  The push notification data didn't give us a silver bullet — it gave us a falsified hypothesis. Day 4's price-led message converting zero users told us something real: the barrier to subscription isn't price perception. That's a useful finding, even if it meant going back to the drawing board on messaging strategy.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  推播數據沒有給我們一個大招，給的是一個被推翻的假設。Day 4 的價格訴求轉換率為零，這告訴我們：訂閱的障礙不是覺得貴。這是有用的發現，即使代價是要重新思考訊息策略。
                </p>
              </div>

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