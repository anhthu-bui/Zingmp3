// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailVPop";
// others
import "./style.scss";
// dataSources
import dataVpop from "../../mocks/VPop";

const ZingChartVPop = () => (
  <div className="zing-chart-vpop-wrapper">
    <div className="vpop">
      <TitleComponent titleName="Nhạc Việt Mới" fontSize="26px" />
      <ul className="vpop-list">
        {dataVpop.map((item) => (
          <li key={item.id}>
            <ItemDetail name={item.name} singer={item.singer} img={item.img} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ZingChartVPop;
