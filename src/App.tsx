import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCallback, useState } from "react";
import MainContent from "./Layout/MainContent.tsx";
import LoadingScreen from "./Components/LoadingScreen.tsx";
import HomeOnlyGuard from "./Components/HomeOnlyGuard.tsx";
import Home from "./Pages/Home.tsx";
import Company from "./Pages/Company.tsx";
import OurTeam from "./Pages/OurTeam.tsx";
import Products from "./Pages/Products.tsx";
import Careers from "./Pages/Careers.tsx";
import ContactUs from "./Pages/ContactUs.tsx";
import TC from "./Pages/TC.tsx";
import PrivacyPolicy from "./Pages/Privacy.tsx";
import Gallery from "./Pages/Gallery.tsx";
import Publications from "./Pages/Publications.tsx";
import Videos from "./Pages/Videos.tsx";
import Press from "./Pages/Press.tsx";
import ScrollToTop from "./Components/ScrollToTop.tsx";
import { ComingSoonProvider } from "./context/ComingSoonContext.tsx";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);

  const handleLoaderReady = useCallback(() => {
    setLoaderExiting(true);
  }, []);

  const handleLoaderExitComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  return (
    <>
      {showLoader && (
        <LoadingScreen
          exiting={loaderExiting}
          onReady={handleLoaderReady}
          onExitComplete={handleLoaderExitComplete}
        />
      )}
      <BrowserRouter>
        <ComingSoonProvider>
          <div className="flex min-h-screen flex-col text-left">
            <ScrollToTop />
            <Routes>
              <Route element={<MainContent />}>
                <Route path="/" element={<Home />} />
                <Route
                  path="/company"
                  element={
                    <HomeOnlyGuard>
                      <Company />
                    </HomeOnlyGuard>
                  }
                />
                <Route
                  path="/company/ourteam"
                  element={
                    <HomeOnlyGuard>
                      <OurTeam />
                    </HomeOnlyGuard>
                  }
                />
                <Route
                  path="/products"
                  element={
                    <HomeOnlyGuard>
                      <Products />
                    </HomeOnlyGuard>
                  }
                />
                <Route
                  path="/careers"
                  element={
                    <HomeOnlyGuard>
                      <Careers />
                    </HomeOnlyGuard>
                  }
                />
                <Route
                  path="/contactus"
                  element={
                    <HomeOnlyGuard>
                      <ContactUs />
                    </HomeOnlyGuard>
                  }
                />
                <Route
                  path="/gallery"
                  element={
                    <HomeOnlyGuard>
                      <Gallery />
                    </HomeOnlyGuard>
                  }
                />
                <Route
                  path="/publications"
                  element={
                    <HomeOnlyGuard>
                      <Publications />
                    </HomeOnlyGuard>
                  }
                />
                <Route
                  path="/videos"
                  element={
                    <HomeOnlyGuard>
                      <Videos />
                    </HomeOnlyGuard>
                  }
                />
                <Route
                  path="/press"
                  element={
                    <HomeOnlyGuard>
                      <Press />
                    </HomeOnlyGuard>
                  }
                />
                <Route
                  path="/terms"
                  element={
                    <HomeOnlyGuard>
                      <TC />
                    </HomeOnlyGuard>
                  }
                />
                <Route
                  path="/privacypolicy"
                  element={
                    <HomeOnlyGuard>
                      <PrivacyPolicy />
                    </HomeOnlyGuard>
                  }
                />
              </Route>
            </Routes>
          </div>
        </ComingSoonProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
