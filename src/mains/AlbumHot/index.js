// components
import TitleComponent from "../../components/TitleComponent";
import ItemAlbum from "../../organs/ItemAlbumHot";
// others
import "./style.scss";

const albumList = new Array(12);
for (let i = 0; i < albumList.length; i += 1) {
  albumList[i] = <ItemAlbum />;
}

const AlbumHot = () => (
  <div className="album-hot-wrapper">
    <TitleComponent titleName="Album Hot" fontSize="26px" />
    <ul className="list-album">
      {albumList.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default AlbumHot;
