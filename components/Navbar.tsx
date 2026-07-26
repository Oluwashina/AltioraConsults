"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[color-mix(in_oklab,var(--navy-deep)_85%,transparent)] backdrop-blur-md">
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 text-cream">
          <span className="font-display text-2xl tracking-tight">Altiora</span>
          <span className="eyebrow text-gold">Consults</span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest text-cream/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center bg-gold px-5 py-3 text-xs uppercase tracking-widest text-navy-deep transition-colors hover:bg-gold-soft md:inline-flex"
        >
          Book a Consultation
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-cream transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-cream transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-cream transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-navy-deep px-6 pb-6 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-xs uppercase tracking-widest text-cream/80"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block bg-gold px-5 py-3 text-center text-xs uppercase tracking-widest text-navy-deep"
          >
            Book a Consultation
          </a>
        </div>
      )}
    </header>
  );
}
