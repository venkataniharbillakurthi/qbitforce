import type { Article } from "../data/articlesData";

type Props = {
  article: Article;
};

const categoryLabels: Record<Article["category"], string> = {
  publication: "Publication",
  press: "Press",
  insight: "Insight",
};

function LinkedBlogCard({ article }: Props) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:border-navy/15 hover:shadow-md ${
        article.featured ? "border-l-4 border-l-petal bg-gradient-to-br from-white to-[#f7f5f2]" : ""
      }`}
    >
      {article.imageUrl && (
        <div className="aspect-[16/10] overflow-hidden bg-[#f7f5f2]">
          <img
            src={article.imageUrl}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-7">
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="rounded-full bg-petal/10 px-2.5 py-1 font-display text-[0.6875rem] font-bold uppercase tracking-wider text-petal">
            {categoryLabels[article.category]}
          </span>
          <span className="text-[0.8125rem] text-text-muted">{article.readTime} read</span>
        </div>
        <h3 className="mb-3 font-display text-xl font-bold leading-snug text-navy">{article.title}</h3>
        <p className="mb-5 flex-1 text-[0.9375rem] leading-relaxed text-text-muted">
          {article.excerpt}
        </p>
        <footer className="mb-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-[#f0ece8] pt-4 text-[0.8125rem] text-text-muted">
          <time dateTime={article.date}>{formattedDate}</time>
          {article.author && <span className="font-medium text-navy">{article.author}</span>}
        </footer>
        {article.link ? (
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start font-display text-sm font-semibold text-navy no-underline transition hover:text-petal"
          >
            Read blog →
          </a>
        ) : (
          <span className="self-start font-display text-sm font-semibold text-navy">Read blog →</span>
        )}
      </div>
    </article>
  );
}

export default LinkedBlogCard;
