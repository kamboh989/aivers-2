"use client";

import Link from "next/link";

export default function FullStackCtaSection() {
  return (
    <section className="mt-20 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-r from-[#031a3d] via-[#0a2f66] to-[#114b8a] px-6 py-14 text-center shadow-[0_30px_80px_rgba(3,18,44,0.30),0_12px_28px_rgba(10,47,102,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* glow layers */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_30%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_18%,transparent_82%,rgba(0,0,0,0.10))]" />
          </div>

          <div className="relative z-10 mx-auto max-w-[820px]">
            <h2 className="text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[42px] lg:text-[56px]">
              Ready to Build Your Next Full-Stack Web Application?
            </h2>

            <p className="mt-5 text-[18px] leading-8 text-blue-50/90 sm:text-[22px]">
              Let's create powerful, scalable web applications with modern technologies including frontend, backend, cloud services, and APIs.
            </p>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/contact"
                className="inline-flex min-h-[56px] items-center justify-center rounded-[10px] bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-7 text-[16px] font-bold text-white shadow-[0_12px_30px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.28)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}