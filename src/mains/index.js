// libs
import { Layout } from "antd";
import "antd/dist/antd.css";
// components
import HeaderZing from "./Header";
import FooterZing from "./Footer";
import SongRating from "./SongRating";
import HotTopic from "./HotTopic";
import ZingChartSong from "./ZingChartSong";
import ZingChartAlbum from "./ZingChartAlbum";
import ZingChartMV from "./ZingChartMV";
import ZingChartVpop from "./ZingChartVpop";
import ZingChartNews from "./ZingChartNews";
import VideoHot from "./VideoHot";
import AlbumHot from "./AlbumHot";
import PlaylistHot from "./PlaylistHot";
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
        <PlaylistHot />
        <ZingChartSong />
        <VideoHot />
        <ZingChartMV />
        <AlbumHot />
        <ZingChartAlbum />
        <ZingChartVpop />
        <ZingChartNews />
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
