// libs
import { Row, Col } from "antd";
// others
import "./style.scss";
import IconZingmp3 from "../../images/icon_zingmp3.png";
import IconZalo from "../../images/logo_zalo.png";
import IconYoutube from "../../images/logo_youtube.png";
import IconGg from "../../images/logo_gg.png";
import IconFb from "../../images/logo_fb.jpeg";
import DmcaProtected from "../../images/dmca_protected.png";

const Footer = () => (
  <div className="footer-wrapper">
    <Row className="footer-wrapper-inner">
      <Col span={8} className="copy-right">
        <img src={IconZingmp3} alt="Logo_Zingmp3" />
        <p className="copy-right-info">
          © 2015 <span> VNG Corporation</span>
        </p>
        <p>Giấy phép MXH số 314/GP-BTTTT.</p>
      </Col>
      <Col span={10}>
        <ul className="list-footer">
          <li>
            <a href="/">Giới thiệu</a>
          </li>
          <li>
            <a href="/">Điều khoản</a>
          </li>
          <li>
            <a href="/">Quảng cáo</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
          <li>
            <a href="/">Copyright</a>
          </li>
          <li>
            <a href="/">Zing MP3 VIP</a>
          </li>
          <li>
            <a href="/">Ứng dụng</a>
          </li>
          <li>
            <a href="/">Góp ý</a>
          </li>
          <li>
            <a href="/">APIs</a>
          </li>
          <li>
            <a href="/">Liên hệ</a>
          </li>
        </ul>
      </Col>
      <Col span={6} className="list-logo">
        <a href="#">
          <img src={IconFb} alt="Facebook" style={{ width: "35px" }} />
        </a>
        <a href="#">
          <img src={IconZalo} alt="Zalo" style={{ width: "45px" }} />
        </a>
        <a href="#">
          <img src={IconYoutube} alt="Youtube" style={{ width: "35px" }} />
        </a>
        <a href="#">
          <img src={IconGg} alt="Google" style={{ width: "35px" }} />
        </a>
        <div className="dmca-badge">
          <a href="#">
            <img src={DmcaProtected} alt="Dmca_protected" />
          </a>
        </div>
        <a href="#">Phiên bản mobile</a>
      </Col>
    </Row>
  </div>
);
export default Footer;
