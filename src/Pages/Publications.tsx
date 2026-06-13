import { useState } from "react";
import PageHero from "../Components/PageHero.tsx";
import LinkedBlogCard from "../Components/LinkedBlogCard.tsx";
import { articleCategories, articles } from "../data/articlesData";

function Publications() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <PageHero
        variant="publications"
        badge="Blogs"
        title="Qbit Force Blog"
        intro="Insights, research updates, and stories from our quantum hardware journey in Amaravati."
        surfaceTone="white"
      />

      <section className="bg-white pb-10 pt-2 sm:pb-12 sm:pt-4 lg:pb-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {articleCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={
                  activeCategory === cat.id
                    ? "cursor-pointer rounded-full border-2 border-navy bg-navy px-5 py-2 font-display text-sm font-semibold text-white"
                    : "cursor-pointer rounded-full border-2 border-border bg-white px-5 py-2 font-display text-sm font-semibold text-text transition-colors duration-200 hover:border-navy hover:text-navy"
                }
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((article) => (
              <LinkedBlogCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Publications;
