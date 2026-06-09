import { Link } from "react-router-dom";
import { articles } from "../data/articlesData";
import { galleryItems } from "../data/galleryData";
import { videos } from "../data/videosData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const navLinks = [
  { to: "/gallery", label: "Gallery" },
  { to: "/publications", label: "Articles" },
  { to: "/videos", label: "Videos" },
  { to: "/press", label: "Press" },
];

function MediaTeaser() {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const featuredArticles = articles.filter((a) => a.featured).slice(0, 2);
  const galleryPreview = galleryItems.slice(0, 4);
  const videoPreview = videos[0];

  return (
    <section
      ref={ref}
      className={`bg-white py-16 sm:py-20 lg:py-24 ${visible ? "animate-[fadeUp_0.7s_ease-out_both]" : "opacity-0"}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
              Discover
            </span>
            <h2 className="mt-2 font-display text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-text">
              Insights & Media
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Facility photos, publications, lab videos, and press from Amaravati Quantum Valley.
            </p>
          </div>
          <nav className="flex flex-wrap gap-2" aria-label="Media sections">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-full border border-navy/20 px-4 py-2 font-display text-sm font-semibold text-navy no-underline transition hover:bg-navy hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-2xl border border-border bg-surface-warm p-5 lg:col-span-7">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-base font-bold text-navy">Photo Gallery</h3>
              <Link to="/gallery" className="text-sm font-semibold text-petal no-underline hover:underline">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
              {galleryPreview.map((item, i) => (
                <Link
                  key={item.id}
                  to="/gallery"
                  className={`group relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2 aspect-[4/3] sm:col-span-2 lg:col-span-2" : "aspect-square"}`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep/80 to-transparent p-3 text-xs font-semibold text-white">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-2xl border border-border bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-base font-bold text-navy">Featured Video</h3>
                <Link to="/videos" className="text-sm font-semibold text-petal no-underline hover:underline">
                  All videos →
                </Link>
              </div>
              <Link to="/videos" className="group relative block overflow-hidden rounded-xl no-underline">
                {videoPreview.thumbnail && (
                  <img
                    src={videoPreview.thumbnail}
                    alt=""
                    className="aspect-video w-full object-cover transition group-hover:scale-[1.02]"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-deep/20">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-petal/90 pl-1 text-white shadow-lg">
                    ▶
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-0.5 text-xs text-white">
                  {videoPreview.duration}
                </div>
                <div className="border-t border-border bg-white p-4">
                  <strong className="block font-display text-sm text-navy">{videoPreview.title}</strong>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-text-muted">
                    {videoPreview.description}
                  </p>
                </div>
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-base font-bold text-navy">Latest Articles</h3>
                <Link
                  to="/publications"
                  className="text-sm font-semibold text-petal no-underline hover:underline"
                >
                  Publications →
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                {featuredArticles.map((article) => (
                  <Link
                    key={article.id}
                    to="/publications"
                    className="rounded-xl border border-border p-4 no-underline transition hover:border-petal/30 hover:shadow-sm"
                  >
                    <span className="font-display text-[0.625rem] font-bold uppercase tracking-wider text-petal">
                      {article.category === "press" ? "Press" : "Publication"}
                    </span>
                    <h4 className="mt-1 font-display text-sm font-semibold leading-snug text-navy">
                      {article.title}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-xs text-text-muted">{article.excerpt}</p>
                    <span className="mt-2 inline-block text-xs font-semibold text-text-muted">
                      {article.readTime} read
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaTeaser;
