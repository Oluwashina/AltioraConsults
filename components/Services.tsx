"use client";

import { useState } from "react";

type Service = {
  id: string;
  label: string;
  title: string;
  intro: string;
  items: string[];
};

const services: Service[] = [
  {
    id: "accounting",
    label: "Accounting & Financial Management",
    title: "Accounting & Financial Management Services",
    intro:
      "Reliable financial information is the foundation of every sound business decision. We keep your records accurate, your reporting timely, and your finances under control.",
    items: [
      "Bookkeeping and financial record management",
      "Preparation of financial statements",
      "Management accounts and financial reporting",
      "Bank reconciliations and cashbook maintenance",
      "Budgeting and forecasting",
      "Payroll administration and payroll reconciliations",
      "Financial analysis and advisory",
      "Accounts payable and accounts receivable management",
      "Cash flow planning and monitoring",
      "Fixed asset register maintenance and depreciation schedules",
      "Inventory accounting and stock reconciliation",
      "General ledger review and account analysis",
      "IFRS and accounting standards compliance support",
      "Financial process improvement and automation support",
      "Cost accounting and expense tracking",
    ],
  },
  {
    id: "tax",
    label: "Tax Advisory & Compliance",
    title: "Tax Advisory & Compliance Consultancy",
    intro:
      "Our tax professionals provide strategic guidance to help businesses meet their statutory obligations while maximizing tax efficiency.",
    items: [
      "Tax planning and advisory",
      "Tax compliance and statutory filings",
      "Company Income Tax (CIT)",
      "Value Added Tax (VAT)",
      "Withholding Tax (WHT)",
      "Personal Income Tax (PAYE)",
      "Tax health checks and compliance reviews",
      "Tax audit support and dispute resolution, representation and correspondence with tax authorities",
      "Capital Gains Tax advisory",
      "Tax risks assessment and exposure analysis",
      "Assistance with tax reconciliation and back-duty tax reviews",
    ],
  },
  {
    id: "process",
    label: "Business Process & Workflow",
    title: "Business Process & Workflow Consultancy",
    intro:
      "Efficient processes drive accountability and long-term stability. We help you identify inefficiencies, redesign workflows, and implement systems that scale with your business.",
    items: [
      "Business process review and optimization",
      "Process mapping and documentation",
      "Development of Standard Operating Procedures (SOPs)",
      "Internal control design and assessment",
      "Workflow automation recommendations",
      "Performance improvement initiatives",
      "Organizational efficiency and operational advisory",
      "Review of document flow, reporting lines, and task handoffs",
      "Risk identification and operational risk mitigation",
      "Procurement, inventory, and vendor management process review",
      "Development of process manuals and operational guides",
      "Finance, administration, and back-office workflow optimization",
      "Sales, billing, and collections process review",
      "Compliance process review and control enhancement",
      "Post-implementation review and continuous improvement support",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {services.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            className={`rounded-full border px-6 py-3 text-left text-sm font-semibold transition-all ${
              i === active
                ? "border-bronze bg-bronze text-white shadow-lg shadow-bronze/25"
                : "border-ink/15 bg-white text-ink/70 hover:border-bronze/50 hover:text-ink"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-ink/8 bg-white p-8 shadow-sm sm:p-12">
        <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          {service.title}
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/70">
          {service.intro}
        </p>
        <ul className="mt-8 grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
          {service.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
              <span className="text-[15px] leading-relaxed text-ink/80">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
