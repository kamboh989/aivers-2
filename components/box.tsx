import React from 'react';

const WhatWeDoSection = () => {
  return (
    <section className="px-6 py-10">
      <div className="container mx-auto">
        {/* Main Black Card */}
        <div className="relative bg-black rounded-xl overflow-hidden min-h-[350px] flex flex-col justify-center p-8 md:p-16">
          
          {/* Top Tag */}
          <div className="absolute top-8 left-8 md:top-12 md:left-16">
            <span className="bg-[#1a1a1a] text-blue-500 text-[10px] font-bold tracking-[0.2em] px-3 py-1.5 rounded uppercase border border-gray-800">
              What We Do
            </span>
          </div>

          {/* Main Heading */}
          <div className="max-w-2xl mt-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Simplifying IT <br />
              <span className="text-white">for a complex world.</span>
            </h2>
          </div>

          {/* Dotted Abstract Pattern (Right Side) */}
          <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-60 pointer-events-none hidden md:block">
            <div className="absolute bottom-[-20px] right-[-20px] flex flex-wrap-reverse flex-row-reverse gap-3 w-[300px] h-[300px] rotate-45">
              {/* Generating dots dynamically */}
              {[...Array(60)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-1.5 rounded-sm bg-blue-500`}
                  style={{ opacity: Math.random() * 0.8 + 0.2 }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Mobile version dots (Slightly different placement) */}
          <div className="absolute bottom-4 right-4 md:hidden opacity-40">
             <div className="grid grid-cols-5 gap-2">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-blue-500"></div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;