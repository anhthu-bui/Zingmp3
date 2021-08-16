// libs
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
// others
import "./style.scss";
import img1 from "../../images/img1.jpeg";

const ItemDetailNew = () => (
  <div className="item-detail-new-wrapper">
    <ImageComponent image={img1} width="110px" />
    <InformationComponent name="Nữ hoàng gợi cảm Sunmi gửi lời chào bằng tiếng Việt" />
  </div>
);
export default ItemDetailNew;
