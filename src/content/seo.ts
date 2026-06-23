export const SITE_URL = "https://www.qbitforcequantum.com";
export const SITE_NAME = "Qbit Force Quantum";

export const DEFAULT_DESCRIPTION =
  "Indigenous superconducting quantum hardware, dilution refrigerators, and open-access platforms. Built in Amaravati, for the world.";

export const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/dps46p3m8/image/upload/v1781192857/QFLogo-Bsun1Dcj_tzycu8.png";

export type PageMeta = {
  title: string;
  description: string;
};

export const pageMetaByPath: Record<string, PageMeta> = {
  "/": {
    title: "Indigenous Quantum Hardware",
    description: DEFAULT_DESCRIPTION,
  },
  "/company": {
    title: "About Us",
    description:
      "Meet Qbit Force Quantum — Andhra Pradesh's indigenous quantum hardware facility at Amaravati Quantum Valley.",
  },
  "/products": {
    title: "Quantum Hardware Platforms",
    description:
      "Explore indigenous dilution refrigerators, superconducting qubits, and open-access quantum computing platforms from Amaravati.",
  },
  "/careers": {
    title: "Careers",
    description:
      "Join the Qbit Force team building India's quantum hardware future in cryogenics, RF engineering, and quantum foundry operations.",
  },
  "/contactus": {
    title: "Contact Us",
    description:
      "Get in touch with Qbit Force Quantum for partnerships, products, careers, and media enquiries from Amaravati.",
  },
  "/gallery": {
    title: "Photo Gallery",
    description:
      "Facility moments, quantum hardware, and events from Amaravati Quantum Valley and Qbit Force Quantum.",
  },
  "/publications": {
    title: "Publications & Insights",
    description:
      "Articles, press coverage, and stories from Qbit Force Quantum's indigenous hardware journey.",
  },
  "/videos": {
    title: "Videos & Media",
    description:
      "Watch facility walkthroughs, technology updates, and media coverage from Qbit Force Quantum.",
  },
  "/press": {
    title: "Press & Media",
    description:
      "Press coverage and media features on Qbit Force Quantum, Amaravati Quantum Valley, and India's quantum mission.",
  },
  "/terms": {
    title: "Terms and Conditions",
    description: "Terms governing your use of the Qbit Force Quantum website and services.",
  },
  "/privacypolicy": {
    title: "Privacy Policy",
    description: "How Qbit Force Quantum collects, uses, and protects your personal information.",
  },
};
