import React from 'react';

const StatsSection = () => {
  const stats = [
    { label: '8 Years', sublabel: 'Proven Track Record' },
    { label: '100%', sublabel: 'Customer Satisfaction' },
    { label: '2,000 Projects', sublabel: 'We Have Completed' },
    { label: '3 Mins', sublabel: 'Average Answer Time' },
  ];

  return (
    <div className="w-full bg-white border-t border-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-8 md:flex-nowrap">
          
          {/* Clutch Review Part */}
          <div className="flex items-center gap-4 min-w-[200px]">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider leading-none mb-1">
                Reviewed on
              </span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-[#002B49] tracking-tighter">Clutch</span>
                {/* Stars */}
                <div className="flex text-red-500 text-xs">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Mapping */}
          {stats.map((stat, index) => (
            <div key={index} className="flex items-start gap-6 flex-1">
              {/* Vertical Gray Divider */}
              <div className="h-12 w-[1.5px] bg-gray-200 hidden md:block"></div>
              
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-black leading-none">
                  {stat.label.split(' ')[0]} 
                  <span className="font-semibold ml-1">{stat.label.split(' ').slice(1).join(' ')}</span>
                </h3>
                <p className="text-sm text-gray-600 mt-1 font-medium leading-tight">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default StatsSection;