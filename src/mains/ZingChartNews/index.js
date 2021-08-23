// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailNew";
import ImageCoverComponent from "../../components/ImageCoverComponent";
// mocks
import dataNews from "../../mock/News";
// images
import zingchartCover from "../../images/new_cover.jpeg";
// others
import "./style.scss";

const ZingChartNew = () => (
  <div className="zing-chart-news-wrapper">
    <TitleComponent titleName="Tin tức âm nhạc" fontSize="18px" />
    <ImageCoverComponent
      image={zingchartCover}
      name="5 ca khúc tạo sức ảnh hưởng của The Weeknd"
    />
    <ul className="list-news">
      {dataNews.map((item) => (
        <li key={item.id}>
          <ItemDetail name={item.name} img={item.img} />
        </li>
      ))}
    </ul>
  </div>
);

export default ZingChartNew;
