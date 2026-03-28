import Image from 'next/image';

export default function BetterTogetherSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Better together
          </h2>
          
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              We know that work is important, but so is play! We respect all of our 
              partnerships, and we make every effort to engage in fun ways that solve 
              critical problems and leave a smile on your face at the same time.
            </p>
            <p>
              We love our job and love helping our clients. Life is just too short 
              to not enjoy every minute!
            </p>
          </div>

         <a href="/contact" className="inline-block">
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-md transition-colors duration-300">
    Get in touch
  </button>
</a>
        </div>

        {/* Right Side: Angled Image Container */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px]">
          <div 
            className="w-full h-full relative overflow-hidden rounded-xl"
            style={{
              clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' // Ye slanted effect create karta hai
            }}
          >
            <Image
              src="/webflow/together.jpg" // Apni image ka path yahan dein
              alt="Our Team Working"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}