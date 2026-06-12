export default function AboutPage() {
    const experiences = [
      { logo: "/logos/teleworker.png", title: "Product Manager", company: "Teleworker", period: "Feb 2026 – Present", location: "Remote" },
      { logo: "/logos/kadokawa.png", title: "Product Manager", company: "KadoKawa Corp.", period: "Jun 2023 – Jul 2025", location: "Taiwan" },
      { logo: "/logos/synology.png", title: "Product Management Intern", company: "Synology", period: "Mar 2022 – Oct 2022", location: "Taiwan" },
      { logo: "/logos/snapask.png", title: "UIUX Designer", company: "Snapask", period: "Jan 2021 – May 2021", location: "Remote" },
      { logo: "/logos/nextbank.png", title: "Product Design Intern", company: "NEXT BANK", period: "Jul 2020 – Dec 2020", location: "Taiwan" },
      { logo: "/logos/benq.png", title: "UX Design Intern", company: "BenQ", period: "Jun 2019 – Jun 2020", location: "Taiwan" },
    ];
  
    const community = [
      { logo: "/logos/twds.png", title: "Content Manager", company: "Taiwan Data Science Association", period: "Dec 2022 – Present" },
      { logo: "/logos/uxtw.png", title: "Researcher", company: "UXTW Taiwan UX Professional Association", period: "Mar 2021 – Feb 2022" },
    ];
  
    const education = [
      { logo: "/logos/uwmadison.png", title: "MS in Information Systems", company: "University of Wisconsin–Madison", period: "Sep 2026 (Incoming)", note: "Focus: Information Systems, Product Strategy, Data Analytics" },
      { logo: "/logos/ntust.png", title: "MA in Design", company: "National Taiwan University of Science and Technology", period: "Mar 2020 – Jan 2023", note: "Focus: UIUX, Service Design, Customer Experience" },
      { logo: "/logos/ntue.png", title: "BA in Industrial and Product Design", company: "National Taipei University of Education", period: "Sep 2015 – Jun 2019", note: "" },
    ];
  
    const publications = [
      {
        title: "Constructing a scenario-driven model for contextual brand experience: The case of chain coffee brands",
        venue: "Full Paper · DRS 2026",
        citation: "Hsu, Y., Zeng, Y., and Tang, H. (2026)",
        accent: true,
      },
      {
        title: "Weighting key driving forces of consumers choosing coffee chains in different scenarios",
        venue: "Short Paper · IASDR 2023",
        citation: "Zeng, Y., Tang, H., and Chen, S. (2023)",
        accent: false,
      },
    ];
  
    const awards = [
      { logo: "/logos/ADC.png", award: "Bronze Cube", org: "New York Art Directors Club (ADC)", year: "2019" },
      { logo: "/logos/IDA.png", award: "Double Gold", org: "International Design Awards (IDA) — Medical & Multimedia Design", year: "2019" },
      { logo: "/logos/dyson.png", award: "National Runner Up", org: "James Dyson Award", year: "2019" },
    ];
  
    const faqs = [
      {
        q: "When is Jennie available?",
        a: "I'm currently consulting full-time at Teleworker. Starting September 2026, I'll be a graduate student at UW–Madison and actively looking for part-time or RA/project assistant roles on campus.",
      },
      {
        q: "Is Jennie authorized to work in the US?",
        a: "I'll be on an F-1 student visa starting September 2026, eligible for on-campus employment and CPT/OPT for internships and full-time roles.",
      },
      {
        q: "Is Jennie more of a designer or a PM?",
        a: "PM — with a designer's instinct. I've shipped real products with measurable outcomes, led cross-functional teams, and owned roadmaps. The design background means I think about experience quality differently than most PMs.",
      },
      {
        q: "What is GEO?",
        a: "Generative Engine Optimization — optimizing brand visibility within AI-powered search engines like ChatGPT, Perplexity, and Google AI Overviews. It's where SEO meets LLMs.",
      },
    ];
  
    return (
      <main className="min-h-screen bg-[#0D0F14] text-[#EDE9DF]">
        <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#0D0F14]/90 backdrop-blur-sm border-b border-[#1E2A3A]">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
  <span className="text-[#C9A84C] text-base">⟡</span>
  <span className="text-sm font-medium tracking-tight text-[#EDE9DF]">Jennie Z</span>
</a>
          <div className="flex items-center gap-8 text-sm text-[#EDE9DF]">
            <a href="/work" className="hover:text-[#C9A84C] transition-colors">Work</a>
            <a href="/drift" className="hover:text-[#C9A84C] transition-colors">Drift</a>
            <a href="/about" className="text-[#C9A84C]">About</a>
            <a href="https://linkedin.com/in/yuting-zeng1127" target="_blank" className="hover:text-[#C9A84C] transition-colors">LinkedIn ↗</a>
          </div>
        </nav>
  
        <section className="pt-48 pb-16 px-8 max-w-3xl mx-auto">
  
          {/* Intro */}
          <p className="text-xs tracking-widest uppercase text-[#C9A84C] mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-12">
            Hi, I'm Jennie Zeng (曾鈺婷) ⟡
          </h1>
          <div className="text-[#EDE9DF] text-base leading-relaxed space-y-5 mb-20">
            <p>I'm a Taipei-based Product Manager with a background in UX design and research — currently consulting on AI & GEO strategy at Teleworker, and heading to UW–Madison's Information Systems program in September 2026.</p>
            <p>My path started in design, moved through research, and landed in product. That sequence wasn't accidental — I think the best PMs understand how people experience things, not just how systems work. I bring that designer's eye and researcher's instinct to every product decision I make.</p>
            <p>Right now I'm most interested in how generative AI is changing brand discovery, user decision-making, and how teams should build differently as a result.</p>
          </div>
  
          {/* Outside of work */}
          <div className="mb-6">
            <p className="text-xs tracking-widest uppercase text-[#6B7280] mb-6">Outside of work, I love</p>
            <div className="text-[#EDE9DF] text-sm leading-loose mb-8">
              Learning Japanese 🇯🇵<br />
              Good coffee & matcha ☕<br />
              Illustration & photography 📷<br />
              Travelling for food 🍜<br />
              Exhibitions & art history 🎨<br />
              Miffy 🐰<br />
              Blackpink 🖤
            </div>
          </div>
  
          {/* Life photos */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-20 scrollbar-hide">
            {["01.JPG","02.JPG","03.JPG","04.png","05.png"].map((f, i) => (
              <div key={i} className="flex-shrink-0 w-44 h-56 rounded-2xl overflow-hidden">
                <img src={`/life/${f}`} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
  
          {/* Experience */}
          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase text-[#6B7280] mb-8">Professional Experience</p>
            <div className="space-y-6">
              {experiences.map((e) => (
                <div key={e.company} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0 flex items-center justify-center">
                    <img src={e.logo} alt={e.company} className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#EDE9DF]">{e.title} — <span className="italic text-[#6B7280]">{e.company}</span></p>
                    <p className="text-xs text-[#6B7280] mt-0.5">{e.period} · {e.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Community */}
          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase text-[#6B7280] mb-8">Community</p>
            <div className="space-y-6">
              {community.map((e) => (
                <div key={e.company} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0 flex items-center justify-center">
                    <img src={e.logo} alt={e.company} className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#EDE9DF]">{e.title} — <span className="italic text-[#6B7280]">{e.company}</span></p>
                    <p className="text-xs text-[#6B7280] mt-0.5">{e.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Education */}
          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase text-[#6B7280] mb-8">Education</p>
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.company} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0 flex items-center justify-center">
                    <img src={e.logo} alt={e.company} className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#EDE9DF]">{e.title} — <span className="italic text-[#6B7280]">{e.company}</span></p>
                    <p className="text-xs text-[#6B7280] mt-0.5">{e.period}</p>
                    {e.note && <p className="text-xs text-[#6B7280] mt-0.5">{e.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Publications */}
          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase text-[#6B7280] mb-8">Publications</p>
            <div className="space-y-6">
              {publications.map((p) => (
                <div key={p.title} className={`border-l-2 pl-5 ${p.accent ? "border-[#C9A84C]" : "border-[#1E2A3A]"}`}>
                  <p className="text-sm font-medium text-[#EDE9DF] mb-1">{p.title}</p>
                  <p className="text-xs text-[#C9A84C] mb-1">{p.venue}</p>
                  <p className="text-xs text-[#6B7280]">{p.citation}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Awards */}
          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase text-[#6B7280] mb-8">Awards</p>
            <div className="space-y-4">
              {awards.map((a) => (
                <div key={a.award} className="flex items-center gap-4 border-b border-[#1E2A3A] pb-4">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0 flex items-center justify-center">
                    <img src={a.logo} alt={a.award} className="w-8 h-8 object-contain" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#EDE9DF]">{a.award}</p>
                    <p className="text-xs text-[#6B7280] mt-1">{a.org}</p>
                  </div>
                  <p className="text-xs text-[#6B7280]">{a.year}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* FAQ */}
          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase text-[#6B7280] mb-8">FAQ</p>
            <div className="space-y-8">
              {faqs.map((item) => (
                <div key={item.q} className="border-b border-[#1E2A3A] pb-8">
                  <p className="text-sm font-medium text-[#EDE9DF] mb-3">{item.q}</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* CTA */}
          <div className="bg-[#141820] border border-[#1E2A3A] rounded-2xl p-8 text-center">
            <p className="text-[#C9A84C] text-lg mb-4">⟡</p>
            <p className="text-[#EDE9DF] text-sm leading-relaxed mb-6">
              Starting September 2026 at UW–Madison, I'm open to student assistant, RA, and project roles — especially anything at the intersection of AI, data, and product.
            </p>
            <a href="mailto:zyting.info@gmail.com"
              className="inline-block px-6 py-3 border border-[#C9A84C] text-[#C9A84C] text-sm rounded-full hover:bg-[#C9A84C] hover:text-[#0D0F14] transition-all">
              Get in touch ↗
            </a>
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