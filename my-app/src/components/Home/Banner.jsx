import { useRef, useEffect } from "react";

const Banner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // 컴포넌트가 마운트된 후에 실행되는 부분
    if (videoRef.current) {
      videoRef.current.autoplay = true;
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;

      videoRef.current.play(); // 비디오 자동 재생
    }
  }, []);
  return (
    <section id="banner">
      <div className="inner"></div>
      <div className="ai-downarr"></div>
      <video ref={videoRef} src="images/banner.mp4"></video>
    </section>
  );
};
export default Banner;
