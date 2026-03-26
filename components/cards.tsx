import React from 'react';

const RecognitionGrid = () => {
  // Tech tags list
  const technologies = [
    'WordPress', 'Shopify', 'Shopify Plus', 'Angular JS',
    'React', 'Laravel', 'Flutter', 'Vue.js', 'Next.js'
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* Main Grid: Staggered effect dene ke liye dynamic gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-30 items-start">
          
          {/* =========================================
             Card 1: Organizations (Top Left - Black)
             ========================================= */}
          <div className="bg-black text-white p-10 rounded-3xl h-[400px] flex flex-col justify-between shadow-xl">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight">
                Organizations Endorse <br />
                <span className="text-gray-200">aiverse.pk</span>
              </h2>
            </div>
            
            {/* Logos - Simplified for professional look */}
            <div className="flex flex-col gap-6 pt-6 border-t border-gray-800">
               <span className="text-xl font-bold tracking-wider text-gray-500">Forbes</span>
               <span className="text-xl font-bold tracking-wider text-gray-500">Google</span>
               <span className="text-xl font-bold tracking-wider text-gray-500">Clutch</span>
            </div>
          </div>

          {/* =========================================
             Card 2: Gartner (Top Right - Blue)
             Halka sa upar move kiya hai image layout ke liye
             ========================================= */}
          <div className="relative bg-blue-600 text-white p-10 rounded-3xl h-[400px] md:-mt-10 overflow-hidden shadow-xl flex flex-col justify-center">
            
            {/* Geometric Pattern recreation (Dots array) */}
            <div className="absolute bottom-8 right-8 flex flex-wrap-reverse gap-3 rotate-45 opacity-60">
                {[...Array(25)].map((_, i) => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-sm bg-[#AEEA00]`}></div>
                ))}
            </div>

            <div className="relative z-10 max-w-sm">
              <h2 className="text-3xl font-extrabold leading-snug tracking-tight">
                aiverse.pk Achieves Gartner® Leader for Enterprise AI Solutions
              </h2>
            </div>
          </div>

          {/* =========================================
             Card 3: Tech Stack (Bottom Left - Blue)
             Gartner card ke sath balance karne ke liye upar move kiya
             ========================================= */}
          <div className="bg-blue-600 text-white p-10 rounded-3xl h-[400px] md:-mt-10 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold leading-tight max-w-sm">
                aiverse.pk Leverages Next-Gen Technology for Optimal Project Outcomes
              </h3>
            </div>
            
            {/* Tech Tags - Clean structure */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-blue-500">
              {technologies.map(tech => (
                <span key={tech} className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-semibold border border-white/20 text-center">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* =========================================
             Card 4: Career (Bottom Right - Black)
             Career image ki jagah colored sections lagaye hain
             ========================================= */}
          <div className="bg-black text-white p-10 rounded-3xl h-[400px] shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight mb-8">
                Unlock Your Potential: Grow a Fulfilling Career with <br />
                <span className="text-gray-200">aiverse.pk</span>
              </h2>
            </div>
            
            {/* Career card piche ke sections recreation (images remove) */}
            <div className="w-full h-1/2 bg-[#333333] rounded-2xl flex items-center justify-center border border-gray-700">
               {/* Central Button */}
               <a href="#" className="inline-block bg-white text-black px-8 py-3 rounded-full text-base font-bold shadow-lg hover:bg-gray-100 transition duration-300">
                 Join Our Visionary Team
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecognitionGrid;