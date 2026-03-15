"use client";

import {
  Smartphone,
  LayoutDashboard,
  Store,
  CreditCard,
  Truck,
  SmartphoneCharging,
  Plug,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "Custom App Development",
    description:
      "Build custom mobile applications tailored to your business goals with smooth performance, modern design, and scalable functionality.",
    icon: Smartphone,
  },
  {
    title: "UI/UX App Design",
    description:
      "Create visually engaging and user-friendly mobile app interfaces that improve user experience and keep customers engaged.",
    icon: LayoutDashboard,
  },
  {
    title: "iOS & Android Apps",
    description:
      "Develop high-performing mobile apps for both iOS and Android platforms to reach a wider audience and grow your business.",
    icon: Store,
  },
  {
    title: "App Maintenance",
    description:
      "Keep your mobile application updated, secure, and running smoothly with ongoing support, fixes, and performance improvements.",
    icon: Settings,
  },
  {
    title: "In-App Payment Integration",
    description:
      "Integrate secure payment gateways and transaction systems to provide users with seamless in-app purchase experiences.",
    icon: CreditCard,
  },
  {
    title: "App Deployment",
    description:
      "Handle complete app deployment on the App Store and Google Play Store with proper setup, publishing, and optimization.",
    icon: Truck,
  },
  {
    title: "Third-Party Integrations",
    description:
      "Connect your mobile app with APIs, CRMs, payment tools, and other third-party services to extend functionality.",
    icon: Plug,
  },
  {
    title: "App Optimization",
    description:
      "Optimize app speed, responsiveness, and usability to deliver a smooth experience across different devices and screen sizes.",
    icon: SmartphoneCharging,
  },
];

export default function WebflowExpertServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 h-px w-full max-w-[860px] bg-black/10" />

        <div className="flex justify-center">
          <h1 className="text-3xl lg:text-5xl font-bold">
            We are Expert in
          </h1>
        </div>

        <p className="mx-auto mt-5 max-w-[620px] text-center text-[16px] leading-7 text-black/85 sm:text-[17px]">
          We provide clients with high-quality mobile app development services.
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