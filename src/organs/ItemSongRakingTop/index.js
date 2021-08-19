// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
import NumberComponent from "../../components/NumberComponent";
// others
import "./style.scss";
import img1 from "../../images/img3.jpeg";

const ItemSongRaking = () => (
  <div className="item-song-raking-top-wrapper">
    <div className="number-left">
      <NumberComponent rank="01" color="blue" fontSize="12px" />
    </div>
    <div className="item-song-raking-info">
      <ImageComponent
        image={img1}
        width="28px"
        height="28px"
        style={{ marginRight: "0px" }}
      />
      <InformationComponent
        name="Một phút"
        singer="Khởi My"
        fontSize="12px"
        color="white"
      />
    </div>
    <div className="number-right">
      <NumberComponent rank="56%" color="blue" fontSize="12px" />
    </div>
  </div>
);
export default ItemSongRaking;
