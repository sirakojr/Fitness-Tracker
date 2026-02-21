import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      {/* <br /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
