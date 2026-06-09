import { Link } from "react-router-dom";
import { newsMediaImages, type MediaImage } from "../content/mediaHub";
import { useScrollReveal } from "../hooks/useScrollReveal";
import PressMediaImage from "./PressMediaImage";
import SectionViewAllLink from "./SectionViewAllLink";

function PressMediaCard({ item, index }: { item: MediaImage; index: number }) {
  const readMoreClass =
    "mt-2 inline-block font-display text-xs font-semibold text-petal no-underline transition hover:underline sm:text-sm";
  const titleLinkClass = "text-text no-underline transition hover:text-petal";

  return (
    <article
      className="group flex flex-col animate-[fadeUp_0.7s_ease-out_both]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link to="/press" className="block">
        <PressMediaImage
          src={item.imageUrl}
          alt={item.title}
          width={720}
          className="aspect-[4/5] sm:aspect-[3/4]"
          priority={index === 0}
        />
      </Link>
      <span className="mt-2.5 font-display text-[0.625rem] font-bold uppercase tracking-wider text-petal">
        Media
      </span>
      <h3 className="mt-0.5 font-display text-sm font-bold leading-snug text-text sm:text-base">
        <Link to="/press" className={titleLinkClass}>
          {item.title}
        </Link>
      </h3>
      <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-text-muted">{item.caption}</p>
      <Link to="/press" className={readMoreClass}>
        Read More
      </Link>
    </article>
  );
}

function PressMediaHomeSection() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`bg-surface-warm px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 ${
        visible ? "animate-[fadeUp_0.7s_ease-out_both]" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <h2 className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-text">
            Press & Media
          </h2>
          <SectionViewAllLink to="/press" />
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-6">
          {newsMediaImages.slice(0, 3).map((item, index) => (
            <PressMediaCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PressMediaHomeSection;
