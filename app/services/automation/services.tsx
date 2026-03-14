"use client";

import {
  Bot,
  Workflow,
  MessageSquare,
  Brain,
  Database,
  BarChart3,
  Zap,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "AI Workflow Automation",
    description:
      "Automate repetitive business processes with AI-powered workflows that reduce manual effort, improve efficiency, and streamline daily operations.",
    icon: Workflow,
  },
  {
    title: "AI Chatbots",
    description:
      "Deploy intelligent AI chatbots to handle customer queries, automate support, and provide instant 24/7 responses across websites and messaging platforms.",
    icon: MessageSquare,
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Leverage machine learning models to analyze data, detect patterns, and build intelligent systems that improve decision-making and business performance.",
    icon: Brain,
  },
  {
    title: "Process Automation",
    description:
      "Optimize and automate internal business processes using AI-driven tools to eliminate repetitive tasks and increase operational speed.",
    icon: Settings,
  },
  {
    title: "AI Data Processing",
    description:
      "Use AI-powered systems to process and organize large volumes of data quickly, enabling better insights and smarter business strategies.",
    icon: Database,
  },
  {
    title: "Predictive Analytics",
    description:
      "Forecast trends and customer behavior using AI analytics to help businesses make proactive and data-driven decisions.",
    icon: BarChart3,
  },
  {
    title: "Smart Integrations",
    description:
      "Integrate AI tools with CRMs, marketing platforms, and business systems to automate workflows and improve productivity.",
    icon: Zap,
  },
  {
    title: "Custom AI Solutions",
    description:
      "Develop tailored AI automation systems designed specifically for your business needs, improving efficiency and scalability.",
    icon: Bot,
  },
];

export default function WebflowExpertServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">

        <div className="mx-auto mb-10 h-px w-full max-w-[860px] bg-black/10" />

        <div className="flex justify-center">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Our AI Automation Services
          </h1>
        </div>

        <p className="mx-auto mt-5 max-w-[620px] text-center text-[16px] leading-7 text-black/85 sm:text-[17px]">
          We help businesses automate workflows, reduce manual work, and
          increase productivity with powerful AI-driven automation solutions.
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