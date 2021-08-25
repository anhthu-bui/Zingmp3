// libs
import { Layout } from "antd";
// components
import SongRating from "../SongRating";
import HotTopic from "../HotTopic";
import ZingChartSong from "../ZingChartSong";
import ZingChartAlbum from "../ZingChartAlbum";
import ZingChartMV from "../ZingChartMV";
import ZingChartVpop from "../ZingChartVpop";
import ZingChartNews from "../ZingChartNews";
import VideoHot from "../VideoHot";
import AlbumHot from "../AlbumHot";
import PlaylistHot from "../PlaylistHot";
import HotSinger from "../HotSinger";
import Partner from "../Partner";
// others
import "./style.scss";

const { Content } = Layout;

const ContentLayOutHome = () => (
  <Content className="content-body-wrapper">
    <div className="content-body-wrapper-inner">
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
);

export default ContentLayOutHome;
