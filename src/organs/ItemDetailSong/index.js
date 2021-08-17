// import React, { useState } from "react";
// components
import ImageComponent from "../../components/ImageComponent";
import InformationComponent from "../../components/InformationComponent";
import IconListComponent from "../../components/IconListComponent";
// others
import "./style.scss";
// import Icon from "@ant-design/icons";

const ItemDetailSong = () => (
  <div className="item-detail-song-wrapper">
    <ImageComponent ranking="01" />
    <InformationComponent name="Một phút" singer="Khởi My" />
    <span className="icon-list">
      <IconListComponent />
    </span>
  </div>
);
export default ItemDetailSong;
