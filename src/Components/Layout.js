import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const search = useLocation();

  return (
    <>
      {search.pathname === "/login" ? null : <Navbar />}
      <Outlet />
      {search.pathname === "/" || search.pathname === "/login" ? null : (
        <Footer />
      )}
    </>
  );
}
