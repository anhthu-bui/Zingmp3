// components
import TitleComponent from "../../components/TitleComponent";
import ItemAlbum from "../../organs/ItemAlbumHot";
// others
import "./style.scss";

const AlbumList = [
  <ItemAlbum key="01" />,
  <ItemAlbum key="02" />,
  <ItemAlbum key="03" />,
  <ItemAlbum key="04" />,
  <ItemAlbum key="05" />,
  <ItemAlbum key="06" />,
  <ItemAlbum key="07" />,
  <ItemAlbum key="08" />,
  <ItemAlbum key="09" />,
  <ItemAlbum key="10" />,
  <ItemAlbum key="11" />,
  <ItemAlbum key="12" />,
];
const AlbumHot = () => (
  <div className="album-hot-wrapper">
    <TitleComponent titleName="Album Hot" fontSize="26px" />
    <ul className="list-album">
      {AlbumList.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default AlbumHot;
