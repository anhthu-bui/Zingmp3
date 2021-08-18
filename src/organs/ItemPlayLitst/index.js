// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
// others
import "./style.scss";
import imgPlayList from "../../images/img_album1.jpeg";

const ItemPlayList = () => (
  <div className="item-playlist-wrapper">
    <ImageComponent image={imgPlayList} width="150px" cover="true" />
    <InformationComponent name="Gen Z nghe gì ?" fontSize="14px" />
  </div>
);
export default ItemPlayList;
