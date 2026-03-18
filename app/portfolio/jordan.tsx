'use client'
import { useRouter } from "next/navigation";
export default function Jordans() {
  const router  = useRouter();

  return (
    <section className="w-full py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - Large Image */}
        <div>
          <img
            src="/project/Jordans.png"
            className="w-full h-[500px] object-cover rounded-2xl shadow-xl hover:scale-[1.03] transition-transform duration-300"
          />
        </div>

        {/* RIGHT SIDE - Text + Contact */}
        <div className="flex flex-col justify-center gap-6">
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            3D Animation Projects of Ai Verse
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Discover our innovative 3D animation projects at Ai Verse. 
            From immersive environments to lifelike character animations, our team delivers creativity and precision in every project.
          </p>

          {/* Contact Info */}
          <p className="text-gray-700 text-lg">
            Want to collaborate or inquire about our services? Reach out to us!
          </p>

          {/* Contact Button */}
          <button onClick={()=> router.push('/contact')} className="w-44 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition cursor-pointer">
            Contact Us
          </button>

        </div>
      </div>
    </section>
  );
}
