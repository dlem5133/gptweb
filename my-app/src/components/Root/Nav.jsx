import { useRef } from "react";
import { useLocation,Link } from "react-router-dom";

const styleOverlay = {
  position: "fixed",
  left: 0,
  top: 0,
  width: "100vw",
  height: "100vh",
  zIndex: "50",
};

const Nav = ({ switchNav }) => {
  const overlay = useRef(null);
  const location = useLocation();

  // 현재 경로 확인
  const currentPath = location.pathname;
  const navClass1 = currentPath === '/' ? 'menu menu-b' : 'menu menu-w';
  return (
    <div
      style={styleOverlay}
      ref={overlay}
      onClick={(event) => {
        if (event.target == overlay.current) {
          switchNav();
        }
      }}
    >
      <nav id="menu" className={navClass1}>
      {/* 화이트 버전 코드 - menu 2
      <nav id="menu" className="menu-w"> */}
        <ul class="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/detail">chatGPT</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
