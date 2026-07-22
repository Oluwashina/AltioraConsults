import Image from "next/image";
import {
  approach,
  clients,
  firm,
  firmCopy,
  founder,
  services,
  values,
} from "@/lib/content";

export const metadata = {
  title: "Sample B — Modern Ledger | Altiora Consults",
};

export default function DesignB() {
  return (
    <div className="design-b min-h-full bg-[#e6e8ed] text-[#12151c]">
      {/* Slim top bar */}
      <header className="sticky top-0 z-40 border-b border-[#16325c]/10 bg-[#e6e8ed]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 lg:px-10">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-syne text-xl font-bold tracking-tight text-[#16325c]">
              ALTIORA
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.25em] text-[#16325c]/55 sm:inline">
              Consults
            </span>
          </a>
          <div className="hidden items-center gap-7 text-[13px] font-medium text-[#16325c]/75 lg:flex">
            {[
              ["#firm", "Firm"],
              ["#services", "Services"],
              ["#approach", "Approach"],
              ["#clients", "Clients"],
              ["#team", "Leadership"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="hover:text-[#16325c]">
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-[#16325c] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#0d1f3c]"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero — full-bleed atmospheric plane */}
      <section
        id="top"
        className="relative min-h-[92svh] overflow-hidden bg-[#16325c] text-white"
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, #0d1f3c 0%, #16325c 42%, #1a4a6e 100%),
              radial-gradient(ellipse at 80% 20%, rgba(94, 184, 196, 0.28), transparent 55%),
              radial-gradient(ellipse at 10% 90%, rgba(22, 50, 92, 0.9), transparent 50%)
            `,
          }}
        />
        {/* subtle grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative mx-auto flex min-h-[92svh] max-w-[1400px] flex-col justify-between px-5 py-16 lg:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#5eb8c4]">
            Lagos · Nigeria
          </p>

          <div className="my-auto max-w-5xl py-16">
            <h1 className="font-syne text-[clamp(3rem,11vw,8.5rem)] font-bold leading-[0.92] tracking-tight">
              ALTIORA
              <br />
              <span className="text-[#5eb8c4]">CONSULTS</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
              Professional consulting in accounting, taxation, and business
              process optimization.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex bg-[#5eb8c4] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0d1f3c] transition-colors hover:bg-white"
            >
              Start a Conversation
            </a>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-3 border-t border-white/15 pt-8 text-sm text-white/55">
            <span>Accounting & Financial Management</span>
            <span>Tax Advisory & Compliance</span>
            <span>Business Process & Workflow</span>
          </div>
        </div>
      </section>

      {/* Firm — asymmetric */}
      <section id="firm" className="scroll-mt-20 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="font-syne text-xs font-bold uppercase tracking-[0.3em] text-[#5eb8c4]">
                01 — The Firm
              </p>
              <h2 className="mt-5 font-syne text-4xl font-bold leading-tight text-[#16325c] lg:text-5xl">
                Financial clarity for growing organisations
              </h2>
            </div>
            <div className="space-y-5 text-[15px] leading-relaxed text-[#12151c]/70">
              <p className="text-lg text-[#12151c]/85">
                We recognize that every organization operates in a dynamic
                business environment where financial accuracy, regulatory
                compliance, and efficient processes are essential for success.
              </p>
              {firmCopy.slice(0, 2).map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="mt-16 grid gap-6 border-t border-[#16325c]/15 pt-12 sm:grid-cols-3">
            {[
              ["Accuracy", "Reliable records and reporting"],
              ["Compliance", "Statutory & tax readiness"],
              ["Efficiency", "Processes that scale"],
            ].map(([t, d]) => (
              <div key={t}>
                <h3 className="font-syne text-lg font-bold text-[#16325c]">
                  {t}
                </h3>
                <p className="mt-2 text-sm text-[#12151c]/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — stacked bands */}
      <section id="services" className="scroll-mt-20">
        <div className="border-y border-[#16325c]/15 bg-white">
          <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10">
            <p className="font-syne text-xs font-bold uppercase tracking-[0.3em] text-[#5eb8c4]">
              02 — Core Services
            </p>
            <h2 className="mt-4 font-syne text-4xl font-bold text-[#16325c]">
              What we deliver
            </h2>
          </div>
        </div>
        {services.map((s, i) => (
          <div
            key={s.id}
            className={`border-b border-[#16325c]/10 ${
              i % 2 === 0 ? "bg-[#e6e8ed]" : "bg-white"
            }`}
          >
            <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 lg:grid-cols-[280px_1fr] lg:px-10">
              <div>
                <span className="font-syne text-5xl font-bold text-[#16325c]/15">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-syne text-2xl font-bold text-[#16325c]">
                  {s.label}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#12151c]/65">
                  {s.intro}
                </p>
              </div>
              <ul className="columns-1 gap-x-12 sm:columns-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="mb-3 break-inside-avoid border-l-2 border-[#5eb8c4]/50 pl-3 text-sm leading-relaxed text-[#12151c]/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Values + Approach combined visual */}
      <section id="values" className="scroll-mt-20 bg-[#16325c] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="font-syne text-xs font-bold uppercase tracking-[0.3em] text-[#5eb8c4]">
            03 — Values
          </p>
          <h2 className="mt-4 max-w-xl font-syne text-4xl font-bold">
            Principles we practice daily
          </h2>
          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="bg-[#16325c] p-8">
                <h3 className="font-syne text-xl font-bold text-[#5eb8c4]">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-20 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="font-syne text-xs font-bold uppercase tracking-[0.3em] text-[#5eb8c4]">
            04 — Work Approach
          </p>
          <h2 className="mt-4 max-w-2xl font-syne text-4xl font-bold text-[#16325c]">
            How we distinguish ourselves
          </h2>
          <ol className="mt-14 space-y-0">
            {approach.map((a, i) => (
              <li
                key={a.title}
                className="grid gap-4 border-t border-[#16325c]/15 py-7 sm:grid-cols-[4rem_minmax(0,280px)_1fr] sm:gap-8"
              >
                <span className="font-syne text-2xl font-bold text-[#5eb8c4]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-syne text-lg font-bold text-[#16325c]">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#12151c]/65">
                  {a.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Clients — horizontal strip */}
      <section
        id="clients"
        className="scroll-mt-20 overflow-hidden border-y border-[#16325c]/15 bg-white py-20"
      >
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="font-syne text-xs font-bold uppercase tracking-[0.3em] text-[#5eb8c4]">
            05 — Clients
          </p>
          <h2 className="mt-4 font-syne text-3xl font-bold text-[#16325c]">
            Organisations we support
          </h2>
        </div>
        <div className="mt-12 flex gap-6 overflow-x-auto px-5 pb-4 lg:px-10">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex h-28 w-44 shrink-0 items-center justify-center border border-[#16325c]/10 bg-[#e6e8ed] p-4"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={c.logo}
                  alt={c.name}
                  fill
                  className="object-contain"
                  sizes="176px"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership — full-bleed photo section */}
      <section id="team" className="relative scroll-mt-20 min-h-[80svh] overflow-hidden">
        <Image
          src={founder.photo}
          alt=""
          fill
          className="object-cover object-[center_15%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c] via-[#0d1f3c]/75 to-[#0d1f3c]/40" />
        <div className="relative mx-auto flex min-h-[80svh] max-w-[1400px] flex-col justify-end px-5 py-20 lg:px-10">
          <p className="font-syne text-xs font-bold uppercase tracking-[0.3em] text-[#5eb8c4]">
            06 — Key Contact
          </p>
          <h2 className="mt-4 font-syne text-4xl font-bold text-white lg:text-5xl">
            {founder.name}
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-[#5eb8c4]">
            {founder.role}
          </p>
          <div className="mt-8 max-w-3xl space-y-4 text-[15px] leading-relaxed text-white/75">
            {founder.bio.slice(0, 3).map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {founder.badges.map((b) => (
              <span
                key={b}
                className="border border-[#5eb8c4]/40 px-3 py-1.5 text-xs font-medium text-[#5eb8c4]"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-[#e6e8ed] py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="font-syne text-xs font-bold uppercase tracking-[0.3em] text-[#5eb8c4]">
              07 — Contact
            </p>
            <h2 className="mt-4 font-syne text-4xl font-bold text-[#16325c] lg:text-5xl">
              Ready when you are
            </h2>
            <p className="mt-6 max-w-md text-base text-[#12151c]/65">
              Reach out for support with financial reporting, tax planning,
              compliance, or process redesign.
            </p>
          </div>
          <div className="space-y-6 self-center">
            <a
              href={firm.phoneHref}
              className="block border-b border-[#16325c]/20 pb-4 font-syne text-3xl font-bold text-[#16325c] transition-colors hover:text-[#5eb8c4]"
            >
              {firm.phone}
            </a>
            <a
              href={`mailto:${firm.email}`}
              className="block border-b border-[#16325c]/20 pb-4 text-xl text-[#16325c] hover:text-[#5eb8c4]"
            >
              {firm.email}
            </a>
            <p className="text-base text-[#12151c]/65">{firm.address}</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#16325c]/15 bg-white py-8">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-5 text-xs text-[#12151c]/45 sm:flex-row lg:px-10">
          <p className="font-syne font-bold text-[#16325c]">
            ALTIORA CONSULTS
          </p>
          <p>
            © {new Date().getFullYear()} · {firm.tagline}
          </p>
        </div>
      </footer>
    </div>
  );
}
