export default function TeamExperienceSection() {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">
      {/* Background Gradient - Same as Image */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-[#F0F9E8] via-white to-[#E3E6FF]" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          A Team built on Experience
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl">
          Since 2016, our dedication has been assisting customers, ensuring they receive 
          top-notch custom services tailored to empower them in advancing, expanding, 
          and innovating within their industry.
        </p>

        {/* Primary Blue Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-md">
          Meet the team
        </button>
      </div>
    </section>
  );
}