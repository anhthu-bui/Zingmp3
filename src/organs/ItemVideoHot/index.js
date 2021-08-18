// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
// others
import "./style.scss";
import imgVideo from "../../images/img_mv1.jpeg";

const ItemVideo = () => (
  <div className="item-video-wrapper">
    <ImageComponent image={imgVideo} width="150px" cover="true" />
    <InformationComponent name="Em Hứa Thế Nào" singer="Như Việt, ACA" />
  </div>
);
export default ItemVideo;
