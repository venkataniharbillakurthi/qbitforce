import { useState } from "react";
import { Link } from "react-router-dom";
import { indiaMapUrl } from "../content/mediaHub";

const missionCards = [
  {
    title: "Our Mission",
    text: "Build scalable, indigenous quantum hardware platforms that accelerate India's National Quantum Mission and empower local innovation.",
    link: "/products",
    linkLabel: "Our solutions",
  },
  {
    title: "Our Vision",
    text: "Establish Amaravati as a global quantum manufacturing hub — transparent, open-access, and built for startups, researchers, and industry.",
    link: "/company/ourteam",
    linkLabel: "Meet the team",
  },
  {
    title: "Our Values",
    text: "Transparency, manufacturing excellence, ecosystem collaboration, and open access guide every decision we make at Qbit Force.",
    link: "/contactus",
    linkLabel: "Partner with us",
  },
];

function SectionCurve() {
  return (
    <div
      className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-petal via-blue-light to-petal"
      aria-hidden
    />
  );
}

function Company() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative bg-white antialiased">
      {/* --- SECTION 1: STICKY HERO ABOUT --- */}
      <section className="sticky top-0 z-0 flex min-h-[100dvh] items-center bg-white px-5 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-3xl py-[calc(var(--nav-height)+2rem)] text-center">
          <span className="font-display text-xs font-bold uppercase tracking-[0.22em] text-petal">
            Our Mission
          </span>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-tight text-navy">
            About Us
          </h1>
          <p className="mx-auto mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
            By creating a white-box quantum computer platform, we unlock transparency → understanding →
            innovation → new markets, enabling startups and manufacturers to design, optimize, and produce
            advanced components like cryogenic wiring, superconducting qubits, and precision metal
            enclosures, all critical in quantum hardware.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy font-medium">
            {missionCards[0].text}
          </p>
          <Link
            to={missionCards[0].link}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-petal px-7 py-3 font-display text-sm font-semibold text-white no-underline transition hover:bg-[#e01820]"
          >
            {missionCards[0].linkLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* --- SECTION 2: WHO WE ARE (OVERLAYS SECTION 1) --- */}
      <div className="relative z-10 min-h-[100dvh] overflow-hidden rounded-t-[2rem] bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.05)] sm:rounded-t-[2.5rem]">
        <SectionCurve />
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="overflow-hidden rounded-3xl border border-border">
                <img
                  src={indiaMapUrl}
                  alt="India map — Qbit Force Amaravati, Andhra Pradesh"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-petal">
                  Who We Are
                </span>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-text-muted">
                  <p>
                    Qbit Force Quantum Private Limited, registered in Amaravati, AP is the states own
                    Quantum hardware facility that builds upon the visionary road map of the Amaravati
                    Quantum Valley (AQV) and the Chief Minister, Sri N. Chandra Babu Naidu on developing a
                    local manufacturing hub for nurturing the Quantum system both at the national and
                    international levels.
                  </p>
                  <p>
                    At the foundation stone ceremony on February 7, 2026, under the vision &lsquo;Built in
                    Amaravati, for the World,&rsquo; the Honorable Chief Minister and the Honorable Minister
                    of Science &amp; Technology, Dr. Jitendra Singh Rana, announced an MoU with Qbit Force
                    Quantum Pvt. Ltd. to establish two quantum computers in Amaravati.
                  </p>
                  <p>
                    QF will catalyze a high-tech ecosystem, where local manufacturers skilled in metalwork,
                    cryogenics, electronics and microfabrication can participate in a market projected to
                    reach billions globally. As cheaper, improved parts emerge, they will feed back into the
                    ecosystem, strengthening our capabilities while driving high skilled job creation,
                    investment, and technological leadership in our state.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* --- SECTION 3: STRATEGIC ACCORDION (OVERLAYS SECTION 2) --- */}
      <div className="relative z-20 min-h-[100dvh] overflow-hidden rounded-t-[2rem] bg-slate-950 shadow-[0_-20px_60px_rgba(0,0,0,0.15)] sm:rounded-t-[2.5rem]">
        <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-white/10" aria-hidden />
        
        <section className="py-20 sm:py-28 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            
            {/* Header style matching reference image intent */}
            <div className="mb-20">
              <span className="mb-2 block font-display text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                Strategic Intent
              </span>
              <h2 className="font-display text-4xl font-light tracking-tight text-white sm:text-5xl">
                Mission, Vision &amp; Core Values
              </h2>
            </div>

            {/* Pure Click Accordion Pipeline */}
            <div className="flex flex-col border-t border-white/10">
              {missionCards.map((card, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={card.title}
                    role="button"
                    tabIndex={0}
                    className="group border-b border-white/10 py-8 transition-all duration-300 outline-none focus-visible:bg-white/[0.02]"
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveIndex(index);
                      }
                    }}
                  >
                    <div className="flex items-start justify-between gap-6">
                      
                      {/* Left: Indicator Index & Dynamic Title */}
                      <div className="flex items-baseline gap-8 sm:gap-16 w-full max-w-xl">
                        <span className="font-display text-sm font-semibold tracking-wider text-slate-500">
                          0{index + 1}
                        </span>
                        <h3 className={`font-display text-xl font-medium tracking-tight transition-colors duration-300 sm:text-2xl ${
                          isOpen ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                        }`}>
                          {card.title}
                        </h3>
                      </div>

                      {/* Right: Dynamic Slidedown Content (No Images) */}
                      <div className="w-full max-w-2xl hidden md:block">
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                          }`}
                        >
                          <p className="text-base text-slate-400 leading-relaxed font-light mb-6">
                            {card.text}
                          </p>
                          <Link
                            to={card.link}
                            onClick={(e) => e.stopPropagation()} // Keeps Link from re-triggering active index state switch
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2 font-display text-xs font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-slate-950"
                          >
                            <span>{card.linkLabel}</span>
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>

                      {/* Far Right: Clean Toggle Chevron Indicator */}
                      <div className="shrink-0 pt-1">
                        <svg
                          className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-white" : "group-hover:text-slate-300"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>

                    </div>

                    {/* Mobile Only: Content view for stacked layouts */}
                    <div className="md:hidden">
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-[300px] opacity-100 mt-4 pl-12" : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                      >
                        <p className="text-sm text-slate-400 leading-relaxed font-light mb-4">
                          {card.text}
                        </p>
                        <Link
                          to={card.link}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-white"
                        >
                          <span>{card.linkLabel}</span>
                        </Link>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Company;