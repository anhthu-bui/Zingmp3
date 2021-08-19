// libs
import { Layout } from "antd";
// components
import HeaderTop from "../HeaderTop";
import NavBar from "../NavBar";
// others
import "./style.scss";

const { Header } = Layout;

const HeaderLayout = () => (
  <Header className="header-wrapper">
    <HeaderTop />
    <NavBar />
  </Header>
);
export default HeaderLayout;
