"use client";

import { CheckCircle2 } from "lucide-react";

const benefits = [
  "A quick discovery call to understand your needs",
  "A scope + timeline with clear milestones",
  "A build plan focused on speed, SEO, and conversions",
  "Fast replies (typically within 24 hours)",
];

export default function ProjectCtaSection() {
  return (
    <section className="mt-20 bg-gradient-to-b from-[#eef4ff] via-[#f5f9ff] to-[#edf5ff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-r from-[#031a3d] via-[#0a2f66] to-[#114b8a] px-6 py-10 shadow-[0_30px_80px_rgba(3,18,44,0.30),0_12px_28px_rgba(10,47,102,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* glow layers */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_30%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_18%,transparent_82%,rgba(0,0,0,0.10))]" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            {/* left */}
            <div className="max-w-[680px]">
              <p className="text-[16px] font-semibold text-blue-200 sm:text-[18px]">
                Have a project in mind?
              </p>

              <h2 className="mt-4 text-[42px] font-extrabold leading-[1.02] tracking-[-0.03em] text-white sm:text-[54px] lg:text-[68px]">
                Ready to start your project?
              </h2>

              <p className="mt-6 max-w-[760px] text-[18px] leading-8 text-blue-50/90 sm:text-[20px]">
                Share your goals, timeline, and requirements. We&apos;ll respond
                with a clear next step, a realistic delivery plan, and the best
                tech approach for your product.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-7 py-4 text-[17px] font-bold text-white shadow-[0_12px_30px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.28)] transition-all duration-300 hover:-translate-y-0.5">
                  Contact Us
                </button>
              </div>
            </div>

            {/* right card */}
            <div className="lg:justify-self-end">
              <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-white/10 p-6 shadow-[0_22px_50px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl sm:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_35%,transparent_70%,rgba(255,255,255,0.04))]" />

                <div className="relative">
                  <h3 className="text-[26px] font-extrabold text-white">
                    What you&apos;ll get
                  </h3>

                  <div className="mt-6 space-y-5">
                    {benefits.map((item) => (
                      <div key={item} className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-400/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
                          <CheckCircle2 className="h-5 w-5 text-blue-200" />
                        </div>

                        <p className="text-[17px] leading-8 text-blue-50">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}