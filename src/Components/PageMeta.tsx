import usePageMeta from "../hooks/usePageMeta";

/** Updates document title and meta tags on route change. */
export default function PageMeta() {
  usePageMeta();
  return null;
}
