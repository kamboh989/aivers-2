"use client";

const portfolioImages = [
  "https://i0.wp.com/themes.svn.wordpress.org/astra/4.12.4/screenshot.jpg?strip=all&w=1200",
  "https://i0.wp.com/themes.svn.wordpress.org/blocksy/2.1.34/screenshot.jpg?strip=all&w=1200",
  "https://i0.wp.com/themes.svn.wordpress.org/twentytwentyfour/1.4/screenshot.png?strip=all&w=1200",
  "https://i0.wp.com/themes.svn.wordpress.org/twentytwentythree/1.6/screenshot.png?strip=all&w=1200",
  "https://i0.wp.com/themes.svn.wordpress.org/twentytwentytwo/2.1/screenshot.png?strip=all&w=1200",
  "https://i0.wp.com/themes.svn.wordpress.org/twentytwentyone/2.7/screenshot.png?strip=all&w=1200",
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