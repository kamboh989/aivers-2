// components/OurMissionSection.tsx
import Image from "next/image";

export default function OurMissionSection() {
  return (
    <section className=" py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-[320px] w-full max-w-[590px] overflow-hidden rounded-[28px] sm:h-[420px] lg:h-[470px]">
              <Image
                src="/webflow/mission.webp" // image public folder me rakho
                alt="Our mission team meeting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="max-w-[620px]">
            <h2 className="text-4xl font-extrabold leading-tight text-black sm:text-5xl md:text-6xl">
              Our <span className="text-blue-500">Mission</span>
            </h2>

            <p className="mt-6 text-lg leading-9 text-[#222222] sm:text-xl">
              Our mission is to empower businesses by transforming ideas into
              reliable, scalable, and impactful digital solutions. We strive to
              build high-quality web and mobile applications that solve real
              problems, enhance user experiences, and drive measurable business
              growth through smart technology and thoughtful design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}