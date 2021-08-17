// libs
import PropTypes from "prop-types";
// others
import "./style.scss";

const DropDownComponent = ({ arrayMenu }) => <div>{arrayMenu}</div>;

DropDownComponent.propTypes = {
  arrayMenu: PropTypes.array,
};
export default DropDownComponent;
