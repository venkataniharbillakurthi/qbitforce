import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar.tsx";
import Footer from "../Components/Footer.tsx";

function MainContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main
        key={location.pathname}
        className="min-h-[calc(100vh-var(--nav-height))] flex-1 animate-[pageEnter_0.4s_ease-out_both]"
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainContent;
