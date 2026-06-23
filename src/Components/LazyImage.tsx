import { forwardRef, type ImgHTMLAttributes } from "react";
import { cloudinaryImageUrl } from "../utils/cloudinary";

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  /** Load immediately for above-the-fold assets */
  eager?: boolean;
  /** Resize Cloudinary assets for faster loads */
  optimizeWidth?: number;
};

const LazyImage = forwardRef<HTMLImageElement, LazyImageProps>(function LazyImage(
  {
    src,
    alt = "",
    className = "",
    eager = false,
    optimizeWidth,
    decoding = "async",
    loading,
    fetchPriority,
    ...rest
  },
  ref,
) {
  const resolvedSrc =
    src && optimizeWidth ? cloudinaryImageUrl(String(src), optimizeWidth) : src;

  return (
    <img
      ref={ref}
      src={resolvedSrc}
      alt={alt}
      className={className}
      decoding={decoding}
      loading={loading ?? (eager ? "eager" : "lazy")}
      fetchPriority={fetchPriority ?? (eager ? "high" : "auto")}
      {...rest}
    />
  );
});

export default LazyImage;
