// components
import ItemSongRakingTop from "../../organs/ItemSongRakingTop";
// mocks
import dataSongRating from "../../mock/SongRatingTop";
// others
import "./style.scss";
import songrakingImage from "../../images/song_ranking.png";

const SongRakingList = () => (
  <div
    className="song-raking-top-wrapper"
    style={{ backgroundImage: `url(${songrakingImage})` }}
  >
    <ul className="song-raking-top">
      {dataSongRating.map((item) => (
        <li key={item.id}>
          <ItemSongRakingTop
            name={item.name}
            rank={item.rank}
            singer={item.singer}
            img={item.img}
            number={item.number}
            percent={item.percent}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default SongRakingList;
