// others
import "./style.scss";
// dataSources
import dataPartner from "../../dataSource/PartnerList";
import img from "../../images/ben-thanh_partner.jpeg";
import img2 from "../../images/riav_partner.jpeg";

const Partner = () => (
  <div className="partner-wrapper">
    <span className="partner-title">Đối Tác</span>
    {dataPartner.map((item) => (
      <img src={item.image} key={item.name} />
    ))}
    <img src={img} />
    <img src={img2} />
  </div>
);
export default Partner;
