// components
import ImageComponent from "../../components/ImageComponent";
// others
import "./style.scss";
import imgCover from "../../images/img_cover3.jpeg";

const ItemCoverMV = () => (
  <div className="item-cover-mv-wrapper">
    <ImageComponent
      image={imgCover}
      width="300px"
      height="125px"
      ranking="01"
      cover="false"
    />
  </div>
);
export default ItemCoverMV;
