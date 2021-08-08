/* eslint-disable react/prop-types */
import "./style.scss";

function ZingChart(props) {
  let style = {};
  if (props) {
    style = { backgroundColor: props.backgroundColor };
  }
  return (
    <div className="zing-chart" style={style}>
      Zing Chart_{props.title}
    </div>
  );
}
export default ZingChart;
