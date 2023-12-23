import { Link } from "react-router-dom";

const Header = ({ switchNav }) => {
  return (
    <header id="header">
    {/* 화이트 버전 코드 - header
    <header id="header" className="header-w"> */}
      <div className="ai-inner">
      <Link to="/" className="logo"></Link>
      <div className="ai-header">
      {/* 화이트 버전 코드 - header menu 1
        <div className="ai-header-w"> */}
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
