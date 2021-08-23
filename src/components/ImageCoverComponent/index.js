// libs
import classNames from "classnames";
import PropTypes from "prop-types";
// others
import "./style.scss";

const ImageCoverComponent = ({ image, rating, name, singer }) => (
  <div className="image-cover-wrapper">
    <a href="/" className="image-cover-wrapper-inner">
      <img
        className="img-cover"
        src={image}
        style={{ width: "350px", height: "120px" }}
      />
      <span
        className={classNames("rating", { news: !rating })}
        style={{ color: "white" }}
      >
        {rating}
      </span>
      <div className="information-wrapper">
        <h3 className="song-name">
          <a href="/">{name}</a>
        </h3>
        <div className="information-singer">
          <a href="/">{singer}</a>
        </div>
      </div>
    </a>
  </div>
);

ImageCoverComponent.propTypes = {
  image: PropTypes.string,
  rating: PropTypes.string,
  name: PropTypes.string,
  singer: PropTypes.string,
};
export default ImageCoverComponent;
