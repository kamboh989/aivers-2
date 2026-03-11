"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    id: 1,
    question: "Custom Website Design",
    answer:
      "Tailored, eye-catching designs that reflect your brand identity and captivate your audience. Trust us to elevate your online presence and unlock the full potential of your brand. We provide complete custom solutions in wordpress.",
  },
  {
    id: 2,
    question: "Business Websites",
    answer:
      "Crafting bespoke WordPress websites tailored to your business needs, our service combines responsive layouts to intuitive content management, captivating design, seamless functionality, and robust security that reflects your brand's essence.",
  },
  {
    id: 3,
    question: "E-commerce Solutions",
    answer:
      "Expert in integration of WooCommerce, maximizing your online sales potential. We can help you with conversion optimization, payment gateways integration, custom features in woocommerce and many more to help you boost.",
  },
  {
    id: 4,
    question: "Support and Maintenance",
    answer:
      "Providing reliable support and maintenance services to keep your WordPress site running smoothly and up-to-date with the latest trends and technologies.",
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
              WordPress expertise tailored for perfection
            </h2>

            <p className="mt-8 max-w-[610px] text-[17px] leading-[1.55] text-black/85 sm:text-[18px]">
             With a passion for crafting unforgettable wordpress websites, we specialize in turning your vision into reality. From stunning designs that captivate your audience to seamless e-commerce solutions that drive sales, our team of experts is dedicated to exceeding your expectations.
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