import { Link } from "react-router-dom";

const Header = ({ switchNav }) => {
  return (
    <header id="header">
      <div className="ai-inner">
      <Link to="/" className="logo"></Link>
      <div className="ai-header">
        <div className="ai-flex">
          <nav className="hov-b" onClick={switchNav}>AI Tech</nav>
          <div className="ai-ico arr_1"></div>
        </div>
        <nav className="hov-b"  onClick={switchNav}>AI News</nav>
        <nav className="hov-b"  onClick={switchNav}>Contact</nav>
      </div>

      </div>
    </header>
  );
};

export default Header;
