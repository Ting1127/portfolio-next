import { ThemeToggle } from "@/components/ThemeToggle";

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
    { logo: "/logos/twds.png", title: "Content Manager", company: "Taiwan Data Science Association", period: "Dec 2022 – Present", link: "https://www.facebook.com/share/g/14hU21YtanM/" },
    { logo: "/logos/uxtw.png", title: "Researcher", company: "UXTW Taiwan UX Professional Association", period: "Mar 2021 – Feb 2022", link: "https://www.facebook.com/theUXTW/?locale=zh_TW" },
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
      link: "https://dl.designresearchsociety.org/drs-conference-papers/drs2026/researchpapers/69/",
    },
    {
      title: "Weighting key driving forces of consumers choosing coffee chains in different scenarios",
      venue: "Short Paper · IASDR 2023",
      citation: "Zeng, Y., Tang, H., and Chen, S. (2023)",
      accent: false,
      link: "https://dl.designresearchsociety.org/iasdr/iasdr2023/shortpapers/46/",
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

      <section className="pt-48 pb-16 px-8 max-w-3xl mx-auto">

        {/* Intro */}
        <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>About</p>
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-8" style={{ color: "var(--text)" }}>
              Hi, I'm Jennie Zeng (曾鈺婷) ⟡
            </h1>
            <div className="text-base leading-relaxed space-y-5" style={{ color: "var(--text)" }}>
              <p>I'm an incoming MSI student at UW–Madison, starting this September — which means Wisconsin is home from here on out. Before grad school, I worked as a Product Manager across content platforms, SaaS, B2B, and hardware-software products — spanning industries from publishing to finance to semiconductors.</p>
              <p>My background started in UX design and research, and that's still how I approach product work: understand how people experience something first, then figure out the system behind it. What I'm drawn to is unfamiliar territory — industries I haven't worked in yet, technology that doesn't have a playbook yet. </p>
              <p>Right now that's generative AI and how it's reshaping the way people find and trust information. Figuring out what "good" looks like before anyone's written the rules is, honestly, my favorite part of the job</p>
            </div>
          </div>
          <div className="flex-shrink-0 w-64 md:w-72 rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <img src="/about-photo.jpg" alt="Jennie" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Outside of work */}
        <div className="mb-6">
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--muted)" }}>Outside of work, I love</p>
          <div className="text-sm leading-loose mb-8" style={{ color: "var(--text)" }}>
            Learning Japanese 🇯🇵<br />
            Good coffee ☕ & matcha 🍵<br />
            Illustration 🎨 & photography 📷<br />
            Travelling for food 🍜<br />
            Exhibitions & art history 🖼️<br />
            Miffy 🐰<br />
            Blackpink 🖤🩷
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
          <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--muted)" }}>Professional Experience</p>
          <div className="space-y-6">
            {experiences.map((e) => (
              <div key={e.company} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0 flex items-center justify-center">
                  <img src={e.logo} alt={e.company} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    {e.title} — <span className="italic" style={{ color: "var(--muted)" }}>{e.company}</span>
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{e.period} · {e.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--muted)" }}>Education</p>
          <div className="space-y-6">
            {education.map((e) => (
              <div key={e.company} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0 flex items-center justify-center">
                  <img src={e.logo} alt={e.company} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    {e.title} — <span className="italic" style={{ color: "var(--muted)" }}>{e.company}</span>
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{e.period}</p>
                  {e.note && <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{e.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community */}
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--muted)" }}>Community</p>
          <div className="space-y-6">
            {community.map((e) => (
              <div key={e.company} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0 flex items-center justify-center">
                  <img src={e.logo} alt={e.company} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    {e.title} — <span className="italic" style={{ color: "var(--muted)" }}>{e.company}</span>
                  </p>
                  <p className="text-xs mt-0.5 mb-2" style={{ color: "var(--muted)" }}>{e.period}</p>
                  {e.link && (
                    <a href={e.link} target="_blank"
                      className="text-xs px-3 py-1 rounded-full border inline-block hover:opacity-80 transition-opacity"
                      style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
                      Visit ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--muted)" }}>Publications</p>
          <div className="space-y-6">
            {publications.map((p) => (
              <div key={p.title} className="pl-5 border-l-2"
                style={{ borderColor: p.accent ? "var(--accent)" : "var(--border)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "var(--text)" }}>{p.title}</p>
                <p className="text-xs mb-2" style={{ color: "var(--accent)" }}>{p.venue}</p>
                <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>{p.citation}</p>
                {p.link && (
                  <a href={p.link} target="_blank"
                    className="text-xs px-3 py-1 rounded-full border inline-block hover:opacity-80 transition-opacity"
                    style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
                    View Paper ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--muted)" }}>Awards</p>
          <div className="space-y-4">
            {awards.map((a) => (
              <div key={a.award} className="flex items-center gap-4 border-b pb-4" style={{ borderColor: "var(--border)" }}>
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0 flex items-center justify-center">
                  <img src={a.logo} alt={a.award} className="w-8 h-8 object-contain" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{a.award}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{a.org}</p>
                </div>
                <p className="text-xs" style={{ color: "var(--muted)" }}>{a.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--muted)" }}>FAQ</p>
          <div className="space-y-8">
            {faqs.map((item) => (
              <div key={item.q} className="border-b pb-8" style={{ borderColor: "var(--border)" }}>
                <p className="text-sm font-medium mb-3" style={{ color: "var(--text)" }}>{item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-center border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
          <p className="text-lg mb-4" style={{ color: "var(--accent)" }}>⟡</p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text)" }}>
            Starting September 2026 at UW–Madison, I'm open to student assistant, RA, and project roles — especially anything at the intersection of AI, data, and product.
          </p>
          <a href="mailto:zyting.info@gmail.com" className="btn-primary inline-block">
            Get in touch ↗
          </a>
        </div>

      </section>

      <footer className="px-8 py-12 border-t max-w-5xl mx-auto w-full" style={{ borderColor: "var(--border)" }}>
        <div className="flex justify-between items-center">
          <span className="text-xs" style={{ color: "var(--muted)" }}>Jennie Z © 2026</span>
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