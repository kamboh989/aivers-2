// components/AboutCompanySection.tsx
import Image from "next/image";

const stats = [
  { value: "330+", label: "Active Clients" },
  { value: "850+", label: "Projects Done" },
  { value: "25+", label: "Team Advisors" },
  { value: "10+", label: "Glorious Purpose" },
];

export default function AboutCompanySection() {
  return (
    <section className=" py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_1fr]">
          {/* Left Image Block */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[30px] bg-white shadow-sm">
              <div className="relative h-[420px] w-full sm:h-[500px] lg:h-[540px]">
                <Image
                  src="/webflow/company.webp" // apni image public folder me rakho
                  alt="About company team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>

          {/* Right Content */}
          <div className="pt-2">
            <h2 className="text-4xl font-extrabold leading-tight text-black sm:text-5xl">
              About{" "}
              <span className="text-blue-500">
                Company
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#222]">
              <span className="font-bold text-blue-500">Aiverse:</span> Your
              trusted partner for building digital products and growth-focused
              experiences. We combine strategy, design, engineering, and
              optimization to help businesses launch faster and scale
              sustainably.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#222]">
              From mobile apps and websites to SEO and ASO, we focus on
              performance, clean UX, measurable outcomes, and long-term support.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="flex h-35 w-35 flex-col items-center justify-center rounded-full border-[3px] border-gray-300 bg-blue-300 text-center shadow-sm"
                >
                  <span className="text-4xl font-extrabold leading-none text-black">
                    {item.value}
                  </span>
                  <span className="mt-2 max-w-[110px] text-base font-semibold leading-5 text-black">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}