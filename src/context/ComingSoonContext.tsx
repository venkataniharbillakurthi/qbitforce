import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { HOME_ONLY_MODE, isHomePath } from "../config/siteMode";

type ComingSoonContextValue = {
  openComingSoon: () => void;
  closeComingSoon: () => void;
  shouldBlockNavigation: (path: string) => boolean;
};

const ComingSoonContext = createContext<ComingSoonContextValue | null>(null);

function ComingSoonModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[rgba(0,0,16,0.55)] px-5 backdrop-blur-sm animate-[backdropIn_0.3s_ease]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="coming-soon-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-br from-deep via-mid to-navy p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.45)] animate-[fadeUp_0.45s_ease-out_both]"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-petal">
          Qbit Force
        </span>
        <h2 id="coming-soon-title" className="mt-3 font-display text-2xl font-bold text-white">
          Coming Soon
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/75">
          This section is under development. Please explore our home page for the latest updates.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 cursor-pointer rounded-full border-none bg-petal px-6 py-2.5 font-display text-sm font-semibold text-white transition hover:bg-[#e01820]"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export function ComingSoonProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openComingSoon = useCallback(() => setOpen(true), []);
  const closeComingSoon = useCallback(() => setOpen(false), []);

  const shouldBlockNavigation = useCallback(
    (path: string) => HOME_ONLY_MODE && !isHomePath(path),
    [],
  );

  return (
    <ComingSoonContext.Provider
      value={{ openComingSoon, closeComingSoon, shouldBlockNavigation }}
    >
      {children}
      {open && <ComingSoonModal onClose={closeComingSoon} />}
    </ComingSoonContext.Provider>
  );
}

export function useComingSoon() {
  const context = useContext(ComingSoonContext);
  if (!context) {
    throw new Error("useComingSoon must be used within ComingSoonProvider");
  }
  return context;
}
