'use client'

import React, { useState } from "react";
import type { FormEvent } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/movbwllw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="w-full bg-white font-sans">
      {/* 1. Header Section (White Background) */}
      <div className="max-w-[1200px] mx-auto pt-20 pb-12 px-6 text-center">
        <span className="bg-[#f3f4f6] text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest text-gray-500 border border-gray-200">
          Contact Us
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-6 text-[#111827]">
          Let's Discuss Your Project
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-[16px]">
          Fill out the form below and someone from our team will reach out to find a time to connect with you.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
          <div className="text-center">
            <p className="text-gray-400 text-xs mb-1">Email us at:</p>
            <a href="mailto:sales@fillinxsolutions.com" className="font-bold text-gray-900 border-b border-gray-300 pb-0.5 hover:text-blue-600 transition-colors">
              info@aiverse.pk
            </a>
          </div>
          <div className="h-8 w-[1px] bg-gray-200 hidden md:block rotate-[20deg]"></div>
          <div className="text-center">
            <p className="text-gray-400 text-xs mb-1">For more questions:</p>
            <a href="/faq" className="font-bold text-gray-900 border-b border-gray-300 pb-0.5 hover:text-blue-600 transition-colors">
              Check our FAQ page
            </a>
          </div>
        </div>
      </div>

      {/* 2. Blue Banner & Form Wrapper */}
      <div className="relative mt-12">
        {/* Blue Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-[300px] md:h-[260px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800"></div>

        <div className="relative max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pb-20">
          {/* Left Side Content */}
          <div className="pt-16 lg:pt-20 text-white">
            <span className="bg-white/20 text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest text-white border border-white/30">
              Contact Us
            </span>
            <h3 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
              Start Your Project Today
            </h3>
            <p className="text-gray-600 mt-6 text-[16px] max-w-md">
              We're happy to answer any questions you may have and help you determine which of our services best fit your needs.
            </p>

            <div className="mt-12">
              <p className="font-bold text-lg mb-6 text-gray-600">What happens next?</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { n: '1', t: 'We Schedule a call at your convenience' },
                  { n: '2', t: 'We do a discovery and consulting meeting' },
                  { n: '3', t: 'We prepare a proposal' }
                ].map((step) => (
                  <div key={step.n} className="flex gap-3 items-start">
                    <span className="text-2xl font-bold text-gray-600 leading-none">{step.n}</span>
                    <p className="text-[13px] leading-snug text-gray-600 font-medium bg-white/5 p-2 rounded">{step.t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="relative mt-20 z-30">
            <div className="bg-white rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-10 border border-gray-100">
              <h4 className="text-[20px] font-bold text-[#111827] text-center mb-8">
                Schedule a Free Consultation
              </h4>
              <div className="w-8 h-1 bg-blue-600 mx-auto -mt-6 mb-8"></div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 uppercase mb-2 block">First Name <span className="text-red-500">*</span></label>
                    <input type="text" name="name" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-blue-500 outline-none text-sm" required />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 uppercase mb-2 block">Email <span className="text-red-500">*</span></label>
                    <input type="email" name="email" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-blue-500 outline-none text-sm" required />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase mb-2 block">Phone <span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" placeholder="+1(201)555-0123" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-blue-500 outline-none text-sm" required />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase mb-2 block">Project Details <span className="text-red-500">*</span></label>
                  <textarea name="message" rows={4} placeholder="Your project details" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-blue-500 outline-none text-sm resize-none" required></textarea>
                </div>

                <button type="submit" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded shadow-md transition-all text-xs uppercase tracking-widest">
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>

                {/* Status Messages */}
                {status === "success" && <p className="text-green-400 text-center pt-2">Message sent successfully!</p>}
                {status === "error" && <p className="text-red-400 text-center pt-2">Something went wrong. Try again.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}