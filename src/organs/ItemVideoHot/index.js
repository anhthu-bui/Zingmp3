// libs
import PropTypes from "prop-types";
// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
// others
import "./style.scss";

const ItemVideo = ({ name, singer, img }) => (
  <div className="item-video-wrapper">
    <ImageComponent image={img} width="140px" height="auto" cover="true" />
    <InformationComponent name={name} singer={singer} fontSize="14px" />
  </div>
);
ItemVideo.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  singer: PropTypes.string,
};
export default ItemVideo;
