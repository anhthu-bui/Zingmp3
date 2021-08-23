// libs
import PropTypes from "prop-types";
// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
import IconListComponent from "../../components/IconListComponent";
// others
import "./style.scss";

const ItemDetailSong = ({ name, singer, rank }) => (
  <div className="item-detail-song-wrapper">
    <div className="song-img">
      <ImageComponent ranking={rank} color="black" />
    </div>
    <div className="item-detail-information">
      <InformationComponent name={name} singer={singer} fontSize="14px" />
    </div>
    <div className="icon-list">
      <IconListComponent />
    </div>
  </div>
);
ItemDetailSong.propTypes = {
  name: PropTypes.string,
  rank: PropTypes.string,
  singer: PropTypes.string,
};
export default ItemDetailSong;
