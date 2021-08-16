// others
import "./style.scss";
// images
import IconZingmp3 from "../../images/icon_zingmp3.png";
import IconZalo from "../../images/logo_zalo.png";
import IconYoutube from "../../images/logo_youtube.png";
import IconGg from "../../images/logo_gg.png";
import IconFb from "../../images/logo_fb.jpeg";
import DmcaProtected from "../../images/dmca_protected.png";
// dataSources
import { menuFooter } from "../../dataSources/Menu";

const Footer = () => (
  <div className="footer-wrapper">
    <div className="footer-wrapper-inner">
      <div className="copy-right">
        <img src={IconZingmp3} alt="Logo_Zingmp3" />
        <div className="info_copy-right">
          <p>
            © 2015 <span> VNG Corporation</span>
          </p>
          <p>Giấy phép MXH số 314/GP-BTTTT.</p>
        </div>
      </div>
      <div className="footer-right">
        <div>
          <ul className="list_footer">
            {menuFooter.map((item) => (
              <li key={item.name}>
                <a href="/">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="list_logo">
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
        </div>
      </div>
    </div>
  </div>
);
export default Footer;