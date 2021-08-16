// libs
import React, { useState } from "react";
import PropTypes from "prop-types";
import { PlayCircleOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const ImageComponent = ({ image, ranking, width, height, cover }) => {
  const [isShown, setIsShown] = useState(false);
  const styleImg = {
    width,
    height,
  };

  let spanRanking = <span className="ranking">{ranking}</span>;
  let style = { marginRight: "20px" };
  if (!image) {
    spanRanking = (
      <span className="ranking" style={{ color: "black", marginRight: "50px" }}>
        {ranking}
      </span>
    );
    style = { marginRight: "40px" };
  }

  let playSong = <></>;
  if (cover === "true" && isShown === true) {
    playSong = (
      <span className="play-song">
        <PlayCircleOutlined />
      </span>
    );
  }

  return (
    <div className="image-wrapper" style={style}>
      <a href="/" className="image-wrapper-inner">
        <img
          src={image}
          style={styleImg}
          onMouseOver={() => setIsShown(true)}
          onMouseOut={() => setIsShown(false)}
        />
        {spanRanking}
        {playSong}
      </a>
    </div>
  );
};

ImageComponent.propTypes = {
  image: PropTypes.string,
  ranking: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  cover: PropTypes.string,
};
export default ImageComponent;
