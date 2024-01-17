import { useLocation,Link } from "react-router-dom";

const Header = ({ switchNav }) => {
  const location = useLocation();

  // 현재 경로 확인
  const currentPath = location.pathname;
  const navbarClass1 = currentPath === '/' ? 'header-b' : 'header-w';
  const navbarClass2 = currentPath === '/' ? 'ai-header-b' : 'ai-header-w';
  const navbarClass3 = currentPath === '/' ? 'ai-ico arr_1-b' : 'ai-ico arr_1-w';

  return (
    <header id="header" className={navbarClass1}>
    {/* 화이트 버전 코드 - header
    <header id="header" className="header-w"> */}
      <div className="ai-inner">
      <Link to="/" className="logo"></Link>
      <div className={navbarClass2}>
      {/* 화이트 버전 코드 - header menu 1
        <div className="ai-header-w"> */}
        <div className="ai-flex">
          <nav className="hov-b" onClick={switchNav}>AI Tech</nav>
          <div className={navbarClass3}></div>
        </div>
        <Link className="ai-flex" to="/news"><nav>AI News</nav></Link>
        <nav>Contact</nav>
      </div>
      </div>
    </header>
  );
};

export default Header;
