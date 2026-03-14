"use client";

import {
  Box,
  Cuboid,
  Sparkles,
  Layers,
  Film,
  Image as ImageIcon,
  Monitor,
  Database,
} from "lucide-react";

const services = [
  {
    title: "3D Modeling",
    description:
      "Create detailed and high-quality 3D models using Blender for products, environments, characters, and architectural scenes with clean topology and professional structure.",
    icon: Box,
  },
  {
    title: "Product Visualization",
    description:
      "Showcase your products with stunning 3D visualizations and photorealistic renders that highlight materials, lighting, and design for marketing and presentations.",
    icon: Cuboid,
  },
  {
    title: "3D Animation",
    description:
      "Bring your ideas to life with smooth and engaging 3D animations for product demos, explainer videos, advertisements, and storytelling visuals.",
    icon: Film,
  },
  {
    title: "Lighting & Rendering",
    description:
      "Using Blender’s Cycles and Eevee engines, we craft cinematic lighting and realistic rendering to produce high-quality visuals for digital media and marketing.",
    icon: Sparkles,
  },
  {
    title: "Environment Design",
    description:
      "Design immersive 3D environments and scenes for games, videos, and digital experiences with realistic materials, textures, and lighting.",
    icon: Layers,
  },
  {
    title: "Texture & Material Creation",
    description:
      "Develop realistic textures and materials to enhance the look and feel of your 3D models, ensuring depth, detail, and visual authenticity.",
    icon: ImageIcon,
  },
  {
    title: "3D Visualization for Marketing",
    description:
      "Create eye-catching visuals and renders for websites, social media, and advertising campaigns that help brands present their products creatively.",
    icon: Monitor,
  },
  {
    title: "Optimized 3D Workflow",
    description:
      "Efficient Blender workflows ensure optimized models, organized scenes, and high-performance assets suitable for production, games, and animation pipelines.",
    icon: Database,
  },
];

export default function WebflowExpertServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {/* top line */}
        <div className="mx-auto mb-10 h-px w-full max-w-[860px] bg-black/10" />

        {/* heading */}
        <div className="flex justify-center">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Our Blender 3D Services
          </h1>
        </div>

        <p className="mx-auto mt-5 max-w-[620px] text-center text-[16px] leading-7 text-black/85 sm:text-[17px]">
          From 3D modeling to cinematic rendering, we use Blender to create
          stunning visuals, animations, and digital experiences that bring
          creative ideas to life.
        </p>

        {/* services grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group h-full rounded-[24px] border border-blue-200 bg-[linear-gradient(180deg,#f9fbff_0%,#eef5ff_55%,#e9f2ff_100%)] p-6 text-center shadow-[0_10px_30px_rgba(37,99,235,0.08)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-blue-300 hover:shadow-[0_18px_40px_rgba(37,99,235,0.16)] sm:p-7"
              >
                <div className="mb-5 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-[0_8px_20px_rgba(37,99,235,0.10)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_28px_rgba(37,99,235,0.16)]">
                    <Icon className="h-7 w-7 text-blue-600" strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="text-[22px] font-semibold leading-[1.25] tracking-[-0.02em] text-black">
                  {item.title}
                </h3>

                <p className="mx-auto mt-4 max-w-[250px] text-[15px] leading-7 text-black/75">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}