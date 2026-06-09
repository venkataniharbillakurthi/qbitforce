type Variant = "about" | "team" | "contact" | "products" | "careers";

type Props = {
  variant: Variant;
  title: string;
  intro: string;
  badge?: string;
};

const variantBg: Record<Variant, string> = {
  about: "bg-gradient-to-br from-deep from-0% via-[#0a0a3d] via-40% to-mid to-100%",
  team: "bg-gradient-to-br from-navy from-0% via-mid via-55% to-slate to-100%",
  contact: "bg-gradient-to-br from-deep from-0% via-[#1a1040] via-50% to-mid to-100%",
  products: "bg-gradient-to-br from-deep from-0% via-[#0d0d4a] via-45% to-mid to-100%",
  careers: "bg-gradient-to-br from-navy from-0% via-mid via-50% to-[#1a2d5c] to-100%",
};

function PageHero({ variant, title, intro, badge }: Props) {
  return (
    <section
      className={`relative overflow-hidden pb-16 pt-[calc(var(--nav-height)+3.5rem)] sm:pb-20 ${variantBg[variant]}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(255, 30, 38, 0.15) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(93, 143, 216, 0.2) 0%, transparent 40%), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 100% 100%, 48px 48px, 48px 48px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[5%] -top-[20%] h-[min(500px,60vw)] w-[min(500px,60vw)] rounded-full bg-[radial-gradient(circle,rgba(255,30,38,0.18)_0%,transparent_65%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-[800px]">
          {badge && (
            <span className="mb-5 inline-block rounded-full border border-petal/35 bg-petal/10 px-3.5 py-1.5 font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
              {badge}
            </span>
          )}
          <h1 className="mb-5 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.12] tracking-tight text-white">
            {title}
          </h1>
          <p className="max-w-[640px] text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed text-white/82">
            {intro}
          </p>

          {variant === "about" && (
            <div className="mt-8 flex flex-wrap items-center gap-3 font-display text-[0.8125rem] font-semibold uppercase tracking-wider text-white/55">
              <span>Amaravati</span>
              <span className="h-1 w-1 rounded-full bg-petal" />
              <span>India</span>
              <span className="h-1 w-1 rounded-full bg-petal" />
              <span>Quantum Hardware</span>
            </div>
          )}

          {variant === "team" && (
            <div className="mt-10 flex max-w-[480px] flex-wrap items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-5 sm:gap-6">
              <div className="flex flex-col gap-0.5">
                <strong className="font-display text-[0.9375rem] text-white">RF & Quantum</strong>
                <span className="text-[0.8125rem] text-white/60">Decades of expertise</span>
              </div>
              <div className="hidden h-9 w-px bg-white/20 sm:block" />
              <div className="flex flex-col gap-0.5">
                <strong className="font-display text-[0.9375rem] text-white">NQM</strong>
                <span className="text-[0.8125rem] text-white/60">National Quantum Mission</span>
              </div>
            </div>
          )}

          {variant === "contact" && (
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[0.9375rem]">
              <a
                href="mailto:Info@qbitforcequantum.com"
                className="border-b border-petal/60 font-semibold text-white no-underline transition hover:border-petal hover:text-petal"
              >
                Info@qbitforcequantum.com
              </a>
              <span className="h-1 w-1 rounded-full bg-petal" />
              <span className="text-white/65">Vijayawada, AP</span>
            </div>
          )}

          {(variant === "products" || variant === "careers") && (
            <div className="mt-8 flex flex-wrap gap-2">
              {(variant === "products"
                ? ["Cryogenics", "Qubit systems", "Open-access"]
                : ["Engineering", "Science", "Amaravati (AQV)"]
              ).map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 font-display text-xs font-semibold text-white/90"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className="absolute bottom-[-1px] left-0 right-0 h-16 bg-surface-warm [clip-path:ellipse(75%_100%_at_50%_100%)]"
        aria-hidden
      />
    </section>
  );
}

export default PageHero;
