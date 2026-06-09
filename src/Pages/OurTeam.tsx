import { Link } from "react-router-dom";
import PageHero from "../Components/PageHero.tsx";
import { coreTeamMembers, teamMembers } from "../data/teamData";

function OurTeam() {
  return (
    <>
      <PageHero
        variant="team"
        badge="Our People"
        title="The Minds Behind Qbit Force"
        intro="Building on decades of experience in RF engineering, advanced fabrication, and quantum technologies — we accelerate the National Quantum Mission by establishing a robust quantum hardware ecosystem in India."
      />

      <section className="bg-surface-warm py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-12 max-w-[560px] text-center">
            <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
              Leadership
            </span>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-navy mb-6">
              Core Team
            </h2>
            <p className="m-0 text-[1.0625rem] leading-relaxed text-text-muted">
              Scientists and leaders driving indigenous quantum hardware from Amaravati.
            </p>
          </div>
          <div className="mx-auto grid gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {coreTeamMembers.map((member, index) => (
              <article
                key={member.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-mid to-slate">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-deep/50 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="relative p-6">
                  <span className="absolute -top-3 right-5 font-display text-[2.5rem] font-bold leading-none text-petal/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-1.5 font-display text-[1.0625rem] font-bold leading-snug text-navy">
                    {member.name}
                  </h3>
                  <p className="m-0 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-petal">
                    {member.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-12 max-w-[560px] text-center">
            <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
              People
            </span>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-navy mb-6">
              Our Team
            </h2>
            <p className="m-0 text-[1.0625rem] leading-relaxed text-text-muted">
              Engineers, researchers, and specialists building India's quantum future.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-border bg-[#f3f2ef] px-5 pb-6 pt-8 text-center transition hover:-translate-y-1.5 hover:border-navy"
              >
                <div className="mb-4 h-[120px] w-[120px] overflow-hidden rounded-full border-[3px] border-white ring-2 ring-border transition group-hover:ring-petal group-hover:shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="mb-1 font-display text-[0.9375rem] font-semibold text-navy">
                    {member.name}
                  </h4>
                  {member.role ? (
                    <p className="m-0 text-[0.8125rem] text-text-muted">{member.role}</p>
                  ) : (
                    <p className="m-0 text-[0.8125rem] italic text-text-muted opacity-70">
                      Qbit Force Quantum
                    </p>
                  )}
                </div>
                <span
                  className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-petal to-navy transition group-hover:scale-x-100"
                  aria-hidden
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-navy/5 to-[#f3f2ef] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border border-l-4 border-l-petal bg-white p-8 sm:p-10 max-sm:flex-col max-sm:text-center">
            <div>
              <h2 className="mb-1.5 font-display text-[clamp(1.25rem,2.5vw,1.5rem)] text-navy">
                Join the quantum hardware revolution
              </h2>
              <p className="m-0 text-[0.9375rem] text-text-muted">
                We're growing our team across engineering, science, and operations.
              </p>
            </div>
            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-petal px-7 py-3.5 font-display text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e01820] hover:shadow-lg"
            >
              View open positions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurTeam;
