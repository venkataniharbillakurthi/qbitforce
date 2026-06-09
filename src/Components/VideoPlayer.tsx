import { useState } from "react";
import type { VideoItem } from "../data/videosData";

type Props = {
  video: VideoItem;
  featured?: boolean;
};

function VideoPlayer({ video, featured = false }: Props) {
  const [playing, setPlaying] = useState(false);

  if (video.youtubeId && !video.src) {
    return (
      <div className={`overflow-hidden rounded-2xl border border-border bg-white shadow-sm ${featured ? "lg:col-span-2" : ""}`}>
        <div className="relative aspect-video w-full overflow-hidden bg-deep">
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            title={video.title}
            src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="p-5 sm:p-6">
          <span className="font-display text-xs font-semibold text-petal">{video.duration}</span>
          <h3 className="mt-1 font-display text-lg font-bold text-navy">{video.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{video.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-white shadow-sm ${featured ? "lg:col-span-2" : ""}`}>
      <div className="relative aspect-video w-full overflow-hidden bg-deep">
        {playing && video.src ? (
          <video controls autoPlay playsInline poster={video.thumbnail} className="h-full w-full object-cover">
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <button
            type="button"
            className="group relative h-full w-full cursor-pointer border-none bg-deep p-0"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
          >
            {video.thumbnail && (
              <img src={video.thumbnail} alt="" className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100" />
            )}
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-petal/90 pl-1 text-xl text-white shadow-lg transition group-hover:scale-110">
              ▶
            </span>
            <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs font-semibold text-white">
              {video.duration}
            </span>
          </button>
        )}
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold text-navy">{video.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{video.description}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
