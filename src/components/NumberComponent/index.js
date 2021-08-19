// libs
import PropTypes from "prop-types";
// others
import "./style.scss";

const NumberComponent = ({ rank, color, fontSize }) => (
  <div className="label-rank-wrapper" style={{ color, fontSize }}>
    {rank}
  </div>
);
NumberComponent.propTypes = {
  rank: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};
export default NumberComponent;
