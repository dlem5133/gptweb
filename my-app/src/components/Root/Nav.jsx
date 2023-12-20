import { useRef } from "react";
import { Link } from "react-router-dom";

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
      <nav id="menu">
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
