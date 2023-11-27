import { Link } from "react-router-dom";

const Header = ({ switchNav }) => {
  return (
    <header id="header">
      <Link to="/" className="logo">
        BNK-AI-LAB
      </Link>
      <nav onClick={switchNav}>Menu</nav>
    </header>
  );
};

export default Header;
