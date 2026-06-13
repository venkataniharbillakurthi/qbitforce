import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteLogoUrl } from "../content/mediaHub";

const companyLinks = [
  { to: "/company", label: "About Us", desc: "Our mission & vision" },
  { to: "/company/ourteam", label: "Our Team", desc: "Leadership & people" },
];

const mediaLinks = [
  { to: "/gallery", label: "Gallery", desc: "Photos & events" },
  { to: "/publications", label: "Publications", desc: "Articles & research" },
  { to: "/videos", label: "Videos", desc: "Lab & media footage" },
  { to: "/press", label: "Press & Media", desc: "News & releases" },
];

const navLinkBase =
  "inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-display text-sm font-medium no-underline transition hover:-translate-y-px";

function navLinkClass(active: boolean) {
  return active
    ? `${navLinkBase} border-2 border-petal bg-white font-semibold text-navy shadow-[0_4px_14px_rgba(255,30,38,0.15)] hover:bg-[#f7f5f2] hover:text-navy`
    : `${navLinkBase} border border-border/80 bg-white text-navy shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:bg-[#f7f5f2] hover:text-navy`;
}

const navPillClass =
  "rounded-full border border-white/50 bg-white/25 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-md";
const dropdownClass =
  "rounded-2xl border border-white/60 bg-white/90 p-2 shadow-[0_16px_48px_rgba(0,1,127,0.12)] backdrop-blur-xl";

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenGroups, setMobileOpenGroups] = useState<Set<string>>(new Set());
  const closeDropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const closeMenu = () => {
    setExpanded(false);
    setOpenDropdown(null);
    setMobileOpenGroups(new Set());
  };

  const openDropdownMenu = (name: string) => {
    if (closeDropdownTimer.current) {
      clearTimeout(closeDropdownTimer.current);
      closeDropdownTimer.current = null;
    }
    setOpenDropdown(name);
  };

  const scheduleCloseDropdown = () => {
    if (closeDropdownTimer.current) clearTimeout(closeDropdownTimer.current);
    closeDropdownTimer.current = setTimeout(() => {
      setOpenDropdown(null);
      closeDropdownTimer.current = null;
    }, 150);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileGroup = (name: string) => {
    setMobileOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  useEffect(() => {
    if (expanded) setMobileOpenGroups(new Set(["company", "media"]));
  }, [expanded]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded]);

  useEffect(() => {
    setExpanded(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (closeDropdownTimer.current) clearTimeout(closeDropdownTimer.current);
    };
  }, []);

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname === path || location.pathname.startsWith(path + "/");

  const companyActive = location.pathname.startsWith("/company");
  const mediaActive = ["/gallery", "/publications", "/videos", "/press"].some((p) =>
    location.pathname.startsWith(p),
  );

  const isHome = location.pathname === "/";
  const heroNav = isHome && !scrolled && !expanded;

  const contactCta = (
    <Link
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-petal to-[#e01820] px-5 py-2.5 font-display text-sm font-semibold text-white no-underline shadow-[0_4px_14px_rgba(255,30,38,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(255,30,38,0.38)]"
      to="/contactus"
      onClick={closeMenu}
    >
      <span>Get in Touch</span>
      <span className="transition group-hover:translate-x-0.5" aria-hidden>
        →
      </span>
    </Link>
  );

  const mobileNavItems = [
    { type: "link" as const, label: "Home", to: "/", active: isActive("/") },
    { type: "group" as const, label: "Company", active: companyActive, openKey: "company", links: companyLinks },
    { type: "link" as const, label: "Products", to: "/products", active: isActive("/products") },
    { type: "group" as const, label: "Media", active: mediaActive, openKey: "media", links: mediaLinks },
    { type: "link" as const, label: "Careers", to: "/careers", active: isActive("/careers") },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-[1000]">
      <div
        className={`relative z-[1003] min-h-[var(--nav-height)] overflow-visible border-b transition-all duration-300 ${
          heroNav
            ? "border-transparent bg-transparent"
            : "border-white/40 bg-white/50 shadow-[0_4px_24px_rgba(0,1,127,0.06)] backdrop-blur-lg"
        }`}
      >
        <div className="mx-auto flex min-h-[var(--nav-height)] max-w-7xl items-center gap-4 overflow-visible px-5 sm:px-8 lg:px-10 max-lg:pr-[max(1.25rem,env(safe-area-inset-right,0px))]">
          <Link to="/" className="flex shrink-0 items-center no-underline" onClick={closeMenu}>
            <img src={siteLogoUrl} alt="Qbit Force Quantum" className="block h-11 w-auto transition hover:scale-[1.03] sm:h-12" />
          </Link>

          <button
            className="ml-auto flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-full border border-border bg-white p-0 text-navy shadow-sm transition hover:bg-[#f7f5f2] lg:hidden max-lg:mr-1.5 max-lg:h-12 max-lg:w-12"
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls="main-nav-menu"
            aria-label={expanded ? "Close navigation" : "Open navigation"}
          >
            {expanded ? (
              <span className="flex h-6 w-6 items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <path
                    d="M7 7L17 17M17 7L7 17"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            ) : (
              <>
                <span className="my-0.5 block h-0.5 w-[22px] rounded-sm bg-current" />
                <span className="my-0.5 block h-0.5 w-[22px] rounded-sm bg-current" />
                <span className="my-0.5 block h-0.5 w-[22px] rounded-sm bg-current" />
              </>
            )}
          </button>

          <div className="hidden flex-1 items-center justify-between gap-4 overflow-visible lg:flex">
            <div className="flex flex-1 justify-center overflow-visible">
              <ul className={`m-0 flex list-none items-center gap-1 overflow-visible ${navPillClass}`}>
                <li>
                  <Link className={navLinkClass(isActive("/"))} to="/" onClick={closeMenu}>
                    Home
                  </Link>
                </li>

                <li
                  className="relative"
                  onMouseEnter={() => openDropdownMenu("company")}
                  onMouseLeave={scheduleCloseDropdown}
                >
                  <button
                    type="button"
                    className={`${navLinkClass(companyActive)} border-none ${openDropdown === "company" && !companyActive ? "bg-[#f7f5f2]" : ""}`}
                    aria-expanded={openDropdown === "company"}
                    onClick={() => toggleDropdown("company")}
                  >
                    Company
                    <span
                      className={`ml-0.5 h-0 w-0 border-x-4 border-t-[5px] border-x-transparent border-t-current opacity-75 transition ${openDropdown === "company" ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={`absolute left-1/2 top-full z-[1100] mt-2 min-w-[260px] -translate-x-1/2 transition-all duration-300 before:absolute before:-top-3.5 before:-left-6 before:-right-6 before:h-3.5 ${dropdownClass} ${
                      openDropdown === "company"
                        ? "pointer-events-auto visible translate-y-0 scale-100 opacity-100"
                        : "pointer-events-none invisible translate-y-2.5 scale-[0.97] opacity-0"
                    }`}
                  >
                    {companyLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="flex flex-col gap-0.5 rounded-xl px-4 py-3.5 no-underline transition hover:translate-x-0.5 hover:bg-[rgba(0,1,127,0.06)]"
                        onClick={closeMenu}
                      >
                        <span className="font-display text-sm font-semibold text-navy">{link.label}</span>
                        <span className="text-xs text-text-muted">{link.desc}</span>
                      </Link>
                    ))}
                  </div>
                </li>

                <li>
                  <Link className={navLinkClass(isActive("/products"))} to="/products" onClick={closeMenu}>
                    Products
                  </Link>
                </li>

                <li
                  className="relative"
                  onMouseEnter={() => openDropdownMenu("media")}
                  onMouseLeave={scheduleCloseDropdown}
                >
                  <button
                    type="button"
                    className={`${navLinkClass(mediaActive)} border-none ${openDropdown === "media" && !mediaActive ? "bg-[#f7f5f2]" : ""}`}
                    aria-expanded={openDropdown === "media"}
                    onClick={() => toggleDropdown("media")}
                  >
                    Media
                    <span
                      className={`ml-0.5 h-0 w-0 border-x-4 border-t-[5px] border-x-transparent border-t-current opacity-75 transition ${openDropdown === "media" ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={`absolute left-1/2 top-full z-[1100] mt-2 min-w-[440px] -translate-x-1/2 transition-all duration-300 before:absolute before:-top-3.5 before:-left-6 before:-right-6 before:h-3.5 ${dropdownClass} ${
                      openDropdown === "media"
                        ? "pointer-events-auto visible translate-y-0 scale-100 opacity-100"
                        : "pointer-events-none invisible translate-y-2.5 scale-[0.97] opacity-0"
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-1">
                      {mediaLinks.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className="flex flex-col gap-0.5 rounded-xl px-4 py-3.5 no-underline transition hover:translate-x-0.5 hover:bg-[rgba(0,1,127,0.06)]"
                          onClick={closeMenu}
                        >
                          <span className="font-display text-sm font-semibold text-navy">{link.label}</span>
                          <span className="text-xs text-text-muted">{link.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                <li>
                  <Link className={navLinkClass(isActive("/careers"))} to="/careers" onClick={closeMenu}>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex shrink-0 items-center">{contactCta}</div>
          </div>
        </div>
      </div>

      {expanded && (
        <button
          type="button"
          className="fixed bottom-0 left-0 right-0 top-[var(--nav-height)] z-[1001] block animate-[backdropIn_0.3s_ease] border-none bg-[rgba(0,0,16,0.45)] lg:hidden"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}

      <div
        className={`fixed bottom-0 left-0 right-0 top-[var(--nav-height)] z-[1002] overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          expanded
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible translate-y-2.5 opacity-0"
        }`}
        id="main-nav-menu"
        aria-hidden={!expanded}
      >
        <div className="flex h-full max-h-[calc(100dvh-var(--nav-height))] flex-col">
          <div className="shrink-0 border-b border-[#f0ece8] bg-surface-warm px-5 pb-3 pt-5">
            <span className="mb-1.5 block font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
              Navigation
            </span>
            <p className="m-0 text-[0.9375rem] font-medium text-text-muted">Explore Qbit Force Quantum</p>
          </div>

          <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
            <ul className="m-0 list-none p-0">
              {mobileNavItems.map((item, index) => {
                if (item.type === "link") {
                  return (
                    <li
                      key={item.label}
                      className={`border-b border-[#f0ece8] ${expanded ? "animate-[mobileNavItemIn_0.4s_cubic-bezier(0.4,0,0.2,1)_both]" : "opacity-0"}`}
                      style={{ animationDelay: `${0.05 + index * 0.05}s` }}
                    >
                      <Link
                        to={item.to}
                        className={`flex min-h-[52px] w-full items-center px-5 py-4 font-display text-base font-semibold text-navy no-underline transition hover:bg-[#f7f5f2] ${
                          item.active
                            ? "border-l-4 border-petal bg-gradient-to-r from-petal/10 to-transparent pl-[calc(1.25rem-4px)]"
                            : ""
                        }`}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                const isOpen = mobileOpenGroups.has(item.openKey);

                return (
                  <li
                    key={item.label}
                    className={`border-b border-[#f0ece8] ${expanded ? "animate-[mobileNavItemIn_0.4s_cubic-bezier(0.4,0,0.2,1)_both]" : "opacity-0"}`}
                    style={{ animationDelay: `${0.05 + index * 0.05}s` }}
                  >
                    <button
                      type="button"
                      className={`flex min-h-[52px] w-full items-center justify-between border-none bg-transparent px-5 py-4 text-left font-display text-base font-semibold text-navy transition hover:bg-[#f7f5f2] ${
                        item.active
                          ? "border-l-4 border-petal bg-gradient-to-r from-petal/10 to-transparent pl-[calc(1.25rem-4px)]"
                          : ""
                      }`}
                      aria-expanded={isOpen}
                      onClick={() => toggleMobileGroup(item.openKey)}
                    >
                      {item.label}
                      <span
                        className={`ml-3 h-2 w-2 shrink-0 rotate-45 border-b-2 border-r-2 border-navy transition ${isOpen ? "-rotate-[135deg]" : ""}`}
                        aria-hidden
                      />
                    </button>

                    <div
                      className={`grid bg-[#f7f5f2] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <ul className="m-0 min-h-0 list-none overflow-hidden p-0">
                        {item.links.map((link, subIndex) => (
                          <li
                            key={link.to}
                            className={isOpen ? "animate-[mobileSubItemIn_0.35s_cubic-bezier(0.4,0,0.2,1)_both]" : ""}
                            style={{ animationDelay: `${0.12 + subIndex * 0.04}s` }}
                          >
                            <Link
                              to={link.to}
                              className={`flex flex-col gap-0.5 border-t border-[rgba(232,228,223,0.7)] py-3.5 pl-7 pr-5 no-underline transition hover:bg-[rgba(0,1,127,0.04)] hover:pl-8 ${
                                isActive(link.to)
                                  ? "border-l-[3px] border-petal bg-petal/5 pl-[calc(1.75rem-3px)] hover:pl-[calc(2rem-3px)]"
                                  : ""
                              }`}
                              onClick={closeMenu}
                            >
                              <span className="font-display text-[0.9375rem] font-semibold text-navy">
                                {link.label}
                              </span>
                              <span className="text-[0.8125rem] leading-snug text-text-muted">{link.desc}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            className={`shrink-0 border-t border-border bg-white px-5 py-4 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] shadow-[0_-8px_24px_rgba(0,1,127,0.06)] ${expanded ? "animate-[mobileNavItemIn_0.4s_cubic-bezier(0.4,0,0.2,1)_both]" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-petal to-[#e01820] px-6 py-3.5 font-display text-[0.9375rem] font-semibold text-white no-underline shadow-[0_4px_14px_rgba(255,30,38,0.28)]"
              to="/contactus"
              onClick={closeMenu}
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
