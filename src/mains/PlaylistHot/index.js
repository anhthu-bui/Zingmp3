// components
import TitleComponent from "../../components/TitleComponent";
import ItemPlayList from "../../organs/ItemPlayLitst";
// mocks
import dataPlayList from "../../mock/PlayList";
// others
import "./style.scss";

const PlaylistHot = () => (
  <div className="playlist-wrapper">
    <TitleComponent titleName="Khám phá âm nhạc Genz" fontSize="26px" />
    <ul className="list-playlist">
      {dataPlayList.map((item) => (
        <li key={item.id}>
          <ItemPlayList name={item.name} img={item.img} />
        </li>
      ))}
    </ul>
  </div>
);

export default PlaylistHot;
