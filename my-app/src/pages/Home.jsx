import Banner from "../components/Home/Banner";
import HighlightList from "../components/Home/HighlightList";
import News from "../components/Home/News";

const Home = ({ openModal, closeModal }) => {
  return (
    <>
      <Banner />
      <HighlightList />
      <News openModal={openModal} closeModal={closeModal} />
    </>
  );
};

export default Home;
