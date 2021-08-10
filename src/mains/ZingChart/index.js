// libs
import PropTypes from "prop-types";
// others
import "./style.scss";

const ZingChart = ({ backgroundColor, classname, title }) => {
  const style = {
    backgroundColor,
  };
  return (
    <div className={classname} style={style}>
      Zing Chart_{title}
    </div>
  );
};

ZingChart.propTypes = {
  classname: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
};
export default ZingChart;
