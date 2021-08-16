// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
// others
import "./style.scss";

const ItemDetailSong = () => (
  <div className="item-detail-song-wrapper">
    <ImageComponent ranking="01" />
    <InformationComponent name="Một phút" singer="Khởi My" />
  </div>
);
export default ItemDetailSong;
