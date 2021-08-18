// libs
import { Divider } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailNew";
import ItemCover from "../../organs/ItemCoverNew";
// others
import "./style.scss";

const itemDetail = new Array(4);
for (let i = 0; i < itemDetail.length; i += 1) {
  itemDetail[i] = <ItemDetail />;
}
const ZingChartNew = () => (
  <div className="zing-chart-news-wrapper">
    <TitleComponent titleName="Tin tức âm nhạc" fontSize="18px" />
    <ItemCover />
    <ul className="list-news">
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
