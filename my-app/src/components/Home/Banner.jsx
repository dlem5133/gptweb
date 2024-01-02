import { useRef, useEffect } from "react";
import fullpage from "fullpage.js";

const Banner = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.autoplay = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;

      // loop 속성 설정
      videoRef.current.loop = true;
    }
    const fullPageInstance = new fullpage("#fullpage", {
      // fullpage.js 옵션 설정
      sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
      // 추가적인 옵션들 설정 가능
      // https://alvarotrigo.com/fullPage/documentation/
      // fullpage.js에서 사용할 각 섹션의 클래스를 지정합니다.
      sectionSelector: ".section",
      
      afterLoad: function (origin, destination, direction) {
        // 해당 섹션에 도달했을 때만 비디오를 재생합니다.
        if (destination.index === 0) { // 첫 번째 섹션일 경우에만 비디오 재생
          if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play();
          }
        } 
      }
    });
    return () => {
      // fullpage.js 인스턴스 제거
      if (fullPageInstance) {
        fullPageInstance.destroy('all');
      }
    };
  }, []);

  return (
    <section id="banner">
      <div className="inner"></div>
      <div className="ai-downarr w"></div>
      <video ref={videoRef} src="images/banner.mp4"></video>
    </section>
  );
};

export default Banner;
