import "./style.css";
import logo from "./../../img/logo.svg";

const Header = () => {
  return (
    <div className="title--header">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;
