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

const { Header, Sider, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Header className="header-layout">
          <HeaderZing />
        </Header>
        <Layout className="body-layout">
          <Content className="content-layout">
            <BodyLayout />
          </Content>
          <Sider className="sidebar-layout">
            <SiderLayout />
          </Sider>
        </Layout>
        <Layout className="body-partner">
          <Row>
            <Col span={24}>
              <Partner />
            </Col>
          </Row>
        </Layout>
        <Footer className="footer-layout">
          <FooterZing />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
