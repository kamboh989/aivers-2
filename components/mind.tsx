'use client'

import React, { useState } from "react";
import { Instagram, Globe, Linkedin, Facebook } from 'lucide-react';

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Main Card Container */}
        <div className="bg-[#F3F4FF] rounded-[40px] p-10 md:p-16 relative overflow-hidden flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Content & Socials */}
          <div className="lg:w-1/3 relative z-10">
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Got a project? <br /> 
              Let's talk <span className="inline-block">→</span>
            </h2>

            <div className="mt-12">
              <a 
                href="mailto:sales@aiverse.pk" 
                className="text-xl font-semibold text-slate-800 hover:text-blue-600 transition-colors"
              >
                info@aiverse.pk
              </a>
              
              {/* Social Icons */}
             <div className="flex gap-5 mt-8 text-slate-700">
  <a href="https://www.instagram.com/aiverse.pk/" target="_blank" rel="noopener noreferrer">
    <Instagram size={22} className="cursor-pointer hover:text-blue-600 transition-all" />
  </a>
 
  <a href="https://www.linkedin.com/company/aiverse-pk/about/" target="_blank" rel="noopener noreferrer">
    <Linkedin size={22} className="cursor-pointer hover:text-blue-600 transition-all" />
  </a>
  <a href="https://www.facebook.com/people/Aiversepk/61583308357755/" target="_blank" rel="noopener noreferrer">
    <Facebook size={22} className="cursor-pointer hover:text-blue-600 transition-all" />
  </a>
 
</div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-2/3 relative z-10">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <input 
                type="text" 
                name="name"
                placeholder="Your name" 
                className="bg-white border-none rounded-xl p-5 text-gray-700 focus:ring-2 focus:ring-blue-500 shadow-sm"
                required
              />
              
              {/* Email */}
              <input 
                type="email" 
                name="email"
                placeholder="Email address" 
                className="bg-white border-none rounded-xl p-5 text-gray-700 focus:ring-2 focus:ring-blue-500 shadow-sm"
                required
              />
              
              {/* Phone */}
              <input 
                type="text" 
                name="phone"
                placeholder="Phone number" 
                className="bg-white border-none rounded-xl p-5 text-gray-700 focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              
              {/* Budget Dropdown */}
              <select name="budget" className="bg-white border-none rounded-xl p-5 text-gray-400 focus:ring-2 focus:ring-blue-500 shadow-sm appearance-none cursor-pointer">
                <option>What is your budget?</option>
                <option>$1k - $5k</option>
                <option>$5k - $10k</option>
                <option>$10k+</option>
              </select>
              
              {/* Industry */}
              <input 
                type="text" 
                name="industry"
                placeholder="Industry" 
                className="bg-white border-none rounded-xl p-5 text-gray-700 focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              
              {/* Referral */}
              <input 
                type="text" 
                name="referral"
                placeholder="How did you hear about us?" 
                className="bg-white border-none rounded-xl p-5 text-gray-700 focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              
              {/* Project Details */}
              <div className="md:col-span-2">
                <textarea 
                  name="message"
                  rows={4}
                  placeholder="Your project details..." 
                  className="w-full bg-white border-none rounded-xl p-5 text-gray-700 focus:ring-2 focus:ring-blue-500 shadow-sm resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>
              </div>

              {/* Status Messages */}
              {status === "success" && <p className="text-green-400 text-center pt-2">Message sent successfully!</p>}
              {status === "error" && <p className="text-red-400 text-center pt-2">Something went wrong. Try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;