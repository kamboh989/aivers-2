"use client";

import {
  ShoppingBag,
  Globe,
  Search,
  LayoutTemplate,
  Code2,
  FormInput,
  Image as ImageIcon,
  Database,
} from "lucide-react";

const services = [
  {
    title: "Social Media Management",
    description:
      "Elevate your online presence with expert social media management: content creation, scheduling, engagement, and analytics for effective brand communication.",
    icon: ShoppingBag,
  },
  {
    title: "Pay-Per-Click Advertising",
    description:
      "Drive targeted traffic and boost conversions with our expert PPC (Pay-Per-Click) advertising services tailored to your business objectives.",
    icon: Globe,
  },
  {
    title: "Social Media Marketing",
    description:
      "Elevate your brand's online presence with our strategic social media marketing services, tailored to engage and grow your audience effectively.",
    icon: Search,
  },
  {
    title: "Search Engine Optimization",
    description:
      "Elevate your online presence and increase visibility with our expert SEO services tailored to boost your website's rankings.",
    icon: LayoutTemplate,
  },
  {
    title: "Email Marketing",
    description:
      "Elevate your brand's outreach with personalized email marketing campaigns, driving engagement and conversions for your business growth and success.",
    icon: Code2,
  },
  {
    title: "Analytics and Reporting",
    description:
      "Gain valuable insights and track performance with our analytics and reporting services, empowering informed decision-making for your business growth.",
    icon: FormInput,
  },
  {
    title: "Content Creation",
    description:
      "Crafting engaging and valuable material across various mediums to inform, entertain, and resonate with target audiences.",
    icon: ImageIcon,
  },
  {
    title: "Marketing Automation",
    description:
      "Streamlining repetitive tasks with software to enhance efficiency and personalize communication for effective audience engagement.",
    icon: Database,
  },
];

export default function WebflowExpertServicesSection() {
  return (
    <section className=" py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {/* top line */}
        <div className="mx-auto mb-10 h-px w-full max-w-[860px] bg-black/10" />

        {/* top image/logo */}
        <div className="flex justify-center">
         <h1 className="text-3xl lg:text-5xl font-bold">How we can help you?</h1>
        </div>

        <p className="mx-auto mt-5 max-w-[620px] text-center text-[16px] leading-7 text-black/85 sm:text-[17px]">
         We take care of everything to help you boost online.
        </p>

        {/* services grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group h-full rounded-[24px] border border-blue-200 bg-[linear-gradient(180deg,#f9fbff_0%,#eef5ff_55%,#e9f2ff_100%)] p-6 text-center shadow-[0_10px_30px_rgba(37,99,235,0.08)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-blue-300 hover:shadow-[0_18px_40px_rgba(37,99,235,0.16)] sm:p-7"
              >
                <div className="mb-5 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-[0_8px_20px_rgba(37,99,235,0.10)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_28px_rgba(37,99,235,0.16)]">
                    <Icon className="h-7 w-7 text-blue-600" strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="text-[22px] font-semibold leading-[1.25] tracking-[-0.02em] text-black">
                  {item.title}
                </h3>

                <p className="mx-auto mt-4 max-w-[250px] text-[15px] leading-7 text-black/75">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}