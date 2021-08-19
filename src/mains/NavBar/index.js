// libs
import { Row, Col } from "antd";
import { HomeFilled, StopFilled, UpCircleFilled } from "@ant-design/icons";
// contexts
import { useLocale } from "../../contexts/LocaleContexts";
// dataSources
import { menuTop } from "../../dataSources/Menu";
// others
import "./style.scss";

const NavBar = () => {
  const { locale, setLocale, localeDataSource } = useLocale();
  return (
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
                <a href="/">{localeDataSource[item.name]}</a>
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
          <select
            className="select-change-locale"
            defaultValue={locale}
            onChange={(e) => setLocale(e.target.value)}
          >
            <option value="vi">{localeDataSource.vi}</option>
            <option value="en">{localeDataSource.en}</option>
          </select>
        </Col>
      </Row>
    </div>
  );
};
export default NavBar;
