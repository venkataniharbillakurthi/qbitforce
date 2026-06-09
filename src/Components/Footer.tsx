import AppLink from "./AppLink";
import { FaLinkedinIn, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoImage from "../assets/QFwhite.png";

const companyLinks = [
  { to: "/", label: "Home" },
  { to: "/company", label: "About Us" },
  { to: "/company/ourteam", label: "Our Team" },
  { to: "/products", label: "Products" },
  { to: "/careers", label: "Careers" },
  { to: "/contactus", label: "Contact" },
];

const mediaLinks = [
  { to: "/gallery", label: "Gallery" },
  { to: "/publications", label: "Publications" },
  { to: "/videos", label: "Videos" },
  { to: "/press", label: "Press & Media" },
];

const legalLinks = [
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/privacypolicy", label: "Privacy Policy" },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-deep from-0% via-[#0a0a3d] via-35% via-mid via-70% to-slate to-100% pt-16 text-white sm:pt-20 lg:pt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,30,38,0.12)_0%,transparent_65%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-12 lg:pb-14">
          <div className="max-w-sm sm:col-span-2 lg:col-span-1 lg:max-w-xs">
            <AppLink to="/" className="mb-5 inline-flex items-center gap-3.5 no-underline transition hover:opacity-90">
              <img src={logoImage} alt="Qbit Force Quantum" className="h-auto w-[52px]" />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold tracking-tight text-white">Qbit Force</span>
                <span className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-petal">
                  Quantum
                </span>
              </div>
            </AppLink>
            <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/65">
              Made in Amaravati, Built for the World — indigenous quantum hardware for India&apos;s
              National Quantum Mission.
            </p>
            <div className="mb-6 flex flex-col gap-2.5">
              <a
                href="mailto:Info@qbitforcequantum.com"
                className="inline-flex items-start gap-2.5 text-sm text-white/75 no-underline transition hover:text-petal"
              >
                <FaEnvelope className="mt-0.5 shrink-0 text-petal" />
                Info@qbitforcequantum.com
              </a>
              <span className="inline-flex items-start gap-2.5 text-sm text-white/75">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-petal" />
                Vijayawada, Andhra Pradesh, India
              </span>
            </div>
            <div className="flex gap-2.5">
              <a
                href="https://www.linkedin.com/company/qbit-force/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-lg text-white no-underline transition hover:-translate-y-0.5 hover:border-petal hover:bg-petal"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/qbit_force"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-lg text-white no-underline transition hover:-translate-y-0.5 hover:border-petal hover:bg-petal"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          {[
            { title: "Company", links: companyLinks },
            { title: "Media", links: mediaLinks },
            { title: "Legal", links: legalLinks },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="mb-5 border-b border-white/10 pb-3 font-display text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white/45">
                {col.title}
              </h3>
              <ul className="m-0 list-none p-0">
                {col.links.map((link) => (
                  <li key={link.to} className="mb-2">
                    <AppLink
                      to={link.to}
                      className="inline-block py-0.5 text-[0.9375rem] font-medium text-white/78 no-underline transition hover:translate-x-1 hover:text-white"
                    >
                      {link.label}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="m-0 text-[0.8125rem] text-white/45">
            © {new Date().getFullYear()} QbitForce Quantum Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {legalLinks.map((link) => (
              <AppLink
                key={link.to}
                to={link.to}
                className="text-[0.8125rem] text-white/50 no-underline transition hover:text-petal"
              >
                {link.label}
              </AppLink>
            ))}
          </div>
        </div>
      </div>

      <div
        className="h-1 bg-gradient-to-r from-petal via-blue-light via-navy to-petal"
        aria-hidden
      />
    </footer>
  );
}

export default Footer;
