/* eslint-disable camelcase */
// libs
import { Row, Col } from "antd";
import { HomeFilled, StopFilled, UpCircleFilled } from "@ant-design/icons";
// components
// import DropDownComponent from "../../components/DropDownComponent";
// others
import "./style.scss";
import "antd/dist/antd.css";

const NavBar = () => (
  <div className="navbar-wrapper">
    <Row>
      <Col span={16} className="menu-navbar">
        <ul>
          <li>
            <a href="#" className="icon-home">
              <HomeFilled />
            </a>
          </li>
          <li>
            <a href="/" className="active">
              Nhạc Cá Nhân
            </a>
          </li>
          <li>
            <a href="/">#zingchart</a>
          </li>
          <li>
            <a href="/">Top 100</a>
          </li>
          <li>
            <a href="/">Chủ Đề</a>
          </li>
          <li>
            <a href="/">Video</a>
          </li>
          <li>
            <a href="/">Album</a>
          </li>
          <li>
            <a href="/">Nghệ Sĩ</a>
          </li>
          <li>
            <a href="/">VIP</a>
          </li>
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
