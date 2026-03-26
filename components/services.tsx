'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Code2, Atom, Server, 
  Wordpress, ShoppingBag, LayoutTemplate, 
  Smartphone, Tablet, Apple, 
  TrendingUp, Megaphone, Search,
  Palette, PenTool, Layout
} from 'lucide-react';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('Custom');

  // Har category ke liye real data aur icons
  const servicesData = {
    'Custom': [
    { 
        title: 'Next.js', 
        desc: 'We build high-performance, SEO-friendly React applications using Next.js for seamless user experiences and fast loading.',
        // Next.js Official Icon
        icon: (
          <div className="relative w-14 h-14">
            <Image 
              src="https://cdn.worldvectorlogo.com/logos/next-js.svg" 
              alt="Next.js" 
              fill 
              className="object-contain"
            />
          </div>
        )
      },
      { 
        title: 'React', 
        desc: 'We are skilled React developers crafting responsive, dynamic websites with modern UI/UX design.',
        icon: <Atom className="w-12 h-12 text-blue-500" />
      },
      { 
        title: 'Node JS', 
        desc: 'We create dynamic websites using Node.js, ensuring performance, scalability, and modern standards.',
        icon: <Server className="w-12 h-12 text-green-600" />
      },
    ],
    'CMS': [
      { 
        title: 'WordPress', 
        desc: 'Professional WordPress development for blogs, business sites, and custom themes.',
        icon: <img src="https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" className="w-12 h-12" alt="WP" />
      },
      { 
        title: 'Shopify', 
        desc: 'High-converting Shopify stores with custom liquid coding and app integrations.',
        icon: <ShoppingBag className="w-12 h-12 text-green-500" />
      },
      { 
        title: 'Webflow', 
        desc: 'Pixel-perfect Webflow designs with smooth interactions and SEO optimization.',
        icon: <LayoutTemplate className="w-12 h-12 text-blue-600" />
      },
    ],
    'Mobile Apps': [
      { 
        title: 'iOS Apps', 
        desc: 'Native iOS development using Swift for premium Apple ecosystem experiences.',
        icon: <Apple className="w-12 h-12 text-gray-800" />
      },
      { 
        title: 'Android', 
        desc: 'High-performance Android applications built with Kotlin and latest SDKs.',
        icon: <Smartphone className="w-12 h-12 text-green-500" />
      },
      { 
        title: 'React Native', 
        desc: 'Cross-platform mobile apps that save time and cost without compromising quality.',
        icon: <Tablet className="w-12 h-12 text-blue-400" />
      },
    ],
    'Marketing': [
      { title: 'SEO', desc: 'Rank higher on Google with our data-driven SEO strategies.', icon: <Search className="w-12 h-12 text-blue-500" /> },
      { title: 'Social Media', desc: 'Grow your brand presence across all social platforms.', icon: <Megaphone className="w-12 h-12 text-pink-500" /> },
      { title: 'Growth', desc: 'Accelerate your business revenue with targeted marketing.', icon: <TrendingUp className="w-12 h-12 text-orange-500" /> },
    ],
    'Design': [
      { title: 'UI/UX Design', desc: 'User-centric designs that convert visitors into customers.', icon: <Palette className="w-12 h-12 text-purple-500" /> },
      { title: 'Branding', desc: 'Visual identity and logo design that speaks for your brand.', icon: <PenTool className="w-12 h-12 text-red-500" /> },
      { title: 'Prototyping', desc: 'High-fidelity prototypes to visualize your product before coding.', icon: <Layout className="w-12 h-12 text-indigo-500" /> },
    ],
  };

  const categories = ['Custom', 'CMS', 'Mobile Apps', 'Marketing', 'Design'];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#FFFBEB] via-white to-[#EFF6FF]">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-20 gap-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight">
            We provide clients with <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Award-Winning
            </span> services
          </h2>

          {/* Categories Navigation */}
          <div className="flex flex-wrap gap-2 bg-gray-100/50 p-1.5 rounded-full border border-gray-200 backdrop-blur-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === cat 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {servicesData[activeTab].map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Container */}
              <div className="w-24 h-24 mb-8 flex items-center justify-center rounded-3xl bg-white shadow-xl shadow-blue-100 group-hover:shadow-blue-200 group-hover:-translate-y-2 transition-all duration-300 border border-gray-50">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-base leading-relaxed max-w-sm px-4">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;