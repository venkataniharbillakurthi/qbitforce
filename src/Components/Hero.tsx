import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { heroSlides } from "../content/mediaHub";

const SLIDE_INTERVAL = 6000;

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);
    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setActiveIndex(index);

  return (
    <section className="sticky top-0 z-0 h-[100dvh] w-full overflow-hidden bg-deep">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            {slide.type === "video" ? (
              <video
                className="h-full w-full object-cover"
                src={slide.src}
                poster={slide.poster}
                autoPlay
                muted
                loop
                playsInline
                aria-label={slide.alt}
              />
            ) : (
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover"
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-10 pt-[var(--nav-height)] sm:px-8 sm:pb-12 lg:px-10">
        <div className="max-w-md sm:max-w-lg">
          <h1 className="font-display text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
            Indigenous <span className="text-petal">Quantum Hardware</span>
            <span className="mt-0.5 block text-white/95">for Global Markets</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              to="/contactus"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-petal px-5 py-2.5 font-display text-sm font-semibold text-white shadow-lg shadow-black/20 transition-colors duration-200 hover:bg-[#e01820]"
            >
              Get in Touch
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/company"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-5 py-2.5 font-display text-sm font-semibold text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/20"
            >
              Our mission
            </Link>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-10 bg-petal" : "w-4 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
