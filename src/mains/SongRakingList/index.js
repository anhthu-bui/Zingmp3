// components
import ItemSongRaking from "../../organs/ItemSongRaking";
// mocks
import dataSongRating from "../../mock/SongRating";
// others
import "./style.scss";

const SongRakingList = () => (
  <div className="song-raking-list-wrapper">
    <ul className="song-raking-list">
      {dataSongRating.map((item) => (
        <li key={item.id}>
          <ItemSongRaking
            name={item.name}
            rank={item.rank}
            singer={item.singer}
            img={item.img}
            number={item.number}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default SongRakingList;
