// libs
import { Divider } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailSong";
import MenuZingChartComponent from "../../components/MenuZingChartComponent";
import ItemCoverSong from "../../organs/ItemCoverSong";
// others
import "./style.scss";

const itemDetail = new Array(9);
for (let i = 0; i < itemDetail.length; i += 1) {
  itemDetail[i] = <ItemDetail />;
}
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
      {itemDetail.map((item) => (
        <li key={item}>
          {item}
          <Divider style={{ margin: "10px 0px" }} />
        </li>
      ))}
    </ul>
  </div>
);

export default ZingChartSong;
