// libs
import { Divider } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailVPop";
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
  <ItemDetail key="10" />,
];
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
