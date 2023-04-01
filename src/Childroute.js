import { Outlet } from "react-router-dom";

const Childroute = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Childroute;
