"use client";

import { useState } from "react";
import { faq } from "@/data/site";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-10 grid gap-3">
      {faq.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={item.question}
            className={[
              "rounded-[1.5rem] border px-5 py-4 transition duration-300 hover:-translate-y-0.5",
              index === 1 || index === 4
                ? "surface-card border-amber-200/18"
                : "surface-card",
            ].join(" ")}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            >
              <span className="text-base font-semibold text-white">
                {item.question}
              </span>
              <span
                className={[
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/55 transition duration-300",
                  isOpen ? "rotate-45" : "",
                ].join(" ")}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              hidden={!isOpen}
              className="mt-4 max-w-3xl text-sm leading-7 text-white/72"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
