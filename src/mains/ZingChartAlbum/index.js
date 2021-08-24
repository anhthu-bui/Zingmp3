// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailAlbum";
import MenuZingChartComponent from "../../components/MenuZingChartComponent";
import ImageCoverComponent from "../../components/ImageCoverComponent";
// mocks
import dataAlbum from "../../mocks/ZingChart_Album";
// images
import zingchartAlbumCover from "../../images/zingchart_album_cover.jpeg";
// others
import "./style.scss";

const ZingChartAlbum = () => (
  <div className="zing-chart-album-wrapper">
    <TitleComponent titleName="#ZingChart Tuần - Album" fontSize="18px" />
    <MenuZingChartComponent />
    <ImageCoverComponent
      image={zingchartAlbumCover}
      rating="01"
      name="Xuân Hạ Thu Đông, rồi lại Xuân - Tập 7+8"
      singer="Nhiều nghệ sĩ"
    />
    <ul className="zingchart-album">
      {dataAlbum.map((item) => (
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

export default ZingChartAlbum;
