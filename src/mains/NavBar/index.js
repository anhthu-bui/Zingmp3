// libs
import { Row, Col } from "antd";
import { HomeFilled, StopFilled, UpCircleFilled } from "@ant-design/icons";
// others
import "./style.scss";
// dataSources
import { menuTop } from "../../dataSources/Menu";

const NavBar = () => (
  <div className="navbar-wrapper">
    <Row className="navbar-wrapper-inner">
      <Col span={16} className="menu-navbar">
        <ul>
          <li>
            <a href="#" className="icon-home">
              <HomeFilled />
            </a>
          </li>
          {menuTop.map((item) => (
            <li key={item.id}>
              <a href="/">{item.name}</a>
            </li>
          ))}
        </ul>
      </Col>
      <Col span={8} className="navbar-right">
        <a href="#" className="turn-off-ads">
          <StopFilled /> Tắt quảng cáo
        </a>
        <a href="#" className="upload">
          <UpCircleFilled style={{ fontSize: "20px", color: "#a845de;" }} />
        </a>
      </Col>
    </Row>
  </div>
);

export default NavBar;
