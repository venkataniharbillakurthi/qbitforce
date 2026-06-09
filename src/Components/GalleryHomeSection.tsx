import AppLink from "./AppLink";
import { galleryItems } from "../data/galleryData";
import SectionViewAllLink from "./SectionViewAllLink";

const categoryLabel: Record<string, string> = {
  facility: "Facility",
  events: "Events",
  hardware: "Hardware",
  team: "Team",
  news: "News",
};

function MosaicTile({
  item,
  className = "",
  large = false,
}: {
  item: (typeof galleryItems)[0];
  className?: string;
  large?: boolean;
}) {
  return (
    <AppLink
      to="/gallery"
      className={`group relative block overflow-hidden bg-deep ${className}`}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/20 to-transparent opacity-80 transition group-hover:opacity-90" />
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <span className="font-display text-[0.625rem] font-bold uppercase tracking-wider text-petal">
          {categoryLabel[item.category] ?? item.category}
        </span>
        <p
          className={`mt-0.5 font-display font-semibold leading-snug text-white ${
            large ? "text-sm sm:text-base" : "text-xs sm:text-sm"
          }`}
        >
          {item.title}
        </p>
      </div>
      <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100 sm:h-8 sm:w-8">
        <span className="text-xs">↗</span>
      </div>
    </AppLink>
  );
}

function GalleryHomeSection() {
  const items = galleryItems.slice(0, 5);
  const [featured, ...rest] = items;

  if (!featured) return null;

  return (
    <section className="bg-[#f7f5f2] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
              Visual Stories
            </span>
            <h2 className="mt-1 font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-text">
              Photo Gallery
            </h2>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-text-muted sm:text-sm">
              Facility moments, quantum hardware, and events from Amaravati Quantum Valley.
            </p>
          </div>
          <SectionViewAllLink to="/gallery" />
        </div>

        {/* Bento mosaic */}
        <div className="mt-6 grid h-[320px] grid-cols-4 grid-rows-2 gap-2 sm:mt-8 sm:h-[380px] sm:gap-2.5 lg:h-[420px]">
          <MosaicTile
            item={featured}
            large
            className="col-span-2 row-span-2 rounded-l-xl sm:rounded-l-2xl"
          />
          {rest.slice(0, 2).map((item, i) => (
            <MosaicTile
              key={item.id}
              item={item}
              className={i === 1 ? "rounded-tr-xl sm:rounded-tr-2xl" : ""}
            />
          ))}
          {rest.slice(2, 4).map((item, i) => (
            <MosaicTile
              key={item.id}
              item={item}
              className={i === 1 ? "rounded-br-xl sm:rounded-br-2xl" : ""}
            />
          ))}
        </div>

        {/* Category strip */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["facility", "events", "hardware", "news"].map((cat) => (
            <AppLink
              key={cat}
              to="/gallery"
              className="rounded-full border border-navy/15 bg-white px-3 py-1 font-display text-[0.6875rem] font-semibold text-navy no-underline transition hover:border-petal hover:text-petal"
            >
              {categoryLabel[cat]}
            </AppLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryHomeSection;
