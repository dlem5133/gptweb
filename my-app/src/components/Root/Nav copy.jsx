import { useRef } from "react";
import { Link } from "react-router-dom";

const styleOverlay = {
  position: "fixed",
  left: 0,
  top: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
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
            <Link to="/highlight/1">Home</Link>
          </li>
          <li>
            <Link to="/">Elements</Link>
          </li>
          <li>
            <Link to="/">Generic</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
