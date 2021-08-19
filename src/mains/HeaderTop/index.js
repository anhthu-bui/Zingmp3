// libs
import { Input } from "antd";
import { Row, Col } from "antd";

// others
import "./style.scss";
import LogoZingmp3 from "../../images/logo_zingmp3.png";

const { Search } = Input;

const HeaderTop = () => (
  <div className="header-top-wrapper">
    <Row className="header-top-wrapper-inner">
      <Col span={4}>
        <a href="/" className="logo">
          <img src={LogoZingmp3} alt="Logo_Zingmp3" />
        </a>
      </Col>
      <Col span={10}>
        <form className="search">
          <Search placeholder="Nhập nội dung cần tìm" style={{ width: 400 }} />
        </form>
      </Col>
      <Col span={6} className="menu-top">
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
      </Col>
      <Col span={4} className="login">
        <a href="#">Đăng nhập</a>
      </Col>
    </Row>
  </div>
);
export default HeaderTop;
