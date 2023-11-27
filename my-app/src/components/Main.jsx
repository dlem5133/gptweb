import Header from "./Header";
import Nav from "./Nav";
import Banner from "./Banner";
import Highlight from "./Highlight";
import Footer from "./Footer";
import News from "./News";
const Main = ({ openModal, closeModal }) => {
  return (
    <>
      <Header />
      <Nav />
      <Banner />
      <Highlight />
      <News openModal={openModal} closeModal={closeModal} />
      <Footer />
    </>
  );
};

export default Main;
