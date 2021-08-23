// libs
import classNames from "classnames";
import PropTypes from "prop-types";
import { PlayCircleOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const ImageComponent = ({ image, ranking, width, height, cover, color }) => (
  <div className={classNames("image-wrapper", { rankingWrapper: !image })}>
    <a href="/" className="image-wrapper-inner">
      <img src={image} style={{ width, height }} />
      <span
        className={classNames("raking_number", { ranking: !image })}
        style={{ color }}
      >
        {ranking}
      </span>
      <span className={classNames("playsong", { show: cover })}>
        <PlayCircleOutlined />
      </span>
    </a>
  </div>
);

ImageComponent.propTypes = {
  image: PropTypes.string,
  ranking: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  cover: PropTypes.string,
  color: PropTypes.string,
};
export default ImageComponent;
