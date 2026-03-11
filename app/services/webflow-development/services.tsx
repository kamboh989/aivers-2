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
    title: "E-commerce Solutions",
    description:
      "Webflow provides tools for building and managing online stores, including customizable product pages, secure checkout processes, and inventory management features.",
    icon: ShoppingBag,
  },
  {
    title: "Hosting & Publishing",
    description:
      "Webflow offers hosting services that ensure fast and reliable website performance. Users can publish their sites directly from the platform with just a few clicks.",
    icon: Globe,
  },
  {
    title: "SEO Optimization",
    description:
      "Webflow includes features for optimizing websites for search engines, such as customizable meta tags, sitemap generation, and integrated analytics to track website performance.",
    icon: Search,
  },
  {
    title: "Template Marketplace",
    description:
      "Webflow provides access to a marketplace where users can browse and purchase pre-designed website templates. These templates cover a wide range of industries and design styles.",
    icon: LayoutTemplate,
  },
  {
    title: "Code Export",
    description:
      "Webflow allows users to export their designs as clean, production-ready HTML, CSS, and JavaScript code. This is valuable for developers who want to further customize or integrate with other platforms.",
    icon: Code2,
  },
  {
    title: "Form Builder",
    description:
      "Webflow includes a powerful form builder tool that enables users to create custom forms for gathering visitor information, such as contact forms, signup forms, and surveys.",
    icon: FormInput,
  },
  {
    title: "Asset Management",
    description:
      "Webflow provides tools for managing media assets such as images, videos, and documents. Users can upload, organize, and optimize assets directly within the platform.",
    icon: ImageIcon,
  },
  {
    title: "Webflow CMS API",
    description:
      "For advanced users and developers, Webflow offers an API for interacting with Webflow CMS. It allows users to programmatically create, update, and retrieve content collections.",
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
          <img
            src="/webflow/expert.png"
            alt="Webflow Certified Expert"
            className="h-auto w-[220px] object-contain sm:w-[250px] lg:w-[280px]"
          />
        </div>

        <p className="mx-auto mt-5 max-w-[620px] text-center text-[16px] leading-7 text-black/85 sm:text-[17px]">
          We offer a range of sub-services to enhance website creation and
          management
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