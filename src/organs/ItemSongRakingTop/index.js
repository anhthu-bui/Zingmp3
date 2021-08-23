// libs
import PropTypes from "prop-types";
// components
import ImageComponent from "../../components/ImageComponent";
import NumberComponent from "../../components/NumberComponent";
// others
import "./style.scss";

const ItemSongRaking = ({ name, singer, img, rank, percent, number }) => (
  <div className="item-song-raking-top-wrapper">
    <div className="number-left">
      <NumberComponent rank={rank} number={number} fontSize="12px" />
    </div>
    <div className="song-rating-img">
      <ImageComponent
        image={img}
        width="28px"
        height="28px"
        style={{ marginRight: "0px" }}
      />
    </div>
    <div className="song-rating-information">
      <h3 className="song-rating-name">
        <a href="/">{name}</a>
      </h3>
      <div className="song-rating-singer">
        <a href="/">{singer}</a>
      </div>
    </div>
    <div className="number-right">
      <NumberComponent rank={rank} number={percent} fontSize="12px" />
    </div>
  </div>
);
ItemSongRaking.propTypes = {
  name: PropTypes.string,
  rank: PropTypes.string,
  img: PropTypes.string,
  singer: PropTypes.string,
  percent: PropTypes.string,
  number: PropTypes.string,
};
export default ItemSongRaking;
