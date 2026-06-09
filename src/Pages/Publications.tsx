import { useState } from "react";
import Header from "../Components/Header.tsx";
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
      <Header
        title="Publications & Articles"
        introText="Research insights, press coverage, and thought leadership from Qbit Force Quantum on indigenous quantum hardware, Amaravati Quantum Valley, and India's National Quantum Mission."
      />

      <section className="bg-surface-warm py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {articleCategories.map((cat) => (
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

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <div key={article.id}>
                <LinkedBlogCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Publications;
