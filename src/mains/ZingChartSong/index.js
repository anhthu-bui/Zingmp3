// libs
import { Divider } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailSong";
import MenuZingChartComponent from "../../components/MenuZingChartComponent";
import ItemCoverSong from "../../organs/ItemCoverSong";
// others
import "./style.scss";

const itemDetail = [
  <ItemDetail key="01" />,
  <ItemDetail key="02" />,
  <ItemDetail key="03" />,
  <ItemDetail key="04" />,
  <ItemDetail key="05" />,
  <ItemDetail key="06" />,
  <ItemDetail key="07" />,
  <ItemDetail key="08" />,
  <ItemDetail key="09" />,
];
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
