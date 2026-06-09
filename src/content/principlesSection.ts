/** People · Principles · Progress — update copy & images here */

export type ImagePanel = {
  id: string;
  type: "image";
  imageUrl: string;
  alt: string;
};

export type SolidPanel = {
  id: string;
  type: "solid";
  variant: "navy" | "petal" | "light";
  title: string;
  subtitle?: string;
};

export type PrinciplesPanel = ImagePanel | SolidPanel;

export const principlesHeadline = {
  line1: "Our People. Our Principles.",
  line2: "Our Progress.",
};

/** Top row — photo · navy block · photo */
export const principlesTopRow: PrinciplesPanel[] = [
  {
    id: "people-facility",
    type: "image",
    imageUrl:
      "https://res.cloudinary.com/dps46p3m8/image/upload/v1781021845/Copy_of_IMG_20260414_145458_jdwxyk.jpg",
    alt: "Qbit Force quantum facility team",
  },
  {
    id: "principles-mission",
    type: "solid",
    variant: "navy",
    title: "White-Box Quantum Hardware",
    subtitle: "Transparency drives understanding, innovation, and new markets.",
  },
  {
    id: "people-hardware",
    type: "image",
    imageUrl:
      "https://res.cloudinary.com/dps46p3m8/image/upload/v1781021849/Copy_of_IMG_20260414_145254_rstnwh.jpg",
    alt: "Quantum hardware development at Qbit Force",
  },
];

/** Bottom row — impact panels */
export const principlesImpactRow: PrinciplesPanel[] = [
  {
    id: "impact-msme",
    type: "solid",
    variant: "petal",
    title: "MSME Ecosystem",
    subtitle: "Local manufacturers in metalwork, cryogenics, and electronics.",
  },
  {
    id: "impact-facility",
    type: "image",
    imageUrl:
      "https://res.cloudinary.com/dps46p3m8/image/upload/v1780935982/Copy_of_IMG_20260414_150018_xksxdk.jpg",
    alt: "Quantum systems at Amaravati",
  },
  {
    id: "impact-nqm",
    type: "solid",
    variant: "light",
    title: "National Quantum Mission",
    subtitle: "Indigenous platforms for research, industry, and India.",
  },
];
