// components
import SongRakingList from "../SongRakingList";
import SongRakingTop from "../SongRatingTop";
// others
import "./style.scss";

const SongRating = () => (
  <div className="song-rating-wrapper">
    <SongRakingTop />
    <SongRakingList />
  </div>
);
export default SongRating;
