import { Link } from "react-router-dom";
import PageHero from "../Components/PageHero.tsx";
import Tabsection from "../Components/TabSection.tsx";
import careersImage from "../assets/careers.png";

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

      <section className="-mt-8 bg-surface-warm py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="rounded-xl border border-border bg-white px-4 py-5 text-center transition hover:-translate-y-1 hover:border-navy"
              >
                <h3 className="mb-1.5 font-display text-sm font-bold text-navy">{perk.title}</h3>
                <p className="m-0 text-[0.8125rem] leading-snug text-text-muted">{perk.text}</p>
              </div>
            ))}
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[340px_1fr]">
            <div className="mx-auto max-w-[400px] lg:sticky lg:top-[calc(var(--nav-height)+1.5rem)] lg:mx-0 lg:max-w-none">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-lg">
                <img
                  src={careersImage}
                  alt="Careers at Qbit Force Quantum"
                  className="block h-full w-full object-cover"
                />
              </div>
              <div className="mt-5 flex flex-col gap-0.5 rounded-xl border border-border border-l-[3px] border-l-petal bg-white px-5 py-4">
                <strong className="font-display text-[0.9375rem] text-navy">
                  Work with us at AQV
                </strong>
                <span className="text-[0.8125rem] text-text-muted">
                  Amaravati Quantum Valley, Andhra Pradesh
                </span>
              </div>
              <Link
                to="/contactus"
                className="mt-4 inline-block font-display text-sm font-semibold text-navy transition hover:text-petal"
              >
                General enquiry →
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm max-sm:p-5">
              <div className="mb-6">
                <span className="mb-2 inline-block font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
                  Open Roles
                </span>
                <h2 className="mb-2 font-display text-[clamp(1.375rem,2.5vw,1.75rem)] font-bold text-navy">
                  Current Openings
                </h2>
                <p className="m-0 text-[0.9375rem] text-text-muted">
                  Browse positions by department. Click Apply to view on LinkedIn.
                </p>
              </div>
              <Tabsection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;
