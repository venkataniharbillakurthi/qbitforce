import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar.tsx";
import Footer from "../Components/Footer.tsx";

function MainContent() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-var(--nav-height))] flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainContent;
