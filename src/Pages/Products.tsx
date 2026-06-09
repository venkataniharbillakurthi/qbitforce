import { Link } from "react-router-dom";
import PageHero from "../Components/PageHero.tsx";

const products = [
  {
    id: "01",
    title: "Dilution Refrigerators",
    description:
      "Manufactured at scale for Amaravati Quantum Valley — cryogenic platforms enabling superconducting qubit operations at millikelvin temperatures.",
    tag: "Cryogenics",
    icon: "❄",
  },
  {
    id: "02",
    title: "Superconducting Qubit Systems",
    description:
      "Indigenous superconducting-qubit quantum computing platforms with modular hardware and standardized electronics integration.",
    tag: "Quantum Core",
    icon: "⚛",
  },
  {
    id: "03",
    title: "Cryogenic Interconnects",
    description:
      "Precision wiring and interconnect solutions designed for low-temperature quantum hardware environments.",
    tag: "Interconnects",
    icon: "🔗",
  },
  {
    id: "04",
    title: "Control Electronics",
    description:
      "RF and control electronics integration for open-access, white-box quantum computing platforms.",
    tag: "Electronics",
    icon: "⚡",
  },
];

const platformFeatures = [
  "Open-access white-box hardware",
  "Modular, repeatable manufacturing",
  "Made in Amaravati, India",
  "Research & industry ready",
];

function Products() {
  return (
    <>
      <PageHero
        variant="products"
        badge="Our Products"
        title="Quantum Hardware Platforms"
        intro="Open-access, modular quantum hardware — dilution refrigerators, superconducting qubits, cryogenic interconnects, and control systems manufactured in India for research and industry."
      />

      <section className="-mt-8 bg-surface-warm py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid items-center gap-10 rounded-2xl border border-border border-l-4 border-l-navy bg-white p-8 shadow-sm sm:p-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="mb-2 inline-block font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
                Full Stack
              </span>
              <h2 className="mb-3 font-display text-[clamp(1.375rem,2.5vw,1.75rem)] font-bold text-navy">
                End-to-End Quantum Systems
              </h2>
              <p className="m-0 text-base leading-relaxed text-text-muted">
                From cryogenic infrastructure to control electronics — integrated platforms built
                for transparency, scale, and India's National Quantum Mission.
              </p>
            </div>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {platformFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-[0.9375rem] font-medium text-navy">
                  <span
                    className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-petal text-[0.6875rem] font-bold text-white"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 grid gap-5 lg:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.id}
                className="relative overflow-hidden rounded-2xl border border-border bg-white p-8 transition before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-petal before:to-navy before:opacity-0 before:transition-opacity hover:-translate-y-1.5 hover:border-navy/15 hover:shadow-lg hover:before:opacity-100"
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="text-[1.75rem] leading-none">{product.icon}</span>
                  <span className="font-display text-xs font-bold text-petal opacity-60">
                    {product.id}
                  </span>
                </div>
                <span className="mb-3 inline-block rounded-full bg-navy/10 px-3 py-1 font-display text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-navy">
                  {product.tag}
                </span>
                <h3 className="mb-3 font-display text-xl font-bold text-navy">{product.title}</h3>
                <p className="m-0 text-[0.9375rem] leading-relaxed text-text-muted">
                  {product.description}
                </p>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-8 rounded-2xl border-b-[3px] border-b-petal bg-gradient-to-br from-deep to-mid p-8 sm:p-12 max-lg:flex-col max-lg:text-center">
            <div>
              <h2 className="mb-2 font-display text-[clamp(1.25rem,2.5vw,1.5rem)] text-white">
                Interested in our platforms?
              </h2>
              <p className="m-0 max-w-[420px] text-base text-white/80 max-lg:mx-auto">
                Speak with our team about partnerships, specifications, and product enquiries.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 max-lg:justify-center">
              <Link
                to="/contactus"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-display text-[0.9375rem] font-semibold text-deep transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Contact Sales
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/company"
                className="inline-flex items-center rounded-full border-2 border-white/40 px-6 py-3.5 font-display text-[0.9375rem] font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                About Qbit Force
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
