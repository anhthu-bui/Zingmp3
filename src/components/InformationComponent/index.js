// libs
import classNames from "classnames";
import PropTypes from "prop-types";
// others
import "./style.scss";

const InformationComponent = ({ name, singer, fontSize, color }) => (
  <div className="information-wrapper">
    <h3 className={classNames("information-name", { songRating: color })}>
      <a href="/" style={{ fontSize }}>
        {name}
      </a>
    </h3>
    <div className="information-singer">
      <a href="/">{singer}</a>
    </div>
  </div>
);

InformationComponent.propTypes = {
  name: PropTypes.string,
  singer: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};
export default InformationComponent;
