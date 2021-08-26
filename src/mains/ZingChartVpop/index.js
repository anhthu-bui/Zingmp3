// libs
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailVPop";
// others
import "./style.scss";
// mocks
import dataVpop from "../../mocks/VPop";
// dataSources
import { saveVpop } from "../../actions/saveData";

const ZingChartVPop = () => {
  const dispatch = useDispatch();
  const stateVPop = useSelector((state) => state.saveReducer.dataVpop);
  useEffect(() => {
    dispatch(saveVpop(dataVpop));
  }, []);
  return (
    <div className="zing-chart-vpop-wrapper">
      <div className="vpop">
        <TitleComponent titleName="Nhạc Việt Mới" fontSize="26px" />
        <ul className="vpop-list">
          {stateVPop.map((item) => (
            <li key={item.id}>
              <ItemDetail
                name={item.name}
                singer={item.singer}
                img={item.img}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ZingChartVPop;
