/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
// import logo from "./logo.svg";
// import "./App.css";
import { Row, Col } from "antd";
import { Layout } from "antd";
import "antd/dist/antd.css";
import HeaderZing from "./Header";
import FooterZing from "./Footer";
import BodyLayout from "./BodyLayout";
import Partner from "./Partner";
import "./style.scss";
import SiderLayout from "./SiderLayout";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="container">
      <Header className="header-layout">
        <HeaderZing />
      </Header>
      <Content className="body-layout">
        <Row>
          <Col span={4}></Col>
          <Col span={16} className="content-layout">
            <Row>
              <Col span={16} className="song-ranking">
                <BodyLayout />
              </Col>
              <Col span={8}>
                <SiderLayout />
              </Col>
            </Row>
            <Row>
              <Col span={24} className="partner">
                <Partner />
              </Col>
            </Row>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Content>
      <Footer className="footer-layout">
        <FooterZing />
      </Footer>
    </div>
  );
}

export default App;
