import { Outlet } from "react-router-dom";

import Header from "../components/Root/Header";
import Nav from "../components/Root/Nav";
import Footer from "../components/Root/Footer";
import { useState } from "react";
const Root = () => {
  const [isNav, setNav] = useState(false);
  const switchNav = () => {
    setNav(!isNav);
  };

  return (
    <>
      {isNav ? <Nav switchNav={switchNav} /> : null}
      <Header switchNav={switchNav} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
