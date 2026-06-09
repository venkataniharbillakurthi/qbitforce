/** Central media store — update URLs here to refresh site-wide content */

export type HeroSlide = {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
};

export type MediaImage = {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  category: "facility" | "events" | "hardware" | "team" | "news";
};

export const heroSlides: HeroSlide[] = [
  
  {
    id: "hero-4",
    type: "image",
    src: "https://res.cloudinary.com/dps46p3m8/image/upload/v1780935950/Copy_of_IMG_20260414_161438_zed6bs.jpg",
    alt: "Qbit Force quantum hardware platform",
  },
  {
    id: "hero-video",
    type: "video",
    src: "https://res.cloudinary.com/dps46p3m8/video/upload/v1780935951/WhatsApp_Video_2026-06-07_at_7.40.37_PM_ij7kaw.mp4",
    poster:
      "https://res.cloudinary.com/dps46p3m8/image/upload/v1780935950/Copy_of_IMG_20260414_161438_zed6bs.jpg",
    alt: "Qbit Force facility walkthrough",
  },
  {
    id: "hero-3",
    type: "image",
    src: "https://res.cloudinary.com/dps46p3m8/image/upload/v1780935962/Copy_of_IMG_20260415_121621_kykc6t.jpg",
    alt: "Quantum systems development at Qbit Force",
  },
  {
    id: "hero-1",
    type: "image",
    src: "https://res.cloudinary.com/dps46p3m8/image/upload/v1780935959/Copy_of_IMG_20260414_144515_wl0abz.jpg",
    alt: "Qbit Force quantum facility",
  },
  
];

export const companyStoryImages: MediaImage[] = [
  {
    id: "company-1",
    title: "Amaravati Quantum Valley",
    caption: "Building indigenous quantum hardware at scale in Andhra Pradesh.",
    imageUrl:
      "https://res.cloudinary.com/dps46p3m8/image/upload/v1780937130/WhatsApp_Image_2026-06-07_at_6.53.46_PM_vshegz.jpg",
    category: "facility",
  },
  
 
];

export const newsMediaImages: MediaImage[] = [
  {
    id: "news-1",
    title: "SiliconIndia Exclusive Coverage",
    caption:
      "The Big Milestone in Amaravati That Unlocks India's Quantum Potential – featuring the launch of India's first open-access quantum facility.",
    imageUrl:
      "https://res.cloudinary.com/dps46p3m8/image/upload/v1780937129/WhatsApp_Image_2026-06-07_at_6.53.49_PM_1_wmrujs.jpg",
    category: "news",
  },
  {
    id: "news-2",
    title: "Business India – Aiming for a Quantum Leap",
    caption:
      "Business India highlights Andhra Pradesh's quantum push and the inauguration of the Amaravati Quantum Reference Facility.",
    imageUrl:
      "https://res.cloudinary.com/dps46p3m8/image/upload/v1780937129/WhatsApp_Image_2026-06-07_at_6.53.49_PM_ujd0wk.jpg",
    category: "news",
  },
  {
    id: "news-3",
    title: "Business India Magazine Feature",
    caption:
      "Speed and scale define Andhra Pradesh's quantum ambitions, showcasing Amaravati's emergence as a national quantum innovation hub.",
    imageUrl:
      "https://res.cloudinary.com/dps46p3m8/image/upload/v1780937129/WhatsApp_Image_2026-06-07_at_6.53.48_PM_2_ymefan.jpg",
    category: "news",
  },
  
];

export type SiteVideo = {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: "facility" | "technology" | "events" | "education";
  src?: string;
  youtubeId?: string;
  poster?: string;
};

/** Site videos — update URLs here */
export const siteVideos: SiteVideo[] = [
  {
    id: "qf-video-1",
    title: "Qbit Force — Facility Walkthrough",
    description:
      "Walkthrough of our Amaravati quantum hardware facility: cryogenic assembly, control systems, and open-access platforms.",
    src: "https://res.cloudinary.com/dps46p3m8/video/upload/v1780935951/WhatsApp_Video_2026-06-07_at_7.40.37_PM_ij7kaw.mp4",
    poster:
      "https://res.cloudinary.com/dps46p3m8/image/upload/v1780935950/Copy_of_IMG_20260414_161438_zed6bs.jpg",
    duration: "—",
    category: "facility",
  },
  {
    id: "qf-video-2",
    title: "Qbit Force — Lab & Operations",
    description:
      "Inside our quantum hardware lab: manufacturing, assembly, and day-to-day operations at Qbit Force.",
    src: "https://res.cloudinary.com/dps46p3m8/video/upload/v1780935956/WhatsApp_Video_2026-06-07_at_7.52.46_PM_nmic6w.mp4",
    poster:
      "https://res.cloudinary.com/dps46p3m8/image/upload/v1780935960/Copy_of_IMG_20260414_161532_l2o2mc.jpg",
    duration: "—",
    category: "facility",
  },
  {
    id: "qf-video-youtube-1",
    title: "Qbit Force — Featured Coverage",
    description:
      "Watch our latest featured video coverage on quantum hardware development in India.",
    youtubeId: "pIXXVpTbKh4",
    duration: "—",
    category: "events",
  },
  {
    id: "qf-video-youtube-2",
    title: "Qbit Force — Live Session",
    description:
      "Live stream from Qbit Force — quantum computing updates and facility highlights.",
    youtubeId: "0EvUWqsqC6g",
    duration: "—",
    category: "events",
  },
];
