// components
import ImageComponent from "../../components/ImageComponent";
// others
import "./style.scss";
import imgCover from "../../images/img_cover1.jpeg";

const ItemCoverAlbum = () => (
  <div className="item-cover-album-wrapper">
    <ImageComponent
      image={imgCover}
      width="300px"
      height="125px"
      ranking="01"
      cover="false"
    />
  </div>
);
export default ItemCoverAlbum;