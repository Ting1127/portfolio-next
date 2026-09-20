import { Nav } from "@/components/Nav";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PhotoStack } from "@/components/PhotoStack";
import { LifePolaroids, type LifePile } from "@/components/LifePolaroids";

export default function AboutPage() {
  const experiences = [
    { logo: "/logos/micron.png", title: "Product Manager", company: "Micron Technology (via MarTech Agency)", period: "Feb 2026 – Present" },
    { logo: "/logos/kadokawa.png", title: "Product Manager", company: "KadoKawa Corp.", period: "Jun 2023 – Jul 2025" },
    { logo: "/logos/synology.png", title: "Product Management Intern", company: "Synology", period: "Mar 2022 – Oct 2022" },
    { logo: "/logos/snapask.png", title: "UIUX Designer", company: "Snapask", period: "Jan 2021 – May 2021" },
    { logo: "/logos/nextbank.png", title: "Product Design Intern", company: "NEXT BANK", period: "Jul 2020 – Dec 2020" },
    { logo: "/logos/benq.png", title: "UX Design Intern", company: "BenQ", period: "Jun 2019 – Jun 2020" },
  ];

  const education = [
    { logo: "/logos/uwmadison.png", title: "MS in Information", company: "University of Wisconsin–Madison", period: "Sep 2026 - Present", note: "Focus: Information Systems, Product Strategy, Data Analytics" },
    { logo: "/logos/ntust.png", title: "MA in Design", company: "National Taiwan University of Science and Technology", period: "Mar 2020 – Jan 2023", note: "Focus: UIUX, Service Design, Customer Experience" },
    { logo: "/logos/ntue.png", title: "BA in Industrial and Product Design", company: "National Taipei University of Education", period: "Sep 2015 – Jun 2019", note: "" },
  ];

  // What I love — 三堆拍立得，每堆最多 3 張；lines 是碰到時泡泡裡的文字
  const lovePiles: LifePile[] = [
    {
      id: "food",
      photos: [{ src: "/life/02.JPG" }, { src: "/life/06.png" }],
      lines: ["Good coffee ☕ & matcha 🍵", "Travelling for food 🍜", "Learning Japanese 🇯🇵"],
    },
    {
      id: "art",
      photos: [{ src: "/life/04.png" }, { src: "/life/05.JPG" }, { src: "/life/07.png" }],
      lines: ["Exhibitions & art history 🖼️", "Illustration 🎨 & photography 📷"],
    },
    {
      id: "fandom",
      photos: [{ src: "/life/01.JPG" }, { src: "/life/03.JPG" }],
      lines: ["Miffy 🐰 & Blackpink 🖤🩷"],
    },
  ];


  const community = [
    { logo: "/logos/twds.png", title: "Content Manager", company: "Taiwan Data Science Association", period: "Dec 2022 – Present", link: "https://www.facebook.com/share/g/14hU21YtanM/" },
    { logo: "/logos/uxtw.png", title: "Researcher", company: "UXTW Taiwan UX Professional Association", period: "Mar 2021 – Feb 2022", link: "https://www.facebook.com/theUXTW/?locale=zh_TW" },
  ];

  const publications = [
    {
      title: "Constructing a scenario-driven model for contextual brand experience: The case of chain coffee brands",
      venue: "Full Paper · DRS 2026",
      citation: "Hsu, Y., Zeng, Y., and Tang, H. (2026)",
      accent: true,
      link: "https://dl.designresearchsociety.org/drs-conference-papers/drs2026/researchpapers/69/",
      cta: "View Paper",
    },
    {
      title: "Weighting key driving forces of consumers choosing coffee chains in different scenarios",
      venue: "Short Paper · IASDR 2023",
      citation: "Zeng, Y., Tang, H., and Chen, S. (2023)",
      accent: false,
      link: "https://dl.designresearchsociety.org/iasdr/iasdr2023/shortpapers/46/",
      cta: "View Paper",
    },
    {
      title: "Designing a happier service experience: An innovation proposal for Louisa Coffee",
      venue: "Service Design Case Study · DITL on Medium (in Chinese)",
      accent: false,
      link: "https://medium.com/ditl/創新服務體驗提案-路易莎咖啡如何能創造有幸福感的服務體驗-975d2e590d59",
      cta: "Read on Medium",
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
      a: "Starting September 2026 at UW–Madison, I'm open to internships, student assistant, and project roles — especially anything at the intersection of AI, data, and product.",
    },
    {
      q: "Is Jennie authorized to work in the US?",
      a: "I'll be on an F-1 student visa starting September 2026, eligible for on-campus employment and CPT/OPT for internships and full-time roles.",
    },
  ];

  return (
    <main className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>

      <Nav />

      <section className="pt-48 pb-16 px-8 max-w-3xl mx-auto">

        {/* Intro */}
        <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>About</p>
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight mb-8 whitespace-nowrap" style={{ color: "var(--text)" }}>
              Hi, I&apos;m Jennie Zeng (曾鈺婷) ⟡
            </h1>
            <div className="text-base leading-relaxed space-y-5" style={{ color: "var(--text)" }}>
              <p>I&apos;m an MS Information student at UW–Madison, focusing on data analysis and AI-powered search.</p>
              <p>Before grad school, I worked as a Product Manager across content platforms, SaaS, B2B, and hardware-software products, spanning publishing, finance, and semiconductors. With a background in UX design and research, I approach product work by understanding people first, then the systems behind their experiences.</p>
            </div>
          </div>
          <PhotoStack className="w-40 md:w-48" />
        </div>

        {/* Experience + Education side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--accent)" }}>Professional Experience</p>
            <div className="space-y-6">
              {experiences.map((e) => (
                <div key={e.company} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0 flex items-center justify-center border border-gray-200 dark:border-white/10">
                    <img src={e.logo} alt={e.company} className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                      {e.title} — <span className="italic" style={{ color: "var(--muted)" }}>{e.company}</span>
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{e.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--accent)" }}>Education</p>
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.company} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0 flex items-center justify-center border border-gray-200 dark:border-white/10">
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
        </div>

        {/* What I love / Community */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium mb-4" style={{ color: "var(--accent)" }}>
            What I love
          </h2>

          <div className="mb-16">
            <LifePolaroids piles={lovePiles} />
          </div>

          {/* Community */}
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Community</p>
          <div className="space-y-6">
            {community.map((e) => (
              <div key={e.company} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0 flex items-center justify-center border border-gray-200 dark:border-white/10">
                  <img src={e.logo} alt={e.company} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    {e.title} — <span className="italic" style={{ color: "var(--muted)" }}>{e.company}</span>
                  </p>
                  <p className="text-xs mt-0.5 mb-2" style={{ color: "var(--muted)" }}>{e.period}</p>
                  <div className="flex gap-2">
                    {e.link && (
                      <a href={e.link} target="_blank"
                        className="text-xs px-3 py-1 rounded-full border inline-block hover:opacity-80 transition-opacity"
                        style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
                        Page ↗︎
                      </a>
                    )}
                    <a href="/drift#community-design"
                      className="text-xs px-3 py-1 rounded-full border inline-block hover:opacity-80 transition-opacity"
                      style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
                      See work ↗︎
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--accent)" }}>Publications</p>
          <div className="space-y-6">
            {publications.map((p) => (
              <div key={p.title} className="pl-5 border-l-2"
                style={{ borderColor: p.accent ? "var(--accent)" : "var(--border)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "var(--text)" }}>{p.title}</p>
                <p className="text-xs mb-2" style={{ color: "var(--accent)" }}>{p.venue}</p>
                {p.citation ? (
                  <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>{p.citation}</p>
                ) : (
                  <div className="mb-3" />
                )}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="text-xs px-3 py-1 rounded-full border inline-block hover:opacity-80 transition-opacity"
                    style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
                    {p.cta} ↗︎
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--accent)" }}>Awards</p>
          <div className="space-y-4">
            {awards.map((a) => (
              <div key={a.award} className="flex items-center gap-4 border-b pb-4" style={{ borderColor: "var(--border)" }}>
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0 flex items-center justify-center border border-gray-200 dark:border-white/10">
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

        {/* FAQ — click to expand */}
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--accent)" }}>FAQ</p>
          <FAQAccordion faqs={faqs} />
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-center border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
          <p className="text-lg mb-4" style={{ color: "var(--accent)" }}>⟡</p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text)" }}>
            Starting September 2026 at UW–Madison, I&apos;m open to internships, student assistan, and project roles — especially anything at the intersection of AI, data, and product.
          </p>
          <a href="mailto:zyting.info@gmail.com" className="btn-primary inline-block">
            Get in touch ↗︎
          </a>
        </div>

      </section>

      <footer className="px-8 py-12 border-t max-w-5xl mx-auto w-full" style={{ borderColor: "var(--border)" }}>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <span className="text-xs" style={{ color: "var(--muted)" }}>Jennie Z © 2026</span>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a href="https://drive.google.com/file/d/1OZjLhBHC7gBe1Uqitkb7wNmviDnytwlu/view?usp=sharing" target="_blank"
              className="text-xs hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>Resume</a>
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