import React, { useEffect } from "react";
import Banner from "../components/Home/Banner";
import HighlightList from "../components/Home/HighlightList";
import News from "../components/Home/News";
import fullpage from "fullpage.js";
import Footer from "../components/Root/Footer";
const Home = ({ openModal, closeModal }) => {
  useEffect(() => {
    new fullpage("#fullpage", {
      // fullpage.js 옵션 설정
      sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
      // 추가적인 옵션들 설정 가능
      // https://alvarotrigo.com/fullPage/documentation/

      // fullpage.js에서 사용할 각 섹션의 클래스를 지정합니다.
      sectionSelector: ".section",
    });
  }, []);

  return (
    <div id="fullpage">
      <div className="section"><Banner /></div>
      <div className="section"><HighlightList /></div>
      <div className="section"><News openModal={openModal} closeModal={closeModal} /></div>
      <div className="section"><Footer /></div>
    </div>
  );
};

export default Home;
