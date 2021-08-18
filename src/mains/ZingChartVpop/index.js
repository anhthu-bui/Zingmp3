// libs
import { Divider } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailVPop";
// others
import "./style.scss";

const itemDetail = new Array(10);
for (let i = 0; i < itemDetail.length; i += 1) {
  itemDetail[i] = <ItemDetail />;
}
const ZingChartVPop = () => (
  <div className="zing-chart-vpop-wrapper">
    <TitleComponent titleName="Nhạc Việt Mới" fontSize="26px" />
    <ul className="vpop-list">
      {itemDetail.map((item) => (
        <li key={item}>
          {item}
          <Divider style={{ margin: "10px 0px" }} />
        </li>
      ))}
    </ul>
  </div>
);

export default ZingChartVPop;
