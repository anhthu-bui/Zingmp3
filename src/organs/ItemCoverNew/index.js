// components
import ImageComponent from "../../components/ImageComponent";
// others
import "./style.scss";
import imgCover from "../../images/img_cover1.jpeg";

const ItemCoverNew = () => (
  <div className="item-cover-new-wrapper">
    <ImageComponent image={imgCover} width="320px" height="125px" />
  </div>
);
export default ItemCoverNew;
