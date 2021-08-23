// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailMV";
import MenuZingChartComponent from "../../components/MenuZingChartComponent";
import ImageCoverComponent from "../../components/ImageCoverComponent";
// mocks
import dataMV from "../../mock/ZingChart_MV";
// images
import zingchartCover from "../../images/zingchart_mv_cover.jpeg";
// others
import "./style.scss";

const ZingChartMV = () => (
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
      {dataMV.map((item) => (
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

export default ZingChartMV;
