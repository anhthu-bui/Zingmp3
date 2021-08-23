// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
// others
import "./style.scss";
import imgAlbum from "../../images/img_playlist1.jpeg";

const ItemAlbum = () => (
  <div className="item-album-wrapper">
    <ImageComponent image={imgAlbum} width="140px" height="auto" cover="true" />
    <InformationComponent
      name="Dắt mẹ đi khắp thế gian"
      singer="Chi Dân"
      fontSize="14px"
    />
  </div>
);
export default ItemAlbum;
