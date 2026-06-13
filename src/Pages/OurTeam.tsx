import { useState } from "react";
import { Link } from "react-router-dom";
import { teamMembers } from "../data/teamData";

// Top three — Leaders
const leaders = [
  {
    id: "leader-1",
    name: "Dr. L. Venkata Subramaniam",
    role: "CEO",
    image: "https://res.cloudinary.com/dps46p3m8/image/upload/v1781192859/Venkat-Bo_L1uKO_jcqwtk.jpg", // Replace with actual asset path if available
    bio: "Steering global commercialization strategy, multi-stakeholder ecosystem partnerships, and corporate vision for India's indigenous white-box quantum computers."
  },
  {
    id: "leader-2",
    name: "Dr. Gopal Joshi",
    role: "PROGRAM DIRECTOR",
    image: "https://res.cloudinary.com/dps46p3m8/image/upload/v1781192855/gopaljoshi-CZvOC0Rb_nrwwo5.jpg", // Replace with actual asset path if available
    bio: "Orchestrating cross-functional engineering deliverables, National Quantum Mission alignment milestones, and deep-tech scaling frameworks."
  },
  {
    id: "leader-3",
    name: "Dr. Subhash Kalidindi",
    role: "SENIOR SCIENTIST",
    image: "https://res.cloudinary.com/dps46p3m8/image/upload/v1781192856/Subhash1-7yZhVpAJ_qxiwno.jpg", // Replace with actual asset path if available
    bio: "Leading advanced research in cryogenic wiring infrastructure, superconducting qubit optimization, and microfabrication hardware design."
  }
];

function SectionCurve() {
  return (
    <div
      className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-petal via-blue-light to-petal"
      aria-hidden
    />
  );
}

function OurTeam() {
  // Pure click interaction logic for the custom split panel accordion
  const [activeLeader, setActiveLeader] = useState(0);

  return (
    <div className="relative bg-white antialiased text-text-muted">
      
      {/* --- SECTION 1: STICKY HERO --- */}
      <section className="sticky top-0 z-0 flex min-h-[100dvh] items-center bg-white px-5 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-4xl py-[calc(var(--nav-height)+2rem)] text-center">
          <span className="font-display text-xs font-bold uppercase tracking-[0.22em] text-petal">
            Our People
          </span>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-navy">
            The Minds Behind
            <span className="mt-1 block text-petal">Qbit Force</span>
          </h1>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-petal via-blue-light to-petal" />

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            Building on decades of experience in RF engineering, advanced fabrication, and quantum
            technologies — we accelerate India&apos;s National Quantum Mission by establishing a robust
            quantum hardware ecosystem from Amaravati.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {["Leaders", "Core Team", "Amaravati (AQV)"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-border px-4 py-1.5 font-display text-xs font-semibold text-navy"
              >
                {chip}
              </span>
            ))}
          </div>

         

         
        </div>
      </section>

      {/* --- SECTION 2: LEADERS (WHITE LAYER OVERLAYS HERO) --- */}
      <div className="relative z-10 min-h-[100dvh] overflow-hidden rounded-t-[2rem] bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.05)] sm:rounded-t-[2.5rem]">
        <SectionCurve />
        
        <section className="py-20 sm:py-28 text-text-muted">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            
            {/* Section Heading */}
            <div className="mb-20 border-l-2 border-petal pl-6">
              <span className="mb-1 block font-display text-xs font-bold uppercase tracking-[0.25em] text-petal">
                Our
              </span>
              <h2 className="font-display text-3xl font-black tracking-tight text-navy sm:text-5xl">
                Leaders
              </h2>
            </div>

            {/* Asymmetric Split Click Presentation Row */}
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              
              {/* Dynamic Image Panel Viewport */}
              <div className="lg:col-span-5 relative aspect-square w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl">
                {leaders.map((member, index) => (
                  <div
                    key={member.id}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      activeLeader === index 
                        ? "opacity-100 scale-100 pointer-events-auto" 
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top filter grayscale contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="font-display text-xs font-bold uppercase tracking-widest text-white/70 mb-1">
                        {member.role}
                      </p>
                      <h4 className="font-display text-2xl font-bold tracking-tight text-white">
                        {member.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clean Typographic Navigation Pipeline List */}
              <div className="lg:col-span-7 flex flex-col border-t border-slate-100">
                {leaders.map((member, index) => {
                  const isSelected = activeLeader === index;

                  return (
                    <div
                      key={member.id}
                      role="button"
                      tabIndex={0}
                      className={`group border-b border-slate-100 py-7 transition-all duration-300 outline-none ${
                        isSelected ? "bg-slate-50/60 px-4 rounded-xl my-1 border-transparent" : ""
                      }`}
                      onClick={() => setActiveLeader(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveLeader(index);
                        }
                      }}
                    >
                      <div className="flex items-start justify-between gap-6">
                        
                        <div className="flex items-baseline gap-6 sm:gap-12 w-full">
                          <span className={`font-display text-sm font-semibold tracking-wider transition-colors duration-200 ${
                            isSelected ? "text-petal" : "text-slate-300"
                          }`}>
                            0{index + 1}
                          </span>
                          
                          <div className="space-y-1">
                            <span className="block font-display text-[0.6875rem] font-bold uppercase tracking-widest text-petal">
                              {member.role}
                            </span>
                            <h3 className={`font-display text-xl font-bold tracking-tight transition-colors duration-200 sm:text-2xl ${
                              isSelected ? "text-navy" : "text-navy/50 group-hover:text-navy/80"
                            }`}>
                              {member.name}
                            </h3>
                            
                            {/* Expandable Box Block details */}
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              isSelected ? "max-h-[100px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"
                            }`}>
                              <p className="text-sm text-text-muted leading-relaxed font-normal max-w-xl">
                                {member.bio}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Chevron Trigger State */}
                        <div className="shrink-0 pt-2">
                          <svg
                            className={`h-5 w-5 text-slate-300 transition-transform duration-300 ${
                              isSelected ? "rotate-90 text-petal" : "group-hover:text-slate-400"
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>
      </div>

      {/* --- SECTION 3: CORE TEAM (WHITE LAYER OVERLAYS LEADERS) --- */}
      <div className="relative z-20 min-h-[100dvh] overflow-hidden rounded-t-[2rem] bg-white shadow-[0_-30px_60px_rgba(0,0,0,0.06)] border-t border-slate-100 sm:rounded-t-[2.5rem]">
        <SectionCurve />
        
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            
            <div className="mx-auto mb-20 max-w-[580px] text-center">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-petal">
                Our People
              </span>
              <h2 className="mt-2 mb-4 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl">
                Core Team
              </h2>
              <div className="mx-auto mb-4 h-0.5 w-12 bg-border" />
              <p className="text-base leading-relaxed text-text-muted">
                Engineers, researchers, and specialists building India&apos;s quantum future at
                Amaravati Quantum Valley.
              </p>
            </div>

            {/* Custom Fluid Microgrid without background boxes */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {teamMembers.map((member) => (
                <article
                  key={member.id}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="relative mb-4 h-[125px] w-[125px] overflow-hidden rounded-full border border-slate-100 p-1.5 transition-all duration-300 group-hover:scale-102 group-hover:shadow-md">
                    <div className="h-full w-full overflow-hidden rounded-full bg-slate-50">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="px-2">
                    <h4 className="font-display text-sm font-bold text-navy tracking-tight mb-0.5 transition-colors duration-200 group-hover:text-petal">
                      {member.name}
                    </h4>
                    {member.role ? (
                      <p className="m-0 text-xs text-text-muted font-medium">
                        {member.role}
                      </p>
                    ) : (
                      <p className="m-0 text-xs italic text-text-muted opacity-60">
                        Core Team
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* --- MINIMALIST FOOTER REVOLUTION CTA --- */}
        <section className="bg-slate-50 py-16 sm:py-24 border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 sm:p-12 shadow-sm">
              <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-petal/5 blur-2xl pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 relative z-10">
                <div className="max-w-xl">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-navy mb-2">
                    Join the quantum hardware revolution
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted sm:text-base">
                    We are actively expanding our cross-functional teams in high-frequency RF engineering, cryogenic tooling deployment, and core quantum foundry operations.
                  </p>
                </div>
                
                <div className="shrink-0">
                  <Link
                    to="/careers"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-petal px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-navy hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span>View open positions</span>
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}

export default OurTeam;