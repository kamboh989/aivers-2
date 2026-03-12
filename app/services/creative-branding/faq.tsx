"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    id: 1,
    question: "Logo Design",
    answer:
      "Crafting unique visual identities that represent brands effectively.",
  },
  {
    id: 2,
    question: "Creative Branding",
    answer:
      "Establishing brand identity through visual elements and storytelling.",
  },
  {
    id: 3,
    question: "Product Designing",
    answer:
      "Production design encompasses the process of creating the overall visual aesthetic for films, TV shows, theater productions, and events, integrating sets, props, costumes, and lighting to convey storytelling elements effectively.",
  },
  {
    id: 4,
    question: "UI/UX Design",
    answer:
      "UI/UX design focuses on creating intuitive interfaces and seamless user experiences for digital products, prioritizing usability and aesthetic appeal to enhance user satisfaction and engagement.",
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
              Professional Graphic Design Services
            </h2>

            <p className="mt-8 max-w-[610px] text-[17px] leading-[1.55] text-black/85 sm:text-[18px]">
             We offer a comprehensive range of graphic design services tailored to elevate your business. From logo creation and brand identity development to engaging marketing collateral and stunning website designs, our team of talented designers is committed to delivering compelling solutions that resonate with your audience.
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