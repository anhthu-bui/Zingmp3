// libs
import PropTypes from "prop-types";
// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
import IconListComponent from "../../components/IconListComponent";
// others
import "./style.scss";

const ItemDetailVPop = ({ name, singer, img }) => (
  <div className="item-detail-vpop-wrapper">
    <div className="vpop-image">
      <ImageComponent image={img} width="50px" cover="true" />
    </div>
    <div className="item-detail-information">
      <InformationComponent name={name} singer={singer} fontSize="14px" />
    </div>
    <div className="icon-list">
      <IconListComponent />
    </div>
  </div>
);
ItemDetailVPop.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  singer: PropTypes.string,
};
export default ItemDetailVPop;
