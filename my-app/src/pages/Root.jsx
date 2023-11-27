import { Outlet } from "react-router-dom";

import Header from "../components/Root/Header";
import Nav from "../components/Root/Nav";
import Footer from "../components/Root/Footer";
const Root = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
