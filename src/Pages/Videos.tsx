import { useState } from "react";
import PageHero from "../Components/PageHero.tsx";
import { videos, type VideoItem } from "../data/videosData";

function InlinePlayer({ video }: { video: VideoItem }) {
  if (video.youtubeId) {
    return (
      <iframe
        className="absolute inset-0 h-full w-full border-0"
        title={video.title}
        src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (video.src) {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        controls
        playsInline
        poster={video.thumbnail}
      >
        <source src={video.src} type="video/mp4" />
      </video>
    );
  }

  return null;
}

function Videos() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!activeVideo) return null;

  return (
    <>
      <PageHero
        variant="videos"
        badge="Watch & Learn"
        title="Videos & Media"
        intro="Facility tours, lab footage, and curated coverage on quantum computing in India."
        surfaceTone="dark"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-deep via-mid to-navy px-5 pb-10 pt-6 sm:px-8 sm:pb-12 sm:pt-8 lg:px-10 lg:pb-14">
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-4 lg:grid-cols-5 lg:gap-5">
            <div className="lg:col-span-3">
              <div className="relative aspect-video overflow-hidden rounded-xl sm:rounded-2xl">
                {isPlaying ? (
                  <InlinePlayer key={activeVideo.id} video={activeVideo} />
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="group relative h-full w-full cursor-pointer border-none bg-deep p-0"
                    aria-label={`Play ${activeVideo.title}`}
                  >
                    {activeVideo.thumbnail && (
                      <img
                        src={activeVideo.thumbnail}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-deep/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-petal pl-1 text-white shadow-lg">
                        ▶
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2.5 lg:col-span-2 lg:justify-center">
              {videos.map((video) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => {
                    setActiveVideo(video);
                    setIsPlaying(true);
                  }}
                  className={`flex w-full gap-3 rounded-lg border p-2.5 text-left transition-colors duration-200 sm:rounded-xl sm:p-3 ${
                    activeVideo.id === video.id
                      ? "border-petal/60 bg-white/15"
                      : "border-white/10 bg-white/5 hover:border-petal/40 hover:bg-white/10"
                  }`}
                >
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md sm:w-28">
                    {video.thumbnail && (
                      <img
                        src={video.thumbnail}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <h4 className="line-clamp-2 font-display text-xs font-semibold text-white sm:text-sm">
                      {video.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Videos;
