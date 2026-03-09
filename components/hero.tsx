import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbfb]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-blue-200/25 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-100px] h-[320px] w-[320px] rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-sky-100/30 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-[1320px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="max-w-[640px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-block h-[2px] w-10 rounded-full bg-neutral-900" />
            <p className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-sm font-semibold uppercase tracking-[0.14em] text-transparent sm:text-base">
              Digital Services
            </p>
          </div>
<h1 className="text-[42px] font-extrabold leading-[1.04] tracking-[-0.03em] text-slate-800 sm:text-[56px] lg:text-[62px]">
  IT that grows your <br />
  <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
    business
  </span>
</h1>

          <p className="mt-7 max-w-[620px] text-[18px] leading-[1.75] text-slate-800 sm:text-[20px]">
           We are a full-service digital agency delivering high-quality web
  development, custom software solutions, game development, and
  professional graphic design services
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 px-7 py-3.5 text-[16px] font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get Started
            </Link>

           
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[620px]">
            <div className="relative aspect-[1.08/0.82] w-full overflow-hidden rounded-[28px]">
              <Image
                src="/hero.webp"
                alt="Hero Image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}