"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const TestimonialSection = () => {
  const reviews = [
    { name: "John Doe", company: "TechFlow Solutions", text: "aiverse.pk delivered our Next.js project ahead of schedule. Their attention to detail in UI/UX and performance optimization is unmatched in the industry." },
    { name: "Sarah Malik", company: "Global Retail", text: "The custom Shopify integration they built for us transformed our business. Instant response times and professional communication throughout the project." },
    { name: "Alex Rivera", company: "FinTech Hub", text: "Hands down the best experience! They completely transformed our legacy system into a modern Node.js powerhouse. 10/10 recommendation!" },
    { name: "Imran Khan", company: "EduSmart", text: "The mobile app they developed is flawless. User engagement increased by 40% within the first month. Truly a visionary team." },
    { name: "David Chen", company: "Nexus AI", text: "Expertise in AI and automation is rare, but aiverse.pk has it. They simplified our complex data workflows with elegant software solutions." },
    { name: "Sophia White", company: "CloudScale", text: "I am thrilled with the website designed for me! The process was smooth, with excellent communication. The team is highly skilled in React." },
    { name: "Michael Ross", company: "BuildIt Corp", text: "Professional, effective, and reliable. They handled our enterprise migration with zero downtime. Best IT partner we've had in 8 years." },
    { name: "Elena Rodriguez", company: "EcoEnergy", text: "Creative and technical brilliance combined. Their web solutions helped us rank #1 on Google for our primary keywords." }
  ];

  return (
    <section className="bg-black text-white py-20 px-6 relative overflow-hidden">
      {/* Top Header */}
      <div className="container mx-auto text-center mb-16">
        <span className="bg-[#1a1a1a] text-blue-500 text-[10px] font-bold tracking-[0.2em] px-3 py-1.5 rounded uppercase border border-gray-800">
          Our Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">See What Our Clients Say About Us</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Over the last 8 years, aiverse.pk has been driven by our passion for helping clients achieve their goals through cutting-edge IT solutions.
        </p>
      </div>

      {/* The Styled Blue Divider Line with Center Label */}
      <div className="relative w-full mb-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-4 border-blue-600 rounded-full"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-blue-600 text-white px-10 py-3 rounded-t-2xl font-bold text-sm">
            Clients Reviews
          </div>
        </div>
        {/* Curvy Downward Accents (Recreating the visual style) */}
        <div className="flex justify-between absolute w-full px-10 md:px-40 -bottom-6">
            <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
            <div className="w-1 h-12 bg-blue-600 rounded-full translate-x-1/2"></div>
            <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
        </div>
      </div>

      {/* Slider Container */}
      <div className="container mx-auto relative px-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#111] p-8 rounded-3xl border border-gray-800 h-[320px] flex flex-col justify-between hover:border-blue-500 transition-all duration-300">
                <div>
                  <div className="flex text-blue-500 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-300 text-sm italic leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="text-blue-500 font-bold">{item.name}</h4>
                  <span className="text-xs text-gray-500">{item.company}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all shadow-xl">
          <ChevronLeft size={24} />
        </button>
        <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all shadow-xl">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;