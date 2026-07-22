"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const options = [
  { href: "/", label: "Current", hint: "Ink & Bronze" },
  { href: "/designs/a", label: "Sample A", hint: "Editorial Light" },
  { href: "/designs/b", label: "Sample B", hint: "Modern Ledger" },
];

export default function DesignSwitcher() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-5 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-1 rounded-2xl border border-black/10 bg-white/95 p-1.5 shadow-xl shadow-black/15 backdrop-blur-md">
      <span className="hidden px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40 sm:inline">
        Designs
      </span>
      {options.map((o) => {
        const active =
          o.href === "/"
            ? pathname === "/"
            : pathname.startsWith(o.href);
        return (
          <Link
            key={o.href}
            href={o.href}
            className={`rounded-xl px-3.5 py-2 text-center transition-colors ${
              active
                ? "bg-black text-white"
                : "text-black/70 hover:bg-black/5"
            }`}
          >
            <span className="block text-xs font-semibold">{o.label}</span>
            <span
              className={`block text-[10px] ${
                active ? "text-white/60" : "text-black/40"
              }`}
            >
              {o.hint}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
