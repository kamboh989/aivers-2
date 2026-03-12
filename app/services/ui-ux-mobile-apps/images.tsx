"use client";

const portfolioImages = [
  "https://images.unsplash.com/photo-1551650975-87deedd944c3",
  "https://images.unsplash.com/photo-1545235617-9465d2a55698",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
  "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb"
];

export default function PortfolioImageSlider() {
  const loopImages = [...portfolioImages, ...portfolioImages];

  return (
    <section className="overflow-hidden bg-[#f2f2f2] py-6 sm:py-8 lg:py-10">
      <div className="relative overflow-hidden">
        <div className="portfolio-track flex w-max gap-5 sm:gap-6">
          {loopImages.map((image, index) => (
            <div
              key={index}
              className="h-[320px] w-[220px] shrink-0 overflow-hidden rounded-[26px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:h-[380px] sm:w-[260px] lg:h-[490px] lg:w-[340px]"
            >
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="h-full w-full object-cover object-top"
                draggable="false"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .portfolio-track {
          --peek: 90px;
          animation: scrollLeft 30s linear infinite;
          will-change: transform;
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(calc(-1 * var(--peek)));
          }
          to {
            transform: translateX(calc(-50% - 10px - var(--peek)));
          }
        }

        @media (min-width: 640px) {
          .portfolio-track {
            --peek: 110px;
          }

          @keyframes scrollLeft {
            from {
              transform: translateX(calc(-1 * var(--peek)));
            }
            to {
              transform: translateX(calc(-50% - 12px - var(--peek)));
            }
          }
        }

        @media (min-width: 1024px) {
          .portfolio-track {
            --peek: 140px;
          }

          @keyframes scrollLeft {
            from {
              transform: translateX(calc(-1 * var(--peek)));
            }
            to {
              transform: translateX(calc(-50% - 12px - var(--peek)));
            }
          }
        }
      `}</style>
    </section>
  );
}