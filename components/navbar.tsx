"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/#services" },
  { title: "About", href: "/about" },
  { title: "Blogs", href: "/blogs" },
  { title: "Career", href: "/career" },
   { title: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
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
          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="relative text-[17px] font-medium text-neutral-900 transition-all duration-300 ease-out hover:text-blue-700"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
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
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1320px] px-4 py-4 sm:px-6">
          <div className="space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-neutral-900 transition-all duration-300 ease-out hover:bg-blue-50 hover:text-blue-700"
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
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