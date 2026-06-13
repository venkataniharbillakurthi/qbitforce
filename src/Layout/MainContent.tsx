import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar.tsx";
import Footer from "../Components/Footer.tsx";

function PageReadyMarker({ onReady }: { onReady: () => void }) {
  const location = useLocation();

  useEffect(() => {
    onReady();
  }, [onReady, location.pathname]);

  return null;
}

type MainContentProps = {
  onPageReady: () => void;
};

function MainContent({ onPageReady }: MainContentProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-var(--nav-height))] flex-1">
        <Suspense fallback={null}>
          <>
            <Outlet />
            <PageReadyMarker onReady={onPageReady} />
          </>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default MainContent;

export function useRouteLoading() {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [pageReady, setPageReady] = useState(false);
  const shownAtRef = useRef(performance.now());

  const MIN_DISPLAY_MS = 900;

  useEffect(() => {
    setVisible(true);
    setExiting(false);
    setPageReady(false);
    shownAtRef.current = performance.now();
  }, [location.pathname]);

  const handlePageReady = useCallback(() => {
    setPageReady(true);
  }, []);

  useEffect(() => {
    if (!visible || exiting || !pageReady) return;

    const elapsed = performance.now() - shownAtRef.current;
    const wait = Math.max(0, MIN_DISPLAY_MS - elapsed);

    const timer = window.setTimeout(() => setExiting(true), wait);
    return () => window.clearTimeout(timer);
  }, [visible, exiting, pageReady, location.pathname]);

  const handleExitComplete = useCallback(() => {
    setVisible(false);
    setExiting(false);
  }, []);

  return {
    visible,
    exiting,
    handlePageReady,
    handleExitComplete,
    loaderKey: location.pathname,
  };
}
