// libs
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemVideo from "../../organs/ItemVideoHot";
// actions
import { saveVideoHot } from "../../actions/saveData";
// mocks
import videoHot from "../../mocks/VideoHot";
// others
import "./style.scss";

const VideoHot = () => {
  const dispatch = useDispatch();
  const stateVideoHot = useSelector((state) => state.saveReducer.dataVideoHot);
  useEffect(() => {
    dispatch(saveVideoHot(videoHot));
  }, []);
  return (
    <div className="video-hot-wrapper">
      <TitleComponent titleName="Video Hot" fontSize="26px" />
      <ul className="list-video">
        {stateVideoHot.map((item) => (
          <li key={item.id}>
            <ItemVideo name={item.name} singer={item.singer} img={item.img} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoHot;
