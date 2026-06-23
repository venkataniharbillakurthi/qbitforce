import { useState } from "react";
import LazyImage from "./LazyImage";

const HOVER_SCALE =
  "[@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.03]";

type OptimizedCoverImageProps = {
  src: string;
  alt?: string;
  optimizeWidth: number;
  eager?: boolean;
  className?: string;
  hoverScale?: boolean;
};

function OptimizedCoverImage({
  src,
  alt = "",
  optimizeWidth,
  eager = false,
  className = "",
  hoverScale = true,
}: OptimizedCoverImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <LazyImage
      src={src}
      alt={alt}
      optimizeWidth={optimizeWidth}
      eager={eager}
      onLoad={() => setLoaded(true)}
      className={`object-cover transition-[opacity,transform] duration-300 ease-out ${
        loaded ? "opacity-100" : "opacity-0"
      } ${hoverScale ? HOVER_SCALE : ""} ${className}`}
    />
  );
}

export default OptimizedCoverImage;
