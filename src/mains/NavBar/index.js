// libs
import { Row, Col } from "antd";
import { HomeFilled, StopFilled, UpCircleFilled } from "@ant-design/icons";
// others
import "./style.scss";
import DataMenu from "../../dataSource/Menu";

const NavBar = () => (
  <div className="navbar-wrapper">
    <Row className="navbar-wrapper-inner">
      <Col span={16} className="navbar-wrapper-inner-menu-navbar">
        <ul>
          <li>
            <a href="#" className="navbar-wrapper-inner-menu-navbar-icon-home">
              <HomeFilled />
            </a>
          </li>
          {DataMenu.map((item) => (
            <li key={item.id}>
              <a href="/">{item.name}</a>
            </li>
          ))}
        </ul>
      </Col>
      <Col span={8} className="navbar-wrapper-inner-navbar-right">
        <a href="#" className="navbar-wrapper-inner-navbar-right-turn-off-ads">
          <StopFilled /> Tắt quảng cáo
        </a>
        <a href="#" className="navbar-wrapper-inner-navbar-right-upload">
          <UpCircleFilled style={{ fontSize: "20px", color: "#a845de;" }} />
        </a>
      </Col>
    </Row>
  </div>
);

export default NavBar;
