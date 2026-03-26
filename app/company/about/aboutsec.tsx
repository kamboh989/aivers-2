import Image from 'next/image';

export default function ContentSection() {
  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Paragraph Text */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-12 px-4">
          Driven by an enduring commitment to facilitate your business success, 
          bolstered by extensive technical expertise and our tailored solutions, 
          methodologies, and unmatched customer support, we consistently achieve 
          exceptional results.
        </p>

        {/* Image Container with Rounded Corners */}
        <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-lg border border-gray-100">
          <Image
            src="/webflow/met.jpg" // Image path yahan replace karein
            alt="Team Meeting"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}