// libs
import PropTypes from "prop-types";
// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
// others
import "./style.scss";

const ItemDetailNew = ({ name, img }) => (
  <div className="item-detail-new-wrapper">
    <ImageComponent image={img} width="110px" />
    <InformationComponent name={name} fontSize="14px" />
  </div>
);
ItemDetailNew.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};
export default ItemDetailNew;
