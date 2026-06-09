import { Link } from "react-router-dom";
import { articles, type Article } from "../data/articlesData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionViewAllLink from "./SectionViewAllLink";

const categorySource: Record<Article["category"], string> = {
  publication: "Blog",
  press: "Press Release",
  insight: "Blog",
};

function formatMeta(article: Article) {
  const date = new Date(article.date).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });
  const source = article.author ?? categorySource[article.category];
  return `${date} | ${source}`;
}

function LinkedBlogListItem({ article }: { article: Article }) {
  const readLinkClass =
    "mt-2 inline-block font-display text-xs font-semibold text-petal no-underline transition hover:underline sm:text-sm";
  const titleLinkClass = "text-text no-underline transition hover:text-petal";

  return (
    <article className="flex gap-3 sm:gap-4">
      {article.imageUrl &&
        (article.link ? (
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 overflow-hidden rounded-md"
          >
            <img
              src={article.imageUrl}
              alt=""
              className="h-20 w-20 object-cover transition duration-500 hover:scale-105 sm:h-24 sm:w-24"
              loading="lazy"
            />
          </a>
        ) : (
          <Link to="/publications" className="shrink-0 overflow-hidden rounded-md">
            <img
              src={article.imageUrl}
              alt=""
              className="h-20 w-20 object-cover transition duration-500 hover:scale-105 sm:h-24 sm:w-24"
              loading="lazy"
            />
          </Link>
        ))}
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <p className="text-[0.6875rem] text-text-muted sm:text-xs">{formatMeta(article)}</p>
        <h3 className="mt-1 font-display text-sm font-bold leading-snug text-text sm:text-base">
          {article.link ? (
            <a href={article.link} target="_blank" rel="noopener noreferrer" className={titleLinkClass}>
              {article.title}
            </a>
          ) : (
            <Link to="/publications" className={titleLinkClass}>
              {article.title}
            </Link>
          )}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-text-muted sm:text-sm">
          {article.excerpt}
        </p>
        {article.link ? (
          <a href={article.link} target="_blank" rel="noopener noreferrer" className={readLinkClass}>
            Read blog
          </a>
        ) : (
          <Link to="/publications" className={readLinkClass}>
            Read blog
          </Link>
        )}
      </div>
    </article>
  );
}

function LinkedBlogsSection() {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const blogItems = articles;

  return (
    <section
      ref={ref}
      className={`bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 ${
        visible ? "animate-[fadeUp_0.7s_ease-out_both]" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
              Linked Blogs
            </span>
            <h2 className="mt-1 font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-text">
              Qbit Force Blog
            </h2>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-text-muted sm:text-sm">
              Insights, press coverage, and stories from our quantum hardware journey.
            </p>
          </div>
          <SectionViewAllLink to="/publications" label="View all blogs" />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:mt-8">
          {blogItems.map((article) => (
            <LinkedBlogListItem key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LinkedBlogsSection;
