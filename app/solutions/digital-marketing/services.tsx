"use client";

import {
  Laptop,
  Globe,
  BarChart,
  Users,
  Phone,
  Target,
  Search,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    title: "SEO Optimization",
    description:
      "Improve your website's visibility on search engines, increase organic traffic, and enhance your online presence with proven SEO strategies.",
    icon: Laptop,
  },
  {
    title: "Social Media Marketing",
    description:
      "Engage with your audience on social media platforms through targeted campaigns, community building, and content creation to grow your brand.",
    icon: Globe,
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Drive targeted traffic to your website with strategic PPC advertising campaigns on platforms like Google Ads and Bing Ads for immediate results.",
    icon: BarChart,
  },
  {
    title: "Email Marketing Campaigns",
    description:
      "Build and nurture your email list with personalized campaigns that convert leads into loyal customers using automation and segmented strategies.",
    icon: Users,
  },
  {
    title: "Influencer Marketing",
    description:
      "Collaborate with influencers to extend your brand’s reach and create authentic connections with their audience to boost your brand awareness.",
    icon: Phone,
  },
  {
    title: "Content Marketing",
    description:
      "Create valuable, relevant content to attract, engage, and retain your target audience, building authority and trust in your industry.",
    icon: Target,
  },
  {
    title: "Affiliate Marketing",
    description:
      "Leverage affiliates to promote your products and services, creating a win-win situation with performance-based commissions and partnerships.",
    icon: Search,
  },
  {
    title: "Online Reputation Management",
    description:
      "Monitor and improve your brand's online reputation by responding to reviews, managing feedback, and creating positive customer experiences.",
    icon: MessageCircle,
  },
];

export default function DigitalMarketingServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 h-px w-full max-w-[860px] bg-black/10" />

        <div className="flex justify-center">
          <h1 className="text-3xl lg:text-5xl font-bold">
            We are Experts in Digital Marketing
          </h1>
        </div>

        <p className="mx-auto mt-5 max-w-[620px] text-center text-[16px] leading-7 text-black/85 sm:text-[17px]">
          We help businesses boost their digital presence, increase brand awareness, and drive sales through tailored digital marketing strategies.
        </p>

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