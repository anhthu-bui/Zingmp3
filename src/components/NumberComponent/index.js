// libs
import PropTypes from "prop-types";
import classNames from "classnames";
// others
import "./style.scss";

const NumberComponent = ({ rank, number, fontSize }) => (
  <div
    className={classNames(
      "label-rank-wrapper",
      "rating-top",
      { "top-1": rank === "01" },
      { "top-2": rank === "02" },
      { "top-3": rank === "03" }
    )}
    style={{ fontSize }}
  >
    {number}
  </div>
);
NumberComponent.propTypes = {
  rank: PropTypes.string,
  fontSize: PropTypes.string,
  number: PropTypes.string,
};
export default NumberComponent;
