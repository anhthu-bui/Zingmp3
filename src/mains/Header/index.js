// libs
import { Layout } from "antd";
// context
import { ProvideLocale } from "../../contexts/LocaleContexts";
// components
import HeaderTop from "../HeaderTop";
import NavBar from "../NavBar";
// others
import "./style.scss";

const { Header } = Layout;

const HeaderLayout = () => (
  <ProvideLocale>
    <Header className="header-wrapper">
      <HeaderTop />
      <NavBar />
    </Header>
  </ProvideLocale>
);
export default HeaderLayout;
