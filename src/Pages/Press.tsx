import { Link } from "react-router-dom";
import PageHero from "../Components/PageHero.tsx";
import PressMediaImage from "../Components/PressMediaImage.tsx";
import { newsMediaImages } from "../content/mediaHub";

function Press() {
  return (
    <>
      <PageHero
        variant="press"
        badge="Press & Media"
        title="In the News"
        intro="Press coverage and media features on Qbit Force Quantum, Amaravati Quantum Valley, and India's quantum computing roadmap."
      />

      <section className="bg-surface-warm pb-10 pt-2 sm:pb-12 sm:pt-4 lg:pb-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {newsMediaImages.slice(0, 3).map((item, index) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <PressMediaImage
                  src={item.imageUrl}
                  alt={item.title}
                  width={960}
                  className="aspect-[4/5] rounded-none sm:aspect-[3/4]"
                  priority={index === 0}
                />
                <div className="p-5 sm:p-6">
                  <span className="font-display text-[0.625rem] font-bold uppercase tracking-wider text-petal">
                    Media
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold leading-snug text-navy sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border-b-[3px] border-b-petal bg-gradient-to-br from-deep to-mid p-8 text-center sm:p-10">
            <p className="mb-5 text-base text-white/90 sm:text-lg">Media & press enquiries</p>
            <Link
              to="/contactus"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-petal px-7 py-3 font-display text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#e01820]"
            >
              Contact Media Relations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Press;
