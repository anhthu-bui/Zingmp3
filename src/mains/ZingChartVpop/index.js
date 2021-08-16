// libs
import { Divider } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailVPop";
// others
import "./style.scss";

const ZingChartVPop = () => (
  <div className="zing-chart-vpop-wrapper">
    <TitleComponent titleName="Nhạc Việt Mới" fontSize="26px" />
    <ul className="vpop-list">
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

export default ZingChartVPop;
