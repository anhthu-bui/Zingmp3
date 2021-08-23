// libs
// import classNames from "classnames";
import PropTypes from "prop-types";
// others
import "./style.scss";

const SingerComponent = ({ image, name, width, height }) => (
  <div className="singer-wrapper">
    <a href="/" className="singer-wrapper-inner">
      <img src={image} style={{ width, height }} />
      <span className="name">{name}</span>
    </a>
  </div>
);

SingerComponent.propTypes = {
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string,
};
export default SingerComponent;
