import { useEffect, useState } from "react";
import AppLink from "./AppLink";
import { heroSlides } from "../content/mediaHub";

const SLIDE_INTERVAL = 6000;

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight || 1;
      const progress = Math.min(Math.max(window.scrollY / vh, 0), 1);
      setScrollProgress(progress);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSlide = (index: number) => setActiveIndex(index);

  const contentOpacity = 1 - scrollProgress * 1.4;
  const contentY = scrollProgress * -48;
  const imageScale = 1 + scrollProgress * 0.06;

  return (
    <section className="sticky top-0 z-0 h-[100dvh] w-full overflow-hidden bg-deep">
      {/* Background carousel — pinned while content scrolls over */}
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: `scale(${imageScale})` }}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
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
              <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Hero copy — fades up as overlay section scrolls in */}
      <div
        className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-10 pt-[var(--nav-height)] transition-opacity duration-150 sm:px-8 sm:pb-12 lg:px-10"
        style={{
          opacity: Math.max(contentOpacity, 0),
          transform: `translateY(${contentY}px)`,
        }}
      >
        <div className="max-w-md sm:max-w-lg">
          <h1 className="font-display text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
            Indigenous <span className="text-petal">Quantum Hardware</span>
            <span className="mt-0.5 block text-white/95">for Global Markets</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <AppLink
              to="/contactus"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-petal px-5 py-2.5 font-display text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#e01820]"
            >
              Get in Touch
              <span aria-hidden>→</span>
            </AppLink>
            <AppLink
              to="/company"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-5 py-2.5 font-display text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Our mission
            </AppLink>
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
