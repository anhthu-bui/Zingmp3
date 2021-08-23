// libs
import PropTypes from "prop-types";
// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
// others
import "./style.scss";

const ItemDetailMV = ({ name, singer, rank, img }) => (
  <div className="item-detail-mv-wrapper">
    <ImageComponent
      image={img}
      width="110px"
      ranking={rank}
      cover="true"
      color="white"
    />
    <InformationComponent name={name} singer={singer} fontSize="14px" />
  </div>
);
ItemDetailMV.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  singer: PropTypes.string,
  rank: PropTypes.string,
};
export default ItemDetailMV;
