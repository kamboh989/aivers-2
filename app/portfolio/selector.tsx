'use client'
import React, { useState, useEffect } from 'react';
import { FaCampground, FaFire, FaTint, FaHotTub, FaHiking } from 'react-icons/fa';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const options = [
  { 
    title: "Futuristic Cityscape", 
    description: "A fully immersive 3D city environment with realistic lighting and textures.", 
    image: "/project/apartment1.png", 
    icon: <FaCampground size={24} className="text-white" /> 
  },
  { 
    title: "Character Animation", 
    description: "Lifelike character animations showcasing fluid motion and expressions.", 
    image: "/project/apartment2.png", 
    icon: <FaFire size={24} className="text-white" /> 
  },
  { 
    title: "Virtual Interior", 
    description: "Detailed 3D interiors with realistic materials and furniture layouts.", 
    image: "/project/apartment3.png", 
    icon: <FaTint size={24} className="text-white" /> 
  },
  { 
    title: "Outdoor Scene", 
    description: "A scenic 3D outdoor environment with dynamic lighting and foliage.", 
    image: "/project/apartment3.png", 
    icon: <FaHotTub size={24} className="text-white" /> 
  },
  { 
    title: "Interactive Animation", 
    description: "Engaging 3D animations with interactive elements for storytelling.", 
    image: "/project/apartment4.png", 
    icon: <FaHiking size={24} className="text-white" /> 
  },
  { 
    title: "Product Visualization", 
    description: "High-quality 3D renderings showcasing products with realistic textures.", 
    image: "/project/apartment5.png", 
    icon: <FaHiking size={24} className="text-white" /> 
  },
];


  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  useEffect(() => {
    const timers: number[] = [];

    // Properly capture index using IIFE
    for (let i = 0; i < options.length; i++) {
      const timer = window.setTimeout(((index) => {
        return () => {
          setAnimatedOptions(prev => [...prev, index]);
        };
      })(i), 180 * i);
      timers.push(timer);
    }

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []); // options is static, safe to leave empty

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#222] font-sans text-white p-3">
      {/* Header */}
      <div className="w-full max-w-2xl px-6 mt-8 mb-2 text-center">
       <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg animate-fadeInTop delay-300">
  Bring Ideas to Life in 3D
</h1>
<p className="text-lg md:text-xl text-gray-300 font-medium max-w-xl mx-auto animate-fadeInTop delay-600">
  Explore immersive 3D worlds and lifelike animations crafted by Ai Verse.
</p>

      </div>

      <div className="h-12"></div>

      {/* Options */}
      <div className="flex flex-col md:flex-row w-full max-w-full md:max-w-[900px] h-[400px] items-stretch overflow-x-auto md:overflow-hidden relative">
        {options.map((option, index) => {
          const isActive = activeIndex === index;
          const isAnimated = animatedOptions.includes(index);
          return (
            <div
              key={index}
              onClick={() => handleOptionClick(index)}
              className="relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out cursor-pointer"
              style={{
                flex: isActive ? '7 1 0%' : '1 1 0%',
                backgroundImage: `url('${option.image}')`,
                backgroundSize: isActive ? 'auto 100%' : 'auto 120%',
                backgroundPosition: 'center',
                minWidth: '60px',
                minHeight: '100px',
                border: `2px solid ${isActive ? '#fff' : '#292929'}`,
                boxShadow: isActive ? '0 20px 60px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.3)',
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateX(0)' : 'translateX(-60px)',
                transitionProperty: 'flex-grow, box-shadow, background-size, background-position, opacity, transform',
              }}
            >
              {/* Shadow */}
              <div
                className="absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
                style={{
                  bottom: isActive ? 0 : -40,
                  height: 120,
                  boxShadow: isActive
                    ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000'
                    : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000'
                }}
              />

              {/* Label */}
              <div className="absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 px-4 gap-3 w-full pointer-events-none">
                <div className="min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 transition-all duration-200">
                  {option.icon}
                </div>
                <div className="text-white whitespace-pre relative">
                  <div
                    className="font-bold text-lg transition-all duration-700 ease-in-out"
                    style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'translateX(0)' : 'translateX(25px)' }}
                  >
                    {option.title}
                  </div>
                  <div
                    className="text-base text-gray-300 transition-all duration-700 ease-in-out"
                    style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'translateX(0)' : 'translateX(25px)' }}
                  >
                    {option.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInFromTop {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInTop { opacity: 0; transform: translateY(-20px); animation: fadeInFromTop 0.8s ease-in-out forwards; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;
