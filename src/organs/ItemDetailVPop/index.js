// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
import IconListComponent from "../../components/IconListComponent";
// others
import "./style.scss";
import img1 from "../../images/img1.jpeg";

const ItemDetailVPop = () => (
  <div className="item-detail-vpop-wrapper">
    <ImageComponent image={img1} width="50px" cover="true" />
    <InformationComponent name="Một phút" singer="Khởi My" fontSize="14px" />
    <span className="icon-list">
      <IconListComponent />
    </span>
  </div>
);
export default ItemDetailVPop;
