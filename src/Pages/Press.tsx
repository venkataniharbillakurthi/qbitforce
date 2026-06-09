import AppLink from "../Components/AppLink.tsx";
import Header from "../Components/Header.tsx";
import PressMediaImage from "../Components/PressMediaImage.tsx";
import { newsMediaImages } from "../content/mediaHub";

function Press() {
  return (
    <>
      <Header
        title="Press & Media"
        introText="Press coverage and media features on Qbit Force Quantum, Amaravati Quantum Valley, and India's quantum computing roadmap."
      />

      <section className="bg-surface-warm py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 text-center">
            <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
              In the News
            </span>
            <h2 className="mb-6 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-navy">
              Press & Media Coverage
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {newsMediaImages.slice(0, 3).map((item, index) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-md"
              >
                <PressMediaImage
                  src={item.imageUrl}
                  alt={item.title}
                  width={960}
                  className="aspect-[4/5] rounded-none sm:aspect-[3/4]"
                  priority={index === 0}
                />
                <div className="p-6 sm:p-7">
                  <span className="font-display text-[0.625rem] font-bold uppercase tracking-wider text-petal">
                    Media
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-navy sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border-b-[3px] border-b-petal bg-gradient-to-br from-deep to-mid p-10 text-center">
            <p className="mb-5 text-lg text-white/90">Media & press enquiries</p>
            <AppLink
              to="/contactus"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-petal px-7 py-3.5 font-display text-sm font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-[#e01820] hover:shadow-lg"
            >
              Contact Media Relations
            </AppLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Press;
