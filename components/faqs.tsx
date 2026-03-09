"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqItems = [
  {
    id: 1,
    question: "Which service should I choose?",
    answer:
      "It depends on your goal. If you need a fast website, go with web development. If you want app growth, mobile app development with SEO/ASO support is a better fit. We can recommend the right package after a quick discussion.",
  },
  {
    id: 2,
    question: "Do you offer fixed pricing?",
    answer:
      "Yes, for clearly scoped projects we can offer fixed pricing. For ongoing work or flexible requirements, we usually suggest a monthly or milestone-based plan.",
  },
  {
    id: 3,
    question: "How do we start?",
    answer:
      "We begin with a short discovery call, understand your goals, define scope, share a proposal, and then move into design and development once approved.",
  },
  {
    id: 4,
    question: "How long does a typical project take?",
    answer:
      "A small website can take 2 to 4 weeks, while larger websites and apps may take 6 to 12 weeks depending on features, revisions, and integrations.",
  },
  {
    id: 5,
    question: "Do you help with UI/UX design too?",
    answer:
      "Yes, we handle wireframes, UI design, responsive layouts, and user-friendly flows before development starts.",
  },
  {
    id: 6,
    question: "Can you work with my existing codebase or team?",
    answer:
      "Yes, we can join an existing project, improve your codebase, fix issues, add features, or work alongside your in-house team.",
  },
  {
    id: 7,
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we provide maintenance, bug fixes, feature updates, performance improvements, SEO/ASO support, and long-term technical assistance.",
  },
];

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="group overflow-hidden rounded-[20px] border border-[#d7e4e3] bg-white/75 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300">
      <button
        onClick={onToggle}
        className="flex w-full items-start gap-4 px-4 py-4 text-left sm:px-5 sm:py-5"
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#cfe0df] bg-[#f4fbfa] text-[13px] font-bold text-slate-800">
          {item.id}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-extrabold leading-6 text-slate-950 sm:text-[17px]">
            {item.question}
          </h3>
          {!isOpen && (
            <p className="mt-1 text-[12px] text-slate-500 sm:text-[13px]">
              Click to view answer
            </p>
          )}
        </div>

        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#cfe0df] bg-[#f4fbfa] text-slate-500 transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-5 sm:px-5">
            <div className="ml-12 rounded-2xl border border-[#d7e4e3] bg-gradient-to-br from-white/80 to-[#eef8f7] p-4 text-[14px] leading-7 text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:text-[15px]">
              {item.answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesFaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="relative overflow-hidden bg-[#f7fbfb] ">
      {/* background blur blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-80px] top-[80px] h-[260px] w-[260px] rounded-full bg-cyan-200/30 blur-[90px]" />
        <div className="absolute right-[-40px] top-[120px] h-[280px] w-[280px] rounded-full bg-sky-200/30 blur-[100px]" />
        <div className="absolute bottom-[-80px] left-1/3 h-[260px] w-[260px] rounded-full bg-teal-200/25 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[450px_minmax(0,1fr)]">
          {/* left side */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex rounded-full border border-[#cfe0df] bg-white/70 px-4 py-1.5 text-[12px] font-semibold text-slate-700 shadow-sm backdrop-blur-md">
              Question FAQs
            </div>

            <h2 className="mt-5 text-[36px] font-extrabold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-[48px] lg:text-[56px]">
              Questions about
              <br />
              our{" "}
              <span className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>

            <p className="mt-5 max-w-[380px] text-[17px] leading-8 text-slate-600">
              Quick answers about choosing a service, pricing models, and how we
              start.
            </p>
<div className="mt-8 flex flex-wrap gap-3">
  <Link
    href="/contact"
    className="inline-flex rounded-full bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-3 text-[15px] font-bold text-white shadow-[0_10px_30px_rgba(20,184,166,0.25)] transition-transform duration-300 hover:scale-[1.02]"
  >
    Get a recommendation
  </Link>

  <Link
    href="/#services"
    className="inline-flex rounded-full border border-[#cfe0df] bg-white/80 px-6 py-3 text-[15px] font-bold text-slate-900 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white"
  >
    Browse services
  </Link>
</div>

            {/* image card */}
            <div className="relative mt-8 max-w-[360px]">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-200/35 via-white/20 to-teal-200/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-[#cfe0df] bg-white/65 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                <div className="overflow-hidden rounded-[20px]">
                  <img
                    src="/faq.webp"
                    alt="Team discussion"
                    className="h-[220px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="space-y-4">
            {faqItems.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() =>
                  setOpenId((prev) => (prev === item.id ? null : item.id))
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}