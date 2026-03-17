// components/TeamSection.tsx
import Image from "next/image";
import Link from "next/link";

const features = [
  { title: "Delivery", subtitle: "Sprint-based" },
  { title: "Quality", subtitle: "QA included" },
  { title: "Design", subtitle: "UI/UX support" },
  { title: "Mindset", subtitle: "Product-first" },
];

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#dff1ee] px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              <span className="text-sm font-semibold text-blue-500">
                Our Team
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-[620px] text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#0b1730] sm:text-5xl lg:text-6xl">
              Meet the makers
              <br />
              behind <span className="text-blue-500">AIVERSE</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[620px] text-lg leading-8 text-[#222222] sm:text-[20px]">
              A multidisciplinary team of engineers, designers, and delivery
              specialists. We work in milestones, communicate clearly, and ship
              products that are fast, scalable, and growth-ready.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-400 px-7 py-4 text-lg font-semibold text-white transition hover:opacity-90"
              >
                Talk to Our Team
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-[#cfd5db] bg-white px-7 py-4 text-lg font-semibold text-[#1a2433] transition hover:bg-[#f8f8f8]"
              >
                View Work
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[18px] border border-[#d7dce1] bg-white px-4 py-4 shadow-[0_3px_10px_rgba(0,0,0,0.04)]"
                >
                  <h3 className="text-[18px] font-semibold text-[#1d2736]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[16px] text-[#7a8491]">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[320px] w-full max-w-[560px] overflow-hidden rounded-[30px] sm:h-[420px] lg:h-[500px]">
              <Image
                src="/webflow/team-hero.webp"
                alt="Our team"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}