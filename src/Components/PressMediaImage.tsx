import { cloudinaryImageUrl } from "../utils/cloudinary";

type Props = {
  src: string;
  alt: string;
  width?: number;
  className?: string;
  priority?: boolean;
};

function PressMediaImage({ src, alt, width = 900, className = "", priority = false }: Props) {
  const optimizedSrc = cloudinaryImageUrl(src, width);

  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-[#ece8e3] ${className}`}
    >
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={Math.round(width * 1.25)}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="h-full w-full object-contain object-center transition duration-700 ease-out group-hover:scale-[1.02]"
      />
    </div>
  );
}

export default PressMediaImage;
