// libs
import { useSelector, useDispatch } from "react-redux";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemVideo from "../../organs/ItemVideoHot";
// actions
import { dataVideoHot } from "../../actions/saveData";
// others
import "./style.scss";

const VideoHot = () => {
  const disPatch = useDispatch();
  const stateVideoHot = useSelector((state) => state.saveReducer.dataVideoHot);
  const action = dataVideoHot(stateVideoHot);
  disPatch(action);
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
