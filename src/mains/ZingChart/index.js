// libs
import PropTypes from "prop-types";
// others
import "./style.scss";

const ZingChart = ({ backgroundColor, title }) => {
  const style = {
    backgroundColor,
  };
  return (
    <div className="zing-chart" style={style}>
      Zing Chart_{title}
    </div>
  );
};

ZingChart.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
};
export default ZingChart;
