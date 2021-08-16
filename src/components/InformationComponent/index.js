// libs
import PropTypes from "prop-types";
// others
import "./style.scss";

const InformationComponent = ({ name, singer }) => (
  <div className="information-wrapper">
    <h3 className="information-name">
      <a href="/">{name}</a>
    </h3>
    <div className="information-singer">
      <a href="/">{singer}</a>
    </div>
  </div>
);

InformationComponent.propTypes = {
  name: PropTypes.string,
  singer: PropTypes.string,
};
export default InformationComponent;
