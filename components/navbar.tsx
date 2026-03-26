"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Smartphone,
  ShoppingBag,
  Megaphone,
  Code2,
} from "lucide-react";
import { FaAws, FaGoogle, FaMicrosoft, FaSalesforce } from 'react-icons/fa';

const solutionServices = [
  {
    title: "Webflow Design & Development",
    href: "/services/webflow-development",
  },
  {
    title: "WordPress Development",
    href: "/services/wordpress-development",
  },
  {
    title: "UI/UX for Mobile Apps",
    href: "/services/ui-ux-mobile-apps",
  },
  {
    title: "Creative Branding",
    href: "/services/creative-branding",
  },
  {
    title: "SEO",
    href: "/services/seo",
  },
  {
    title: "Blender",
    href: "/services/blender",
  },
  {
    title: "AI Automation",
    href: "/services/automation",
  },
];

const businessChallenges = [
  {
    title: "Shopify Design & Development",
    icon: ShoppingBag,
    href: "/solutions/shopify-design-development",
  },
  {
    title: "Mobile Apps Development",
    icon: Smartphone,
    href: "/solutions/mobile-apps-development",
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    href: "/solutions/digital-marketing",
  },
  {
    title: "Full Stack Development",
    icon: Code2,
    href: "/solutions/full-stack-development",
  },
];

const companyLinks = [
  { title: "About Us", href: "/company/about" },
  { title: "Team", href: "/company/team" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blogs", href: "/company/blogs" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<
    null | "solutions" | "company"
  >(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<
    null | "solutions" | "company"
  >(null);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!navRef.current?.contains(e.target as Node)) {
        setOpenDesktopMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpenDesktopMenu(null);
    setOpenMobileMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMobileMenu(null);
  };

  const closeDesktopMenu = () => {
    setOpenDesktopMenu(null);
  };

  const closeAllMenus = () => {
    setOpenDesktopMenu(null);
    setOpenMobileMenu(null);
    setMobileOpen(false);
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0" onClick={closeAllMenus}>
          <div className="flex items-center gap-3">
            <Image
              src="/ai-verse.png"
              alt="Aiverse"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
            <div className="leading-none">
              <p className="text-[18px] font-bold text-neutral-900">
                AIVERSE.PK
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          <Link
            href="/"
            onClick={closeAllMenus}
            className="font-medium text-blue-700 transition-all duration-300 ease-out hover:text-blue-800"
          >
            Home
          </Link>

          {/* Solutions */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDesktopMenu("solutions")}
            onMouseLeave={() => setOpenDesktopMenu(null)}
          >
            <button className="group flex items-center gap-1 text-[17px] font-medium text-neutral-900 transition-all duration-300 ease-out hover:text-blue-700">
              Solutions
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ease-out ${
                  openDesktopMenu === "solutions"
                    ? "rotate-180 text-blue-700"
                    : ""
                }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full mt-5 w-[920px] -translate-x-1/2 rounded-[28px] border border-blue-100 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] transition-all duration-300 ease-out ${
                openDesktopMenu === "solutions"
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-4 opacity-0"
              }`}
            >
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-4">
                  <h3 className="mb-6 text-[18px] font-semibold text-neutral-950">
                    Services
                  </h3>

                  <div className="space-y-4">
                    {solutionServices.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={closeDesktopMenu}
                        className="block text-[17px] text-neutral-800 transition-all duration-300 ease-out hover:translate-x-1 hover:text-blue-700"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="col-span-8">
                  <h3 className="mb-6 text-[18px] font-semibold text-neutral-950">
                    Business Challenges
                  </h3>

                  <div className="grid grid-cols-2 gap-5">
                    {businessChallenges.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={closeDesktopMenu}
                          className="group rounded-[20px] border border-neutral-200 bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(37,99,235,0.10)]"
                        >
                          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 ease-out group-hover:bg-gradient-to-r group-hover:from-blue-700/10 group-hover:to-cyan-400/10">
                            <Icon className="h-6 w-6 text-blue-700" />
                          </div>

                          <h4 className="max-w-[180px] text-[18px] font-medium leading-8 text-neutral-900">
                            {item.title}
                          </h4>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDesktopMenu("company")}
            onMouseLeave={() => setOpenDesktopMenu(null)}
          >
            <button className="group flex items-center gap-1 text-[17px] font-medium text-neutral-900 transition-all duration-300 ease-out hover:text-blue-700">
              Company
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ease-out ${
                  openDesktopMenu === "company"
                    ? "rotate-180 text-blue-700"
                    : ""
                }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full mt-5 w-[980px] -translate-x-1/2 overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] transition-all duration-300 ease-out ${
                openDesktopMenu === "company"
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-4 opacity-0"
              }`}
            >
              <div className="grid grid-cols-12">
                <div className="col-span-5 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-400 p-10 text-white">
                  <h3 className="max-w-[280px] text-5xl font-semibold leading-tight">
                    Simplifying IT for a complex world.
                  </h3>
                </div>

                <div className="col-span-4 p-10">
                  <div className="space-y-5">
                    {companyLinks.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={closeDesktopMenu}
                        className="block text-[18px] font-medium text-neutral-900 transition-all duration-300 ease-out hover:translate-x-1 hover:text-blue-700"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="col-span-3 border-l border-neutral-100 p-10">
                 <div className="space-y-5 text-[18px] text-neutral-900">
  <p className="font-medium transition-all duration-300 ease-out hover:text-blue-700">
    <FaAws className="inline-block mr-2" />
    AWS
  </p>
  <p className="font-medium transition-all duration-300 ease-out hover:text-blue-700">
    <FaGoogle className="inline-block mr-2" />
    Google Cloud
  </p>
  <p className="font-medium transition-all duration-300 ease-out hover:text-blue-700">
    <FaMicrosoft className="inline-block mr-2" />
    Microsoft
  </p>
  <p className="font-medium transition-all duration-300 ease-out hover:text-blue-700">
    <FaSalesforce className="inline-block mr-2" />
    Salesforce
  </p>
</div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/portfolio"
            onClick={closeAllMenus}
            className="font-medium text-neutral-900 transition-all duration-300 ease-out hover:text-blue-700"
          >
            Portfolio
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            onClick={closeAllMenus}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 px-6 py-3 text-[16px] font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 text-neutral-900 transition-all duration-300 ease-out hover:border-blue-200 hover:bg-blue-50 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-black/5 bg-white transition-all duration-300 ease-out lg:hidden ${
          mobileOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1320px] px-4 py-4 sm:px-6">
          <div className="space-y-2">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block rounded-xl px-4 py-3 text-base font-medium text-neutral-900 transition-all duration-300 ease-out hover:bg-blue-50 hover:text-blue-700"
            >
              Home
            </Link>

            {/* Mobile Solutions */}
            <div className="rounded-2xl border border-neutral-200">
              <button
                onClick={() =>
                  setOpenMobileMenu((prev) =>
                    prev === "solutions" ? null : "solutions"
                  )
                }
                className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium text-neutral-900"
              >
                Solutions
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ease-out ${
                    openMobileMenu === "solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openMobileMenu === "solutions"
                    ? "max-h-[700px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4">
                  <h4 className="mb-3 mt-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
                    Services
                  </h4>

                  <div className="space-y-2">
                    {solutionServices.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block rounded-lg px-2 py-2 text-neutral-700 transition-all duration-300 ease-out hover:bg-blue-50 hover:text-blue-700"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>

                  <h4 className="mb-3 mt-5 text-sm font-semibold uppercase tracking-wide text-blue-700">
                    Business Challenges
                  </h4>

                  <div className="grid grid-cols-1 gap-3">
                    {businessChallenges.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="rounded-2xl border border-neutral-200 p-4 transition-all duration-300 ease-out hover:border-blue-200 hover:bg-blue-50"
                        >
                          <Icon className="mb-3 h-5 w-5 text-blue-700" />
                          <span className="text-sm font-medium text-neutral-900">
                            {item.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Company */}
            <div className="rounded-2xl border border-neutral-200">
              <button
                onClick={() =>
                  setOpenMobileMenu((prev) =>
                    prev === "company" ? null : "company"
                  )
                }
                className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium text-neutral-900"
              >
                Company
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ease-out ${
                    openMobileMenu === "company" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openMobileMenu === "company"
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4">
                  <div className="mb-4 rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-500 p-5 text-white">
                    <p className="text-2xl font-semibold leading-tight">
                      Simplifying IT for a complex world.
                    </p>
                  </div>

                  <div className="space-y-2">
                    {companyLinks.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block rounded-lg px-2 py-2 text-neutral-800 transition-all duration-300 ease-out hover:bg-blue-50 hover:text-blue-700"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/career"
              onClick={closeMobileMenu}
              className="block rounded-xl px-4 py-3 text-base font-medium text-neutral-900 transition-all duration-300 ease-out hover:bg-blue-50 hover:text-blue-700"
            >
              Career
            </Link>

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 px-5 py-3 text-base font-semibold text-white transition-all duration-300 ease-out hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}  