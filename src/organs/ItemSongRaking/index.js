// libs
import { MinusOutlined } from "@ant-design/icons";
// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
import IconListComponent from "../../components/IconListComponent";
import NumberComponent from "../../components/NumberComponent";
// others
import "./style.scss";
import img1 from "../../images/img3.jpeg";

const ItemSongRating = () => (
  <div className="item-song-rating-wrapper">
    <div className="number">
      <NumberComponent rank="1" color="#D8541C" fontSize="24px" />
    </div>
    <div className="song-rating-icon">
      <MinusOutlined />
    </div>
    <div className="item-song-rating-info">
      <ImageComponent image={img1} width="60px" height="60px" cover="true" />
      <InformationComponent name="Một phút" singer="Khởi My" fontSize="14px" />
    </div>
    <div className="song-rating-tool">
      <IconListComponent />
    </div>
  </div>
);
export default ItemSongRating;
