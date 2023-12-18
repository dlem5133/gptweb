import Banner from "../components/Home/Banner";
import HighlightList from "../components/Home/HighlightList";
import News from "../components/Home/News";
import HighlightDetail from "../components/Home/HighlightDetail";

const Home = ({ openModal, closeModal }) => {
  return (
    <>
      <Banner />
      <HighlightList />
      <News openModal={openModal} closeModal={closeModal} />
      <HighlightDetail />
    </>
  );
};

export default Home;
