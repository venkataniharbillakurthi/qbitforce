import { companyStoryImages, heroSlides } from "../content/mediaHub";

export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  category: "facility" | "events" | "hardware" | "team" | "news";
  imageUrl: string;
};

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "facility", label: "Facility" },
  { id: "hardware", label: "Hardware" },
] as const;

const heroGalleryItems: GalleryItem[] = heroSlides
  .filter((s) => s.type === "image")
  .map((slide) => ({
    id: slide.id,
    title: slide.alt,
    caption: "Qbit Force quantum hardware and facility.",
    category: "facility" as const,
    imageUrl: slide.src,
  }));

const mapMediaToGallery = (items: typeof companyStoryImages): GalleryItem[] =>
  items.map((item) => ({
    id: item.id,
    title: item.title,
    caption: item.caption,
    category: item.category === "news" ? ("facility" as const) : item.category,
    imageUrl: item.imageUrl,
  }));

/** Facility & hardware photos only — matches home gallery section */
export const galleryItems: GalleryItem[] = [
  ...heroGalleryItems,
  ...mapMediaToGallery(companyStoryImages),
];
