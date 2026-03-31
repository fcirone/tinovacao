"use client";

const EMAIL = "fabiocirone@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/fabiocirone";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-100">
      <div className="shell py-8 lg:py-10">
        <header className="flex items-center justify-between gap-6 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 ring-1 ring-slate-500/60 shadow-[0_0_0_1px_rgba(15,23,42,0.9)]">
              <span className="text-lg font-semibold tracking-tight text-cyan-300">
                FC
              </span>
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-medium tracking-tight text-slate-200">
                Fabio Cirone
              </p>
              <p className="text-xs text-slate-400">
                CTO · Gambling · Payments · Cloud Platforms
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-xs font-medium text-slate-300/90">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#career" className="hover:text-cyan-300 transition-colors">Journey</a>
            <a href="#expertise" className="hover:text-cyan-300 transition-colors">Expertise</a>
            <a href="#portfolio" className="hover:text-cyan-300 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </nav>
        </header>

        <main className="space-y-20 py-10 lg:space-y-24 lg:py-14">
          <HeroSection />
          <AboutSection />
          <CareerTimelineSection />
          <ExpertiseSection />
          <PortfolioSection />
          <ContactSection />
        </main>

        <footer className="border-t border-white/10 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Fabio Cirone.</p>
        </footer>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="gradient-orbit grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center"
    >
      <div className="space-y-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 shadow-sm ring-1 ring-slate-900/60">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.35)]" />
          <span className="uppercase tracking-[0.16em] text-[0.65rem] text-slate-300">
            Available for advisory & board-level conversations
          </span>
        </div>
        <div className="space-y-5">
          <h1
            id="hero-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
          >
            Enterprise-grade CTO for{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-orange-400 bg-clip-text text-transparent">
              gambling, payments
            </span>{" "}
            & high-scale platforms.
          </h1>
          <p className="max-w-xl text-pretty text-sm leading-relaxed text-slate-300 sm:text-base">
            I partner with boards and founders to build resilient, compliant,
            always-on platforms in highly regulated, high-volume environments.
            From strategic planning and financial modelling to hands-on cloud
            architecture, my focus is on systems that do not go down.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-5 py-2.5 text-xs font-semibold text-slate-900 shadow-lg shadow-cyan-500/40 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-cyan-100 hover:text-slate-950 hover:ring-cyan-400/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            View LinkedIn profile
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/40 px-4 py-2.5 text-xs font-medium text-slate-200 ring-1 ring-slate-900/60 transition hover:-translate-y-0.5 hover:border-cyan-500/80 hover:text-cyan-100"
          >
            <span className="h-1 w-6 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-orange-400" />
            Explore case studies
          </a>
        </div>

        <dl className="grid grid-cols-2 gap-4 text-xs text-slate-200 sm:grid-cols-3">
          <Stat label="Years in tech" value="25+" />
          <Stat label="Executive roles" value="CTO · COO · CEO" />
          <Stat label="Regions led" value="LatAm · US · EMEA" />
        </dl>
      </div>

      <aside className="glass-panel relative overflow-hidden p-6 sm:p-7 lg:p-8">
        <div className="mb-6 flex flex-col items-center gap-3 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 ring-1 ring-slate-500/60 shadow-[0_0_0_1px_rgba(15,23,42,1)]">
            <span className="text-lg font-semibold tracking-tight bg-gradient-to-br from-cyan-300 via-sky-400 to-orange-400 bg-clip-text text-transparent">
              CTO
            </span>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Profile snapshot
            </p>
            <p className="mt-1 text-sm font-medium text-slate-100">
              CTO · Gambling · Payments
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs text-slate-200 text-center">
          <p className="leading-relaxed text-slate-200/95">
            Technology executive with deep expertise in iGaming, fintech, payments, and high-scale platforms — experienced in building things from scratch and making them run reliably at volume.
          </p>
          <p className="leading-relaxed text-slate-300/95">
            Track record spans cloud architecture, regulated payment institutions, M&A due diligence, and leading distributed teams across LatAm, EMEA, and the US.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-[0.7rem] text-slate-200/95">
          <HighlightPill title="Sectors" items={["Online gambling", "Gaming", "Payments"]} />
          <HighlightPill
            title="Operating model"
            items={["Board advisory", "Hands-on CTO", "Cross-functional"]}
          />
          <HighlightPill
            title="Cloud & data"
            items={["AWS", "High availability", "Observability"]}
          />
          <HighlightPill
            title="Delivery"
            items={["PMI & Agile", "ALM ownership", "Distributed teams"]}
          />
        </div>
      </aside>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="space-y-6 border-t border-white/10 pt-12 lg:pt-16"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            About
          </p>
          <h2
            id="about-heading"
            className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
          >
            Technologist, operator, and partner to the business.
          </h2>
        </div>
        <p className="max-w-xs text-xs text-slate-400">
          Blending strategic input with pragmatic delivery — from board-level
          conversations to platform-level decisions.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-sm leading-relaxed text-slate-200">
          <p>
            Over more than two decades in technology, I&apos;ve led engineering,
            product, and operations teams across iGaming, fintech, payments, and
            high-scale digital platforms — places where uptime, compliance, and
            trust aren&apos;t optional.
          </p>
          <p>
            My background mixes executive leadership with real hands-on depth.
            I get into the early stages of new initiatives — defining architecture,
            cloud foundations, integrations — and then build teams that can scale
            execution without me in every decision. I&apos;ve also served as COO and CEO,
            including as registered executive before the Central Bank of Brazil
            during a payment institution licensing process.
          </p>
          <p>
            More recently, I&apos;ve been leading AI adoption across the software
            development lifecycle — using tools like Claude Code and Codex to
            accelerate delivery and push the team forward. That&apos;s the kind
            of thing I find genuinely interesting.
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-700/80 bg-slate-950/70 p-5 text-xs text-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
          <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-slate-400">
            What I&apos;m known for
          </h3>
          <ul className="space-y-2">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_0_3px_rgba(34,211,238,0.32)]" />
              <span>
                Strategic input with boards and executive teams, translating
                commercial objectives into technology roadmaps and investment
                decisions.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_0_3px_rgba(244,114,182,0.32)]" />
              <span>
                Ownership of the full application lifecycle — from architecture
                and development through release management, operations, and
                continuous improvement.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_0_3px_rgba(251,146,60,0.36)]" />
              <span>
                Negotiation and integration with third‑party providers, building
                ecosystems of partners around core platforms.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

const CAREER_ROLES: Role[] = [
  {
    company: "eightroom",
    title: "CTO | COO",
    period: "Dec 2021 — Present",
    location: "Montevideo, Uruguay",
    summary:
      "Joined to restructure the tech organisation and build two new products for the online gambling payments market: a payment gateway and a digital wallet platform.",
    highlights: [
      "Led engineering transformation, introduced DevOps culture, and established AWS as the cloud foundation.",
      "Played a key role in creating a regulated payment institution in Brazil — from company setup through the BACEN licensing process.",
      "Took on broader exec responsibilities as COO and later CEO, serving as registered executive before the Central Bank of Brazil.",
      "Leading AI adoption across the SDLC, using Claude Code and Codex to accelerate delivery and foster innovation.",
    ],
  },
  {
    company: "Speedy.io",
    title: "Managing Director Brazil",
    period: "Jan 2020 — Dec 2021",
    location: "São Paulo, Brazil",
    summary:
      "Built the local Brazil operation for a fintech platform targeting SMBs, covering invoice issuance, payment flow visibility, and cash flow control.",
    highlights: [
      "Set up a multidisciplinary team across engineering, product, compliance, finance, and marketing.",
      "Also supported local adaptation of the company's payment gateway for the online gambling market.",
    ],
  },
  {
    company: "Ventures Lab",
    title: "VP of Software Engineering",
    period: "Jan 2020 — Dec 2021",
    location: "São Paulo, Brazil",
    summary:
      "Built and led a Brazil-based engineering team for an online gambling platform serving proprietary brands and white-label operations.",
    highlights: [
      "Hired and onboarded the local team from scratch, with full ownership of technical training and engineering leadership.",
      "Delivered a new user management module and a live betting solution built from the ground up.",
      "Focused on admin platform, payments, and live betting — reporting directly to the CTO.",
    ],
  },
  {
    company: "Betsul",
    title: "IT Consultant",
    period: "Jul 2019 — Dec 2019",
    location: "Brazil",
    summary:
      "Senior iGaming consultant supporting critical technology initiatives at a sports betting operator.",
    highlights: [
      "Advised on Betradar integration, homologation, and certification.",
      "Led bonus engine design and implementation.",
    ],
  },
  {
    company: "Crossover & Aurea Software",
    title: "Chief Software Architect",
    period: "May 2018 — Jul 2019",
    location: "Global / Remote",
    summary:
      "One of the leaders of the M&A import team, responsible for technical due diligence and post‑acquisition integration.",
    highlights: [
      "Evaluated target companies from both financial and technical perspectives.",
      "Ran due diligence and produced reports for executive decision-making.",
      "Led integration of acquired companies into a centralised ecosystem.",
    ],
  },
  {
    company: "Command Alkon",
    title: "Mobile Development Manager",
    period: "Mar 2016 — May 2018",
    location: "Brazil · US",
    summary:
      "Built and led a distributed mobile engineering team serving a global construction software leader.",
    highlights: [
      "Managed teams across Brazil and multiple US states.",
      "Defined architectures and InfoSec practices for mobile products.",
      "Leveraged AWS, microservices, and serverless for high‑performance solutions.",
    ],
  },
  {
    company: "Diverso Games",
    title: "CTO",
    period: "Oct 2013 — Mar 2016",
    location: "São Paulo, Brazil",
    summary:
      "Founding‑stage CTO for a gaming startup, responsible for end‑to‑end technology and strategic planning.",
    highlights: [
      "Participated from initial strategic plan through budgeting and execution.",
      "Managed infrastructure, development, database, and release management.",
      "Defined cloud setups on AWS and core architecture decisions.",
    ],
  },
  {
    company: "Betboo (GVC Holdings group)",
    title: "CTO Latam",
    period: "Oct 2008 — Sep 2013",
    location: "Brazil · Uruguay · Ireland",
    summary:
      "Regional CTO for a major online gaming brand, owning mission‑critical, high‑availability platforms across LatAm.",
    highlights: [
      "Point of contact for financial audit during acquisition.",
      "Managed teams across three countries and all IT disciplines.",
      "Focused on performance, safety, and continuous improvement under heavy load.",
    ],
  },
];

function CareerTimelineSection() {
  return (
    <section
      id="career"
      aria-labelledby="career-heading"
      className="space-y-6 border-t border-white/10 pt-12 lg:pt-16"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Career journey
          </p>
          <h2
            id="career-heading"
            className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
          >
            From developer to CTO, across gambling, gaming, and payments.
          </h2>
        </div>
        <p className="max-w-xs text-xs text-slate-400">
          A consistent thread: high‑stakes, high‑availability platforms and
          cross‑border, cross‑functional leadership.
        </p>
      </div>

      <ol className="relative mt-4 space-y-5 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 text-xs text-slate-100 shadow-[0_22px_70px_rgba(15,23,42,0.95)] sm:p-6">
        <span className="timeline-rail" aria-hidden="true" />
        {CAREER_ROLES.map((role, index) => (
          <li
            key={`${role.company}-${role.title}`}
            className="relative grid gap-3 pl-7 transition hover:bg-slate-900/60 hover:rounded-xl hover:ring-1 hover:ring-cyan-500/40 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1.4fr)] sm:gap-4 sm:pl-8"
          >
            <div className="absolute left-2 top-2 sm:left-2.5">
              <span className="timeline-node" aria-hidden="true" />
            </div>
            <div className="space-y-1.5">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                {role.company}
              </p>
              <p className="text-sm font-medium text-slate-50">
                {role.title}
              </p>
              <p className="text-[0.7rem] text-slate-400">
                {role.period} · {role.location}
              </p>
              {index === 0 && (
                <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[0.68rem] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Current role
                </span>
              )}
            </div>
            <div className="space-y-1.5">
              <p className="text-[0.8rem] leading-relaxed text-slate-200">
                {role.summary}
              </p>
              <ul className="mt-1 space-y-1.5 text-[0.75rem] text-slate-300">
                {role.highlights.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-[0.38rem] h-1 w-3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-orange-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

type StatProps = {
  label: string;
  value: string;
};

function Stat({ label, value }: StatProps) {
  return (
    <div className="space-y-1 rounded-xl border border-slate-800/80 bg-slate-950/60 px-3.5 py-2.5 shadow-[0_14px_40px_rgba(15,23,42,0.95)]">
      <p className="text-[0.75rem] text-slate-400">{label}</p>
      <p className="text-sm font-semibold text-slate-50">{value}</p>
    </div>
  );
}

type HighlightPillProps = {
  title: string;
  items: string[];
};

function HighlightPill({ title, items }: HighlightPillProps) {
  return (
    <div className="tag-pill flex flex-col items-center gap-1.5 px-3 py-2.5 text-center">
      <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-400">
        {title}
      </p>
      <p className="text-[0.75rem] text-slate-100/95">
        {items.join(" · ")}
      </p>
    </div>
  );
}

function ExpertiseSection() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="space-y-6 border-t border-white/10 pt-12 lg:pt-16"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Expertise
          </p>
          <h2
            id="expertise-heading"
            className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
          >
            Where I add the most value.
          </h2>
        </div>
        <p className="max-w-xs text-xs text-slate-400">
          A blend of product, platform, and organisational leadership aligned to
          regulated, always‑on businesses.
        </p>
      </div>

      <div className="grid gap-4 text-xs text-slate-200 sm:grid-cols-2 lg:grid-cols-3">
        <ExpertiseCard
          title="Online gambling & gaming platforms"
          bulletPoints={[
            "High-availability architectures and performance under heavy, spiky load.",
            "Multi‑region, multi‑lingual, multi‑currency environments.",
            "Regulatory, compliance, and risk-aware technical decisions.",
          ]}
          accent="from-cyan-400 via-sky-400 to-emerald-300"
        />
        <ExpertiseCard
          title="Payments & transactional systems"
          bulletPoints={[
            "Designing safe, observable, and resilient transaction flows.",
            "Integrating multiple PSPs and third‑party providers.",
            "Balancing risk, UX, and operational cost.",
          ]}
          accent="from-amber-400 via-orange-400 to-rose-400"
        />
        <ExpertiseCard
          title="Cloud, data & observability"
          bulletPoints={[
            "AWS expertise including serverless, streaming, and caching.",
            "Data architectures for analytics and operational intelligence.",
            "End‑to‑end monitoring, logging, and incident practices.",
          ]}
          accent="from-sky-400 via-fuchsia-400 to-violet-400"
        />
        <ExpertiseCard
          title="M&A & due diligence"
          bulletPoints={[
            "Technical and financial evaluation of acquisition targets.",
            "Structured due diligence and reporting to executive teams.",
            "Post‑merger integration into central platforms and operating models.",
          ]}
          accent="from-emerald-400 via-cyan-400 to-blue-400"
        />
        <ExpertiseCard
          title="Engineering leadership"
          bulletPoints={[
            "Building and scaling cross‑cultural, distributed teams.",
            "Defining operating models, rituals, and metrics.",
            "Mentoring leaders and anchoring culture on outcomes.",
          ]}
          accent="from-fuchsia-400 via-rose-400 to-orange-400"
        />
        <ExpertiseCard
          title="Delivery & governance"
          bulletPoints={[
            "PMI and agile techniques across complex programmes.",
            "Strong ALM practices from idea to production.",
            "Balancing innovation pace with operational discipline.",
          ]}
          accent="from-slate-300 via-sky-300 to-emerald-300"
        />
      </div>
    </section>
  );
}

type ExpertiseCardProps = {
  title: string;
  bulletPoints: string[];
  accent: string;
};

function ExpertiseCard({ title, bulletPoints, accent }: ExpertiseCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.95)] transition-transform hover:-translate-y-1 hover:border-cyan-400/70">
      <div
        className={`pointer-events-none absolute inset-x-[-30%] top-[-40%] h-32 bg-gradient-to-r ${accent} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-60`}
        aria-hidden="true"
      />
      <h3 className="relative text-[0.9rem] font-semibold text-slate-50">
        {title}
      </h3>
      <ul className="relative mt-3 space-y-2.5 text-[0.75rem] text-slate-200">
        {bulletPoints.map((point) => (
          <li key={point} className="flex gap-2.5">
            <span className="mt-[0.4rem] h-1 w-3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-orange-400" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function PortfolioSection() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="space-y-6 border-t border-white/10 pt-12 lg:pt-16"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Portfolio
          </p>
          <h2
            id="portfolio-heading"
            className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
          >
            Selected case studies.
          </h2>
        </div>
        <p className="max-w-xs text-xs text-slate-400">
          De‑identified case studies that unpack architectural decisions,
          trade‑offs, and outcomes at scale.
        </p>
      </div>

      <div className="grid gap-4 text-xs text-slate-200 sm:grid-cols-2 lg:grid-cols-3">
        <PortfolioCaseStudyCard
          company="Eightroom"
          label="LATAM Payment Gateway"
          role="CTO"
          stats={[
            { value: "R$ 1B+", label: "monthly volume" },
            { value: "2M+", label: "transactions / mo" },
            { value: "6 months", label: "to full scale" },
          ]}
          description="Led the full technology architecture of a payment gateway for the Brazilian and Argentinian markets — from cloud foundation to multi-PSP integration."
          highlights={[
            "Cloud-native AWS architecture with redundancy and auto-scaling.",
            "DevOps culture with fully automated pipelines from dev to production.",
            "Multi-PSP integrations for vendor and infrastructure redundancy.",
            "Engineering team of 15 built and led from the ground up.",
          ]}
          accent="from-cyan-400 via-sky-400 to-emerald-300"
        />
        <PortfolioCaseStudyCard
          company="Eightroom"
          label="Bettor Digital Wallet"
          role="CTO · Diretor Presidente / BACEN"
          stats={[
            { value: "SPB", label: "license" },
            { value: "SPI", label: "license" },
            { value: "8 months", label: "to licensing" },
          ]}
          description="E-wallet built for the Brazilian sports betting market, designed to increase conversion and bettor LTV through exclusive financial benefits."
          highlights={[
            "Launched via BaaS integration with cashback, exclusive bonuses, and a rewards programme.",
            "Product designed to drive higher conversion rates and long-term bettor retention.",
            "Led the full IP licensing process before the Central Bank of Brazil as Diretor Presidente.",
            "Obtained SPB licence followed by SPI, enabling full operation within the Brazilian payment system.",
            "Active participation in regulatory compliance strategy throughout the process.",
          ]}
          accent="from-amber-400 via-orange-400 to-rose-400"
        />
        <PortfolioCaseStudyCard
          company="Command Alkon"
          label="IoT Sensor Platform for Concrete Production"
          role="Tech Lead"
          stats={[
            { value: "20M", label: "messages / day" },
            { value: "3 months", label: "to production" },
            { value: "5 people", label: "team" },
          ]}
          description="Designed and led the architecture of an IoT platform to capture, process, and analyse sensor data from concrete mixing machines — turning raw equipment data into operational insights."
          highlights={[
            "Edge module running on-machine to collect sensor readings and stream data to AWS Kinesis.",
            "Event-driven pipeline: Kinesis → Lambda → DynamoDB, processing 20M messages per day.",
            "In-house Node.js application delivering dashboards, charts, and resource optimisation insights.",
            "Delivered measurable improvements in operational efficiency for concrete production workflows.",
          ]}
          accent="from-emerald-400 via-cyan-400 to-blue-400"
        />
      </div>
    </section>
  );
}

type PortfolioCaseStudyCardProps = {
  company: string;
  label: string;
  role: string;
  stats: { value: string; label: string }[];
  description: string;
  highlights: string[];
  accent: string;
};

function PortfolioCaseStudyCard({
  company,
  label,
  role,
  stats,
  description,
  highlights,
  accent,
}: PortfolioCaseStudyCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/70 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.95)] transition-transform hover:-translate-y-1 hover:border-cyan-400/70">
      <div
        className={`pointer-events-none absolute inset-x-[-30%] top-[-40%] h-32 bg-gradient-to-r ${accent} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-50`}
        aria-hidden="true"
      />
      <div className="relative space-y-4">
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-slate-400">
            {company} · {role}
          </p>
          <h3 className="text-[0.95rem] font-semibold text-slate-50">{label}</h3>
          <p className="text-[0.75rem] leading-relaxed text-slate-300">
            {description}
          </p>
        </div>

        <dl className="grid grid-cols-3 gap-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-2 py-2 text-center"
            >
              <p className="text-[0.78rem] font-semibold text-slate-50">
                {stat.value}
              </p>
              <p className="text-[0.65rem] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </dl>

        <ul className="space-y-1.5 text-[0.73rem] text-slate-300">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="mt-[0.38rem] h-1 w-3 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-orange-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

type PortfolioPlaceholderCardProps = {
  label: string;
  description: string;
};

function PortfolioPlaceholderCard({
  label,
  description,
}: PortfolioPlaceholderCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-dashed border-slate-700/80 bg-slate-950/40 p-4 text-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.95)] transition hover:-translate-y-1 hover:border-cyan-400/70 hover:bg-slate-950/70">
      <div className="space-y-2">
        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-slate-400">
          Upcoming case study
        </p>
        <h3 className="text-[0.9rem] font-semibold text-slate-50">{label}</h3>
        <p className="text-[0.75rem] leading-relaxed text-slate-300">
          {description}
        </p>
      </div>
      <p className="mt-4 inline-flex items-center gap-2 text-[0.72rem] font-medium text-cyan-300">
        Designed, authored, and presented by Fabio
        <span className="h-px w-8 bg-gradient-to-r from-cyan-400 via-sky-400 to-orange-400" />
      </p>
    </article>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="space-y-4 border-t border-white/10 pt-10 lg:pt-14"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
          >
            Let&apos;s talk.
          </h2>
        </div>
        <p className="max-w-xs text-xs text-slate-400">
          Open to advisory roles, board conversations, and complex platform
          challenges where reliability truly matters.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-200">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2.5 font-semibold text-slate-900 shadow-lg shadow-cyan-500/40 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-cyan-100 hover:text-slate-950 hover:ring-cyan-400/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Email Fabio
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/60 px-4 py-2.5 font-medium text-slate-100 ring-1 ring-slate-900/60 transition hover:-translate-y-0.5 hover:border-cyan-500/80 hover:text-cyan-100"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}

