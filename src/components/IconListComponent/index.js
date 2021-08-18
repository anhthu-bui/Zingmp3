// libs
import {
  VerticalAlignBottomOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
// others
import "./style.scss";

const icons = [
  <VerticalAlignBottomOutlined key="first" />,
  <PlusOutlined key="second" />,
  <ShareAltOutlined key="third" />,
];

const IconListComponent = () => (
  <div className="icon-list-wrapper">
    {icons.map((item) => (
      <a href="/" key={item}>
        {item}
      </a>
    ))}
  </div>
);

export default IconListComponent;
