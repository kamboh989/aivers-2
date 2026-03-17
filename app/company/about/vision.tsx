// components/OurVisionSection.tsx
import Image from "next/image";

export default function OurVisionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-[620px]">
            <h2 className="text-4xl font-extrabold leading-tight text-black sm:text-5xl md:text-6xl">
              Our <span className="text-blue-500">Vision</span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#222222] sm:text-xl">
              Our vision is to become a trusted global technology partner, known
              for innovation, creativity, and excellence. We aim to shape the
              future of digital experiences by continuously evolving, adopting
              cutting-edge technologies, and delivering solutions that help
              brands grow, stand out, and lead in a digital-first world.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[320px] w-full max-w-[560px] overflow-hidden rounded-[30px] sm:h-[420px] lg:h-[470px]">
              <Image
                src="/webflow/vision.webp" // public folder me image rakho
                alt="Our vision team discussion"
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