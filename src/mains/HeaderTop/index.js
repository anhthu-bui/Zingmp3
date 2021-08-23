// libs
import { Input } from "antd";
// others
import "./style.scss";
import LogoZingmp3 from "../../images/logo_zingmp3.png";

const { Search } = Input;

const HeaderTop = () => (
  <div className="header-top-wrapper">
    <div className="header-top-wrapper-inner">
      <div className="header-logo">
        <a href="/" className="logo">
          <img src={LogoZingmp3} alt="Logo_Zingmp3" />
        </a>
      </div>
      <div className="header-search">
        <form className="search">
          <Search placeholder="Nhập nội dung cần tìm" style={{ width: 400 }} />
        </form>
      </div>
      <div className="menu-top">
        <ul>
          <li>
            <a href="/" className="active">
              MP3
            </a>
          </li>
          <li>
            <a href="/">NEWS</a>
          </li>
          <li>
            <a href="/">TV</a>
          </li>
          <li>
            <a href="/">ZALO PC</a>
          </li>
        </ul>
      </div>
      <div className="login">
        <a href="#">Đăng nhập</a>
      </div>
    </div>
  </div>
);
export default HeaderTop;
