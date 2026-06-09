import { Link } from "react-router-dom";
import { newsMediaImages } from "../content/mediaHub";
import { articles } from "../data/articlesData";
import { useScrollReveal } from "../hooks/useScrollReveal";

function NewsMediaSection() {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);

  return (
    <section
      ref={ref}
      className={`bg-surface-warm py-16 sm:py-20 ${visible ? "animate-[fadeUp_0.7s_ease-out_both]" : "opacity-0"}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
              What&apos;s New
            </span>
            <h2 className="mt-2 font-display text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-text">
              News, Media & Articles
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/press"
              className="rounded-full border border-navy/20 px-5 py-2 font-display text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Press
            </Link>
            <Link
              to="/gallery"
              className="rounded-full border border-navy/20 px-5 py-2 font-display text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Gallery
            </Link>
            <Link
              to="/videos"
              className="rounded-full bg-petal px-5 py-2 font-display text-sm font-semibold text-white transition hover:bg-petal-hover"
            >
              Videos
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {newsMediaImages.map((item, index) => (
            <Link
              key={item.id}
              to="/gallery"
              className={`group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                visible ? "animate-[fadeUp_0.5s_ease-out_both]" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.05 + index * 0.06}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <span className="font-display text-[0.625rem] font-bold uppercase tracking-wider text-petal">
                  News
                </span>
                <h3 className="mt-1 font-display text-sm font-semibold text-navy">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-text-muted">{item.caption}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {featuredArticles.map((article, index) => (
            <Link
              key={article.id}
              to="/publications"
              className={`rounded-xl border border-border bg-white p-5 transition hover:border-petal/40 hover:shadow-md ${
                visible ? "animate-[fadeUp_0.5s_ease-out_both]" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.08}s` }}
            >
              <span className="font-display text-[0.625rem] font-bold uppercase tracking-wider text-petal">
                {article.category}
              </span>
              <h3 className="mt-2 font-display text-base font-semibold leading-snug text-navy">
                {article.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-text-muted">{article.excerpt}</p>
              <span className="mt-3 inline-block text-xs font-semibold text-text-muted">
                {article.readTime} read
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsMediaSection;
