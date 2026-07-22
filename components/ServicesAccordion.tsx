"use client";

import { useState } from "react";
import { services } from "@/lib/content";

type Props = {
  accent: "teal" | "navy";
};

export default function ServicesAccordion({ accent }: Props) {
  const [active, setActive] = useState(0);
  const service = services[active];
  const bar =
    accent === "teal"
      ? "bg-[#0f5c56] text-white"
      : "bg-[#16325c] text-white";
  const idle =
    accent === "teal"
      ? "border-[#0f5c56]/25 text-[#0f5c56] hover:bg-[#0f5c56]/8"
      : "border-[#16325c]/25 text-[#16325c] hover:bg-[#16325c]/8";
  const dot = accent === "teal" ? "bg-[#0f5c56]" : "bg-[#16325c]";

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {services.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            className={`border px-5 py-3 text-left text-sm font-semibold transition-colors ${
              i === active ? bar : `bg-transparent ${idle}`
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="mt-10 border-t border-black/10 pt-10">
        <h3 className="font-fraunces text-2xl font-semibold tracking-tight sm:text-3xl">
          {service.title}
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/65">
          {service.intro}
        </p>
        <ul className="mt-8 grid gap-x-12 gap-y-3 sm:grid-cols-2">
          {service.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className={`mt-2 h-1.5 w-1.5 shrink-0 ${dot}`} />
              <span className="text-[15px] leading-relaxed text-black/75">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
