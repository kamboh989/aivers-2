import React from 'react';

const HeroSection = () => {
  return (
    // Section ki height ko restricted rakha hai (min-h-[450px])
    <section className="relative bg-white min-h-[450px] flex items-center overflow-hidden">
      {/* Grid container ko gap kam aur alignment behtar ki hai */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        
        {/* Left Content */}
        <div className="z-10 py-10">
          {/* leading-tight use kiya hai taki lines ke beech ka gap kam ho */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight tracking-tight max-w-lg">
            We manage your IT, <br />
            so you can manage <br />
            your business.
          </h1>
          
          {/* Paragraph ki leading bhi tighten ki hai */}
          <p className="mt-4 text-xl text-gray-800 font-medium leading-normal max-w-md">
            Leading Software & Mobile <br /> Development Agency
          </p>
          
          {/* Buttons spacing optimized */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-base hover:bg-blue-700 transition shadow-sm">
              Schedule a Free Consultation
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md font-semibold text-base hover:bg-blue-50 transition">
              Services
            </button>
          </div>
        </div>

        {/* Right Image Container - Iski height ko directly control kiya hai */}
        <div className="relative w-full h-[400px] md:h-[450px]">
          {/* The Diagonal Cut Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              // APNI IMAGE KA PATH YAHA DALEIN
              backgroundImage: `url('/hero.jpg')`, 
              // Ye wahi cut design replicate karega
              clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
              // Screenshot jaisa placement dene ke liye shift kiya gaya
              marginLeft: '-15%', 
            }}
          >
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-black/5"></div>
          </div>

          {/* Neon Green Accent Lines (Thoda niche placement) */}
          <div className="absolute bottom-12 left-[-30px] z-20 flex flex-col gap-2.5 rotate-[-40deg]">
            {/* <div className="h-5 w-44 bg-[#ADFF2F] rounded-full opacity-90 shadow-lg"></div>
            <div className="h-5 w-60 bg-[#ADFF2F] rounded-full opacity-90 shadow-lg"></div> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;