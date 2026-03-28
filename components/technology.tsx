'use client'
import React from 'react';


const TechPlatforms = () => {
  // Icons list with adjusted positions to form a perfect neat circle
  const techIcons = [
    { name: 'WordPress', src: 'https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg', top: '0%', left: '40%' }, // Top Center
    { name: 'Next.js', src: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', top: '15%', left: '75%' },     // Top Right
    { name: 'Laravel', src: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg', top: '50%', left: '85%' },    // Mid Right
    { name: 'React', src: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', top: '80%', left: '65%' },       // Bottom Right
    { name: 'NodeJS', src: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg', top: '85%', left: '30%' },   // Bottom Left
    { name: 'Flutter', src: 'https://cdn.worldvectorlogo.com/logos/flutter.svg', top: '65%', left: '0%' },      // Mid Left
    { name: 'Shopify', src: 'https://cdn.worldvectorlogo.com/logos/shopify.svg', top: '20%', left: '5%' },      // Top Left
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Content Side */}
        <div className="lg:w-1/2 z-10 text-center lg:text-left">
          <span className="bg-gray-100 text-gray-600 text-[10px] font-bold tracking-widest px-3 py-1 rounded uppercase">
            Platforms
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mt-6 leading-tight">
            Our Technologies <br /> and Platforms
          </h2>
          
          <p className="mt-6 text-gray-600 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
            Our expertise spans across various web development platforms, 
            ensuring versatile solutions tailored to your unique needs and goals.
          </p>
          
          <div className="mt-10">
          <a href="/company/about" className="inline-block">
  <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
    View All Technologies
  </button>
</a>
          </div>
        </div>

        {/* Right Floating Icons Side (The Circle) */}
        <div className="lg:w-1/2 relative h-[450px] w-full flex items-center justify-center">
          <div className="relative w-full h-full max-w-[500px]">
            {techIcons.map((icon, index) => (
              <div
                key={index}
                className="absolute transition-transform duration-700 ease-in-out hover:scale-110 cursor-pointer animate-float"
                style={{
                  top: icon.top,
                  left: icon.left,
                  animationDelay: `${index * 0.2}s` // Thoda bounciness ke liye
                }}
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white p-4 rounded-2xl shadow-xl shadow-blue-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={icon.src}
                    alt={icon.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
            
            {/* Center Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

      </div>

      {/* Tailwind Custom Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TechPlatforms;