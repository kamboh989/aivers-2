"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    id: 1,
    question: "Bespoke Solutions",
    answer:
      "We create bespoke Webflow solutions tailored to your brand, business goals, and customer journey. Instead of using a one-size-fits-all template, we design and develop a website experience that matches your unique requirements, improves engagement, and supports long-term growth.",
  },
  {
    id: 2,
    question: "CMS Development",
    answer:
      "Our Webflow CMS development services make it easy for your team to manage dynamic content such as blogs, case studies, service pages, portfolios, and team profiles. We structure the CMS for flexibility, scalability, and simple day-to-day editing without relying on heavy developer support.",
  },
  {
    id: 3,
    question: "Advanced Functionality",
    answer:
      "We build advanced Webflow functionality to support modern business needs, including custom interactions, third-party integrations, lead capture flows, dynamic content systems, and conversion-focused user journeys. The goal is to make your website not only look good, but also perform like a business tool.",
  },
  {
    id: 4,
    question: "Maintenance and Support",
    answer:
      "We provide ongoing Webflow maintenance and support to keep your website secure, updated, optimized, and running smoothly. From content updates and performance improvements to troubleshooting and technical assistance, we help ensure your site continues delivering results after launch.",
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
              Bespoke Webflow Design & Development Solutions
            </h2>

            <p className="mt-8 max-w-[610px] text-[17px] leading-[1.55] text-black/85 sm:text-[18px]">
              From intuitive user experiences to pixel-perfect layouts, we
              excel in delivering top-notch Webflow design and development
              services that elevate your online presence and drive tangible
              results.
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