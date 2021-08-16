// libs
import { Divider } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailNew";
import ItemCover from "../../organs/ItemCoverNew";
// others
import "./style.scss";

const ZingChartNew = () => (
  <div className="zing-chart-news-wrapper">
    <TitleComponent titleName="Tin tức âm nhạc" fontSize="18px" />
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

export default ZingChartNew;
