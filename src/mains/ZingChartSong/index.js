// libs
import { Divider } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetailSong from "../../organs/ItemDetailSong";
import MenuZingChartComponent from "../../components/MenuZingChartComponent";
import ItemCoverSong from "../../organs/ItemCoverSong";
// others
import "./style.scss";

const ZingChartSong = () => (
  <div className="zing-chart-song-wrapper">
    <TitleComponent
      titleName="#ZingChart - Bài Hát"
      fontSize="18px"
      iconPlay="true"
    />
    <MenuZingChartComponent />
    <ItemCoverSong />
    <ul>
      <li>
        <ItemDetailSong />
      </li>
      <Divider />
      <li>
        <ItemDetailSong />
      </li>
      <Divider />
      <li>
        <ItemDetailSong />
      </li>
      <Divider />
      <li>
        <ItemDetailSong />
      </li>
    </ul>
  </div>
);

export default ZingChartSong;
