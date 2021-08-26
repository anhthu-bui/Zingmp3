// libs
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import ItemSongRaking from "../../organs/ItemSongRaking";
// actions
import { saveSongRating } from "../../actions/saveData";
// mocks
import songRating from "../../mocks/SongRating";
// others
import "./style.scss";

const SongRakingList = () => {
  const dispatch = useDispatch();
  const stateSongRating = useSelector(
    (state) => state.saveReducer.dataSongRating
  );
  useEffect(() => {
    dispatch(saveSongRating(songRating));
  }, []);
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
