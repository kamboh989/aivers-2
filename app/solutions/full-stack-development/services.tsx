"use client";

import {
  Laptop,
  Code,
  Database,
  Server,
  Cloud,
  FileText,
  GitBranch,
  Terminal,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Build beautiful and responsive user interfaces using modern frameworks like React, Angular, and Vue.js to ensure a seamless user experience.",
    icon: Laptop,
  },
  {
    title: "Backend Development",
    description:
      "Create scalable and secure backend systems with technologies like Node.js, Python, Ruby on Rails, and Java to power your applications.",
    icon: Code,
  },
  {
    title: "Database Management",
    description:
      "Design and manage efficient databases with relational and NoSQL technologies such as MySQL, PostgreSQL, MongoDB, and Firebase.",
    icon: Database,
  },
  {
    title: "API Development",
    description:
      "Develop robust and secure APIs that connect frontend and backend services to ensure seamless communication and integration.",
    icon: Server,
  },
  {
    title: "Cloud Services",
    description:
      "Implement cloud-based solutions with AWS, Azure, and Google Cloud for scalable, cost-effective, and high-performance applications.",
    icon: Cloud,
  },
  {
    title: "Version Control with Git",
    description:
      "Leverage Git for version control, enabling efficient collaboration and seamless code management with platforms like GitHub and GitLab.",
    icon: GitBranch,
  },
  {
    title: "DevOps & Deployment",
    description:
      "Automate deployment processes and CI/CD pipelines for fast and reliable delivery using tools like Docker, Kubernetes, Jenkins, and more.",
    icon: FileText,
  },
  {
    title: "Command-Line Tools",
    description:
      "Utilize command-line tools for development and automation, improving the efficiency of development workflows and system administration.",
    icon: Terminal,
  },
];

export default function FullStackDevelopmentServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 h-px w-full max-w-[860px] bg-black/10" />

        <div className="flex justify-center">
          <h1 className="text-3xl lg:text-5xl font-bold">
            We are Experts in Full-Stack Development
          </h1>
        </div>

        <p className="mx-auto mt-5 max-w-[620px] text-center text-[16px] leading-7 text-black/85 sm:text-[17px]">
          We provide end-to-end web development services, covering frontend, backend, API development, database management, and deployment.
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