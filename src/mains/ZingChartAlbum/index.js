// libs
import { Divider } from "antd";
// components
// import ZingChart from "../ZingChart";
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailAlbum";
import MenuZingChartComponent from "../../components/MenuZingChartComponent";
import ItemCover from "../../organs/ItemCoverAlbum";
// others
import "./style.scss";

const ZingChartAlbum = () => (
  <div className="zing-chart-album">
    <TitleComponent titleName="#ZingChart Tuần - Album" fontSize="18px" />
    <MenuZingChartComponent />
    <ItemCover />
    <ul>
      <li>
        <ItemDetail />
      </li>
      <Divider />
      <li>
        <ItemDetail />
      </li>
      <Divider />
      <li>
        <ItemDetail />
      </li>
      <Divider />
      <li>
        <ItemDetail />
      </li>
    </ul>
  </div>
);

export default ZingChartAlbum;
