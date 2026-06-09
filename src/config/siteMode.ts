/** When true, only the home page is accessible; other routes show a coming soon message. */
export const HOME_ONLY_MODE = true;

export function isHomePath(path: string) {
  return path === "/";
}
