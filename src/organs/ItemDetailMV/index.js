// libs
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
// others
import "./style.scss";
import img1 from "../../images/img3.jpeg";

const ItemDetailMV = () => (
  <div className="item-detail-mv-wrapper">
    <ImageComponent image={img1} width="110px" ranking="01" cover="true" />
    <InformationComponent name="Một phút" singer="Khởi My" />
  </div>
);
export default ItemDetailMV;
