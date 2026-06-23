import { useEffect, useRef, useState } from "react";
import { cloudinaryImageUrl } from "../utils/cloudinary";

type PreloadTarget = {
  url: string;
  width?: number;
};

/**
 * Starts fetching section images shortly before the section enters the viewport.
 */
export function useSectionPreload(
  targets: PreloadTarget[],
  rootMargin = "480px 0px",
) {
  const sectionRef = useRef<HTMLElement>(null);
  const [preload, setPreload] = useState(false);
  const targetsRef = useRef(targets);
  targetsRef.current = targets;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPreload(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!preload) return;

    targetsRef.current.forEach(({ url, width = 800 }) => {
      const img = new Image();
      img.src = cloudinaryImageUrl(url, width);
    });
  }, [preload]);

  return { sectionRef, preload };
}
