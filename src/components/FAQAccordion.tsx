"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="border-b" style={{ borderColor: "var(--border)" }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex justify-between items-center text-left py-4 gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium" style={{ color: "var(--text)" }}>{item.q}</span>
              <span
                className="flex-shrink-0 text-lg transition-transform"
                style={{ color: "var(--accent)", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="text-sm leading-relaxed pb-4 pr-8" style={{ color: "var(--muted)" }}>
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}