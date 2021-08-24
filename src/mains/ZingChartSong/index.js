// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailSong";
import MenuZingChartComponent from "../../components/MenuZingChartComponent";
import ImageCoverComponent from "../../components/ImageCoverComponent";
// mock
import zingChartSong from "../../mocks/ZingChartSong";
// images
import imgCover from "../../images/img_cover1.jpeg";
// others
import "./style.scss";

const ZingChartSong = () => (
  <div className="zing-chart-song-wrapper">
    <TitleComponent
      titleName="#ZingChart - Bài Hát"
      fontSize="18px"
      iconPlay="true"
    />
    <MenuZingChartComponent />
    <ImageCoverComponent
      image={imgCover}
      rating="01"
      name="Mot phut"
      singer="Khoi My"
    />
    <ul className="song-list">
      {zingChartSong.map((item) => (
        <li key={item.id}>
          <ItemDetail name={item.name} singer={item.singer} rank={item.rank} />
        </li>
      ))}
    </ul>
  </div>
);

export default ZingChartSong;
