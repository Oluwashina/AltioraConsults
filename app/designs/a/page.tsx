import Image from "next/image";
import {
  approach,
  clients,
  firm,
  firmCopy,
  founder,
  values,
} from "@/lib/content";
import ServicesAccordion from "@/components/ServicesAccordion";

export const metadata = {
  title: "Sample A — Editorial Light | Altiora Consults",
};

export default function DesignA() {
  return (
    <div className="design-a min-h-full bg-[#f3f0ea] text-[#14201f]">
      {/* Nav */}
      <header className="absolute inset-x-0 top-0 z-40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#top" className="font-fraunces text-lg font-semibold tracking-tight text-white">
            Altiora Consults
          </a>
          <div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            {[
              ["#firm", "Firm"],
              ["#services", "Services"],
              ["#values", "Values"],
              ["#clients", "Clients"],
              ["#team", "Leadership"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="transition-colors hover:text-white">
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="border border-white/40 px-4 py-2 text-white transition-colors hover:bg-white hover:text-[#0f5c56]"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero — full-bleed photo plane */}
      <section id="top" className="relative min-h-[100svh] overflow-hidden">
        <Image
          src={founder.photo}
          alt=""
          fill
          priority
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e2b]/92 via-[#0a2e2b]/75 to-[#0a2e2b]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,255,255,0.08),transparent_50%)]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
          <p className="font-fraunces text-[clamp(3.5rem,12vw,9rem)] font-semibold leading-[0.9] tracking-tight text-white">
            Altiora
          </p>
          <p className="mt-2 font-fraunces text-[clamp(1.5rem,4vw,2.75rem)] font-light tracking-[0.08em] text-white/75">
            CONSULTS
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
            Accounting, tax, and business process consulting — building
            financial foundations for sustainable growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-[#c8e6e0] px-7 py-3.5 text-sm font-semibold text-[#0a2e2b] transition-colors hover:bg-white"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              View Services
            </a>
          </div>
          <p className="mt-12 text-xs uppercase tracking-[0.35em] text-white/45">
            {firm.tagline}
          </p>
        </div>
      </section>

      {/* Firm */}
      <section id="firm" className="scroll-mt-8 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f5c56]">
              The Firm
            </p>
            <h2 className="mt-4 font-fraunces text-4xl font-semibold leading-tight lg:text-5xl">
              Strong foundations.
              <br />
              Clear decisions.
            </h2>
            <p className="mt-8 border-l-2 border-[#0f5c56] pl-5 text-base italic leading-relaxed text-[#14201f]/70">
              Our goal is not only to solve immediate challenges but also to
              position our clients for continued success and resilience.
            </p>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-[#14201f]/70 lg:col-span-8">
            <p>
              We recognize that every organization operates in a dynamic
              business environment where financial accuracy, regulatory
              compliance, and efficient processes are essential for success.
            </p>
            {firmCopy.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="scroll-mt-8 border-y border-[#0f5c56]/15 bg-[#ebe7df] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f5c56]">
              Core Services
            </p>
            <h2 className="mt-4 font-fraunces text-4xl font-semibold lg:text-5xl">
              Three practices. One standard of care.
            </h2>
          </div>
          <div className="mt-14">
            <ServicesAccordion accent="teal" />
          </div>
        </div>
      </section>

      {/* Values — typographic list, not cards */}
      <section id="values" className="scroll-mt-8 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f5c56]">
            Our Values
          </p>
          <h2 className="mt-4 max-w-xl font-fraunces text-4xl font-semibold lg:text-5xl">
            What guides every engagement
          </h2>
          <div className="mt-16 divide-y divide-[#0f5c56]/15 border-y border-[#0f5c56]/15">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="grid gap-4 py-8 sm:grid-cols-[5rem_1fr_2fr] sm:gap-10"
              >
                <span className="font-fraunces text-3xl text-[#0f5c56]/40">
                  0{i + 1}
                </span>
                <h3 className="font-fraunces text-2xl font-semibold">
                  {v.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#14201f]/65">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section
        id="approach"
        className="scroll-mt-8 bg-[#0f5c56] py-24 text-[#f3f0ea] lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c8e6e0]/80">
            Work Approach
          </p>
          <h2 className="mt-4 max-w-3xl font-fraunces text-4xl font-semibold lg:text-5xl">
            Solutions that go beyond compliance
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#f3f0ea]/75">
            We combine technical expertise, practical insight, and a deep
            understanding of business operations to create measurable value.
          </p>
          <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map((a, i) => (
              <div key={a.title}>
                <span className="text-xs font-semibold text-[#c8e6e0]/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-fraunces text-xl font-semibold">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#f3f0ea]/70">
                  {a.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-16 max-w-xl border-t border-white/20 pt-8 font-fraunces text-2xl font-medium italic text-[#c8e6e0]">
            Our goal is to become a trusted partner in our clients&rsquo;
            continued success and growth.
          </p>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="scroll-mt-8 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f5c56]">
                Our Clients
              </p>
              <h2 className="mt-4 font-fraunces text-4xl font-semibold">
                Trusted across industries
              </h2>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-2 border border-[#0f5c56]/15 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((c) => (
              <div
                key={c.name}
                className="flex h-32 items-center justify-center border border-[#0f5c56]/10 bg-white/40 p-6"
              >
                <div className="relative h-14 w-full">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        id="team"
        className="scroll-mt-8 border-t border-[#0f5c56]/15 bg-[#ebe7df] py-24 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={founder.photo}
              alt={founder.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f5c56]">
              Key Contact
            </p>
            <h2 className="mt-4 font-fraunces text-4xl font-semibold">
              {founder.name}
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-[#0f5c56]">
              {founder.role}
            </p>
            <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-[#14201f]/70">
              {founder.bio.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-8 bg-[#0a2e2b] py-24 text-[#f3f0ea] lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c8e6e0]/70">
              Contact
            </p>
            <h2 className="mt-4 font-fraunces text-4xl font-semibold lg:text-5xl">
              Let&rsquo;s talk about your business
            </h2>
            <a
              href={`mailto:${firm.email}`}
              className="mt-10 inline-block bg-[#c8e6e0] px-7 py-3.5 text-sm font-semibold text-[#0a2e2b] transition-colors hover:bg-white"
            >
              Email Us
            </a>
          </div>
          <div className="space-y-8 self-center">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#c8e6e0]/60">
                Phone
              </p>
              <a href={firm.phoneHref} className="mt-1 block text-2xl font-semibold hover:text-[#c8e6e0]">
                {firm.phone}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#c8e6e0]/60">
                Email
              </p>
              <a href={`mailto:${firm.email}`} className="mt-1 block text-xl hover:text-[#c8e6e0]">
                {firm.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#c8e6e0]/60">
                Office
              </p>
              <p className="mt-1 text-xl">{firm.address}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0a2e2b] py-8 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Altiora Consults · {firm.tagline}
      </footer>
    </div>
  );
}
