// libs
import { Divider } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailMV";
import MenuZingChartComponent from "../../components/MenuZingChartComponent";
import ItemCover from "../../organs/ItemCoverMV";
// others
import "./style.scss";

const ZingChartMV = () => (
  <div className="zing-chart-mv-wrapper">
    <TitleComponent
      titleName="#ZingChart Tuần - MV"
      fontSize="18px"
      iconPlay="true"
    />
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

export default ZingChartMV;
