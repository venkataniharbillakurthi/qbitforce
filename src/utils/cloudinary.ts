/** Inject Cloudinary transforms for sharper, correctly sized delivery. */
export function cloudinaryImageUrl(url: string, width = 800): string {
  if (!url.includes("res.cloudinary.com") || !url.includes("/upload/")) {
    return url;
  }

  if (url.includes("/upload/f_auto") || url.includes("/upload/q_auto")) {
    return url;
  }

  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto:best,dpr_auto,w_${width},c_limit/`,
  );
}
