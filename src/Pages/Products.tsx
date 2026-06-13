import { Link } from "react-router-dom";

const products = [
  {
    id: "01",
    title: "Dilution Refrigerators",
    description:
      "Manufactured at scale for Amaravati Quantum Valley — cryogenic platforms enabling superconducting qubit operations at millikelvin temperatures.",
    tag: "Cryogenics",
    spec: "< 10 mK Base Temp",
  },
  {
    id: "02",
    title: "Superconducting Qubit Systems",
    description:
      "Indigenous superconducting-qubit quantum computing platforms with modular hardware and standardized electronics integration.",
    tag: "Quantum Core",
    spec: "Coaxial / Planar Flex Architecture",
  },
  {
    id: "03",
    title: "Cryogenic Interconnects",
    description:
      "Precision wiring and interconnect solutions designed for low-temperature quantum hardware environments.",
    tag: "Interconnects",
    spec: "High-Density NbTi Assemblies",
  },
  {
    id: "04",
    title: "Control Electronics",
    description:
      "RF and control electronics integration for open-access, white-box quantum computing platforms.",
    tag: "Electronics",
    spec: "Ultra-Low Phase Noise Performance",
  },
];

const platformFeatures = [
  "Open-access white-box hardware",
  "Modular, repeatable manufacturing",
  "Made in Amaravati, India",
  "Research & industry ready",
];

function SectionCurve() {
  return (
    <div
      className="h-1 w-12 bg-gradient-to-r from-petal to-navy rounded-full"
      aria-hidden
    />
  );
}

function Products() {
  return (
    <div className="bg-white text-text-muted antialiased selection:bg-petal/10 selection:text-petal">
      
      {/* --- HERO ARCHITECTURE LAYER --- */}
      <section className="relative px-5 pt-[calc(var(--nav-height)+4rem)] pb-16 sm:px-8 lg:px-10 border-b border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col space-y-4 max-w-3xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-petal block">
              SYSTEM CATALOG
            </span>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-none tracking-tight text-navy">
              Quantum Hardware Platforms.
            </h1>
            <p className="font-display text-lg text-navy/80 font-medium max-w-2xl pt-2 sm:text-xl leading-relaxed">
              Open-access, high-fidelity modular platforms engineered to accelerate local research, foundational physics scaling, and industrial deep-tech manufacturing lines.
            </p>
          </div>
        </div>
      </section>

      {/* --- ASYMMETRIC DUAL VIEWPORT LAYER --- */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
            
            {/* STICKY LEFT VIEWPORT: Operational Capabilities */}
            <div className="lg:col-span-4 lg:sticky lg:top-[calc(var(--nav-height)+3rem)]">
              <div className="rounded-3xl bg-slate-50 border border-slate-100 p-8 sm:p-10">
                <SectionCurve />
                <h2 className="font-display text-2xl font-black text-navy tracking-tight mt-6 mb-4">
                  End-to-End Quantum Stack
                </h2>
                <p className="text-sm leading-relaxed text-text-muted mb-8">
                  From deep-cryogenic modular infrastructure assemblies to low-noise high-frequency control electronics—every single layer is exposed for direct verification, optimization, and sovereign deployment.
                </p>
                
                {/* Structural Minimalist Checkboxes */}
                <div className="space-y-4 border-t border-slate-200/60 pt-6">
                  {platformFeatures.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-petal shrink-0" />
                      <span className="font-display text-xs font-bold uppercase tracking-wider text-navy">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SCROLLING RIGHT VIEWPORT: Structural Alternating Blocks */}
            <div className="lg:col-span-8 space-y-12">
              {products.map((product) => (
                <article 
                  key={product.id}
                  className="group relative grid gap-6 p-8 border border-slate-100 rounded-3xl transition-all duration-300 hover:border-navy/10 hover:shadow-md sm:p-12 sm:grid-cols-12"
                >
                  {/* Metadata Row */}
                  <div className="sm:col-span-3 flex sm:flex-col justify-between border-b border-slate-100 pb-4 sm:border-b-0 sm:pb-0 sm:border-r sm:border-slate-100 sm:pr-6">
                    <div>
                      <span className="font-display text-sm font-light text-slate-300 block mb-1">
                        PIPELINE REF
                      </span>
                      <span className="font-display text-xl font-bold text-navy tracking-tight">
                        [{product.id}]
                      </span>
                    </div>
                    <div className="sm:mt-auto text-right sm:text-left">
                      <span className="inline-block rounded-md bg-navy/5 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-navy">
                        {product.tag}
                      </span>
                    </div>
                  </div>

                  {/* Core Information Block */}
                  <div className="sm:col-span-9 sm:pl-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-tight text-navy mb-3 transition-colors group-hover:text-petal sm:text-2xl">
                        {product.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-text-muted m-0">
                        {product.description}
                      </p>
                    </div>

                    {/* Industrial Hardware Specification Label */}
                    <div className="mt-6 pt-4 border-t border-dashed border-slate-200 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono bg-slate-50 text-slate-500 border border-slate-200/60 rounded px-2 py-0.5">
                          SPEC
                        </span>
                        <span className="text-xs font-medium text-navy/70">
                          {product.spec}
                        </span>
                      </div>
                      
                      {/* Subtle Arrow Trigger Graphic */}
                      <span className="text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-petal" aria-hidden>
                        →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- ECOSYSTEM CLOSING INTERACTIVE CALLOUT --- */}
      <section className="bg-slate-50/50 border-t border-slate-100 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="bg-white border border-slate-100 p-8 sm:p-14 rounded-3xl shadow-sm text-center max-w-3xl mx-auto">
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-petal block mb-3">
              PROCUREMENT &amp; COLLABORATION
            </span>
            <h2 className="font-display text-2xl font-black text-navy tracking-tight sm:text-4xl mb-4">
              Interested in our platforms?
            </h2>
            <p className="text-sm leading-relaxed text-text-muted max-w-xl mx-auto mb-8">
              Connect directly with our engineering and integration technicians in Amaravati to configure system architectures, schedule production slots, or request baseline site evaluations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contactus"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-petal px-7 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-navy hover:-translate-y-0.5 hover:shadow-md"
              >
                <span>Contact Systems Team</span>
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                to="/company"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-navy transition-all duration-200 hover:border-navy hover:bg-slate-50"
              >
                About Qbit Force
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Products;