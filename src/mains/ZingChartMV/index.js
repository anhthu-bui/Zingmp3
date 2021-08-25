// libs
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailMV";
import MenuZingChartComponent from "../../components/MenuZingChartComponent";
import ImageCoverComponent from "../../components/ImageCoverComponent";
// actions
import { saveZingChartMV } from "../../actions/saveData";
// images
import zingchartCover from "../../images/zingchart_mv_cover.jpeg";
// others
import "./style.scss";

const ZingChartMV = () => {
  const dispatch = useDispatch();
  const stateZingChartMV = useSelector(
    (state) => state.saveReducer.dataZingChartMV
  );
  const action = saveZingChartMV(stateZingChartMV);
  useEffect(() => {
    dispatch(action);
  });
  return (
    <div className="zing-chart-mv-wrapper">
      <TitleComponent
        titleName="#ZingChart Tuần - MV"
        fontSize="18px"
        iconPlay="true"
      />
      <MenuZingChartComponent />
      <ImageCoverComponent
        image={zingchartCover}
        rating="01"
        name="Em Quá Khờ Dại"
        singer="Nguyễn Thạc Bảo Ngọc"
      />
      <ul className="zingchart-mv">
        {stateZingChartMV.map((item) => (
          <li key={item}>
            <ItemDetail
              name={item.name}
              singer={item.singer}
              rank={item.rank}
              img={item.img}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZingChartMV;
