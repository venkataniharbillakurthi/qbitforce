import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { heroSlides } from "../content/mediaHub";
import { galleryItems } from "../data/galleryData";
import type { GalleryItem } from "../data/galleryData";

const ITEMS_PER_PAGE = 9;

const heroImage =
  heroSlides.find((s) => s.type === "image")?.src ??
  "https://res.cloudinary.com/dps46p3m8/image/upload/v1780935950/Copy_of_IMG_20260414_161438_zed6bs.jpg";

function ExpandIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const totalPages = Math.max(1, Math.ceil(galleryItems.length / ITEMS_PER_PAGE));
  const pageItems = galleryItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-[280px] items-end overflow-hidden sm:min-h-[320px] lg:min-h-[360px]">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy/70" aria-hidden />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 pb-10 pt-[calc(var(--nav-height)+2rem)] sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-10 lg:pb-12">
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-none text-white">
            Gallery Page
          </h1>
          <nav
            className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.15em] text-white/90"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="text-white/80 no-underline transition hover:text-white">
              Home
            </Link>
            <span className="text-white/50" aria-hidden>
              &gt;
            </span>
            <span className="text-petal">Gallery</span>
          </nav>
        </div>
      </section>

      <section className="bg-white px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightbox(item)}
                className="group relative aspect-square w-full cursor-pointer overflow-hidden border-none bg-white p-0"
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-petal/0 transition-colors duration-300 group-hover:bg-petal/85">
                  <span className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-white text-navy opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <ExpandIcon />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                  className={`h-2.5 w-2.5 cursor-pointer rounded-full border-none transition-colors ${
                    currentPage === page ? "bg-navy" : "bg-border hover:bg-navy/40"
                  }`}
                />
              ))}
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage >= totalPages}
                aria-label="Next page"
                className="ml-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-none bg-navy text-white transition hover:bg-navy-light disabled:cursor-not-allowed disabled:opacity-40"
              >
                →
              </button>
            </div>
          )}
        </div>
      </section>

      {lightbox &&
        createPortal(
          <div
            className="fixed inset-0 z-[2000]"
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              aria-hidden
              onClick={() => setLightbox(null)}
            />

            <button
              type="button"
              className="absolute right-4 top-4 z-[2002] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/90 text-xl text-navy shadow-md transition hover:bg-petal hover:text-white sm:right-6 sm:top-6"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="pointer-events-none fixed left-1/2 top-1/2 z-[2001] max-h-[85vh] max-w-[90vw] -translate-x-1/2 -translate-y-1/2">
              <img
                src={lightbox.imageUrl}
                alt={lightbox.title}
                className="pointer-events-auto block max-h-[85vh] w-auto max-w-[90vw] border border-navy/25 object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export default Gallery;
