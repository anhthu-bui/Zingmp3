// components
import TitleComponent from "../../components/TitleComponent";
import ItemPlayList from "../../organs/ItemPlayLitst";
// others
import "./style.scss";

const PlayList = [
  <ItemPlayList key="01" />,
  <ItemPlayList key="02" />,
  <ItemPlayList key="03" />,
  <ItemPlayList key="04" />,
  <ItemPlayList key="05" />,
  <ItemPlayList key="06" />,
  <ItemPlayList key="07" />,
  <ItemPlayList key="08" />,
];
const PlaylistHot = () => (
  <div className="playlist-wrapper">
    <TitleComponent titleName="Khám phá âm nhạc Genz" fontSize="26px" />
    <ul className="list-playlist">
      {PlayList.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default PlaylistHot;
