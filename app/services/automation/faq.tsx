"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    id: 1,
    question: "AI Workflow Automation",
    answer:
      "Automate repetitive business processes using intelligent AI systems that streamline operations, reduce manual work, and improve productivity across departments.",
  },
  {
    id: 2,
    question: "AI Chatbots and Customer Support",
    answer:
      "Enhance customer engagement with AI-powered chatbots that provide instant responses, automate support tasks, and deliver 24/7 assistance to your customers.",
  },
  {
    id: 3,
    question: "Data Processing and Smart Insights",
    answer:
      "Leverage AI to analyze large volumes of data quickly and extract valuable insights that help businesses make faster, smarter, and more informed decisions.",
  },
  {
    id: 4,
    question: "Automated Marketing and Lead Generation",
    answer:
      "Use AI-driven tools to automate marketing campaigns, lead nurturing, and customer segmentation to improve targeting, increase engagement, and boost conversions.",
  },
];

export default function WebflowFaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(4);

  const toggleItem = (id: number) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-[#f3f3f3] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* Left Content */}
          <div className="max-w-[620px]">
            <h2 className="text-[28px] font-semibold leading-[1.05] tracking-[-0.03em] text-black sm:text-[38px] lg:text-[48px]">
              Smarter Workflows with AI Automation
            </h2>

            <p className="mt-8 max-w-[610px] text-[17px] leading-[1.55] text-black/85 sm:text-[18px]">
              From intelligent chatbots to automated business workflows, our AI
              automation solutions help businesses save time, reduce operational
              costs, and increase productivity while delivering better customer
              experiences.
            </p>
          </div>

          {/* Right FAQ */}
          <div className="space-y-4">
            {faqItems.map((item) => {
              const isOpen = openItem === item.id;

              return (
                <div
                  key={item.id}
                  className={`overflow-hidden rounded-[18px] border border-gray-400 bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-black shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                      : "border-black/10"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-8"
                  >
                    <span className="text-[18px] font-semibold leading-[1.2] text-black sm:text-[22px]">
                      {item.question}
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-black/75">
                      {isOpen ? (
                        <Minus className="h-6 w-6" />
                      ) : (
                        <Plus className="h-6 w-6" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                        <div className="h-px w-full bg-black/10" />
                        <p className="pt-6 text-[17px] leading-[1.8] text-black/75 sm:text-[18px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}