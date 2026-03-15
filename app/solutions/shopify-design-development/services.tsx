"use client";

import {
  ShoppingBag,
  LayoutDashboard,
  Store,
  CreditCard,
  Truck,
  Smartphone,
  Plug,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "Shopify Store Setup",
    description:
      "Launch your Shopify store with a complete setup including navigation, pages, collections, products, and all essential store configurations.",
    icon: Store,
  },
  {
    title: "Custom Shopify Design",
    description:
      "Get a high-converting Shopify storefront with a custom design that matches your brand, improves user experience, and builds trust.",
    icon: LayoutDashboard,
  },
  {
    title: "Shopify Theme Development",
    description:
      "Develop and customize Shopify themes to create fast, responsive, and visually polished ecommerce experiences tailored to your business.",
    icon: ShoppingBag,
  },
  {
    title: "Store Management",
    description:
      "Manage products, collections, inventory, and store settings efficiently so your Shopify business runs smoothly every day.",
    icon: Settings,
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Set up secure payment gateways and checkout systems to ensure smooth transactions and a better shopping experience for customers.",
    icon: CreditCard,
  },
  {
    title: "Shipping & Delivery Setup",
    description:
      "Configure shipping zones, delivery rates, and fulfillment settings to streamline order handling and improve customer satisfaction.",
    icon: Truck,
  },
  {
    title: "App Integrations",
    description:
      "Integrate the right Shopify apps and third-party tools to enhance store functionality, automate tasks, and support business growth.",
    icon: Plug,
  },
  {
    title: "Mobile Optimization",
    description:
      "Optimize your Shopify store for mobile devices to deliver a smooth shopping experience and improve conversions across all screen sizes.",
    icon: Smartphone,
  },
];

export default function WebflowExpertServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 h-px w-full max-w-[860px] bg-black/10" />

        <div className="flex justify-center">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Shopify Expert Services
          </h1>
        </div>

        <p className="mx-auto mt-5 max-w-[620px] text-center text-[16px] leading-7 text-black/85 sm:text-[17px]">
          From store setup to custom development, we help brands build, optimize,
          and scale powerful Shopify stores that drive real results.
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