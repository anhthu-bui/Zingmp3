// libs
import PropTypes from "prop-types";
// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
// others
import "./style.scss";

const ItemAlbum = ({ name, singer, img }) => (
  <div className="item-album-wrapper">
    <ImageComponent image={img} width="140px" height="155px" cover="true" />
    <InformationComponent name={name} singer={singer} fontSize="14px" />
  </div>
);
ItemAlbum.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  singer: PropTypes.string.isRequired,
};
export default ItemAlbum;
