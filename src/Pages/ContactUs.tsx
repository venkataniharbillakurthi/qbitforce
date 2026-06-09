import { useState, type FormEvent, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import PageHero from "../Components/PageHero.tsx";
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaPhone } from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  inquiryType: "general",
  message: "",
};

const inquiryOptions = [
  { value: "general", label: "General" },
  { value: "partnership", label: "Partnership" },
  { value: "products", label: "Products" },
  { value: "careers", label: "Careers" },
  { value: "media", label: "Media & Press" },
];

function ContactUs() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const setInquiryType = (value: string) => {
    setForm((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Contact Enquiry — ${form.inquiryType.charAt(0).toUpperCase() + form.inquiryType.slice(1)}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company || "N/A"}\nInquiry Type: ${form.inquiryType}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:Info@qbitforcequantum.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <>
      <PageHero
        variant="contact"
        badge="Contact"
        title="Let's Build the Quantum Future Together"
        intro="Connect with us to discover our products, cutting-edge technologies, and opportunities to grow with us on our journey from Amaravati to the world."
      />

      <section className="-mt-8 bg-surface-warm py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid overflow-hidden rounded-2xl border border-border shadow-lg lg:grid-cols-[380px_1fr]">
            <aside className="bg-gradient-to-br from-deep via-mid to-slate text-white">
              <div className="flex h-full flex-col p-8 sm:p-10">
                <h2 className="mb-2 font-display text-2xl font-bold text-white">Reach Us</h2>
                <p className="mb-8 text-[0.9375rem] leading-relaxed text-white/70">
                  Our team responds to enquiries within one business day.
                </p>

                <div className="flex flex-1 flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-petal/35 bg-petal/20 text-base text-petal">
                      <FaMapMarkerAlt />
                    </span>
                    <div>
                      <span className="mb-1.5 block font-display text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white/50">
                        Headquarters
                      </span>
                      <p className="m-0 text-sm leading-snug text-white/90">
                        76-8-10/1C, Munnaluri, Subbarayudu Street,
                        <br />
                        Bhavanipuram, Vijayawada (Urban),
                        <br />
                        Krishna, Andhra Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-petal/35 bg-petal/20 text-base text-petal">
                      <FaEnvelope />
                    </span>
                    <div>
                      <span className="mb-1.5 block font-display text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white/50">
                        Email
                      </span>
                      <a
                        href="mailto:Info@qbitforcequantum.com"
                        className="text-sm leading-snug text-white/90 no-underline hover:text-petal"
                      >
                        Info@qbitforcequantum.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-petal/35 bg-petal/20 text-base text-petal">
                      <FaClock />
                    </span>
                    <div>
                      <span className="mb-1.5 block font-display text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white/50">
                        Business Hours
                      </span>
                      <p className="m-0 text-sm leading-snug text-white/90">
                        Mon – Fri: 9:00 AM – 6:00 PM
                        <br />
                        Sat – Sun: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-petal/35 bg-petal/20 text-base text-petal">
                      <FaPhone />
                    </span>
                    <div>
                      <span className="mb-1.5 block font-display text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white/50">
                        Inquiry Types
                      </span>
                      <p className="m-0 text-sm leading-snug text-white/90">
                        Partnerships · Products · Careers · Media
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 aspect-[16/10] max-h-[200px] overflow-hidden rounded-xl border border-white/10 lg:max-h-none">
                  <iframe
                    title="Qbit Force Quantum office location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992.5497754437642!2d80.59733120961054!3d16.529997136368806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ef0074d65639%3A0x543b2e46f32aedf1!2sSubbarayudu%20street%20Bhavanipuram!5e1!3m2!1sen!2sde!4v1776761636438!5m2!1sen!2sde"
                    loading="lazy"
                    className="block h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
                  />
                </div>
              </div>
            </aside>

            <div className="bg-white px-6 py-10 sm:px-10 lg:px-12">
              <div className="mb-8">
                <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-petal">
                  Enquiry Form
                </span>
                <h2 className="mb-1.5 mt-3 font-display text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-navy">
                  Send us a message
                </h2>
                <p className="m-0 text-[0.9375rem] text-text-muted">
                  All fields marked with * are required.
                </p>
              </div>

              {submitted && (
                <div
                  className="mb-6 rounded-xl border border-green-600/25 bg-green-600/[0.08] px-5 py-4 text-[0.9375rem] leading-relaxed text-green-700"
                  role="status"
                >
                  <strong className="mb-1 block">Thank you!</strong> Your email client should open with your message ready
                  to send.
                </div>
              )}

              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                  <span className="font-display text-[0.8125rem] font-semibold text-navy">
                    I'm interested in *
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {inquiryOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        className={
                          form.inquiryType === opt.value
                            ? "cursor-pointer rounded-full border-2 border-navy bg-navy px-4 py-2 font-display text-[0.8125rem] font-semibold text-white transition-all"
                            : "cursor-pointer rounded-full border-2 border-border bg-[#f3f2ef] px-4 py-2 font-display text-[0.8125rem] font-semibold text-text-muted transition-all hover:border-navy hover:text-navy"
                        }
                        onClick={() => setInquiryType(opt.value)}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-display text-[0.8125rem] font-semibold text-navy">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full rounded-xl border-2 border-transparent bg-[#f3f2ef] px-4 py-3.5 text-[0.9375rem] text-text transition focus:border-navy focus:bg-white focus:outline-none focus:ring-4 focus:ring-navy/10"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-display text-[0.8125rem] font-semibold text-navy">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className="w-full rounded-xl border-2 border-transparent bg-[#f3f2ef] px-4 py-3.5 text-[0.9375rem] text-text transition focus:border-navy focus:bg-white focus:outline-none focus:ring-4 focus:ring-navy/10"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-display text-[0.8125rem] font-semibold text-navy">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="w-full rounded-xl border-2 border-transparent bg-[#f3f2ef] px-4 py-3.5 text-[0.9375rem] text-text transition focus:border-navy focus:bg-white focus:outline-none focus:ring-4 focus:ring-navy/10"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="font-display text-[0.8125rem] font-semibold text-navy">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Organization (optional)"
                      className="w-full rounded-xl border-2 border-transparent bg-[#f3f2ef] px-4 py-3.5 text-[0.9375rem] text-text transition focus:border-navy focus:bg-white focus:outline-none focus:ring-4 focus:ring-navy/10"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-display text-[0.8125rem] font-semibold text-navy">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your enquiry, partnership idea, or question..."
                    rows={5}
                    required
                    className="min-h-[140px] w-full resize-y rounded-xl border-2 border-transparent bg-[#f3f2ef] px-4 py-3.5 text-[0.9375rem] text-text transition focus:border-navy focus:bg-white focus:outline-none focus:ring-4 focus:ring-navy/10"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-gradient-to-br from-petal to-[#e01820] px-9 py-4 font-display text-base font-semibold text-white shadow-[0_6px_20px_rgba(255,30,38,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,30,38,0.4)] max-md:w-full"
                >
                  Submit Enquiry
                  <span aria-hidden>→</span>
                </button>
              </form>

              <p className="mt-6 border-t border-border pt-6 text-sm text-text-muted">
                Prefer email?{" "}
                <a
                  href="mailto:Info@qbitforcequantum.com"
                  className="font-semibold text-navy no-underline hover:text-petal"
                >
                  Info@qbitforcequantum.com
                </a>
                {" · "}
                <Link to="/press" className="font-semibold text-navy no-underline hover:text-petal">
                  Media enquiries
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
