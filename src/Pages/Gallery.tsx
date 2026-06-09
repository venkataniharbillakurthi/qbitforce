import { useState } from "react";
import Header from "../Components/Header.tsx";
import { galleryCategories, galleryItems } from "../data/galleryData";
import type { GalleryItem } from "../data/galleryData";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Header
        title="Gallery"
        introText="Moments from our Amaravati facility, quantum hardware development, events at Amaravati Quantum Valley, and collaborations shaping India's quantum future."
      />

      <section className="bg-surface-warm py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={
                  activeCategory === cat.id
                    ? "cursor-pointer rounded-full border-2 border-navy bg-navy px-5 py-2 font-display text-sm font-semibold text-white transition-all"
                    : "cursor-pointer rounded-full border-2 border-border bg-white px-5 py-2 font-display text-sm font-semibold text-text transition-all hover:border-navy hover:text-navy"
                }
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
            {filtered.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border-none bg-deep shadow-sm animate-[fadeUp_0.5s_ease_backwards]"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[450ms] group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-deep/92 from-30% to-transparent p-5 text-left text-white opacity-0 transition group-hover:opacity-100">
                  <span className="mb-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-petal">
                    {item.category}
                  </span>
                  <h3 className="mb-1.5 text-[1.0625rem] text-white">{item.title}</h3>
                  <p className="m-0 text-[0.8125rem] leading-snug opacity-90">{item.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-deep/92 p-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-6 top-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-none bg-white/10 text-[1.75rem] text-white transition hover:bg-petal"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div
            className="w-full max-w-[900px] overflow-hidden rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.imageUrl}
              alt={lightbox.title}
              className="block max-h-[70vh] w-full bg-deep object-contain"
            />
            <div className="px-8 py-6">
              <h2 className="mb-2 text-2xl">{lightbox.title}</h2>
              <p className="m-0 text-text-muted">{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
