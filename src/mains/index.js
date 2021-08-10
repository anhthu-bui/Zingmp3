// libs
import { Layout } from "antd";
import "antd/dist/antd.css";
// components
import HeaderZing from "./Header";
import FooterZing from "./Footer";
import SongRating from "./SongRating";
import HotTopic from "./HotTopic";
import ZingChart from "./ZingChart";
import AlbumVideoHot from "./AlbumVideoHot";
import HotSinger from "./HotSinger";
import Partner from "./Partner";
// others
import "./style.scss";

const { Header, Content, Footer } = Layout;

const Mains = () => (
  <div className="container">
    <Header className="header-layout">
      <HeaderZing />
    </Header>
    <Content className="content-body-wrapper">
      <div className="content-song-raking-wrapper-inner">
        <SongRating />
        <HotTopic />
        <AlbumVideoHot
          classname="playlist"
          title="Lua Chon Hom Nay"
          backgroundColor="gray"
        />
        <ZingChart
          classname="zing-chart-song"
          title="Bai Hat"
          backgroundColor="orange"
        />
        <AlbumVideoHot
          classname="video-hot"
          title="Vieo Hot"
          backgroundColor="pink"
        />
        <ZingChart
          classname="zing-chart-mv"
          title="MV"
          backgroundColor="#C0C0C0"
        />
        <AlbumVideoHot
          classname="album-hot"
          title="Album Hot"
          backgroundColor="brown"
        />
        <ZingChart
          classname="zing-chart-album"
          title="Album"
          backgroundColor="#800000"
        />
        <ZingChart
          classname="zing-chart-vpop"
          title="Nhac Viet"
          backgroundColor="#330066"
        />
        <ZingChart
          classname="zing-chart-news"
          title="Tin Tuc"
          backgroundColor="#000080"
        />
        <HotSinger />
        <Partner />
      </div>
    </Content>
    <Footer className="footer-layout">
      <FooterZing />
    </Footer>
  </div>
);

export default Mains;
