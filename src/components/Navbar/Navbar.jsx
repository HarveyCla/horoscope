import "./Navbar.scss";
import logo from "../../helper/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="link">
        <a href="#aboutus">Horoscopes</a>
        <a href="#foryou">Daily</a>
        <a href="#services">Tarot</a>
        <a href="#blog">Articles</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
