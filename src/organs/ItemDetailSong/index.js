// libs
import React, { useState } from "react";
// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
import IconListComponent from "../../components/IconListComponent";
// others
import "./style.scss";

const ItemDetailSong = () => {
  const [isShownIcon, setIsShownIcon] = useState(false);
  let iconList = <></>;
  if (isShownIcon === true) {
    iconList = <IconListComponent />;
  }
  return (
    <div
      className="item-detail-song-wrapper"
      onMouseEnter={() => setIsShownIcon(true)}
      onMouseOut={() => setIsShownIcon(false)}
    >
      <ImageComponent ranking="01" />
      <InformationComponent name="Một phút" singer="Khởi My" />
      {iconList}
    </div>
  );
};
export default ItemDetailSong;
