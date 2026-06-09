import { useState } from "react";
import Header from "../Components/Header.tsx";
import VideoPlayer from "../Components/VideoPlayer.tsx";
import { videoCategories, videos } from "../data/videosData";

function Videos() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <Header
        title="Videos & Media"
        introText="Watch facility tours, technology explainers, and event coverage. Native lab footage and curated educational content on quantum computing in India."
      />

      <section className="bg-surface-warm py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {videoCategories.map((cat) => (
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

          {featured && (
            <div className="mb-8">
              <VideoPlayer video={featured} featured />
            </div>
          )}

          <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
            {rest.map((video) => (
              <VideoPlayer key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Videos;
