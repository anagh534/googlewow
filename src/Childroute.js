import { Outlet } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";

const Childroute = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Childroute;