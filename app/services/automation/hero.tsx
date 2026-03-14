import Link from "next/link";

export default function WebflowHero() {
  return (
    <section
      className="relative min-h-[360px] overflow-hidden bg-black bg-cover bg-center bg-no-repeat lg:min-h-[450px]"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(0, 0, 0, 0.88) 0%,
            rgba(0, 0, 0, 0.82) 35%,
            rgba(0, 0, 0, 0.45) 65%,
            rgba(0, 0, 0, 0.2) 100%
          ),
          url("/webflow/hero7.jpg")
        `,
      }}
    >
      <div className="mx-auto flex min-h-[360px] max-w-[1320px] items-center px-4 sm:px-6 lg:min-h-[450px] lg:px-8">
        <div className="max-w-[760px] text-left">
          <span className="inline-flex rounded-[10px] border border-white/10 bg-[#111111]/70 px-4 py-2 text-[13px] font-bold uppercase tracking-[0.18em] text-blue-300 backdrop-blur-md">
            AI Solutions
          </span>

          <h1 className="mt-6 text-[52px] font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-[68px] lg:text-[86px]">
            AI Automation
          </h1>

          <p className="mt-7 max-w-[720px] text-[18px] leading-[1.45] text-white sm:text-[20px] lg:text-[25px]">
            Transform your business with intelligent AI automation. Streamline
            workflows, reduce manual tasks, and boost productivity with smart
            AI-driven solutions.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex min-h-[56px] items-center justify-center rounded-[10px] bg-gradient-to-r from-blue-700 to-cyan-600 px-7 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_10px_35px_rgba(37,99,235,0.30)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}