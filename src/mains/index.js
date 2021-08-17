// components
import HeaderZing from "./Header";
import FooterZing from "./Footer";
import ContentZing from "./Content";
// others
import "./style.scss";

const Main = () => (
  <div className="main-wrapper">
    <HeaderZing />
    <ContentZing />
    <FooterZing />
  </div>
);
export default Main;
