// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
// others
import "./style.scss";
import img1 from "../../images/img1.jpeg";

const ItemDetailAlbum = () => (
  <div className="item-detail-album-wrapper">
    <ImageComponent image={img1} width="110px" ranking="01" cover="true" />
    <InformationComponent name="Một phút" singer="Khởi My" />
  </div>
);
export default ItemDetailAlbum;
