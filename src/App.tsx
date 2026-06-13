import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCallback, useState } from "react";
import MainContent from "./Layout/MainContent.tsx";
import LoadingScreen from "./Components/LoadingScreen.tsx";
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
        <div className="flex min-h-screen flex-col text-left">
          <ScrollToTop />
          <Routes>
            <Route element={<MainContent />}>
              <Route path="/" element={<Home />} />
              <Route path="/company" element={<Company />} />
              <Route path="/company/ourteam" element={<OurTeam />} />
              <Route path="/products" element={<Products />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/press" element={<Press />} />
              <Route path="/terms" element={<TC />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
