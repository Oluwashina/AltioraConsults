"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#firm", label: "The Firm" },
  { href: "#services", label: "Services" },
  { href: "#values", label: "Values" },
  { href: "#approach", label: "Approach" },
  { href: "#clients", label: "Clients" },
  { href: "#team", label: "Leadership" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-ink/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-xl font-bold tracking-wide text-white">
            ALTIORA <span className="text-bronze">CONSULTS</span>
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.35em] text-mist">
            Solutions for All
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-bronze"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-bronze px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-bronze-light hover:text-ink"
          >
            Contact Us
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-6 pb-6 pt-2 backdrop-blur-md lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-sm font-medium text-white/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-bronze px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
