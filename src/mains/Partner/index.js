// dataSources
import dataPartner from "../../dataSources/Partner";
// others
import "./style.scss";

const Partner = () => (
  <div className="partner-wrapper">
    <span className="partner-title">ĐỐI TÁC</span>
    <ul className="partner-list">
      {dataPartner.map((item) => (
        <li key={item.name}>
          <img src={item.image} />
        </li>
      ))}
    </ul>
  </div>
);
export default Partner;
