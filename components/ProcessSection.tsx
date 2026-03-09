import { MoveRight } from "lucide-react";

const processSteps = [
  {
    number: "1",
    title: "Initiating a Kick-off Meeting",
    description:
      "Kick-start the project with a concise and informative kick-off meeting to align goals and expectations.",
  },
  {
    number: "2",
    title: "Planning The Sprints",
    description:
      "Strategize sprint goals, timelines, and deliverables for efficient and structured project execution.",
  },
  {
    number: "3",
    title: "Achieving Results",
    description:
      "Deliver outcomes through focused execution, clear communication, and performance-driven development.",
  },
  {
    number: "4",
    title: "Scaling Fast",
    description:
      "Expand rapidly with efficient processes, smart optimization, and scalable digital solutions.",
  },
];

function CurvedArrow() {
  return (
    <svg
      width="110"
      height="42"
      viewBox="0 0 110 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L8,4 L0,8" fill="none" stroke="#5247df" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      <path
        d="M6 30 Q 52 2 100 24"
        stroke="#6248d8"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
}

export default function ProcessSection() {
  return (
    <section className="bg-[#f7f8f8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[760px]">
          <h2 className="text-[24px] font-extrabold leading-[1.1] tracking-[-0.03em] text-slate-550 sm:text-[36px] lg:text-[48px]">
            Discover Our Seamless Process for
            <br />
            Websites, SEO, and Digital Marketing
          </h2>
        </div>

        <div className="relative mt-14 hidden lg:block">
          <div className="grid grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={[
                  "relative",
                  index === 0 ? "mt-0" : "",
                  index === 1 ? "mt-16" : "",
                  index === 2 ? "mt-28" : "",
                  index === 3 ? "mt-40" : "",
                ].join(" ")}
              >
                <div className="mb-5 text-[84px] font-extrabold leading-none text-transparent [-webkit-text-stroke:2px_#2848ff]">
                  {step.number}
                </div>

                {index !== processSteps.length - 1 && (
                  <div className="absolute left-[66%] top-[42px]">
                    <CurvedArrow />
                  </div>
                )}

                <h3 className="max-w-[260px] text-[28px] font-bold leading-tight text-black">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-[270px] text-[18px] leading-8 text-slate-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:hidden">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="text-[64px] font-extrabold leading-none text-transparent [-webkit-text-stroke:2px_#2848ff]">
                  {step.number}
                </div>

                {index !== processSteps.length - 1 && (
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <MoveRight className="h-5 w-5" />
                  </span>
                )}
              </div>

              <h3 className="text-[24px] font-bold leading-tight text-black">
                {step.title}
              </h3>

              <p className="mt-3 text-[16px] leading-7 text-slate-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}