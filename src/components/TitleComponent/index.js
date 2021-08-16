// libs
import PropTypes from "prop-types";
import { RightOutlined, PlayCircleOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const TitleComponent = ({ titleName, fontSize, iconPlay }) => {
  const style = {
    fontSize,
  };

  let iconPlayShow = <></>;
  if (iconPlay) {
    iconPlayShow = (
      <a href="/" className="play-all">
        <PlayCircleOutlined />
      </a>
    );
  }
  return (
    <div className="title-wrapper">
      <h3 style={style}>
        <a href="/" className="title-link">
          {titleName}
          <RightOutlined />
        </a>
        {iconPlayShow}
      </h3>
    </div>
  );
};

TitleComponent.propTypes = {
  titleName: PropTypes.string,
  fontSize: PropTypes.string,
  iconPlay: PropTypes.string,
};
export default TitleComponent;
