// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
import IconListComponent from "../../components/IconListComponent";
// others
import "./style.scss";

const ItemDetailSong = () => (
  <div className="item-detail-song-wrapper">
    <ImageComponent ranking="01" />
    <InformationComponent name="Một phút" singer="Khởi My" fontSize="14px" />
    <span className="icon-list">
      <IconListComponent />
    </span>
  </div>
);
export default ItemDetailSong;
