"use client";

import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="min-w-[180px]">
      <h3 className="text-[22px] font-extrabold text-white">{title}</h3>

      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[17px] font-medium text-blue-100/90 transition-colors duration-300 hover:text-blue-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialColumn() {
  return (
    <div className="min-w-[220px]">
      <h3 className="text-[22px] font-extrabold text-white">Social Links</h3>

      <ul className="mt-6 space-y-4">
        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="group inline-flex items-center gap-3 text-[17px] font-medium text-blue-100/90 transition-colors duration-300 hover:text-blue-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-blue-50 shadow-[0_10px_24px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-blue-400/15 group-hover:text-blue-300">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function AiverseFooter() {
  const logoUrl = "/ai-verse.png";

  return (
    <footer className="relative overflow-hidden bg-[#03132d] pt-16 text-white sm:pt-20 lg:pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#03132d_0%,#07214a_45%,#0d3d78_100%)]" />
        <div className="absolute left-[-120px] top-[-40px] h-[320px] w-[320px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[12%] h-[280px] w-[280px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-80px] top-[20%] h-[340px] w-[340px] rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(96,165,250,0.14),transparent_22%),radial-gradient(circle_at_85%_20%,rgba(56,189,248,0.10),transparent_20%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.08),transparent_18%)]" />

        {[
          { left: "8%", top: "18%", size: 3, delay: "0s", duration: "8s" },
          { left: "22%", top: "10%", size: 2, delay: "1s", duration: "7s" },
          { left: "31%", top: "52%", size: 4, delay: "2s", duration: "10s" },
          { left: "49%", top: "22%", size: 2, delay: "0.5s", duration: "9s" },
          { left: "58%", top: "66%", size: 3, delay: "1.6s", duration: "8.5s" },
          { left: "70%", top: "14%", size: 2, delay: "2.5s", duration: "7.5s" },
          { left: "79%", top: "48%", size: 5, delay: "0.8s", duration: "11s" },
          { left: "90%", top: "24%", size: 2, delay: "1.2s", duration: "8s" },
          { left: "12%", top: "78%", size: 2, delay: "0.3s", duration: "9.5s" },
          { left: "27%", top: "86%", size: 5, delay: "2.2s", duration: "12s" },
          { left: "46%", top: "78%", size: 2, delay: "1.1s", duration: "9s" },
          { left: "63%", top: "84%", size: 3, delay: "1.8s", duration: "10s" },
          { left: "92%", top: "76%", size: 4, delay: "0.6s", duration: "11s" },
        ].map((star, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-blue-300/60 shadow-[0_0_12px_rgba(96,165,250,0.55)] animate-[footerFloat_10s_ease-in-out_infinite]"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}

        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:90px_90px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/12 pb-12 sm:pb-14 lg:grid-cols-[minmax(0,1fr)_220px_240px] lg:items-start lg:gap-16 lg:pb-16">
          <div className="max-w-[430px] text-left">
            <Link href="/" className="inline-block">
              <img
                src={logoUrl}
                alt="Aiverse logo"
                className="block h-[80px] w-[110px] object-contain object-left"
              />
            </Link>

            <p className="mt-7 text-[18px] leading-8 text-blue-50/85">
              Mobile app and website development for startups and businesses.
              We build fast, scalable digital products with modern UI/UX and
              reliable long-term support.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <FooterColumn title="Company" links={companyLinks} />
          </div>

          <div className="lg:justify-self-end">
            <SocialColumn />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:py-8 lg:flex-row lg:text-left">
          <p className="text-[15px] text-blue-100/85">
            Copyright {new Date().getFullYear()} Aiverse. All Rights Reserved.
          </p>

          <p className="text-[14px] text-blue-200/55">
            Built with modern design, performance, and reliable support.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes footerFloat {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.45;
          }
          50% {
            transform: translateY(-10px) scale(1.15);
            opacity: 1;
          }
        }
      `}</style>
    </footer>
  );
}