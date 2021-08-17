// libs
import {
  VerticalAlignBottomOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
// others
import "./style.scss";

const IconListComponent = () => (
  <div className="icon-list-wrapper">
    <a href="#">
      <VerticalAlignBottomOutlined />
    </a>
    <a href="#">
      <PlusOutlined />
    </a>
    <a href="#">
      <ShareAltOutlined />
    </a>
  </div>
);

export default IconListComponent;
