import Hero from "../Components/Hero.tsx";
import CompanyStory from "../Components/CompanyStory.tsx";
import PeoplePrinciplesSection from "../Components/PeoplePrinciplesSection.tsx";
import LinkedBlogsSection from "../Components/LinkedBlogsSection.tsx";
import PressMediaHomeSection from "../Components/PressMediaHomeSection.tsx";
import GalleryHomeSection from "../Components/GalleryHomeSection.tsx";
import VideosHomeSection from "../Components/VideosHomeSection.tsx";
import AppLink from "../Components/AppLink.tsx";

function Home() {
  const logosModules = import.meta.glob("../assets/logos/*.{png,jpg,jpeg,svg}", { eager: true });
  const logos: string[] = (Object.values(logosModules) as { default: string }[]).map(
    (module) => module.default,
  );

  return (
    <>
      {/* Sticky hero + Company Story overlay only */}
      <div className="relative">
        <Hero />
        <div className="relative z-10 overflow-hidden rounded-t-[2rem] bg-white sm:rounded-t-[2.5rem]">
          <div
            className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-petal via-blue-light to-petal"
            aria-hidden
          />
          <CompanyStory />
        </div>
      </div>

      <PeoplePrinciplesSection />

      <LinkedBlogsSection />

      <PressMediaHomeSection />

      <GalleryHomeSection />

      <VideosHomeSection />

      <section className="bg-gradient-to-b from-[#f7f5f2] to-surface-warm py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
            <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
              Collaborations
            </span>
            <h2 className="mt-3 font-display text-[clamp(1.5rem,3vw,2.125rem)] font-bold text-text">
              Partners & Clients
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
              Working with institutions and industry leaders to advance India&apos;s National Quantum
              Mission from Amaravati.
            </p>
            <div
              className="mx-auto my-8 h-[3px] w-20 rounded-full bg-gradient-to-r from-petal via-blue-light to-petal"
              aria-hidden
            />
            {logos.length > 0 ? (
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex h-20 w-36 items-center justify-center rounded-xl border border-border bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:h-24 sm:w-44"
                    style={{ animationDelay: `${0.05 + index * 0.05}s` }}
                  >
                    <img src={logo} alt={`Partner ${index + 1}`} className="max-h-full max-w-full object-contain" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-md rounded-xl bg-[#f7f5f2] px-8 py-8">
                <p className="text-sm text-text-muted">
                  Partner logos will appear as collaborations are announced.
                </p>
              </div>
            )}
          </div>
        </section>

      <section className="bg-surface-warm px-5 pb-16 pt-4 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-deep via-mid to-navy p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-12">
              <div className="max-w-lg">
                <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-petal">
                  Join the journey
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                  Built in Amaravati, for the World
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/78 sm:text-base">
                  Partner on indigenous quantum hardware, explore our media hub, or build your career
                  with the team shaping India&apos;s quantum future.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col lg:min-w-[200px]">
                <AppLink
                  to="/contactus"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-display text-sm font-semibold text-deep transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Get in Touch
                </AppLink>
                <AppLink
                  to="/careers"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-6 py-3 font-display text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Careers
                </AppLink>
                <AppLink
                  to="/gallery"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-6 py-3 font-display text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Gallery
                </AppLink>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

export default Home;
