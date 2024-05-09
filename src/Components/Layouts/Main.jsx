import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const locations = useLocation();
  const noHeadersFooter = locations.pathname.includes("login");
  return (
    <div>
      {noHeadersFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeadersFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
