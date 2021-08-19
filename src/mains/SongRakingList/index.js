// libs
import { Divider } from "antd";
// components
import ItemSongRaking from "../../organs/ItemSongRaking";
// others
import "./style.scss";

const SongRakingList = () => (
  <div className="song-raking-list-wrapper">
    <ul className="song-raking-list">
      {[...new Array(5).keys()].map((key) => (
        <li key={key}>
          <ItemSongRaking />
          <Divider style={{ margin: "10px 0px" }} />
        </li>
      ))}
    </ul>
  </div>
);

export default SongRakingList;
