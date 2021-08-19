// components
import ItemSongRakingTop from "../../organs/ItemSongRakingTop";
// others
import "./style.scss";
import songrakingImage from "../../images/song_ranking.png";

const SongRakingList = () => (
  <div
    className="song-raking-top-wrapper"
    style={{ backgroundImage: `url(${songrakingImage})` }}
  >
    <ul className="song-raking-top">
      {[...new Array(3).keys()].map((key) => (
        <li key={key}>
          <ItemSongRakingTop />
        </li>
      ))}
    </ul>
  </div>
);

export default SongRakingList;
