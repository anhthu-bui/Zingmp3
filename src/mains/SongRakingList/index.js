// libs
import { useSelector, useDispatch } from "react-redux";
// components
import ItemSongRaking from "../../organs/ItemSongRaking";
// actions
import { dataSongRating } from "../../actions/saveData";
// others
import "./style.scss";

const SongRakingList = () => {
  const disPatch = useDispatch();
  const stateSongRating = useSelector(
    (state) => state.saveReducer.dataSongRating
  );
  const action = dataSongRating(stateSongRating);
  disPatch(action);
  return (
    <div className="song-raking-list-wrapper">
      <ul className="song-raking-list">
        {stateSongRating.map((item) => (
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
};

export default SongRakingList;
