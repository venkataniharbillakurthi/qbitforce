import { useEffect, useState } from "react";
import { siteLogoWhiteUrl } from "../content/mediaHub";

type Props = {
  exiting: boolean;
  onReady: () => void;
  onExitComplete: () => void;
};

const MIN_DISPLAY_MS = 1200;
const FADE_OUT_MS = 900;

function LoadingScreen({ exiting, onReady, onExitComplete }: Props) {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const revealTimer = window.setTimeout(() => setLogoVisible(true), 80);

    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN_DISPLAY_MS - elapsed);
      window.setTimeout(onReady, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.clearTimeout(revealTimer);
      window.removeEventListener("load", finish);
    };
  }, [onReady]);

  useEffect(() => {
    if (!exiting) return;

    const timer = window.setTimeout(onExitComplete, FADE_OUT_MS);
    return () => window.clearTimeout(timer);
  }, [exiting, onExitComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-deep via-mid to-navy ease-in-out ${
        exiting
          ? "pointer-events-none opacity-0 transition-opacity duration-[900ms]"
          : "opacity-100"
      }`}
      aria-hidden={exiting}
      aria-label="Loading Qbit Force"
    >
      <div
        className={`relative flex flex-col items-center transition-all duration-700 ease-out ${
          logoVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        } ${exiting ? "scale-105 opacity-0 transition-all duration-[900ms]" : ""}`}
      >
        <div className="relative flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44">
          <div className="absolute inset-0 animate-[splashRing_2.4s_linear_infinite] rounded-full border-2 border-transparent border-t-petal border-r-petal/40" />
          <div className="absolute inset-3 animate-[splashRing_3.2s_linear_infinite_reverse] rounded-full border border-transparent border-b-blue-light/70 border-l-blue-light/30" />
          <div className="animate-[splashPulse_2s_ease-in-out_infinite]">
            <img
              src={siteLogoWhiteUrl}
              alt="Qbit Force Quantum"
              className="h-16 w-auto sm:h-24"
              width={180}
              height={96}
            />
          </div>
        </div>

        <p className="mt-8 font-display text-xs font-semibold uppercase tracking-[0.35em] text-white/70 sm:text-sm">
          Qbit Force
        </p>

        <div className="relative mt-5 h-1 w-40 overflow-hidden rounded-full bg-white/15 sm:w-48">
          <div className="absolute inset-y-0 w-1/2 animate-[splashShimmer_1.4s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-transparent via-petal to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
