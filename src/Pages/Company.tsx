import { Link } from "react-router-dom";
import PageHero from "../Components/PageHero.tsx";
import indiaMap from "../assets/Indiamap.jpeg";

const milestones = [
  {
    year: "2026",
    title: "Foundation Stone Ceremony",
    text: "MoU announced for two quantum computers in Amaravati under 'Built in Amaravati, for the World.'",
  },
  {
    year: "AQV",
    title: "Amaravati Quantum Valley",
    text: "State quantum hardware facility aligned with Andhra Pradesh's visionary quantum roadmap.",
  },
  {
    year: "India",
    title: "National Quantum Mission",
    text: "Indigenous superconducting platforms enabling research, industry, and MSME participation.",
  },
];

const pillars = [
  {
    icon: "◇",
    title: "Transparency",
    text: "White-box hardware unlocks understanding and barrier-free innovation.",
  },
  {
    icon: "◆",
    title: "Manufacturing",
    text: "Dilution refrigerators and qubit systems at scale, Made in Amaravati.",
  },
  {
    icon: "○",
    title: "Ecosystem",
    text: "Local metalwork, cryogenics, electronics, and microfabrication partners.",
  },
  {
    icon: "□",
    title: "Open Access",
    text: "Platforms for startups, researchers, and commercial quantum technologies.",
  },
];

function Company() {
  return (
    <>
      <PageHero
        variant="about"
        badge="About Qbit Force"
        title="Building India's Quantum Future"
        intro="By creating a white-box quantum computer platform, we unlock transparency → understanding → innovation → new markets — enabling startups and manufacturers to design, optimize, and produce advanced quantum hardware components."
      />

      <section className="bg-surface-warm py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-lg">
                <img
                  src={indiaMap}
                  alt="India — Amaravati Quantum Valley"
                  className="block h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 flex max-w-[260px] items-center gap-4 rounded-xl border border-border bg-white p-4 shadow-md sm:right-4 lg:-right-4">
                <span className="font-display text-[2rem] font-bold leading-none text-petal">2</span>
                <span className="text-sm leading-snug text-text-muted">
                  Quantum computers planned for Amaravati
                </span>
              </div>
            </div>
            <div className="text-[1.0625rem] leading-[1.85] text-text-muted">
              <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
                Who We Are
              </span>
              <h2 className="mb-5 mt-3 font-display text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy">
                Andhra Pradesh's Quantum Hardware Facility
              </h2>
              <p className="mb-5">
                Qbit Force Quantum Private Limited, registered in Amaravati, AP, is the state's own
                quantum hardware facility building upon the Amaravati Quantum Valley (AQV) roadmap and
                the vision of developing a local manufacturing hub for quantum systems nationally and
                internationally.
              </p>
              <p className="mb-5">
                At the foundation stone ceremony on February 7, 2026, the Honorable Chief Minister and
                Dr. Jitendra Singh Rana announced an MoU with Qbit Force Quantum Pvt. Ltd. to establish
                two quantum computers in Amaravati.
              </p>
              <p className="mb-5">
                QF will catalyze a high-tech ecosystem where local manufacturers skilled in metalwork,
                cryogenics, electronics, and microfabrication participate in a market projected to reach
                billions globally.
              </p>
              <Link
                to="/company/ourteam"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-petal px-7 py-3.5 font-display text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e01820] hover:shadow-lg"
              >
                Meet our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 text-center">
            <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
              Timeline
            </span>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-navy mb-6">
              Key Milestones
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {milestones.map((m) => (
              <div
                key={m.title}
                className="relative rounded-2xl border border-border border-t-[3px] border-t-petal bg-[#f3f2ef] p-8 transition hover:-translate-y-1.5 hover:shadow-md"
              >
                <span className="mb-3 inline-block font-display text-xs font-bold uppercase tracking-[0.12em] text-petal">
                  {m.year}
                </span>
                <h3 className="mb-3 font-display text-lg text-navy">{m.title}</h3>
                <p className="m-0 text-[0.9375rem] leading-relaxed text-text-muted">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#f3f2ef] to-surface-warm py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 text-center">
            <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
              Our Approach
            </span>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-navy mb-6">
              Four Pillars of Impact
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-white p-8 text-center transition hover:border-navy hover:shadow-md"
              >
                <h3 className="mb-2 font-display text-[1.0625rem] text-navy">{p.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-warm py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative grid items-center gap-12 overflow-hidden rounded-2xl border-b-4 border-b-petal bg-gradient-to-br from-deep to-mid p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr]">
            <div
              className="pointer-events-none absolute -right-[10%] -top-[30%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,30,38,0.15)_0%,transparent_70%)]"
              aria-hidden
            />
            <div className="relative">
              <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/90">
                Our Vision
              </span>
              <h2 className="mb-4 mt-3 font-display text-[clamp(1.5rem,3vw,2rem)] text-white">
                Empowering Innovation Across India
              </h2>
              <p className="m-0 text-[1.0625rem] leading-[1.8] text-white/80">
                By enabling startups and researchers to access high-quality, locally made materials, we
                stimulate innovation, create high-tech jobs, and develop a sustainable supply chain that
                feeds the regional quantum technology ecosystem — strengthening MSMEs across Andhra
                Pradesh for national and global demands.
              </p>
            </div>
            <div className="relative rounded-xl border border-white/10 bg-white/[0.06] p-8 text-center">
              <p className="mb-5 text-base text-white/85">
                Ready to partner on indigenous quantum hardware?
              </p>
              <Link
                to="/contactus"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-petal px-7 py-3.5 font-display text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e01820] hover:shadow-lg"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Company;
