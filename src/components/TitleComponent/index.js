// libs
import classNames from "classnames";
import PropTypes from "prop-types";
import { RightOutlined, PlayCircleOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const TitleComponent = ({ titleName, fontSize, iconPlay }) => (
  <div className="title-wrapper">
    <h3 style={{ fontSize }}>
      <a href="/" className="title-link">
        {titleName}
        <RightOutlined />
      </a>
      <a href="/" className={classNames("play-icon", { playAll: iconPlay })}>
        <PlayCircleOutlined />
      </a>
    </h3>
  </div>
);
TitleComponent.propTypes = {
  titleName: PropTypes.string,
  fontSize: PropTypes.string,
  iconPlay: PropTypes.string,
};
export default TitleComponent;
