// libs
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import ItemSongRakingTop from "../../organs/ItemSongRakingTop";
// actions
import { saveSongRatingTop } from "../../actions/saveData";
// images
import songrakingImage from "../../images/song_ranking.png";
// mocks
import songRatingTop from "../../mocks/SongRatingTop";
// others
import "./style.scss";

const SongRakingList = () => {
  const dispatch = useDispatch();
  const stateSongRatingTop = useSelector(
    (state) => state.saveReducer.dataSongRatingTop
  );
  useEffect(() => {
    dispatch(saveSongRatingTop(songRatingTop));
  }, []);
  return (
    <div
      className="song-raking-top-wrapper"
      style={{ backgroundImage: `url(${songrakingImage})` }}
    >
      <ul className="song-raking-top">
        {stateSongRatingTop.map((item) => (
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
};

export default SongRakingList;
