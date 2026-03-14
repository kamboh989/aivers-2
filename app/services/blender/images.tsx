"use client";

const portfolioImages = [
  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?q=80&w=900&auto=format&fit=crop",
];

export default function PortfolioImageSlider() {
  const loopImages = [...portfolioImages, ...portfolioImages];

  return (
    <section className="overflow-hidden bg-[#f2f2f2] py-6 sm:py-8 lg:py-10">
      <div className="relative">
        <div className="portfolio-track flex w-max gap-5 sm:gap-6">
          {loopImages.map((image, index) => (
            <div
              key={index}
              className="h-[320px] w-[220px] shrink-0 overflow-hidden rounded-[26px] bg-white shadow-sm sm:h-[380px] sm:w-[260px] lg:h-[490px] lg:w-[340px]"
            >
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="h-full w-full object-cover"
                draggable="false"
              />
            </div>
          ))}
        </div>

        {/* optional side fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#f2f2f2] to-transparent sm:w-16 lg:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#f2f2f2] to-transparent sm:w-16 lg:w-24" />
      </div>

      <style jsx>{`
        .portfolio-track {
          animation: scrollLeft 30s linear infinite;
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 12px));
          }
        }

        @media (min-width: 640px) {
          @keyframes scrollLeft {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-50% - 12px));
            }
          }
        }

        @media (min-width: 1024px) {
          @keyframes scrollLeft {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-50% - 12px));
            }
          }
        }
      `}</style>
    </section>
  );
}