// libs
import { Divider } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailAlbum";
import MenuZingChartComponent from "../../components/MenuZingChartComponent";
import ItemCover from "../../organs/ItemCoverAlbum";
// others
import "./style.scss";

const itemDetail = new Array(4);
for (let i = 0; i < itemDetail.length; i += 1) {
  itemDetail[i] = <ItemDetail />;
}
const ZingChartAlbum = () => (
  <div className="zing-chart-album-wrapper">
    <TitleComponent titleName="#ZingChart Tuần - Album" fontSize="18px" />
    <MenuZingChartComponent />
    <ItemCover />
    <ul>
      {itemDetail.map((item) => (
        <li key={item}>
          {item}
          <Divider style={{ margin: "10px 0px" }} />
        </li>
      ))}
    </ul>
  </div>
);

export default ZingChartAlbum;
