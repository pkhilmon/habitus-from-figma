"use client";

import { useState } from "react";

const faqs = [
  { q: "What do I get with Premium?", color: "#FE5D33" },
  { q: "What do I get with Premium?", color: "#FEC6C7" },
  { q: "What happens if I miss a day?", color: "#D9B8D5" },
  { q: "What happens if I miss a day?", color: "#DBEDFB" },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="max-w-[1440px] w-full mx-auto pt-12 md:pt-27.75 pb-10 md:pb-19 px-5 md:px-14 lg:px-25">
      <div className="">
        <div className="text-center mb-10 md:mb-17">
          <h2 className="text-4xl md:text-6xl font-bold text-dark leading-[1.2em]">
            Frequently Asked<br />Questions
          </h2>
          <p className="text-dark mt-4 md:mt-4.5 text-[18px] md:text-[20px] tracking-[-0.0025em]">
            Everything you need to know before getting started
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-10 md:gap-y-7.75">
          {faqs.map((faq, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="flex items-center gap-5 px-6 md:px-10 py-6 md:py-9 rounded-[24px] md:rounded-[40px] text-left transition-all"
              style={{ backgroundColor: faq.color }}
            >
              <div className="flex-shrink-0 bg-white w-9.75 h-9.75 rounded-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0.5 -1 24 24"
                  fill="none"
                  stroke="#FE5D33"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="font-medium text-[18px] md:text-[20px] text-dark">
                {faq.q}
              </span>
            </button>
          ))}
        </div>

        <div className="flex justify-end mt-7">
          <a href="#" className="text-dark text-lg underline underline-offset-3 hover:opacity-70">
            View All FAQs
          </a>
        </div>
      </div>
    </section>
  );
}
