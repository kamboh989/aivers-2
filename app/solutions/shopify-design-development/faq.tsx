"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    id: 1,
    question: "Exceptional Designs",
    answer:
      "Elevate your Shopify store with our exceptional design services, tailored to your brand's unique identity and customer journey. Unlock the full potential of your Shopify storefront with our expert team, dedicated to delivering designs that not only impress but also drive results.",
  },
  {
    id: 2,
    question: "Subscriptions Expert",
    answer:
      "Unlock the power of recurring revenue with our subscription services for Shopify, empowering you to create and manage subscription-based products effortlessly We are expert in integrating all famous subscription models and customizing the branding of the subcriptions according to your store to ensure a smooth UI throughout the website.",
  },
  {
    id: 3,
    question: "Theme Customization",
    answer:
      "From minor tweaks to full-scale redesigns, our team of Shopify experts is here to deliver personalized theme customization solutions that align perfectly with your business goals. We are expert in liquid templates and theme development, ready to elevate your brand with custom designs and functionality to reach the maximum potentional of your store.",
  },
  {
    id: 4,
    question: "Shopify Plus Expert",
    answer:
      "As a Shopify Plus expert, we specialize in providing top-tier solutions tailored specifically for high-growth businesses. From custom development to strategic consulting, we ensure your Shopify Plus store exceeds expectations.",
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
              Bespoke designs and functionality are our expertise
            </h2>

            <p className="mt-8 max-w-[610px] text-[17px] leading-[1.55] text-black/85 sm:text-[18px]">
             From unique theme designs that reflect your brand’s personality with high Conversions to bespoke app integrations tailored to your specific needs, we specialize in bringing your vision to life on the Shopify platform.
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