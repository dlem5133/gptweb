import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <Link to="/" className="logo">
        BNK-AI-LAB
      </Link>
      <nav>
        <a href="#menu">Menu</a>
      </nav>
    </header>
  );
};

export default Header;
