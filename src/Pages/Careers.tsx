import { Link } from "react-router-dom";
import PageHero from "../Components/PageHero.tsx";
import Tabsection from "../Components/TabSection.tsx";

const perks = [
  { title: "Cutting-edge work", text: "Low-temperature quantum setups & NQM impact" },
  { title: "Amaravati (AQV)", text: "Build India's quantum hardware hub" },
  { title: "Cross-disciplinary", text: "Science, engineering & fabrication" },
  { title: "Growth", text: "RF, cryogenics, FPGA, Q-CTRL & more" },
];

function Careers() {
  return (
    <>
      <PageHero
        variant="careers"
        badge="Careers"
        title="Join the Quantum Revolution"
        intro="The demand for low-temperature quantum setups has grown rapidly. Help lay the pillars of India's National Quantum Mission — we're hiring graduates from basic sciences, electronics, chemical, mechanical, and computer engineering."
      />

      <section className="bg-surface-warm pb-10 pt-2 sm:pb-12 sm:pt-4 lg:pb-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="rounded-xl border border-border bg-white px-4 py-5 text-center transition-colors duration-200 hover:border-navy"
              >
                <h3 className="mb-1.5 font-display text-sm font-bold text-navy">{perk.title}</h3>
                <p className="m-0 text-[0.8125rem] leading-snug text-text-muted">{perk.text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <span className="mb-2 inline-block font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
                Open Roles
              </span>
              <h2 className="mb-2 font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-navy">
                Current Openings
              </h2>
              <p className="m-0 text-sm text-text-muted">
                Browse positions by department. Click Apply to view on LinkedIn.
              </p>
            </div>
            <Tabsection />
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border border-l-4 border-l-petal bg-white p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-sm font-semibold text-navy">Work with us at AQV</p>
              <p className="mt-1 text-sm text-text-muted">Amaravati Quantum Valley, Andhra Pradesh</p>
            </div>
            <Link
              to="/contactus"
              className="inline-flex items-center justify-center rounded-full bg-petal px-6 py-2.5 font-display text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#e01820]"
            >
              General enquiry →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;
