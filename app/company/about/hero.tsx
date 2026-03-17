// components/Hero.js
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-transparent py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            About
          </h2>

          <h1 className="text-4xl md:text-5xl font-extrabold 
                        text-black">
            A product-focused team for websites & mobile apps
          </h1>

          <p className="text-gray-600 text-lg">
            We help founders and teams go from idea to launch with strategy, UI/UX, engineering, and QA — built for speed, Core Web Vitals, and long-term maintainability.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold 
                         hover:bg-blue-700 transition ease-out duration-300 shadow-md"
            >
              Start a Project
            </a>
            
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="p-4 rounded-lg border border-gray-200 shadow-sm hover:border-blue-500 transition">
              <h3 className="font-semibold text-gray-800">Delivery</h3>
              <p className="text-sm text-gray-500">Clear milestones</p>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 shadow-sm hover:border-blue-500 transition">
              <h3 className="font-semibold text-gray-800">Design</h3>
              <p className="text-sm text-gray-500">Practical UI/UX</p>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 shadow-sm hover:border-blue-500 transition">
              <h3 className="font-semibold text-gray-800">Engineering</h3>
              <p className="text-sm text-gray-500">Clean & scalable</p>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 shadow-sm hover:border-blue-500 transition">
              <h3 className="font-semibold text-gray-800">Quality</h3>
              <p className="text-sm text-gray-500">Performance-first</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/webflow/about-hero.webp" // <-- replace with your image in /public
            alt="Team Meeting"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
