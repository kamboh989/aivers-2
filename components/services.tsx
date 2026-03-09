import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  MonitorSmartphone,
  PenTool,
  Megaphone,
  Search,
  Gamepad2,
  Cuboid,
  Globe,
  Bot,
  ShoppingBag,
  Boxes,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, high-performance websites built for speed, scalability, and user experience.",
    href: "/services/web-development",
    image:
      "/web.webp",
    icon: Code2,
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions designed to streamline operations and support business growth.",
    href: "/services/software-development",
    image:
      "/software.webp",
    icon: MonitorSmartphone,
  },
  {
    title: "Graphic Design",
    description:
      "Creative branding, social assets, and visual design that makes your business stand out.",
    href: "/services/graphic-design",
    image:
      "/graphic.jpg",
    icon: PenTool,
  },
  {
    title: "Digital Marketing",
    description:
      "Result-driven marketing campaigns to increase reach, engagement, and conversions.",
    href: "/services/digital-marketing",
    image:
      "/digital.jpg",
    icon: Megaphone,
  },
  {
    title: "SEO Services",
    description:
      "Search-focused strategies to improve rankings, traffic, and long-term online visibility.",
    href: "/services/seo",
    image:
      "/seo.webp",
    icon: Search,
  },
  {
    title: "Game Development",
    description:
      "Interactive and immersive game experiences built with creativity, performance, and polish.",
    href: "/services/game-development",
    image:
      "/game.jpg",
    icon: Gamepad2,
  },
  {
    title: "3D Animation",
    description:
      "High-quality 3D animation and motion visuals for products, ads, and digital experiences.",
    href: "/services/3d-animation",
    image:
      "/3d.jpg",
    icon: Cuboid,
  },
  {
    title: "WordPress Development",
    description:
      "Custom WordPress websites with flexible CMS, responsive layouts, and strong performance.",
    href: "/services/wordpress-development",
    image:
      "/mobile.webp",
    icon: Globe,
  },
  {
    title: "AI Automation",
    description:
      "Smart automations that reduce manual work and improve productivity using AI-powered workflows.",
    href: "/services/ai-automation",
    image:
      "/ai.jpg",
    icon: Bot,
  },
  {
    title: "Shopify Development",
    description:
      "Conversion-focused Shopify stores designed for seamless shopping and scalable growth.",
    href: "/services/shopify-development",
    image:
      "/shopify.jpg",
    icon: ShoppingBag,
  },
  {
    title: "Blender Design",
    description:
      "Professional Blender modeling, rendering, and visuals for products and creative projects.",
    href: "/services/blender-design",
    image:
      "/blender.jpg",
    icon: Boxes,
  },
];

export default function ServicesSection() {
  return (
    <section className=" py-16 sm:py-20 lg:py-24" id="services">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-[760px] text-center sm:mb-14">
          <h2 className="text-[34px] font-extrabold leading-tight text-slate-950 sm:text-[42px] lg:text-[52px]">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[720px] text-[16px] leading-7 text-slate-700 sm:text-[18px]">
            Explore our core services including web development, software
            development, graphic design, digital marketing, SEO, AI automation,
            and more—built to help your business grow faster.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group block"
              >
                <article className="overflow-hidden rounded-[28px] bg-[#dff2f1] p-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                 <div className="relative h-[230px] overflow-hidden rounded-[22px] sm:h-[250px]">
  <Image
    src={service.image}
    alt={service.title}
    fill
    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#071b42]/92 via-[#071b42]/82 to-[#071b42]/15 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />

  <div className="absolute inset-y-0 left-0 flex w-[72%] items-center">
    <div className="h-full w-full rounded-r-[120px] bg-[#071b42]/88 px-6 py-7 opacity-0 -translate-x-8 transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:px-7">
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10">
          <Icon className="h-5 w-5 text-cyan-400" />
        </span>

        <h3 className="text-[24px] font-bold leading-tight text-cyan-400 sm:text-[28px]">
          {service.title}
        </h3>
      </div>

      <p className="max-w-[280px] text-[16px] leading-7 text-white/90 sm:text-[17px]">
        {service.description}
      </p>
    </div>
  </div>
</div>
                  <div className="flex items-center gap-3 px-2 pb-2 pt-5">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#071b42] text-white transition-all duration-300 ease-out group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-cyan-500">
                      <Icon className="h-4 w-4" />
                    </span>

                    <h3 className="text-[20px] font-semibold text-slate-950 transition-all duration-300 ease-out group-hover:text-blue-700">
                      {service.title}
                    </h3>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}