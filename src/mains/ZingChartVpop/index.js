// libs
import { Divider } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailVPop";
// others
import "./style.scss";

const ZingChartVPop = () => {
  const itemDetail = [
    <ItemDetail key="01" />,
    <ItemDetail key="01" />,
    <ItemDetail key="01" />,
    <ItemDetail key="01" />,
  ];
  return (
    <div className="zing-chart-vpop-wrapper">
      <TitleComponent titleName="Nhạc Việt Mới" fontSize="26px" />
      <ul className="vpop-list">
        {itemDetail.map((item) => (
          <li key={item}>
            {item}
            <Divider />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZingChartVPop;
