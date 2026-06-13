import { heroSlides } from "../content/mediaHub";

type Variant =
  | "about"
  | "team"
  | "contact"
  | "products"
  | "careers"
  | "gallery"
  | "publications"
  | "press"
  | "videos"
  | "legal";

type SurfaceTone = "warm" | "white" | "dark";

type Props = {
  variant: Variant;
  title: string;
  intro: string;
  badge?: string;
  /** Background shown below the hero curve — matches the next page section */
  surfaceTone?: SurfaceTone;
};

const surfaceBg: Record<SurfaceTone, string> = {
  warm: "bg-surface-warm",
  white: "bg-white",
  dark: "bg-deep",
};

const heroImages = heroSlides.filter((s) => s.type === "image").map((s) => s.src);

const variantBackground: Record<Variant, string> = {
  about: heroImages[0] ?? "",
  team: heroImages[2] ?? heroImages[0] ?? "",
  contact: heroImages[1] ?? heroImages[0] ?? "",
  products: heroImages[3] ?? heroImages[0] ?? "",
  careers: heroImages[0] ?? "",
  gallery: heroImages[1] ?? heroImages[0] ?? "",
  publications: heroImages[2] ?? heroImages[0] ?? "",
  press: heroImages[0] ?? "",
  videos: heroImages[1] ?? heroImages[0] ?? "",
  legal: heroImages[3] ?? heroImages[0] ?? "",
};

const variantChips: Partial<Record<Variant, string[]>> = {
  about: ["Amaravati", "India", "Quantum Hardware"],
  team: ["Leadership", "Research", "Engineering"],
  contact: ["Partnerships", "Products", "Careers"],
  products: ["Cryogenics", "Qubit systems", "Open-access"],
  careers: ["Engineering", "Science", "Amaravati (AQV)"],
  gallery: ["Facility", "Hardware", "Amaravati"],
  publications: ["Blogs", "Insights", "Research"],
  press: ["Media", "Coverage", "News"],
  videos: ["Lab footage", "Events", "Education"],
};

function VariantMeta({ variant }: { variant: Variant }) {
  if (variant === "contact") {
    return (
      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
        <a
          href="mailto:Info@qbitforcequantum.com"
          className="font-semibold text-white no-underline transition-colors duration-200 hover:text-petal"
        >
          Info@qbitforcequantum.com
        </a>
        <span className="h-1 w-1 rounded-full bg-petal/80" aria-hidden />
        <span className="text-white/70">Vijayawada, Andhra Pradesh</span>
      </div>
    );
  }

  const chips = variantChips[variant];
  if (!chips?.length) return null;

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {chips.map((chip) => (
        <span
          key={chip}
          className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-display text-xs font-semibold text-white/90 backdrop-blur-sm"
        >
          {chip}
        </span>
      ))}
    </div>
  );
}

function PageHero({ variant, title, intro, badge, surfaceTone = "warm" }: Props) {
  const bgImage = variantBackground[variant];

  return (
    <header className="relative">
      <section className="relative min-h-[min(38vh,360px)] overflow-hidden sm:min-h-[min(42vh,400px)]">
        {bgImage && (
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 h-full w-full scale-105 object-cover"
            loading="eager"
            fetchPriority="high"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-deep/95 via-deep/82 to-mid/70" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/20 to-deep/50" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-petal/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-blue-light/20 blur-3xl"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-12 pt-[calc(var(--nav-height)+1.75rem)] sm:px-8 sm:pb-14 lg:px-10">
          {badge && (
            <span className="mb-3 inline-flex w-fit items-center gap-2.5 font-display text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-petal">
              <span className="h-px w-10 bg-petal" aria-hidden />
              {badge}
            </span>
          )}

          <h1 className="max-w-3xl font-display text-[clamp(1.875rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-tight text-white">
            {title}
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-[1.0625rem] sm:leading-relaxed">
            {intro}
          </p>

          <VariantMeta variant={variant} />
        </div>
      </section>

      {surfaceTone !== "dark" ? (
        <div
          className={`relative z-20 ${surfaceBg[surfaceTone]} rounded-t-[2rem] pb-1 sm:rounded-t-[2.5rem]`}
        >
          <div className="mx-auto flex justify-center pt-4 sm:pt-5">
            <div
              className="h-1.5 w-16 rounded-full bg-gradient-to-r from-petal via-blue-light to-petal"
              aria-hidden
            />
          </div>
        </div>
      ) : (
        <div className="relative z-20 h-px bg-white/10" aria-hidden />
      )}
    </header>
  );
}

export default PageHero;
