"use client";

const testimonials = [
  {
    name: "Michael Carter",
    role: "Product Manager",
    review:
      "Their team delivered a fast, scalable platform with excellent communication throughout the project. The final product was polished, reliable, and aligned perfectly with our business goals.",
  },
  {
    name: "Sarah Khan",
    role: "Marketing Director",
    review:
      "We saw a major improvement in our website performance, SEO visibility, and overall user experience. The process was smooth, strategic, and highly professional from start to finish.",
  },
  {
    name: "David Reynolds",
    role: "Startup Founder",
    review:
      "From planning to launch, they handled everything with clarity and speed. Their technical expertise helped us ship faster while maintaining high quality across the product.",
  },
  {
    name: "Emma Roberts",
    role: "Operations Lead",
    review:
      "The custom software solution streamlined our workflow and removed a lot of manual bottlenecks. Their team understood our needs quickly and delivered with precision.",
  },
  {
    name: "James Walker",
    role: "Ecommerce Manager",
    review:
      "Our Shopify and SEO improvements made an immediate impact on conversions and site performance. They combined design, development, and strategy in a very effective way.",
  },
  {
    name: "Ayesha Malik",
    role: "Brand Consultant",
    review:
      "Their creative and technical balance is exceptional. From design quality to development standards, every part of the project felt thoughtfully executed and growth-focused.",
  },
];

export default function TestimonialsSection() {
  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[34px] font-extrabold leading-tight text-slate-950 sm:text-[44px] lg:text-[58px]">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
              businesses
            </span>{" "}
            worldwide
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-[17px] leading-8 text-slate-600 sm:text-[19px]">
            See what our clients say about our web, software, mobile, SEO, and
            digital solutions built for real business growth.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

          <div className="group overflow-hidden">
            <div className="flex w-max animate-[testimonial-marquee_36s_linear_infinite] gap-6 group-hover:[animation-play-state:paused]">
              {loopTestimonials.map((item, index) => (
                <article
                  key={`${item.name}-${index}`}
                  className="w-[300px] shrink-0 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_18px_45px_rgba(37,99,235,0.10)] sm:w-[340px] lg:w-[380px]"
                >
                  <div className="mb-5">
                    <h3 className="text-[22px] font-bold leading-tight text-slate-950">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-[15px] font-medium text-cyan-600">
                      {item.role}
                    </p>
                  </div>

                  <p className="text-[16px] leading-8 text-slate-700 sm:text-[17px]">
                    “{item.review}”
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}