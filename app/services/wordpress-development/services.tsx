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
    title: "Responsive Design",
    description:
      "Ensuring websites are optimized for various devices and screen sizes to provide a seamless user experience.",
    icon: ShoppingBag,
  },
  {
    title: "Customization & Integration",
    description:
      "Tailoring WordPress Development to meet specific business requirements and integrating with third-party tools and services.",
    icon: Globe,
  },
  {
    title: "Website Optimization",
    description:
      "Improving website performance, speed, and user experience through optimization techniques.",
    icon: Search,
  },
  {
    title: "Content Management",
    description:
      "Offering training and support for clients to effectively manage and update content on their WordPress websites.",
    icon: LayoutTemplate,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Developing online stores and integrating e-commerce functionalities using WordPress plugins like WooCommerce.",
    icon: Code2,
  },
  {
    title: "Custom Design",
    description:
      "Crafting unique website designs tailored to clients' branding and preferences.",
    icon: FormInput,
  },
  {
    title: "Plugin Development",
    description:
      "Building custom plugins to add specific functionalities or features to WordPress websites.",
    icon: ImageIcon,
  },
  {
    title: "Migration Services",
    description:
      "Assisting with the migration of websites from other platforms to WordPress or upgrading from older WordPress versions.",
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
         <h1 className="text-3xl lg:text-5xl font-bold">How we can help you</h1>
        </div>

        <p className="mx-auto mt-5 max-w-[620px] text-center text-[16px] leading-7 text-black/85 sm:text-[17px]">
         We provide end-to-end WordPress Development handling everything from design to optimization and ongoing support
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