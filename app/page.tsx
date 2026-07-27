import Image from "next/image";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import {
  approach,
  clientNames,
  firm,
  firmCopy,
  heroCopy,
  navLinks,
  services,
  servicesIntro,
  stats,
  values,
  valuesKicker,
} from "@/lib/content";

function SectionIntro({
  eyebrow,
  title,
  kicker,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  kicker?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow flex items-center gap-4">
        <span className="gold-rule" />
        {eyebrow}
      </p>
      <h2
        className={`mt-6 font-display text-4xl leading-[1.05] md:text-5xl ${
          light ? "text-cream" : "text-navy-deep"
        }`}
      >
        {title}
      </h2>
      {kicker && (
        <p
          className={`mt-6 text-lg leading-relaxed ${
            light ? "text-cream/70" : "text-muted-foreground"
          }`}
        >
          {kicker}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div id="top" className="flex-1">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-navy-deep">
        <Image
          src="/hero.jpg"
          alt="Corporate skyline at dusk"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />

        <div className="relative container-x pb-24 pt-40 text-cream md:pb-32">
          <div className="max-w-4xl">
            <p className="eyebrow mb-8 flex items-center gap-4">
              <span className="gold-rule" />
              Accounting · Tax · Business Process
            </p>
            <h1 className="font-display text-5xl leading-[0.95] text-cream md:text-7xl lg:text-8xl">
              Building strong financial foundations for{" "}
              <em className="not-italic text-gold">sustainable</em> growth.
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-cream/70">
              {heroCopy}
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center bg-gold px-6 py-4 text-xs uppercase tracking-widest text-navy-deep transition-colors hover:bg-gold-soft"
              >
                Book a Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center border border-cream/30 px-6 py-4 text-xs uppercase tracking-widest text-cream transition-colors hover:border-gold hover:text-gold"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Firm */}
      <section id="firm" className="scroll-mt-20 py-28 md:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionIntro eyebrow="Who We Are" title="The Firm." />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80 lg:col-span-7">
            <p>{firmCopy.paragraph1}</p>
            <p>{firmCopy.paragraph2}</p>
            <p className="pt-4 font-display text-2xl italic leading-snug text-navy-deep md:text-3xl">
              &ldquo;{firmCopy.quote}&rdquo;
            </p>
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl text-gold md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="scroll-mt-20 bg-navy-deep py-28 text-cream md:py-40"
      >
        <div className="container-x">
          <div className="mb-20 grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow flex items-center gap-4">
                <span className="gold-rule" />
                Our Core Services
              </p>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] text-cream md:text-6xl">
                Three disciplines. <br />
                <em className="not-italic text-gold">Solutions for all.</em>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-12">
              <p className="text-lg leading-relaxed text-cream/70">
                {servicesIntro}
              </p>
            </div>
          </div>

          <div className="grid gap-px bg-cream/10 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="group bg-navy-deep p-10 transition-colors hover:bg-navy md:p-12"
              >
                <div className="mb-8 flex items-baseline justify-between">
                  <span className="font-display text-2xl text-gold">
                    {service.number}
                  </span>
                  <span className="mx-6 h-px flex-1 bg-cream/10" />
                  <span className="eyebrow text-cream/40">Service</span>
                </div>
                <h3 className="font-display text-2xl leading-tight text-cream md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-6 leading-relaxed text-cream/70">
                  {service.intro}
                </p>
                <ul className="mt-8 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-cream/80"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="scroll-mt-20 bg-cream py-28 md:py-40">
        <div className="container-x">
          <SectionIntro
            eyebrow="Our Values"
            title="What we will not compromise."
            kicker={valuesKicker}
          />
          <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {values.map((value, i) => (
              <div key={value.title} className="border-t border-navy-deep/20 pt-8">
                <div className="mb-6 font-display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl text-navy-deep md:text-3xl">
                  {value.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Approach */}
      <section id="approach" className="scroll-mt-20 py-28 md:py-40">
        <div className="container-x grid items-start gap-16 lg:grid-cols-12">
          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <SectionIntro
              eyebrow="Work Approach"
              title="Beyond compliance."
              kicker="We combine technical expertise, practical insight, and a deep understanding of business operations to deliver services that create measurable value. Here is what distinguishes our work."
            />
            <div className="mt-10 aspect-[4/3] overflow-hidden">
              <Image
                src="/approach.jpg"
                alt="Executive boardroom"
                width={1400}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <ol className="space-y-2 lg:col-span-7">
            {approach.map((item) => (
              <li
                key={item.title}
                className="grid grid-cols-[auto_1fr] gap-8 border-t border-border py-8"
              >
                <div className="font-display text-3xl text-gold">
                  {item.numeral}
                </div>
                <div>
                  <h3 className="font-display text-2xl text-navy-deep md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-foreground/75">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Clients */}
      <section
        id="clients"
        className="scroll-mt-20 bg-navy-deep py-28 text-cream md:py-40"
      >
        <div className="container-x">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow flex items-center gap-4">
                <span className="gold-rule" />
                Our Clients
              </p>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] text-cream md:text-6xl">
                Trusted across{" "}
                <em className="not-italic text-gold">industries</em>.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <p className="text-lg leading-relaxed text-cream/70">
                We serve startups, SMEs, law firms, technology companies,
                logistics businesses, and multinational organisations. The names
                below are among the businesses that have trusted us with their
                financial and operational work.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px border border-cream/10 bg-cream/10 md:grid-cols-3 lg:grid-cols-4">
            {clientNames.map((name, i) => (
              <div
                key={name}
                className="flex items-center gap-4 bg-navy-deep px-6 py-10 md:py-12"
              >
                <span className="font-display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg text-cream md:text-xl">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-cream py-28 md:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionIntro
              eyebrow="Contact"
              title="A conversation, in confidence."
              kicker="We reply to every enquiry personally. Preliminary conversations are without obligation and held in strict confidence."
            />
            <a
              href={`mailto:${firm.email}`}
              className="mt-10 inline-flex items-center gap-2 bg-gold px-6 py-4 text-xs uppercase tracking-widest text-navy-deep transition-colors hover:bg-gold-soft"
            >
              Book a Consultation
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="lg:col-span-7 lg:border-l lg:border-navy-deep/15 lg:pl-16">
            <p className="eyebrow flex items-center gap-4">
              <span className="gold-rule" />
              Contact Information
            </p>
            <h3 className="mt-6 font-display text-3xl text-navy-deep md:text-4xl">
              Reach us directly.
            </h3>

            <dl className="mt-12 space-y-8">
              {[
                {
                  label: "Email",
                  value: firm.email,
                  href: `mailto:${firm.email}`,
                },
                {
                  label: "Phone",
                  value: firm.phone,
                  href: firm.phoneHref,
                },
                { label: "Office", value: firm.address },
                {
                  label: "Social",
                  value: "Altiora · @Altioraconsults",
                  href: firm.socials.x,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[140px_1fr] gap-6 border-b border-navy-deep/10 pb-6"
                >
                  <dt className="eyebrow text-navy-deep/60">{row.label}</dt>
                  <dd className="font-display text-xl text-navy-deep md:text-2xl">
                    {row.href ? (
                      <a
                        href={row.href}
                        className="transition-colors hover:text-gold"
                        {...(row.label === "Social"
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep py-16 text-cream">
        <div className="container-x grid items-start gap-10 md:grid-cols-3">
          <div>
            <Logo className="h-9 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-cream/60">
              Accounting, tax, and business process consultancy. {firm.tagline}.
            </p>
          </div>

          <div className="text-sm">
            <div className="eyebrow mb-3 text-cream/40">Navigate</div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm">
            <div className="eyebrow mb-3 text-cream/40">Contact</div>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${firm.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {firm.email}
                </a>
              </li>
              <li>
                <a
                  href={firm.phoneHref}
                  className="transition-colors hover:text-gold"
                >
                  {firm.phone}
                </a>
              </li>
              <li>{firm.address}</li>
            </ul>
          </div>
        </div>

        <div className="container-x mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-cream/40 md:flex-row">
          <p>© {new Date().getFullYear()} Altiora Consults. All rights reserved.</p>
          <p className="uppercase tracking-[0.25em]">{firm.tagline}</p>
        </div>
      </footer>
    </div>
  );
}
