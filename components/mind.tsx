import React from 'react';
import { Instagram, Globe, Linkedin, Facebook } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Main Card Container */}
        <div className="bg-[#F3F4FF] rounded-[40px] p-10 md:p-16 relative overflow-hidden flex flex-col lg:flex-row gap-16">
          
          {/* Background Decorative Dots Pattern */}
          <div className="absolute top-0 left-0 w-64 h-64 opacity-10 pointer-events-none">
            <div className="grid grid-cols-6 gap-4 p-8">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-indigo-600 rotate-45"></div>
              ))}
            </div>
          </div>

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
                sales@aiverse.pk
              </a>
              
              {/* Social Icons */}
              <div className="flex gap-5 mt-8 text-slate-700">
                <Instagram size={22} className="cursor-pointer hover:text-blue-600 transition-all" />
                <Globe size={22} className="cursor-pointer hover:text-blue-600 transition-all" />
                <Linkedin size={22} className="cursor-pointer hover:text-blue-600 transition-all" />
                <Facebook size={22} className="cursor-pointer hover:text-blue-600 transition-all" />
                <span className="font-bold text-lg cursor-pointer hover:text-blue-600">Bē</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-2/3 relative z-10">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <input 
                type="text" 
                placeholder="Your name" 
                className="bg-white border-none rounded-xl p-5 text-gray-700 focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              
              {/* Email */}
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white border-none rounded-xl p-5 text-gray-700 focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              
              {/* Phone */}
              <input 
                type="text" 
                placeholder="Phone number" 
                className="bg-white border-none rounded-xl p-5 text-gray-700 focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              
              {/* Budget Dropdown */}
              <select className="bg-white border-none rounded-xl p-5 text-gray-400 focus:ring-2 focus:ring-blue-500 shadow-sm appearance-none cursor-pointer">
                <option>What is your budget?</option>
                <option>$1k - $5k</option>
                <option>$5k - $10k</option>
                <option>$10k+</option>
              </select>
              
              {/* Industry */}
              <input 
                type="text" 
                placeholder="Industry" 
                className="bg-white border-none rounded-xl p-5 text-gray-700 focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              
              {/* Referral */}
              <input 
                type="text" 
                placeholder="How did you hear about us?" 
                className="bg-white border-none rounded-xl p-5 text-gray-700 focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              
              {/* Project Details */}
              <div className="md:col-span-2">
                <textarea 
                   rows={4}
                  placeholder="Your project details..." 
                  className="w-full bg-white border-none rounded-xl p-5 text-gray-700 focus:ring-2 focus:ring-blue-500 shadow-sm resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                >
                  Schedule Free Consultation
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;