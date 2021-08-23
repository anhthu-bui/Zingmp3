// libs
import PropTypes from "prop-types";
import { MinusOutlined } from "@ant-design/icons";
// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
import IconListComponent from "../../components/IconListComponent";
import NumberComponent from "../../components/NumberComponent";
// others
import "./style.scss";

const ItemSongRating = ({ name, singer, img, rank, number }) => (
  <div className="item-song-rating-wrapper">
    <div className="number">
      <NumberComponent rank={rank} number={number} fontSize="20px" />
    </div>
    <div className="song-rating-icon">
      <MinusOutlined />
    </div>
    <div className="item-song-rating-info">
      <ImageComponent image={img} width="60px" height="60px" cover="true" />
      <InformationComponent name={name} singer={singer} fontSize="14px" />
    </div>
    <div className="song-rating-tool">
      <IconListComponent />
    </div>
  </div>
);
ItemSongRating.propTypes = {
  name: PropTypes.string,
  rank: PropTypes.string,
  img: PropTypes.string,
  singer: PropTypes.string,
  number: PropTypes.string,
};
export default ItemSongRating;
