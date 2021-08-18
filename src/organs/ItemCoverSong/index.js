// components
import ImageComponent from "../../components/ImageComponent";
// others
import "./style.scss";
import imgCover from "../../images/img_cover3.jpeg";

const ItemCoverSong = () => (
  <div className="item-cover-song-wrapper">
    <ImageComponent
      image={imgCover}
      width="320px"
      height="125px"
      ranking="01"
    />
  </div>
);
export default ItemCoverSong;
