import Image from "next/image";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

const values = [
  {
    title: "Integrity",
    text: "We uphold the highest ethical standards, ensuring honesty, transparency, and accountability in every aspect of our work.",
  },
  {
    title: "Professional Excellence",
    text: "We strive for excellence by delivering accurate, timely, and high-quality services that consistently exceed client expectations.",
  },
  {
    title: "Client Focus",
    text: "We place our clients at the center of everything we do, providing tailored solutions that address their unique needs and support their long-term success.",
  },
  {
    title: "Confidentiality",
    text: "We treat all client information with the utmost confidentiality and maintain strict professional discretion in every engagement.",
  },
  {
    title: "Accountability",
    text: "We take ownership of our responsibilities and remain committed to delivering on our promises with reliability and consistency.",
  },
  {
    title: "Collaboration",
    text: "We build strong partnerships by working closely with our clients, listening to their needs, and delivering practical, results-oriented solutions.",
  },
];

const approach = [
  {
    title: "Client-Centric Approach",
    text: "We take the time to understand each client's unique objectives and provide tailored solutions that address their specific business needs.",
  },
  {
    title: "Professional Excellence",
    text: "We deliver services with accuracy, integrity, and adherence to the highest professional and ethical standards.",
  },
  {
    title: "Regulatory Compliance",
    text: "We help clients remain compliant with applicable financial reporting standards, tax regulations, and statutory requirements while minimizing compliance risks.",
  },
  {
    title: "Operational Efficiency",
    text: "We identify opportunities to improve business processes, strengthen internal controls, and enhance productivity.",
  },
  {
    title: "Strategic Financial Insight",
    text: "We provide actionable financial and operational advice that supports informed decision-making and sustainable business growth.",
  },
  {
    title: "Confidentiality and Trust",
    text: "We handle all client information with the highest level of confidentiality, professionalism, and accountability.",
  },
  {
    title: "Reliable Partnership",
    text: "We build long-term relationships by providing responsive, dependable, and value-driven support that evolves with our clients' businesses.",
  },
];

const clients = [
  { name: "Lush Jewels", logo: "/clients/lush-jewels.jpg" },
  { name: "Pavestones", logo: "/clients/pavestones.jpg" },
  { name: "Tigle", logo: "/clients/tigle.jpg" },
  { name: "Codva Creatives", logo: "/clients/codva-creatives.jpg" },
  { name: "Callup", logo: "/clients/callup.jpg" },
  { name: "Prosource", logo: "/clients/prosource.jpg" },
  { name: "BOED Energy", logo: "/clients/boed-energy.jpg" },
  { name: "Build Rent Sell", logo: "/clients/build-rent-sell.jpg" },
  { name: "Káyá", logo: "/clients/kaya.jpg" },
  { name: "DPAnalytics Solution", logo: "/clients/dpanalytics.jpg" },
  { name: "POD HR & Strategy", logo: "/clients/pod-hr.jpg" },
  { name: "Luminary Labs", logo: "/clients/luminary-labs.jpg" },
  { name: "EMOG Bonded Terminal", logo: "/clients/emog.jpg" },
];

function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div className="mt-5 h-px w-16 bg-bronze" />
    </div>
  );
}

export default function Home() {
  return (
    <div id="top" className="flex-1">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60rem 40rem at 85% -10%, rgba(169,142,104,0.22), transparent 60%), radial-gradient(40rem 30rem at -10% 110%, rgba(167,169,184,0.12), transparent 55%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full border border-white/5"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-40 h-96 w-96 rounded-full border border-bronze/20"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-40 lg:px-10 lg:pb-36 lg:pt-52">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-bronze">
            Accounting · Tax · Business Process
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.12] sm:text-5xl lg:text-6xl">
            Building strong financial foundations for{" "}
            <span className="text-bronze">sustainable growth</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            Altiora Consults provides professional consulting services in
            accounting, taxation, and business process optimization — enabling
            organizations to make informed decisions, minimize risk, and
            strengthen performance.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-bronze px-8 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-bronze-light hover:text-ink"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/25 px-8 py-4 text-center text-sm font-semibold text-white transition-colors hover:border-bronze hover:text-bronze"
            >
              Explore Our Services
            </a>
          </div>

          <div className="mt-20 grid max-w-3xl grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            {[
              ["10+", "Years of combined expertise"],
              ["3", "Core consulting practices"],
              ["13+", "Businesses served across industries"],
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="font-display text-3xl font-bold text-bronze">
                  {stat}
                </p>
                <p className="mt-2 text-sm text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Firm ─────────────────────────────────────────── */}
      <section id="firm" className="scroll-mt-20 bg-ivory py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:px-10">
          <div>
            <SectionHeading eyebrow="Who We Are" title="The Firm" />
            <p className="mt-8 text-base leading-relaxed text-ink/70">
              We recognize that every organization operates in a dynamic
              business environment where financial accuracy, regulatory
              compliance, and efficient processes are essential for success.
            </p>
            <div className="mt-10 rounded-2xl border border-bronze/25 bg-white p-8">
              <p className="font-display text-xl font-semibold italic leading-relaxed text-ink">
                &ldquo;Our goal is not only to solve immediate challenges but
                also to position our clients for continued success and
                resilience.&rdquo;
              </p>
            </div>
          </div>

          <div className="space-y-6 text-[15px] leading-relaxed text-ink/75">
            <p>
              At Altiora Consults, we are committed to helping businesses build
              strong financial foundations, maintain regulatory compliance, and
              improve operational efficiency. We provide professional
              consulting services in accounting, taxation, and business process
              optimization, enabling organizations to make informed decisions,
              minimize risk, strengthen performance, and achieve sustainable
              growth.
            </p>
            <p>
              Our expertise spans a wide range of financial and operational
              services, including accounting and financial management, tax
              advisory and compliance, and business process and workflow
              consultancy. We work closely with each client to understand their
              unique business needs, operational challenges, and strategic
              objectives — and we deliver practical, cost-effective, and
              results-driven solutions tailored to those needs.
            </p>
            <p>
              In addition to providing core accounting and tax services, we
              support businesses in identifying inefficiencies, improving
              workflows, and implementing systems that promote accountability
              and long-term stability. Whether a client requires support with
              financial reporting, tax planning, compliance reviews, process
              redesign, or internal control improvement, we deliver solutions
              that are both strategic and practical.
            </p>
            <p>
              We understand that reliable financial information and
              well-structured business processes are critical to business
              confidence, investor trust, and operational growth. For this
              reason, we place strong emphasis on accuracy, confidentiality,
              responsiveness, and professional integrity in every engagement.
              Our team is dedicated to building long-term partnerships based on
              trust, value, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section id="services" className="scroll-mt-20 bg-stone py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="What We Do" title="Our Core Services" />
            <p className="max-w-md text-[15px] leading-relaxed text-ink/60 lg:pb-2">
              Three integrated practice areas covering the full spectrum of
              financial and operational consulting.
            </p>
          </div>
          <div className="mt-12">
            <Services />
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section id="values" className="scroll-mt-20 bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="What Guides Us" title="Our Values" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group rounded-2xl border border-ink/8 bg-white p-8 transition-all hover:-translate-y-1 hover:border-bronze/40 hover:shadow-xl hover:shadow-bronze/10"
              >
                <span className="font-display text-sm font-bold text-bronze/60">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">
                  {v.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/65">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work Approach ────────────────────────────────────── */}
      <section
        id="approach"
        className="relative scroll-mt-20 overflow-hidden bg-charcoal py-24 text-white lg:py-32"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50rem 35rem at 110% 0%, rgba(169,142,104,0.15), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="How We Work" title="Work Approach" light />
            <p className="mt-8 text-base leading-relaxed text-white/70">
              We are committed to delivering solutions that go beyond
              compliance by helping our clients build financially sound,
              efficient, and resilient organizations. Our approach combines
              technical expertise, practical insight, and a deep understanding
              of business operations to provide services that create measurable
              value.
            </p>
            <p className="mt-4 font-display text-lg font-semibold italic text-bronze">
              We distinguish ourselves through:
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map((a) => (
              <div
                key={a.title}
                className="bg-charcoal p-8 transition-colors hover:bg-graphite"
              >
                <h3 className="font-display text-lg font-bold text-bronze-light">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {a.text}
                </p>
              </div>
            ))}
            <div className="flex items-center bg-bronze p-8">
              <p className="font-display text-lg font-semibold leading-snug text-white">
                Our goal is to become a trusted partner in our clients&rsquo;
                continued success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clients ──────────────────────────────────────────── */}
      <section id="clients" className="scroll-mt-20 bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Trusted By" title="Our Clients" />
            <p className="max-w-md text-[15px] leading-relaxed text-ink/60 lg:pb-2">
              From startups and SMEs to logistics, energy, and technology
              companies — businesses across industries trust Altiora Consults.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((c) => (
              <div
                key={c.name}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-ink/8 bg-white p-6 transition-all hover:border-bronze/40 hover:shadow-lg"
                title={c.name}
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={c.logo}
                    alt={`${c.name} logo`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                    className="object-contain opacity-80 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <p className="text-center text-xs font-medium text-ink/50">
                  {c.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ───────────────────────────────────────── */}
      <section id="team" className="scroll-mt-20 bg-stone py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Leadership" title="Key Contact" />
          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20">
            <div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-ink/20">
                <Image
                  src="/founder.jpg"
                  alt="Gbenga Mayowa Samuel, Founder and Principal Consultant of Altiora Consults"
                  width={580}
                  height={860}
                  className="h-auto w-full object-cover"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                Gbenga Mayowa Samuel, ACA
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-bronze">
                Founder &amp; Principal Consultant
              </p>
            </div>

            <div className="space-y-5 text-[15px] leading-relaxed text-ink/75">
              <p>
                Gbenga Mayowa Samuel, ACA is the Founder and Principal
                Consultant of Altiora Consults, a finance, accounting, and
                business advisory firm dedicated to helping businesses
                strengthen financial performance, improve governance, and
                achieve regulatory compliance.
              </p>
              <p>
                He is a Chartered Accountant (ICAN) with over a decade of
                experience spanning financial management, taxation, audit,
                business advisory, and corporate finance. Throughout his
                career, Gbenga has advised startups, SMEs, law firms,
                technology companies, logistics businesses, and multinational
                organisations on financial strategy, process optimisation,
                statutory compliance, and business transformation.
              </p>
              <p>
                As a finance executive and trusted advisor, he has led finance
                functions across diverse industries — providing outsourced CFO
                services, designing financial systems, implementing internal
                controls, developing management reporting frameworks, and
                supporting organisations through growth, restructuring, and
                strategic decision-making.
              </p>
              <p>
                Gbenga holds a Bachelor&rsquo;s degree in Accounting from the
                University of Lagos and is currently pursuing a Master&rsquo;s
                degree in Finance. He is a Chartered Accountant (ACA) and a
                student member of the Association of Chartered Certified
                Accountants (ACCA).
              </p>
              <p>
                He is passionate about helping business owners make informed
                financial decisions, build resilient organisations, and create
                sustainable long-term value through sound financial management
                and strategic advisory.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["ICAN Chartered Accountant", "ACA", "ACCA (Student Member)", "B.Sc. Accounting, University of Lagos"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-bronze/40 bg-white px-4 py-2 text-xs font-semibold text-taupe"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative scroll-mt-20 overflow-hidden bg-ink py-24 text-white lg:py-32"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55rem 40rem at 0% 100%, rgba(169,142,104,0.18), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Get In Touch"
                title="Let's build your financial foundation"
                light
              />
              <p className="mt-8 max-w-md text-base leading-relaxed text-white/70">
                Whether you need support with financial reporting, tax
                planning, compliance reviews, or process redesign — we are
                ready to help. Reach out for a conversation about your
                business.
              </p>
              <a
                href="mailto:Altioraconsults@gmail.com"
                className="mt-10 inline-block rounded-full bg-bronze px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-bronze-light hover:text-ink"
              >
                Send Us an Email
              </a>
            </div>

            <div className="space-y-6">
              {[
                {
                  label: "Phone",
                  value: "0902 4321 701",
                  href: "tel:+2349024321701",
                  icon: (
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  ),
                },
                {
                  label: "Email",
                  value: "Altioraconsults@gmail.com",
                  href: "mailto:Altioraconsults@gmail.com",
                  icon: (
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  ),
                },
                {
                  label: "Office",
                  value: "5 Omobola, Itire, Lawanson, Lagos",
                  href: undefined,
                  icon: (
                    <>
                      <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </>
                  ),
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-bronze/40"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bronze/15">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-bronze"
                    >
                      {c.icon}
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="mt-1 block text-base font-medium text-white transition-colors hover:text-bronze"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base font-medium text-white">
                        {c.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-4 pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Follow us
                </p>
                {[
                  {
                    name: "Facebook — Altiora",
                    href: "https://facebook.com/Altiora",
                    icon: (
                      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.87.24-1.46 1.5-1.46H16.6V4.46c-.28-.04-1.23-.12-2.34-.12-2.31 0-3.89 1.41-3.89 4v2.16H7.86v3h2.51V21h3.13Z" />
                    ),
                  },
                  {
                    name: "X — Altioraconsults",
                    href: "https://x.com/Altioraconsults",
                    icon: (
                      <path d="M17.9 3H21l-6.77 7.74L22.2 21h-6.24l-4.89-6.4L5.48 21H2.35l7.24-8.28L2 3h6.4l4.42 5.85L17.9 3Zm-1.1 16.13h1.73L7.55 4.76H5.7l11.1 14.37Z" />
                    ),
                  },
                  {
                    name: "Instagram — Altiora",
                    href: "https://instagram.com/Altiora",
                    icon: (
                      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-bronze hover:text-bronze"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-white/10 bg-ink py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-10">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-bold tracking-wide">
              ALTIORA <span className="text-bronze">CONSULTS</span>
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-white/40">
              Solutions for All
            </p>
          </div>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Altiora Consults. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
