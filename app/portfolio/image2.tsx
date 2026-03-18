import React from "react";
import { CircularTestimonials } from './circular';
const testimonials = [
  {
    quote:
      "Ai Verse transformed our ideas into breathtaking 3D animations! The level of detail and creativity in every scene is simply outstanding.",
    name: "Alex Johnson",
    designation: "Creative Director",
    src: "/project/apartment1.png", // 3D animation project image
  },
  {
    quote:
      "The immersive environments and lifelike character animations brought our vision to life. Their attention to detail is unmatched in the industry.",
    name: "Sophia Lee",
    designation: "Animation Producer",
    src: "/project/apartment2.png", // 3D animation project image
  },
  {
    quote:
      "Working with Ai Verse was an absolute pleasure. They turned complex concepts into stunning visuals that captivated our audience.",
    name: "Michael Chen",
    designation: "Art Director",
    src: "/project/apartment3.png", // 3D animation project image
  },
];

export const CircularTestimonialsDemo = () => (
  <section>
    

    {/* Dark testimonials section */}
    <div className=" p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1024px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#232325",
            designation: "#292626",
            testimony: "#2e2e31",
            arrowBackground: "#0582CA",
            arrowForeground: "#141414",
            arrowHoverBackground: "#f7f7ff",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </div>
  </section>
);
