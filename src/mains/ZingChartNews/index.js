// libs
import { Divider } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailNew";
import ItemCover from "../../organs/ItemCoverNew";
// others
import "./style.scss";

const itemDetail = [
  <ItemDetail key="01" />,
  <ItemDetail key="01" />,
  <ItemDetail key="01" />,
  <ItemDetail key="01" />,
];
const ZingChartNew = () => (
  <div className="zing-chart-news-wrapper">
    <TitleComponent titleName="Tin tức âm nhạc" fontSize="18px" />
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

export default ZingChartNew;
