import "./header.css";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="inner">
        <div className="header-left">
          <img src={logo} alt="판다마켓" />
        </div>
        <li>자유게시판</li>
        <li>중고마켓</li>
      </div>
      <Link to="/login" className="login-btn">
        로그인
      </Link>
    </header>
  );
}

export default Header;
