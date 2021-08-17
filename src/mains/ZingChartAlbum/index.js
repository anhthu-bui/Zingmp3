// libs
import { Divider } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemDetail from "../../organs/ItemDetailAlbum";
import MenuZingChartComponent from "../../components/MenuZingChartComponent";
import ItemCover from "../../organs/ItemCoverAlbum";
// others
import "./style.scss";

const ZingChartAlbum = () => {
  const itemDetail = [
    <ItemDetail key="01" />,
    <ItemDetail key="01" />,
    <ItemDetail key="01" />,
    <ItemDetail key="01" />,
  ];
  return (
    <div className="zing-chart-album">
      <TitleComponent titleName="#ZingChart Tuần - Album" fontSize="18px" />
      <MenuZingChartComponent />
      <ItemCover />
      <ul>
        {itemDetail.map((item) => (
          <li key={item}>
            {item}
            <Divider />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZingChartAlbum;
