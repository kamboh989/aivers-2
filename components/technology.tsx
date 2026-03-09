"use client";

import type { IconType } from "react-icons";
import {
  SiWordpress,
  SiFlutter,
  SiShopify,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiApple,
  SiAndroid,
  SiJavascript,
} from "react-icons/si";
import { FaMagento } from "react-icons/fa";

const topRow: { name: string; icon: IconType }[] = [
  { name: "WORDPRESS", icon: SiWordpress },
  { name: "SHOPIFY", icon: SiShopify },
  { name: "MERN STACK", icon: SiMongodb },
  { name: "REACT JS", icon: SiReact },
  { name: "NODE JS", icon: SiNodedotjs },
  { name: "ANDROID", icon: SiAndroid },
];

const bottomRow: { name: string; icon: IconType }[] = [
  { name: "FLUTTER", icon: SiFlutter },
  { name: "NEXT JS", icon: SiNextdotjs },
  { name: "IOS", icon: SiApple },
  { name: "JAVASCRIPT", icon: SiJavascript },
  { name: "WORDPRESS", icon: SiWordpress },
  { name: "MAGENTO", icon: FaMagento },
];

function TechStrip({
  items,
  reverse = false,
}: {
  items: { name: string; icon: IconType }[];
  reverse?: boolean;
}) {
  const loopItems = [...items, ...items];

  return (
    <div
      className={`flex w-max items-center gap-8 sm:gap-10 lg:gap-12 ${
        reverse
          ? "animate-[techMarqueeReverse_30s_linear_infinite]"
          : "animate-[techMarquee_30s_linear_infinite]"
      }`}
    >
      {loopItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={`${item.name}-${index}`}
            className="flex min-w-[105px] shrink-0 flex-col items-center justify-center gap-1.5 sm:min-w-[125px] lg:min-w-[145px]"
          >
            <Icon className="h-5 w-5 text-slate-800 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
            <p className="text-center text-[10px] font-extrabold tracking-[0.04em] text-slate-800 sm:text-[11px] lg:text-[12px]">
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default function TechnologiesSection() {
  return (
    <section className="overflow-hidden bg-white py-28 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-[34px] font-extrabold leading-tight text-slate-950 sm:text-[46px] lg:text-[64px]">
            <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
              Technologies
            </span>{" "}
            We Work With
          </h2>

          <p className="mx-auto mt-5 max-w-[920px] text-[17px] leading-8 text-slate-700 sm:text-[20px]">
            We use modern frameworks and proven tooling to build fast websites,
            scalable mobile apps, and growth systems that improve visibility
            through SEO and ASO.
          </p>
        </div>
      </div>

      <div className="relative  h-[460px] overflow-hidden  sm:h-[660px] lg:h-[560px]">
        {/* back strip */}
        <div className="absolute left-1/2 top-1/2 z-10 w-[135vw] min-w-[920px] -translate-x-1/2 -translate-y-1/2 rotate-[7deg] sm:w-[128vw] sm:min-w-[1040px] lg:w-[118vw] lg:min-w-[1180px]">
          <div className="overflow-hidden bg-[#eceef0] py-3 sm:py-4 lg:py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
            <TechStrip items={topRow} />
          </div>
        </div>

        {/* front strip */}
        <div className="absolute left-1/2 top-1/2 z-20 w-[135vw] min-w-[920px] -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] sm:w-[128vw] sm:min-w-[1040px] lg:w-[118vw] lg:min-w-[1180px]">
          <div className="overflow-hidden bg-gradient-to-r from-[#e3f1f0] via-[#d9e9e8] to-[#e3f1f0] py-3 sm:py-4 lg:py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_8px_24px_rgba(0,0,0,0.03)]">
            <TechStrip items={bottomRow} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}