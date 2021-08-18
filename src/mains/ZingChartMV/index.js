// libs
import { Divider } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailMV";
import MenuZingChartComponent from "../../components/MenuZingChartComponent";
import ItemCover from "../../organs/ItemCoverMV";
// others
import "./style.scss";

const itemDetail = new Array(4);
for (let i = 0; i < itemDetail.length; i += 1) {
  itemDetail[i] = <ItemDetail />;
}

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
      {itemDetail.map((item) => (
        <li key={item}>
          {item}
          <Divider style={{ margin: "10px 0px" }} />
        </li>
      ))}
    </ul>
  </div>
);

export default ZingChartMV;
