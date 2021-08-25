// libs
import PropTypes from "prop-types";
// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
import "./style.scss";

const ItemPlayList = ({ name, img }) => (
  <div className="item-playlist-wrapper">
    <ImageComponent image={img} width="140px" height="155px" cover="true" />
    <InformationComponent name={name} fontSize="14px" />
  </div>
);
ItemPlayList.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};
export default ItemPlayList;
