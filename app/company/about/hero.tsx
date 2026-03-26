import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-gray-500 uppercase bg-gray-100 rounded">
          About
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Where Code Meets Creativity
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Everyone has a story. Here is ours becoming a leading Software Development Agency
        </p>

        {/* Image Container */}
        <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="/webflow/about-hero.jpg" // Image path yahan dalein
            alt="Office Environment"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}