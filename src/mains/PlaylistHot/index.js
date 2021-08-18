// components
import TitleComponent from "../../components/TitleComponent";
import ItemPlayList from "../../organs/ItemPlayLitst";
// others
import "./style.scss";

const playList = new Array(8);
for (let i = 0; i < playList.length; i += 1) {
  playList[i] = <ItemPlayList />;
}
const PlaylistHot = () => (
  <div className="playlist-wrapper">
    <TitleComponent titleName="Khám phá âm nhạc Genz" fontSize="26px" />
    <ul className="list-playlist">
      {playList.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default PlaylistHot;
