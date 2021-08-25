// libs
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailVPop";
// others
import "./style.scss";
// dataSources
import { saveVpop } from "../../actions/saveData";

const ZingChartVPop = () => {
  const dispatch = useDispatch();
  const stateVPop = useSelector((state) => state.saveReducer.dataVpop);
  const action = saveVpop(stateVPop);
  useEffect(() => {
    dispatch(action);
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
